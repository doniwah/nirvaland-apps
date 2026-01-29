import { ShieldCheck, Car, Cctv, Home, DoorOpen } from "lucide-react";

const OrchardFacilitiesSection = () => {
    const facilities = [
        {
            icon: DoorOpen,
            title: "One Gate\nSystem",
        },
        {
            icon: ShieldCheck,
            title: "Keamanan\n24 Jam",
        },
        {
            icon: Car,
            title: "Parkir Komunal",
        },
        {
            icon: Cctv,
            title: "CCTV\nKawasan",
        },
        {
            icon: Home,
            title: "Full Furnished",
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-green-200 to-green-300">
            <div className="container mx-auto px-8">
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-12">
                    Fasilitas & Lokasi
                </h2>

                {/* Facility Cards Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                    {facilities.map((facility, index) => {
                        const Icon = facility.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center space-y-4 shadow-lg hover:shadow-xl transition-shadow min-h-[200px]"
                            >
                                {/* Icon */}
                                <div className="flex items-center justify-center h-24">
                                    <Icon className="w-16 h-16 md:w-20 md:h-20 text-gray-800" strokeWidth={1.5} />
                                </div>

                                {/* Title */}
                                <h3 className="text-center text-base md:text-lg font-semibold text-gray-900 whitespace-pre-line leading-tight">
                                    {facility.title}
                                </h3>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default OrchardFacilitiesSection;
