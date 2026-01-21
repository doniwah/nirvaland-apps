import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";

export interface Property {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  priceNote: string;
  location: string;
  images: string[];
  description: string;
  specifications: {
    landArea: string;
    buildingArea: string;
    bedrooms: number;
    bathrooms: number;
    floors: number;
    carport: number;
  };
  features: string[];
  virtualTourUrl: string;
}

export const properties: Property[] = [
  {
    id: "aurora-residence",
    name: "AURORA RESIDENCE",
    subtitle: "Premium Villa",
    price: "Rp 2.5 Miliar",
    priceNote: "Harga sudah termasuk PPN",
    location: "Jl. Raya Nirvaland No. 1, Malang",
    images: [property1, property1, property1, property1],
    description:
      "Hunian mewah dengan desain modern yang dikelilingi oleh keindahan alam. Lengkap dengan private pool dan taman yang asri untuk kenyamanan keluarga Anda. Nirvaland Aurora Residence menawarkan konsep hunian premium dengan standar kualitas terbaik.",
    specifications: {
      landArea: "200 m²",
      buildingArea: "180 m²",
      bedrooms: 4,
      bathrooms: 3,
      floors: 2,
      carport: 2,
    },
    features: [
      "Private Swimming Pool",
      "Smart Home System",
      "Taman Asri",
      "Security 24 Jam",
      "CCTV",
      "Akses One Gate System",
      "Dekat Pusat Perbelanjaan",
      "Dekat Sekolah Internasional",
    ],
    virtualTourUrl:
      "https://www.google.com/maps/embed?pb=!4v1705747200000!6m8!1m7!1sCAoSLEFGMVFpcE9hNThZRm5GNTV3X0VZY19sUVVYX3RIRWx3UkxYVmR3VFVxMkVl!2m2!1d-7.9778384!2d112.6308616!3f0!4f0!5f0.7820865974627469",
  },
  {
    id: "azzahra-corporation",
    name: "AZZAHRA CORPORATION",
    subtitle: "Exclusive Townhouse",
    price: "Rp 1.8 Miliar",
    priceNote: "Cicilan mulai dari 12 juta/bulan",
    location: "Jl. Soekarno Hatta No. 45, Malang",
    images: [property2, property2, property2, property2],
    description:
      "Rumah kost ekslusif yang sangat cocok untuk investasi. Lokasi strategis di pusat kota Malang dengan fasilitas lengkap dan desain modern. Azzahra Corporation menawarkan ROI yang menjanjikan untuk para investor properti.",
    specifications: {
      landArea: "150 m²",
      buildingArea: "250 m²",
      bedrooms: 10,
      bathrooms: 10,
      floors: 3,
      carport: 1,
    },
    features: [
      "Full Furnished",
      "AC di Setiap Kamar",
      "WiFi High Speed",
      "Water Heater",
      "Laundry Area",
      "Dapur Bersama",
      "Security 24 Jam",
      "Parkir Motor & Mobil",
    ],
    virtualTourUrl:
      "https://www.google.com/maps/embed?pb=!4v1705747200000!6m8!1m7!1sCAoSLEFGMVFpcE9hNThZRm5GNTV3X0VZY19sUVVYX3RIRWx3UkxYVmR3VFVxMkVl!2m2!1d-7.9778384!2d112.6308616!3f0!4f0!5f0.7820865974627469",
  },
];

export const getPropertyById = (id: string): Property | undefined => {
  return properties.find((p) => p.id === id);
};
