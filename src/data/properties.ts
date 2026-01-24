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
    id: "orchard-kos",
    name: "Orchard Kos",
    subtitle: "Rumah Kost Premium",
    price: "Mulai Rp 1.5 Juta/Bulan",
    priceNote: "Termasuk Listrik & Air",
    location: "Jl. Orchard No. 1, Malang",
    images: [property1, property1, property1, property1],
    description:
      "Orchardkos adalah kos modern dengan kamar nyaman, lingkungan tertata, dan lokasi strategis—pilihan praktis untuk tinggal tenang sekaligus bermilai jangka panjang.",
    specifications: {
      landArea: "200 m²",
      buildingArea: "350 m²",
      bedrooms: 15,
      bathrooms: 15,
      floors: 2,
      carport: 5,
    },
    features: [
      "Kamar Mandi Dalam",
      "AC & Water Heater",
      "WiFi High Speed",
      "Dapur Bersama",
      "Parkir Luas",
      "CCTV 24 Jam",
      "Ruang Tamu",
      "Akses 24 Jam",
    ],
    virtualTourUrl:
      "https://www.google.com/maps/embed?pb=!4v1705747200000!6m8!1m7!1sCAoSLEFGMVFpcE9hNThZRm5GNTV3X0VZY19sUVVYX3RIRWx3UkxYVmR3VFVxMkVl!2m2!1d-7.9778384!2d112.6308616!3f0!4f0!5f0.7820865974627469",
  },
  {
    id: "beverly-kos",
    name: "BEVERLY KOS", // Keeping uppercase as in logo sometimes or mixed
    subtitle: "TEMBALANG", // Logo has TEMBALANG below it
    price: "Mulai Rp 1.8 Juta/Bulan",
    priceNote: "Fasilitas Lengkap",
    location: "Tembalang, Semarang",
    images: [property2, property2, property2, property2],
    description:
      "Beverlykos adalah kos modern dengan suasana rapi dan nyaman, dirancang untuk menunjang gaya hidup praktis di lokasi strategis ideal untuk hunian harian yang tenang dan efisien.",
    specifications: {
      landArea: "300 m²",
      buildingArea: "500 m²",
      bedrooms: 20,
      bathrooms: 20,
      floors: 3,
      carport: 10,
    },
    features: [
      "Full Furnished",
      "Smart Door Lock",
      "Gym Area",
      "Rooftop Garden",
      "Co-working Space",
      "Cleaning Service",
      "Security 24 Jam",
      "Dekat Kampus",
    ],
    virtualTourUrl:
      "https://www.google.com/maps/embed?pb=!4v1705747200000!6m8!1m7!1sCAoSLEFGMVFpcE9hNThZRm5GNTV3X0VZY19sUVVYX3RIRWx3UkxYVmR3VFVxMkVl!2m2!1d-7.9778384!2d112.6308616!3f0!4f0!5f0.7820865974627469",
  },
];

export const getPropertyById = (id: string): Property | undefined => {
  return properties.find((p) => p.id === id);
};
