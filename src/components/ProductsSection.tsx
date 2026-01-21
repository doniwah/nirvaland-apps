import { Link } from "react-router-dom";
import { properties } from "@/data/properties";
import { Button } from "@/components/ui/button";

const ProductsSection = () => {
  return (
    <section id="products" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-primary font-display text-3xl md:text-4xl font-bold mb-4">
          OUR BEST PRODUCT
        </h2>
        <div className="w-16 h-1 bg-secondary mx-auto mb-12" />

        <div className="grid md:grid-cols-2 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={property.images[0]}
                  alt={property.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  {property.subtitle}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-primary font-display text-xl font-bold mb-2">
                  {property.name}
                </h3>
                <p className="text-secondary font-bold mb-3">{property.price}</p>
                <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                  {property.description}
                </p>
                <Link to={`/property/${property.id}`}>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-navy-light rounded-full">
                    Selengkapnya →
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
