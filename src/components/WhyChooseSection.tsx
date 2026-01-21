import { TrendingUp, Award, Shield } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import aboutBg from "@/assets/about-bg.jpg";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: TrendingUp,
    title: "Nilai Investasi Tinggi",
    description:
      "Lokasi yang strategis akan meningkatkan nilai properti secara konsisten dan memberikan keuntungan jangka panjang.",
    image: property1,
  },
  {
    icon: Award,
    title: "Setiap Progress Dikawal Oleh Ahlinya",
    description:
      "Tim profesional kami memastikan setiap tahap pembangunan berjalan sesuai standar kualitas tertinggi.",
    image: property2,
  },
  {
    icon: Shield,
    title: "Fasilitas Premium",
    description:
      "Fasilitas modern lengkap untuk mendukung gaya hidup premium dan kenyamanan penghuni di setiap unit.",
    image: aboutBg,
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <p className="text-secondary font-script text-2xl text-center mb-2">
          Kenapa Harus
        </p>
        <h2 className="text-center font-display text-3xl md:text-4xl font-bold mb-12">
          Nirvaland Sebagai Pilihan Investasi?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/40" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-secondary-foreground" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button className="bg-secondary text-secondary-foreground hover:bg-gold-dark px-8 py-6 text-lg font-semibold rounded-full">
            HUBUNGI KAMI →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
