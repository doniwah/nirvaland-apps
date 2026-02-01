import { Play } from "lucide-react";
import heroBg from "@/assets/image-about.png";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

const StatsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <Dialog>
            <DialogTrigger asChild>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer aspect-video">
                <img
                  src={heroBg}
                  alt="Nirvaland Video"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/50 flex items-center justify-center">
                  <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                    <Play className="w-8 h-8 text-secondary-foreground ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-primary-foreground">
                  <p className="text-2xl font-bold">#WeAreNirvaland</p>
                  <p className="text-sm opacity-80">Lihat Video</p>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-none ring-0">
              <DialogTitle className="sr-only">Nirvaland Video</DialogTitle>
              <iframe
                src="https://player.mux.com/JchM01wOR8WhxpYLHI2bUEJM4v0202vmM9q81Ppv8m3sMg?metadata-video-title=demo+video&video-title=demo+video"
                style={{ width: "100%", border: "none", aspectRatio: "16/9" }}
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowFullScreen
              ></iframe>
            </DialogContent>
          </Dialog>


          {/* Stats */}
          <div className="text-center md:text-left">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
              Nirvaland Telah Dipercaya
            </h2>
            <div className="inline-block">
              <p className="text-7xl md:text-8xl font-bold text-secondary">
                100+
              </p>
              <p className="text-2xl text-primary font-semibold">Investor</p>
            </div>
            <p className="text-muted-foreground mt-6 max-w-md">
              Lebih dari 100 investor telah mempercayakan investasi properti mereka kepada Nirvaland.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

