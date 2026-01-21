import { Calendar, Phone, MapPin } from "lucide-react";
import BookingForm from "./BookingForm";

const BookingSection = () => {
  return (
    <section id="booking" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-secondary font-medium tracking-wider uppercase text-sm">
            Jadwalkan Kunjungan
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2 mb-4">
            Kunjungi Properti Impian Anda
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Isi form di bawah ini untuk menjadwalkan kunjungan ke properti pilihan Anda. 
            Tim kami akan menghubungi Anda untuk konfirmasi.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Form */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <h3 className="text-xl font-display font-bold text-foreground mb-6">
              Form Jadwal Kunjungan
            </h3>
            <BookingForm />
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            <div className="bg-primary text-primary-foreground rounded-2xl p-8">
              <h3 className="text-xl font-display font-bold mb-6">
                Mengapa Kunjungan Langsung?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-secondary-foreground font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Lihat Langsung Kondisi</h4>
                    <p className="text-primary-foreground/80 text-sm">
                      Rasakan atmosfer dan kualitas bangunan secara langsung
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-secondary-foreground font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Konsultasi Gratis</h4>
                    <p className="text-primary-foreground/80 text-sm">
                      Diskusi langsung dengan tim sales profesional kami
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-secondary-foreground font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Penawaran Eksklusif</h4>
                    <p className="text-primary-foreground/80 text-sm">
                      Dapatkan promo khusus untuk pengunjung langsung
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
              <h4 className="font-display font-bold text-foreground mb-4">
                Hubungi Kami Langsung
              </h4>
              <div className="space-y-3">
                <a
                  href="tel:+623411234567"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 text-secondary" />
                  <span>(0341) 123 4567</span>
                </a>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Jl. Raya Kepanjen, Kota Malang, Jawa Timur</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="w-5 h-5 text-secondary" />
                  <span>Senin - Minggu, 08:00 - 17:00 WIB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
