import OrchardHeroSection from "@/components/orchard/OrchardHeroSection";
import OrchardWhyInvestSection from "@/components/orchard/OrchardWhyInvestSection";
import OrchardClusterSection from "@/components/orchard/OrchardClusterSection";
import OrchardTypeSection from "@/components/orchard/OrchardTypeSection";
import OrchardFacilitiesSection from "@/components/orchard/OrchardFacilitiesSection";
import OrchardVideoSection from "@/components/orchard/OrchardVideoSection";
import OrchardContactSection from "@/components/orchard/OrchardContactSection";

const OrchardKost = () => {
    return (
        <div className="min-h-screen bg-background">
            <OrchardHeroSection />
            <OrchardWhyInvestSection />
            <OrchardClusterSection />
            <OrchardTypeSection />
            <OrchardFacilitiesSection />
            <OrchardVideoSection />
            <OrchardContactSection />
        </div>
    );
};

export default OrchardKost;
