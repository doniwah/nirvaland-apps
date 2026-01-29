import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const OrchardClusterSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Placeholder images - replace with actual kost photos
    const slides = [
        {
            image: "/src/assets/orchard-slide-1.jpg",
            alt: "Modern Kost Bedroom",
        },
        {
            image: "/src/assets/orchard-slide-2.jpg",
            alt: "Gated Community",
        },
        {
            image: "/src/assets/orchard-slide-3.jpg",
            alt: "Common Area",
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-green-600 to-green-700">
            <div className="container mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Left Side - Photo Slide */}
                    <div className="relative">
                        <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                            {/* Slide Image */}
                            <div className="w-full h-full flex items-center justify-center bg-gray-100">
                                <img
                                    src={slides[currentSlide].image}
                                    alt={slides[currentSlide].alt}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        // Fallback if image doesn't exist
                                        e.currentTarget.style.display = "none";
                                        e.currentTarget.parentElement!.innerHTML = `
                                            <div class="flex items-center justify-center w-full h-full text-gray-400">
                                                <div class="text-center">
                                                    <p class="text-4xl font-bold mb-2">photo</p>
                                                    <p class="text-2xl">slide</p>
                                                </div>
                                            </div>
                                        `;
                                    }}
                                />
                            </div>

                            {/* Navigation Arrows */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft className="w-6 h-6 text-gray-800" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                                aria-label="Next slide"
                            >
                                <ChevronRight className="w-6 h-6 text-gray-800" />
                            </button>

                            {/* Slide Indicators */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-2 h-2 rounded-full transition-all ${index === currentSlide
                                                ? "bg-white w-8"
                                                : "bg-white/50"
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Cluster
                            <br />
                            Rumah Kos Premium
                        </h2>

                        <p className="text-lg md:text-xl text-white/95 leading-relaxed">
                            Orchardkos adalah kos modern dengan kamar nyaman, lingkungan tertata, dan lokasi strategis—pilihan praktis untuk tinggal tenang sekaligus bernilai jangka panjang.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrchardClusterSection;
