import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const MapSection = () => {
    return (
        <section className="py-20 bg-slate-800 text-white">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Map Placeholder */}
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Lokasi Beverly Kost</h2>
                        <div className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20 h-[400px] flex items-center justify-center">
                            <div className="text-center p-8">
                                <MapPin className="w-16 h-16 text-white/70 mx-auto mb-4" />
                                <p className="text-2xl font-bold mb-2">MAP</p>
                                <p className="text-white/70 text-sm">
                                    Placeholder untuk peta lokasi
                                    <br />
                                    (Bisa gunakan Google Maps embed atau gambar peta)
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Hubungi Kami</h2>

                        {/* Beverly Kost Branding */}
                        <div className="mb-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">B</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">BEVERLY KOS</h3>
                                    <p className="text-white/70 text-sm">Premium Boarding House</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                                <MapPin className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                                <div>
                                    <p className="font-semibold mb-1">Alamat</p>
                                    <p className="text-white/80 text-sm leading-relaxed">
                                        Jl. Beverly Park No. 14
                                        <br />
                                        Jakarta Selatan, DKI Jakarta
                                        <br />
                                        Indonesia 12345
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                                <Phone className="w-6 h-6 text-purple-400 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold mb-1">Telepon</p>
                                    <p className="text-white/80 text-sm">+62 812-3456-7890</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                                <Mail className="w-6 h-6 text-purple-400 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold mb-1">Email</p>
                                    <p className="text-white/80 text-sm">info@beverlykost.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div>
                            <p className="font-semibold mb-4">Ikuti Kami</p>
                            <div className="flex gap-3">
                                <Button
                                    size="icon"
                                    variant="outline"
                                    className="w-12 h-12 rounded-full border-2 border-white/30 text-white hover:bg-white hover:text-primary transition-all"
                                >
                                    <Facebook className="w-5 h-5" />
                                </Button>
                                <Button
                                    size="icon"
                                    variant="outline"
                                    className="w-12 h-12 rounded-full border-2 border-white/30 text-white hover:bg-white hover:text-primary transition-all"
                                >
                                    <Instagram className="w-5 h-5" />
                                </Button>
                                <Button
                                    size="icon"
                                    variant="outline"
                                    className="w-12 h-12 rounded-full border-2 border-white/30 text-white hover:bg-white hover:text-primary transition-all"
                                >
                                    <Youtube className="w-5 h-5" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapSection;
