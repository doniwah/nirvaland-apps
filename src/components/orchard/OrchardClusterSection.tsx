import { useState, useEffect } from "react";
import slide1 from "@/assets/orchard_slide1.png";
import slide2 from "@/assets/orchard_slide2.png";
import slide3 from "@/assets/orchard_slide3.png";

const OrchardClusterSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [slide1, slide2, slide3];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-green-600 to-green-700">
            <div className="container mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Left Side - Photo Slide */}
                    <div className="relative">
                        <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                            {/* Slide Image */}
                            <div className="w-full h-full flex transition-transform duration-1000 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                                {slides.map((slide, index) => (
                                    <div key={index} className="w-full h-full flex-shrink-0">
                                        <img
                                            src={slide}
                                            alt={`Orchard Slide ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Slide Indicators */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                {slides.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white w-8" : "bg-white/50 w-2"
                                            }`}
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
