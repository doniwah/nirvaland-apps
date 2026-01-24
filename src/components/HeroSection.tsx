import heroBg from "@/assets/hero-bg.png";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center mt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Nirvaland Property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
      </div>

      {/* Content
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-2xl">
          <p className="text-secondary font-script text-3xl md:text-4xl mb-2">
            Saatnya Jadi
          </p>
          <h1 className="text-primary-foreground font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            #INVESTASITEPAT
            <span className="text-secondary">2026</span>
          </h1>
          <p className="text-primary-foreground/80 text-sm md:text-base mb-8 max-w-lg">
            Upgrade investasi di 2026, mulai bangun properti dengan Nirvaland dan raih keuntungan maksimal!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-secondary text-secondary-foreground hover:bg-gold-dark px-8 py-6 text-lg font-semibold rounded-full">
              Hubungi Kami
            </Button>
            <Button variant="outline" className="border-2 border-primary-foreground/80 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 px-8 py-6 text-lg rounded-full">
              Lihat Proyek
            </Button>
          </div>
        </div>
      </div> */}

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
