import { Shield, Camera, Car, DoorOpen, Bed } from "lucide-react";

const FacilitiesSection = () => {
    const facilities = [
        {
            icon: DoorOpen,
            title: "One Gate System",
            description: "Sistem keamanan satu pintu masuk"
        },
        {
            icon: Shield,
            title: "Keamanan 24 Jam",
            description: "Security profesional 24/7"
        },
        {
            icon: Car,
            title: "Parkir Komunal",
            description: "Area parkir luas dan aman"
        },
        {
            icon: Camera,
            title: "CCTV",
            description: "Pemantauan area 24 jam"
        },
        {
            icon: Bed,
            title: "Kamar Fullset",
            description: "Furniture lengkap & berkualitas"
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Fasilitas & Lokasi
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Beverly Kost dilengkapi dengan fasilitas modern untuk kenyamanan dan keamanan maksimal
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                    {facilities.map((facility, index) => (
                        <div
                            key={index}
                            className="group p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-200 group-hover:scale-110 transition-all duration-300 mx-auto">
                                <facility.icon className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="font-bold text-gray-800 text-center mb-2 text-sm">
                                {facility.title}
                            </h3>
                            <p className="text-gray-500 text-xs text-center leading-relaxed">
                                {facility.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FacilitiesSection;
