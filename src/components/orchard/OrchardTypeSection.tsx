import { Bed, Bath, Home } from "lucide-react";

const OrchardTypeSection = () => {
    const features = [
        {
            icon: Bed,
            text: "14 Kamar Tidur",
        },
        {
            icon: Bath,
            text: "14 Kamar Mandi",
        },
        {
            icon: Home,
            text: "Balkon",
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
                    {/* Left Side - Building Image */}
                    <div className="relative">
                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-white">
                            <img
                                src="/src/assets/orchard-type-14.png"
                                alt="Orchard Type 14 Building"
                                className="w-full h-auto object-cover"
                                onError={(e) => {
                                    // Fallback if image doesn't exist
                                    e.currentTarget.style.display = "none";
                                    e.currentTarget.parentElement!.innerHTML = `
                                        <div class="flex items-center justify-center w-full aspect-square bg-gradient-to-br from-blue-100 to-white p-8">
                                            <div class="text-center">
                                                <p class="text-6xl font-bold text-gray-400">Orchard</p>
                                                <p class="text-4xl text-gray-400 mt-2">Type 14</p>
                                            </div>
                                        </div>
                                    `;
                                }}
                            />
                        </div>
                    </div>

                    {/* Right Side - Type Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                <span className="text-green-700 italic">Orchard</span>
                                <br />
                                <span className="text-gray-900">TIPE 14</span>
                            </h2>
                            <div className="h-1 w-32 bg-gray-900 mt-2"></div>
                        </div>

                        <div className="space-y-6">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <div key={index} className="flex items-center gap-4">
                                        {/* Icon */}
                                        <div className="flex-shrink-0">
                                            <Icon className="w-8 h-8 md:w-10 md:h-10 text-gray-700" strokeWidth={1.5} />
                                        </div>

                                        {/* Text */}
                                        <p className="text-xl md:text-2xl text-gray-900 font-medium">
                                            {feature.text}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrchardTypeSection;
