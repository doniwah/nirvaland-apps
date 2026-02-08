import logo from "@/assets/logo-beverly.png";
import heroKanan from "@/assets/hero_kanan.png";

const BeverlyHeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-end overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('/src/assets/beverly-hero.jpg')`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>
            </div>

            {/* Logo - Top Left */}
            <div className="absolute top-8 left-8 z-20">
                <img src={logo} alt="Beverly Kos Flamboyan" className="h-16 md:h-20" />
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
                            src={heroKanan}
                            alt="Passive Income Info"
                            className="w-auto h-auto max-w-[280px] md:max-w-[350px] lg:max-w-[400px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeverlyHeroSection;
