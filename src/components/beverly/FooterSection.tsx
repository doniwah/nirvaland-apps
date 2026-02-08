import logo from "@/assets/logo_beverly.png";
import { Mail, Phone, Youtube, Instagram, Facebook } from "lucide-react";

const FooterSection = () => {
    return (
        <footer className="bg-[#2d3e68] text-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 border-b border-white/20 pb-12">
                    {/* Left Side - Map */}
                    <div className="w-full md:w-1/2 lg:w-5/12">
                        <div className="bg-white p-2 rounded-lg shadow-lg h-[250px] w-full relative group overflow-hidden">
                            <iframe
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight={0}
                                marginWidth={0}
                                src="https://maps.google.com/maps?q=Beverly+Kost+Tembalang&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                className="w-full h-full rounded"
                            ></iframe>
                            <a
                                href="https://maps.app.goo.gl/EFm6a6WB6kUnhNWx5"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 z-10"
                                aria-label="Open in Google Maps"
                            ></a>
                        </div>
                    </div>

                    {/* Middle - Contact Info */}
                    <div className="w-full md:w-1/2 lg:w-4/12 flex flex-col justify-center space-y-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Hubungi Kami</h3>
                            <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-white/80" />
                                    <span className="text-white/90">official@nirvaland.id</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-white/80" />
                                    <span className="text-white/90">08-1313-2233-0</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-3">Ikuti Kami</h3>
                            <div className="flex gap-4">
                                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                                    <Youtube className="w-6 h-6" />
                                </a>
                                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                                    <Instagram className="w-6 h-6" />
                                </a>
                                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                                    <Facebook className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Logo */}
                    <div className="w-full md:w-auto lg:w-3/12 flex flex-col items-center md:items-end text-center md:text-right">
                        <img src={logo} alt="Beverly Kos Tembalang" className="w-32 md:w-40 mb-2 brightness-0 invert" />
                        {/* Note: brightness-0 invert makes the logo white if it's black, adjustments may be needed based on actual logo */}
                    </div>
                </div>

                {/* Bottom - Copyright */}
                <div className="text-center pt-8 text-white/60 text-sm">
                    &copy; Copyright 2026 - Nirvaland Jaya Sentosa
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
