import { TrendingUp, Award, Shield } from "lucide-react";
import property1 from "@/assets/image-one.png";
import property2 from "@/assets/image-two.png";
import aboutBg from "@/assets/image-three.png";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: TrendingUp,
    title: "Nilai Investasi Tinggi",
    description:
      "Nilai yang terus bertumbuh dari waktu ke waktu menjadikan setiap unit memiliki makna, dan menjadikan Nirvaland pilihan investasi yang diminati para investor.",
    image: property1,
  },
  {
    icon: Award,
    title: "Kawal Di Setiap Progress",
    description:
      "Proses pembangunan diawasi secara menyeluruh dan terkontrol hingga tahap serah terima, memastikan kualitas tetap terjaga dengan baik.",
    image: property2,
  },
  {
    icon: Shield,
    title: "Keamanan Premium",
    description:
      "Didukung sistem keamanan premium yang terkelola dengan baik, kawasan dirancang untuk menjaga privasi, ketertiban, dan nilai properti dalam jangka panjang.",
    image: aboutBg,
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#1a4d2e] to-[#4f8a65] text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-light mb-1">
            Kenapa
          </h2>
          <h2 className="text-yellow-400 font-bold text-3xl md:text-5xl uppercase tracking-wide">
            INVESTASI DI NIRVALAND?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center text-center pb-8"
            >
              <div className="relative w-[100%] sm:w-[130%] h-56 overflow-hidden shadow-md">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="font-serif italic text-2xl font-bold mb-4 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
