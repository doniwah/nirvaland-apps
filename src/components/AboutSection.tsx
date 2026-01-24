import aboutBg from "@/assets/image-about.png";

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
            
          </div>

          <div>
            <h3 className="text-primary font-display text-3xl md:text-4xl font-bold mb-6">
              Nirvaland Indonesia 
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Nirvaland adalah kawasan hunian modern yang dirandang untuk menghadirkan keseimbangan antara kenyamanan hidup dan kualitas ruang. Dengan design kontemporer, tata kawasan yang tertata, serta lingkungan yang tenang, Nirvaland menjadi tempat ideal untuk tinggal sekaligus berinvestasi. Sebuah hunian yang tidak hanya dibangun, tetapi dirancang untuk dinikmati dalam jangka panjang.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-background rounded-xl shadow-sm">
                <p className="text-3xl font-bold text-primary">100+</p>
                <p className="text-sm text-muted-foreground">Telah Dipercaya Investor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
