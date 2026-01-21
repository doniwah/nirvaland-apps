import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { CalendarIcon, Send, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { properties } from "@/data/properties";
import { supabase } from "@/integrations/supabase/client";

const bookingSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Nama minimal 2 karakter" })
    .max(100, { message: "Nama maksimal 100 karakter" }),
  email: z
    .string()
    .trim()
    .email({ message: "Email tidak valid" })
    .max(255, { message: "Email maksimal 255 karakter" }),
  phone: z
    .string()
    .trim()
    .min(10, { message: "Nomor telepon minimal 10 digit" })
    .max(15, { message: "Nomor telepon maksimal 15 digit" })
    .regex(/^[0-9+\-\s]+$/, { message: "Format nomor telepon tidak valid" }),
  property: z.string({ required_error: "Pilih properti yang diminati" }),
  visitDate: z.date({ required_error: "Pilih tanggal kunjungan" }),
  message: z
    .string()
    .trim()
    .max(500, { message: "Pesan maksimal 500 karakter" })
    .optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  defaultPropertyId?: string;
  onSuccess?: () => void;
}

const BookingForm = ({ defaultPropertyId, onSuccess }: BookingFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      property: defaultPropertyId || "",
      message: "",
    },
  });

  const onSubmit = async (data: BookingFormValues) => {
    setIsSubmitting(true);

    try {
      const selectedProperty = properties.find((p) => p.id === data.property);
      const propertyName = selectedProperty?.name || data.property;
      const formattedDate = format(data.visitDate, "yyyy-MM-dd");
      const displayDate = format(data.visitDate, "dd MMMM yyyy", { locale: id });

      // Save booking to database
      const { error: dbError } = await supabase.from("bookings").insert({
        name: data.name,
        email: data.email,
        phone: data.phone,
        property_id: data.property,
        property_name: propertyName,
        visit_date: formattedDate,
        message: data.message || null,
      });

      if (dbError) {
        throw new Error(dbError.message);
      }

      // Send confirmation email
      const { error: emailError } = await supabase.functions.invoke(
        "send-booking-confirmation",
        {
          body: {
            name: data.name,
            email: data.email,
            phone: data.phone,
            propertyName: propertyName,
            visitDate: displayDate,
            message: data.message,
          },
        }
      );

      if (emailError) {
        console.error("Email sending failed:", emailError);
        // Don't throw here - booking is saved, just email failed
      }

      toast({
        title: "Jadwal Kunjungan Berhasil Dibuat! 🎉",
        description: `Terima kasih ${data.name}, kami telah mengirim konfirmasi ke ${data.email}. Tim kami akan menghubungi Anda untuk konfirmasi kunjungan pada ${displayDate}.`,
      });

      form.reset();
      onSuccess?.();
    } catch (error: any) {
      console.error("Booking error:", error);
      toast({
        title: "Gagal Membuat Jadwal",
        description: error.message || "Terjadi kesalahan. Silakan coba lagi.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Lengkap *</FormLabel>
              <FormControl>
                <Input
                  placeholder="Masukkan nama lengkap"
                  {...field}
                  className="bg-background"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="email@contoh.com"
                    {...field}
                    className="bg-background"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>No. Telepon *</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="08123456789"
                    {...field}
                    className="bg-background"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="property"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Properti yang Diminati *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Pilih properti" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {properties.map((property) => (
                    <SelectItem key={property.id} value={property.id}>
                      {property.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="visitDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Tanggal Kunjungan *</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full pl-3 text-left font-normal bg-background",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "dd MMMM yyyy", { locale: id })
                      ) : (
                        <span>Pilih tanggal</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < new Date() || date > new Date(new Date().setMonth(new Date().getMonth() + 3))
                    }
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pesan (Opsional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tulis pesan atau pertanyaan Anda..."
                  rows={4}
                  {...field}
                  className="bg-background resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Mengirim...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Jadwalkan Kunjungan
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default BookingForm;
