import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface BookingEmailRequest {
  name: string;
  email: string;
  phone: string;
  propertyName: string;
  visitDate: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, propertyName, visitDate, message }: BookingEmailRequest = await req.json();

    console.log("Sending booking confirmation email to:", email);

    const emailResponse = await resend.emails.send({
      from: "Nirvaland <onboarding@resend.dev>",
      to: [email],
      subject: `Konfirmasi Jadwal Kunjungan - ${propertyName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 40px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #1a365d; margin: 0; font-size: 28px;">NIRVALAND</h1>
              <p style="color: #c5a572; margin: 5px 0 0 0; font-size: 14px; letter-spacing: 2px;">PREMIUM PROPERTY</p>
            </div>
            
            <div style="background: linear-gradient(135deg, #1a365d 0%, #2d4a6f 100%); color: white; padding: 30px; border-radius: 12px; margin-bottom: 30px;">
              <h2 style="margin: 0 0 10px 0; font-size: 24px;">Terima Kasih, ${name}! 🎉</h2>
              <p style="margin: 0; opacity: 0.9;">Jadwal kunjungan Anda telah berhasil dibuat</p>
            </div>
            
            <div style="background-color: #f8f9fa; padding: 25px; border-radius: 12px; margin-bottom: 30px;">
              <h3 style="color: #1a365d; margin: 0 0 20px 0; font-size: 18px;">📋 Detail Kunjungan</h3>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; color: #666; width: 40%;">Properti:</td>
                  <td style="padding: 10px 0; color: #1a365d; font-weight: 600;">${propertyName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #666; border-top: 1px solid #e0e0e0;">Tanggal:</td>
                  <td style="padding: 10px 0; color: #1a365d; font-weight: 600; border-top: 1px solid #e0e0e0;">${visitDate}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #666; border-top: 1px solid #e0e0e0;">Nama:</td>
                  <td style="padding: 10px 0; color: #1a365d; border-top: 1px solid #e0e0e0;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #666; border-top: 1px solid #e0e0e0;">Email:</td>
                  <td style="padding: 10px 0; color: #1a365d; border-top: 1px solid #e0e0e0;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #666; border-top: 1px solid #e0e0e0;">Telepon:</td>
                  <td style="padding: 10px 0; color: #1a365d; border-top: 1px solid #e0e0e0;">${phone}</td>
                </tr>
                ${message ? `
                <tr>
                  <td style="padding: 10px 0; color: #666; border-top: 1px solid #e0e0e0; vertical-align: top;">Pesan:</td>
                  <td style="padding: 10px 0; color: #1a365d; border-top: 1px solid #e0e0e0;">${message}</td>
                </tr>
                ` : ''}
              </table>
            </div>
            
            <div style="background-color: #fff8e6; border-left: 4px solid #c5a572; padding: 15px 20px; margin-bottom: 30px;">
              <p style="margin: 0; color: #856404; font-size: 14px;">
                <strong>📞 Tim kami akan menghubungi Anda</strong> dalam waktu 1x24 jam untuk konfirmasi jadwal kunjungan.
              </p>
            </div>
            
            <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e0e0e0;">
              <p style="color: #666; font-size: 14px; margin: 0 0 10px 0;">Ada pertanyaan? Hubungi kami:</p>
              <p style="color: #1a365d; font-size: 14px; margin: 0;">
                📱 +62 812-3456-7890 | 📧 info@nirvaland.com
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
              <p style="color: #999; font-size: 12px; margin: 0;">
                © 2024 Nirvaland. All rights reserved.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-booking-confirmation function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
