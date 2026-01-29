import { CheckCircle2 } from "lucide-react";

const WhyInvestSection = () => {
    const benefits = [
        "Lokasi Strategis hanya 7 menit ke Kampus UNDIP, dan 8 menit ke gerbang tol Tembalang",
        "Nilai investasi dan passive income terus meningkat setiap tahunnya",
        "Memiliki Fasilitas Keamanan yang bisa dipantau real-time 24 jam",
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image Side */}
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden p-8">
                            <img
                                src="/src/assets/beverly-why.png"
                                alt="Investment Professional"
                                className="w-full h-[450px] object-cover rounded-2xl"
                            />
                        </div>
                    </div>

                    {/* Content Side */}
                    <div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
                            Kenapa Harus
                            <br />
                            Investasi Di BeverlyKos
                        </h2>

                        <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
                            Beverly Kost adalah investasi properti premium yang menawarkan peluang
                            menguntungkan dengan risiko minimal. Dirancang khusus untuk investor
                            cerdas yang menginginkan passive income berkelanjutan.
                        </p>

                        <div className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-4 group">
                                    <div className="flex-shrink-0 w-7 h-7 bg-[#2d3e68] rounded-full flex items-center justify-center mt-0.5">
                                        <CheckCircle2 className="w-5 h-5 text-white" />
                                    </div>
                                    <p className="text-gray-700 leading-relaxed">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyInvestSection;
