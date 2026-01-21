import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4">
              HUBUNGI KAMI
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <p className="text-sm text-primary-foreground/80">
                  Jl. Raya Kepanjen, Kota Malang, Jawa Timur - Indonesia
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <p className="text-sm text-primary-foreground/80">
                  (0341) 123 4567
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary" />
                <p className="text-sm text-primary-foreground/80">
                  info@nirvaland.id
                </p>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4">OUR PROJECT</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-secondary transition-colors">Aurora Residence</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Azzahra Corporation</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Satria Premium Kost</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Wahyuning Living Space</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4">TAUTAN</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-secondary transition-colors">Karir</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Kerjasama</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Partnership</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Logo & Social */}
          <div className="text-center md:text-left">
            <div className="mb-6">
              <span className="text-4xl font-display font-bold">
                <span className="text-secondary">N</span>irvaland
              </span>
            </div>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors group"
              >
                <Facebook className="w-5 h-5 group-hover:text-secondary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors group"
              >
                <Instagram className="w-5 h-5 group-hover:text-secondary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors group"
              >
                <Youtube className="w-5 h-5 group-hover:text-secondary-foreground" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-primary-foreground/60">
            2026 © nirvaland.id | Official Site of Nirvaland Indonesia
          </p>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/628123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </footer>
  );
};

export default Footer;
