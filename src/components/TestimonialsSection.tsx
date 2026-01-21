import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import aboutBg from "@/assets/about-bg.jpg";

const testimonials = [
  {
    id: 1,
    name: "Adi Wijaya",
    property: "Aurora Residence",
    quote:
      "Proses pembelian sangat mudah dan transparan. Kualitas bangunan melebihi ekspektasi kami. Terima kasih Nirvaland!",
    image: property1,
  },
  {
    id: 2,
    name: "Anggit Pratama",
    property: "Satria Premium Kost",
    quote:
      "Saya sangat puas dengan investasi di Nirvaland. ROI yang bagus dan pelayanan yang sangat profesional.",
    image: property2,
  },
  {
    id: 3,
    name: "Julia Tan",
    property: "Wahyuning Living Space",
    quote:
      "Desain rumahnya cantik sekali, modern tapi tetap nyaman. Anak-anak juga sangat suka dengan lingkungannya!",
    image: aboutBg,
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-primary font-display text-3xl md:text-4xl font-bold mb-2">
          APA KATA MEREKA
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Setelah Menjadi Bagian Keluarga Nirvaland
        </p>

        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-navy-light transition-colors shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-navy-light transition-colors shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6 px-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`relative bg-background rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ${
                  index === activeIndex ? "scale-105 z-10" : "scale-95 opacity-70"
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Quote className="w-8 h-8 text-secondary mb-2" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-foreground text-sm italic mb-4 line-clamp-3">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.property}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
