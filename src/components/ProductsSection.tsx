import { Link } from "react-router-dom";
import { properties } from "@/data/properties";
import { Button } from "@/components/ui/button";
import { Clover, Crown } from "lucide-react";

const ProductsSection = () => {
  return (
    <section id="products" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header removed from center to standard or keep it but minimal? 
            The image shows "OUR BEST PRODUCT" is not visible in the crop, 
            but usually sections have headers. I will keep it but maybe adjust if needed.
            Wait, the user showed a cropped image of the CARD. The section header usually remains.
            I will keep the green header I made earlier.
        */}
        <h2 className="text-center text-green-700 font-display text-3xl md:text-4xl font-bold mb-12">
          OUR BEST PRODUCT
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl group"
            >
              <img
                src={property.images[0]}
                alt={property.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay Card - Right Aligned / Overlapping */}
              <div className="absolute top-4 bottom-4 right-4 w-[90%] md:w-[60%] bg-white rounded-2xl shadow-2xl p-6 flex flex-col items-center text-center justify-center">
                {/* Logo Area */}
                <div className="mb-4">
                  {property.id === "orchard-kos" ? (
                    <div className="flex flex-col items-center">
                      {/* Using Clover icon as a substitute for the tree/flower logo */}
                      <Clover className="text-green-700 w-12 h-12 mb-2" strokeWidth={2.5} />
                      <h3 className="text-green-800 font-display text-2xl font-bold leading-none">Orchard Kos</h3>
                      <span className="text-[0.6rem] tracking-widest text-green-700 mt-1 uppercase">Langkah Awal Menuju Kebebasan Finansial</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      {/* Using Crown or similar for Beverly */}
                      <Crown className="text-green-800 w-12 h-12 mb-2" strokeWidth={1.5} />
                      <h3 className="text-green-800 font-display text-xl font-bold tracking-widest leading-none">BEVERLY KOS</h3>
                      <span className="text-green-800 text-xs tracking-[0.3em] mt-1">TEMBALANG</span>
                    </div>
                  )}
                </div>

                <h4 className="font-serif italic text-2xl text-gray-800 mb-4">
                  Rumah Kost Premium
                </h4>

                <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-4 px-2">
                  {property.description}
                </p>

                <Link to={`/property/${property.id}`}>
                  <Button className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-lg text-sm flex items-center gap-2">
                    selengkapnya &gt;
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
