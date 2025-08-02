import EcommerceHeader from "@/components/EcommerceHeader";
import EcommerceHero from "@/components/EcommerceHero";
import ProductGrid from "@/components/ProductGrid";
import EcommerceFooter from "@/components/EcommerceFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <EcommerceHeader />
      <main>
        <EcommerceHero />
        <ProductGrid />
      </main>
      <EcommerceFooter />
    </div>
  );
};

export default Index;
