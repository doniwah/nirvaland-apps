import BeverlyHeroSection from "@/components/beverly/BeverlyHeroSection";
import WhyInvestSection from "@/components/beverly/WhyInvestSection";
import ClusterSection from "@/components/beverly/ClusterSection";
import UnitDetailsSection from "@/components/beverly/UnitDetailsSection";
import FacilitiesSection from "@/components/beverly/FacilitiesSection";
import CallToActionSection from "@/components/beverly/CallToActionSection";
import FooterSection from "@/components/beverly/FooterSection";

const BeverlyKost = () => {
    return (
        <div className="min-h-screen bg-background">
            <BeverlyHeroSection />
            <WhyInvestSection />
            <ClusterSection />
            <UnitDetailsSection />
            <FacilitiesSection />
            <CallToActionSection />
            <FooterSection />
        </div>
    );
};

export default BeverlyKost;
