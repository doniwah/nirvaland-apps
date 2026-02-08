import { Check } from "lucide-react";
import orangOrchard from "@/assets/orang_orchard.png";

const OrchardWhyInvestSection = () => {
    const benefits = [
        {
            text: (
                <>
                    Lokasi Strategis hanya <strong>7 menit</strong> ke{" "}
                    <strong>Kampus UNDIP</strong>, dan <strong>8 menit</strong> ke{" "}
                    <strong>gerbang tol Tembalang</strong>
                </>
            ),
        },
        {
            text: "Nilai investasi dan passive income terus meningkat setiap tahunnya",
        },
        {
            text: (
                <>
                    Memiliki <strong>Fasilitas Keamanan</strong> yang bisa dipantau{" "}
                    <strong>real-time 24 jam</strong>
                </>
            ),
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Side - Image */}
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden">
                            <img
                                src={orangOrchard}
                                alt="OrchardKos Investment"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Kenapa Harus
                            <br />
                            Investasi Di OrchardKos
                        </h2>

                        <div className="space-y-6">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    {/* Checkmark Icon */}
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mt-1">
                                        <Check className="w-5 h-5 text-white" strokeWidth={3} />
                                    </div>

                                    {/* Text */}
                                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed flex-1">
                                        {benefit.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrchardWhyInvestSection;
