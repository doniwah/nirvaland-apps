import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { getPropertyById } from "@/data/properties";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VirtualTourModal from "@/components/VirtualTourModal";
import BookingForm from "@/components/BookingForm";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  ArrowLeft,
  MapPin,
  Bed,
  Bath,
  Layers,
  Car,
  Ruler,
  Home,
  Play,
  Check,
  Phone,
  MessageCircle,
  CalendarDays,
} from "lucide-react";

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const property = getPropertyById(id || "");
  const [selectedImage, setSelectedImage] = useState(0);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  if (!property) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">
            Properti Tidak Ditemukan
          </h1>
          <Link to="/">
            <Button>Kembali ke Beranda</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-muted/30 py-4">
          <div className="container mx-auto px-4">
            <Link
              to="/"
              className="inline-flex items-center text-primary hover:text-secondary transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Beranda
            </Link>
          </div>
        </div>

        {/* Gallery Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src={property.images[selectedImage]}
                  alt={property.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setIsTourOpen(true)}
                  className="absolute bottom-4 right-4 bg-primary/90 hover:bg-primary text-primary-foreground px-6 py-3 rounded-full flex items-center gap-2 transition-colors shadow-lg"
                >
                  <Play className="w-5 h-5 fill-current" />
                  Virtual Tour 360°
                </button>
              </div>

              {/* Thumbnail Grid */}
              <div className="grid grid-cols-2 gap-4">
                {property.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative rounded-xl overflow-hidden aspect-[4/3] transition-all ${
                      selectedImage === index
                        ? "ring-4 ring-secondary"
                        : "hover:opacity-80"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${property.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Property Info */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Details */}
              <div className="lg:col-span-2 space-y-8">
                {/* Title & Location */}
                <div>
                  <div className="inline-block bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-3">
                    {property.subtitle}
                  </div>
                  <h1 className="text-3xl md:text-4xl font-display font-bold text-primary mb-3">
                    {property.name}
                  </h1>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-5 h-5 mr-2 text-secondary" />
                    {property.location}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h2 className="text-xl font-bold text-primary mb-4">
                    Deskripsi
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {property.description}
                  </p>
                </div>

                {/* Specifications */}
                <div>
                  <h2 className="text-xl font-bold text-primary mb-4">
                    Spesifikasi
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-card p-4 rounded-xl border border-border">
                      <Ruler className="w-6 h-6 text-secondary mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Luas Tanah
                      </p>
                      <p className="font-bold text-primary">
                        {property.specifications.landArea}
                      </p>
                    </div>
                    <div className="bg-card p-4 rounded-xl border border-border">
                      <Home className="w-6 h-6 text-secondary mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Luas Bangunan
                      </p>
                      <p className="font-bold text-primary">
                        {property.specifications.buildingArea}
                      </p>
                    </div>
                    <div className="bg-card p-4 rounded-xl border border-border">
                      <Bed className="w-6 h-6 text-secondary mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Kamar Tidur
                      </p>
                      <p className="font-bold text-primary">
                        {property.specifications.bedrooms}
                      </p>
                    </div>
                    <div className="bg-card p-4 rounded-xl border border-border">
                      <Bath className="w-6 h-6 text-secondary mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Kamar Mandi
                      </p>
                      <p className="font-bold text-primary">
                        {property.specifications.bathrooms}
                      </p>
                    </div>
                    <div className="bg-card p-4 rounded-xl border border-border">
                      <Layers className="w-6 h-6 text-secondary mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Jumlah Lantai
                      </p>
                      <p className="font-bold text-primary">
                        {property.specifications.floors}
                      </p>
                    </div>
                    <div className="bg-card p-4 rounded-xl border border-border">
                      <Car className="w-6 h-6 text-secondary mb-2" />
                      <p className="text-sm text-muted-foreground">Carport</p>
                      <p className="font-bold text-primary">
                        {property.specifications.carport}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h2 className="text-xl font-bold text-primary mb-4">
                    Fasilitas
                  </h2>
                  <div className="grid grid-cols-2 gap-3">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                          <Check className="w-4 h-4 text-secondary" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Price Card */}
              <div className="lg:col-span-1">
                <div className="bg-card rounded-2xl p-6 shadow-lg border border-border sticky top-24">
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground mb-1">
                      Harga Mulai
                    </p>
                    <p className="text-3xl font-bold text-primary">
                      {property.price}
                    </p>
                    <p className="text-sm text-secondary">{property.priceNote}</p>
                  </div>

                  <div className="space-y-3">
                    <Button
                      onClick={() => setIsBookingOpen(true)}
                      className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full"
                    >
                      <CalendarDays className="w-4 h-4 mr-2" />
                      Jadwalkan Kunjungan
                    </Button>
                    <Button
                      onClick={() => setIsTourOpen(true)}
                      variant="outline"
                      className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground rounded-full"
                    >
                      <Play className="w-4 h-4 mr-2 fill-current" />
                      Virtual Tour 360°
                    </Button>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-navy-light rounded-full">
                      <Phone className="w-4 h-4 mr-2" />
                      Hubungi Kami
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat WhatsApp
                    </Button>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground text-center">
                      Jadwalkan kunjungan untuk melihat unit secara langsung
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Virtual Tour Modal */}
      <VirtualTourModal
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        propertyName={property.name}
        embedUrl={property.virtualTourUrl}
      />

      {/* Booking Modal */}
      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-primary">
              Jadwalkan Kunjungan
            </DialogTitle>
            <p className="text-sm text-muted-foreground">
              {property.name} - {property.location}
            </p>
          </DialogHeader>
          <BookingForm
            defaultPropertyId={property.id}
            onSuccess={() => setIsBookingOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PropertyDetail;
