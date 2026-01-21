import aboutBg from "@/assets/about-bg.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutBg}
                alt="Nirvaland Development"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-2xl hidden md:block" />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-primary font-display text-3xl md:text-4xl font-bold mb-6">
              Nirvaland Indonesia
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Nirvaland merupakan perusahaan developer properti terkemuka yang berlokasi di Kota Malang. 
              Kami hadir untuk memberikan Kawasan Hunian Premium, Rumah Kost, dan Resort Ekslusif. 
              Nirvaland berkomitmen menjadi rekan yang terpercaya dalam membantu Anda mewujudkan impian 
              memiliki hunian nyaman dan investasi properti yang menguntungkan.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-background rounded-xl shadow-sm">
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Tahun Pengalaman</p>
              </div>
              <div className="text-center p-4 bg-background rounded-xl shadow-sm">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Unit Terjual</p>
              </div>
              <div className="text-center p-4 bg-background rounded-xl shadow-sm">
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground">Proyek Aktif</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
