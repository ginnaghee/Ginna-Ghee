import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-ghee-cream via-ghee-beige to-ghee-gold/20">
      <div className="absolute inset-0 bg-gradient-to-r from-ghee-cream/80 to-ghee-beige/60"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl slide-in">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-ghee-dark mb-6 leading-tight">
            The Golden
            <span className="text-ghee-gold block">Tradition</span>
          </h1>
          <p className="text-xl md:text-2xl text-ghee-medium mb-4 font-serif italic">
            "Richness You Can Taste"
          </p>
          <p className="text-lg text-ghee-medium mb-8 leading-relaxed">
            Experience the authentic flavor of premium browned ghee, crafted with traditional methods 
            to bring you the richest, nuttiest taste that transforms every meal into a culinary masterpiece.
          </p>

        </div>
      </div>
      
      <button 
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-ghee-gold floating-animation"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}
