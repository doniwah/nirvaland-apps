import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import VirtualTourModal from "./VirtualTourModal";

// Daftar properti dengan Virtual Tour
const virtualTours = [
  {
    id: 1,
    name: "Nirvaland Residence",
    location: "Jakarta Selatan",
    // Google Maps Street View embed URL - lokasi contoh
    embedUrl: "https://www.google.com/maps/embed?pb=!4v1705700000000!6m8!1m7!1sCAoSLEFGMVFpcE5CODFGVzJCVGx5T2dTMzVxM0Y4TkxrZ2NPT1lKTnJQSVRKQ1hz!2m2!1d-6.2297!2d106.8295!3f0!4f0!5f0.7820865974627469",
  },
  {
    id: 2,
    name: "Nirvaland Garden",
    location: "Tangerang",
    embedUrl: "https://www.google.com/maps/embed?pb=!4v1705700000000!6m8!1m7!1sCAoSLEFGMVFpcE9iY1hPRnZ6YmlGUmVGWU5FejRFTEowdHpwRTdEemZmT2JnSUJB!2m2!1d-6.1754!2d106.6310!3f0!4f0!5f0.7820865974627469",
  },
  {
    id: 3,
    name: "Nirvaland Hills",
    location: "Bogor",
    embedUrl: "https://www.google.com/maps/embed?pb=!4v1705700000000!6m8!1m7!1sCAoSLEFGMVFpcE5LMndCVVRfVGVxbXB6VE5JZm1FWE1qT3RBT1RYbkFTYl9GTXBr!2m2!1d-6.5971!2d106.8060!3f0!4f0!5f0.7820865974627469",
  },
];

const VirtualSurveySection = () => {
  const [selectedTour, setSelectedTour] = useState<typeof virtualTours[0] | null>(null);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Virtual Survey Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-primary-foreground font-display text-4xl md:text-6xl font-bold mb-4">
            SURVEY <span className="text-secondary">VIRTUAL 360°</span>
          </h2>
          <p className="text-primary-foreground/80 text-xl mb-2">
            Serasa Survey Beneran
          </p>
          <p className="text-primary-foreground/60 text-base max-w-2xl mx-auto">
            Jelajahi properti kami secara virtual tanpa harus datang ke lokasi. Rasakan pengalaman 360° yang imersif.
          </p>
        </div>

        {/* Virtual Tour Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {virtualTours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedTour(tour)}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center group-hover:bg-secondary/40 transition-colors">
                  <Play className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="text-primary-foreground font-semibold text-lg">{tour.name}</h3>
                  <div className="flex items-center gap-1 text-primary-foreground/60 text-sm">
                    <MapPin className="w-3 h-3" />
                    {tour.location}
                  </div>
                </div>
              </div>
              <Button 
                variant="outline" 
                className="w-full border-secondary/50 text-secondary hover:bg-secondary hover:text-secondary-foreground"
              >
                Mulai Virtual Tour
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-primary-foreground/50 text-sm">
            Klik pada properti untuk memulai pengalaman Virtual Tour 360°
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="w-32 h-32 border-4 border-secondary/30 rounded-full animate-pulse" />
      </div>
      <div className="absolute right-10 bottom-10 hidden lg:block">
        <div className="w-20 h-20 bg-secondary/20 rounded-full" />
      </div>

      {/* Virtual Tour Modal */}
      {selectedTour && (
        <VirtualTourModal
          isOpen={!!selectedTour}
          onClose={() => setSelectedTour(null)}
          propertyName={selectedTour.name}
          embedUrl={selectedTour.embedUrl}
        />
      )}
    </section>
  );
};

export default VirtualSurveySection;
