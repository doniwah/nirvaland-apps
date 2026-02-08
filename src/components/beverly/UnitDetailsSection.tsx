import { Bed, Bath, DoorOpen } from "lucide-react";

const UnitDetailsSection = () => {
    const specs = [
        { icon: Bed, label: "14 Kamar Tidur" },
        { icon: Bath, label: "14 Kamar Mandi" },
        { icon: DoorOpen, label: "Balkon" },
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    <div className="relative">
                        <div className="rounded-3xl">
                            <div className="bg-white rounded-2xl overflow-hidden">
                                <img
                                    src="/src/assets/beverly-home.png"
                                    alt="Beverly Tipe 14"
                                    className="w-full h-[500px] object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Unit Details */}
                    <div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 leading-tight">
                            <span className="text-[#2d3e68] italic">Beverly</span>
                        </h2>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 border-b-4 border-gray-300 pb-2 inline-block">
                            TIPE 14
                        </h3>

                        <div className="space-y-6 mt-10">
                            {specs.map((spec, index) => (
                                <div key={index} className="flex items-center gap-6">
                                    <div className="flex-shrink-0">
                                        <spec.icon className="w-10 h-10 text-gray-700" strokeWidth={1.5} />
                                    </div>
                                    <p className="text-xl md:text-2xl text-gray-800">{spec.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UnitDetailsSection;
