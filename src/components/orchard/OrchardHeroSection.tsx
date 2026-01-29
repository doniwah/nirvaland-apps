import logo from "@/assets/logo.png";

const OrchardHeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-end overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('/src/assets/orchard-hero.jpg')`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>
            </div>

            {/* Logo - Top Left */}
            <div className="absolute top-8 left-8 z-20">
                <img src={logo} alt="Orchard Kos" className="h-16 md:h-20" />
            </div>

            {/* Content - Bottom Section */}
            <div className="relative z-10 container mx-auto px-8 pb-12 md:pb-16">
                <div className="flex items-end justify-between gap-8">
                    {/* Left Side - Heading */}
                    <div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                            Rumah Kost
                            <br />
                            <span className="text-white">Eksklusif</span>
                        </h1>
                    </div>

                    {/* Right Side - Price Badge */}
                    <div className="flex-shrink-0">
                        <div className="relative">
                            {/* Top Small Box - "Dapatkan Passive Income" */}
                            <div className="relative z-10 bg-[#2d7a3e] border-2 border-[#4a9d5e] rounded-2xl px-6 py-2 mb-2 inline-block">
                                <p className="text-white text-sm font-medium">
                                    Dapatkan<br />Passive Income
                                </p>
                            </div>

                            {/* Bottom Large Box - "370 Jt/Th" */}
                            <div className="bg-[#2d7a3e] border-2 border-[#4a9d5e] rounded-2xl px-8 py-4 md:px-10 md:py-5 shadow-xl">
                                <div className="flex items-baseline gap-2">
                                    <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none">
                                        370
                                    </div>
                                    <div className="text-base md:text-lg text-white font-medium">
                                        Jt<br /><span className="text-white/80">/Th</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrchardHeroSection;
