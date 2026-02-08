import { useState, useEffect } from 'react';
import slide1 from '@/assets/beverly_slide1.jpeg';
import slide2 from '@/assets/beverly_slide2.jpeg';
import slide3 from '@/assets/beverly_slide3.jpeg';

const ClusterSection = () => {
    const images = [slide1, slide2, slide3];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);
    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#4a4e7c] via-[#5a5d8c] to-[#4a4e7c]">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Photo Slide */}
                    <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                        <div
                            className="flex transition-transform duration-1000 ease-in-out h-full"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {images.map((img, index) => (
                                <div key={index} className="w-full h-full flex-shrink-0">
                                    <img
                                        src={img}
                                        alt={`Cluster Slide ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="text-white">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            Cluster
                            <br />
                            Rumah Kos Premium
                        </h2>

                        <p className="text-base md:text-lg leading-relaxed text-white/90">
                            BeverlyKos adalah kos modern dengan kamar nyaman, lingkungan tertata,
                            dan lokasi strategis—pilihan praktis untuk tinggal tenang sekaligus
                            bernilai jangka panjang.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClusterSection;
