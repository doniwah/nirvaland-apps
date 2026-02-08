import logo from "@/assets/orchard-logo.png";
import heroOrcard from "@/assets/hero_orcard.png";

const OrchardHeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-end overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('/src/assets/orchard-hero.png')`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>
            </div>

            {/* Logo - Top Left */}
            <div className="absolute top-3 left-8 z-20">
                <img src={logo} alt="Orchard Kos" className="h-24 md:h-36" />
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
                        <img
                            src={heroOrcard}
                            alt="Passive Income Info"
                            className="w-auto h-auto max-w-[280px] md:max-w-[350px] lg:max-w-[400px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrchardHeroSection;
