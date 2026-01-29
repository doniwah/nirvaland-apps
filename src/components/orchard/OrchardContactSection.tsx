import { Youtube, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/orchard-logo.png";

const OrchardContactSection = () => {
    // To change the map location:
    // 1. Go to Google Maps and find your location
    // 2. Click "Share" button
    // 3. Click "Embed a map" tab
    // 4. Copy the iframe src URL and paste it below
    const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.123456789!2d110.123456!3d-7.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDcnMjQuNCJTIDExMMKwMDcnMjQuNCJF!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid";

    const socialLinks = [
        { icon: Youtube, url: "https://youtube.com/@orchardkos", label: "YouTube" },
        { icon: Instagram, url: "https://instagram.com/orchardkos", label: "Instagram" },
        { icon: Facebook, url: "https://facebook.com/orchardkos", label: "Facebook" },
    ];

    return (
        <section className="bg-gradient-to-br from-green-700 to-green-800">
            <div className="container mx-auto px-8 py-16 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left Side - Google Maps */}
                    <div className="relative">
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-white">
                            <iframe
                                src={mapEmbedUrl}
                                title="Orchard Kos Location"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                                onError={(e) => {
                                    // Fallback if maps doesn't load
                                    e.currentTarget.style.display = "none";
                                    e.currentTarget.parentElement!.innerHTML = `
                                        <div class="flex items-center justify-center w-full h-full bg-white">
                                            <div class="text-center">
                                                <p class="text-6xl font-bold text-gray-400">MAP</p>
                                            </div>
                                        </div>
                                    `;
                                }}
                            />
                        </div>
                    </div>

                    {/* Right Side - Contact Info & Social Media */}
                    <div className="space-y-8">
                        {/* Contact Information */}
                        <div className="space-y-4">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Hubungi Kami
                            </h3>
                            <p className="text-lg md:text-xl text-white/95">
                                Email : <a href="mailto:official@nirvaland.id" className="hover:underline">official@nirvaland.id</a>
                            </p>
                            <p className="text-lg md:text-xl text-white/95">
                                Phone : <a href="tel:081313-2233-0" className="hover:underline">08-1313-2233-0</a>
                            </p>
                        </div>

                        {/* Social Media */}
                        <div className="space-y-4">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Ikuti Kami
                            </h3>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.label}
                                            className="bg-white rounded-full p-3 hover:bg-gray-100 transition-colors"
                                        >
                                            <Icon className="w-6 h-6 text-green-700" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Logo */}
                        <div className="pt-8">
                            <img src={logo} alt="Orchard Kos" className="h-20 md:h-24" />
                        </div>
                    </div>
                </div>

                {/* Copyright Footer */}
                <div className="border-t border-white/30 mt-12 pt-8">
                    <p className="text-center text-white/90 text-sm md:text-base">
                        © Copyright 2026 - Nirvaland Jaya Sentosa
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OrchardContactSection;
