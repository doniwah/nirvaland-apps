import { Button } from "@/components/ui/button";
import property1 from "@/assets/kawasan_5.png";
// Assuming image-about.png might be the person image based on naming convention often used in templates
import personImage from "@/assets/logo-orang.png";

const BookingSection = () => {
  return (
    <section id="booking" className="py-20 bg-gradient-to-r from-green-800 to-green-600 relative overflow-hidden flex items-center justify-center">
      {/* Main Container - Gold Bordered Card */}
      <div className="relative w-full max-w-6xl mx-4 md:mx-auto">

        {/* The Card with Gold Border */}
        <div className="relative rounded-[3rem] border-4 border-yellow-500 overflow-hidden h-[400px] md:h-[500px] bg-black">
          {/* Background Image for the Card */}
          <img
            src={property1}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />

          {/* Overlay Gradient to ensure text readability if needed, or matched to image style */}
          <div className="absolute inset-0 bg-green-900/40 mix-blend-multiply"></div>

          {/* Content Centered/Right */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pl-0 md:pl-48 pr-4">
            <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 font-display drop-shadow-md leading-tight mb-8">
              ATUR JADWAL <br />
              SURVEY SEKARANG
            </h2>

            <Button className="bg-green-700 hover:bg-green-800 text-white text-xl px-12 py-6 rounded-full shadow-xl transition-transform hover:scale-105">
              Klik Disini
            </Button>
          </div>
        </div>

        { }
        {/* We use a negative margin or absolute positioning to break the card boundary as shown in the design */}
        <div className="hidden md:block absolute bottom-0 left-0 w-[400px] lg:w-[500px] z-20">
          <img
            src={personImage}
            alt="Representative"
            className="w-full h-auto object-contain drop-shadow-2xl ml-[-250px]"
          />
        </div>

      </div>
    </section>
  );
};

export default BookingSection;
