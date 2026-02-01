import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TaglineSection from "@/components/TaglineSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";
import VirtualSurveySection from "@/components/VirtualSurveySection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TaglineSection />
      <AboutSection />
      <ProductsSection />
      <WhyChooseSection />
      {/* <TestimonialsSection /> */}
      <StatsSection />
      {/* <VirtualSurveySection /> */}
      <BookingSection />
      <Footer />
    </div>
  );
};

export default Index;
