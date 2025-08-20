import { useState } from "react";
import { ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/ginna-ghee-logo.jpeg";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-ghee-gold">
              <img 
                src={logoImage} 
                alt="Ginna Ghee Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-ghee-dark">Ginna Ghee</h1>
              <p className="text-xs text-ghee-medium italic">Richness You Can Taste</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-ghee-dark hover:text-ghee-gold transition-colors font-medium"
              data-testid="nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-ghee-dark hover:text-ghee-gold transition-colors font-medium"
              data-testid="nav-products"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-ghee-dark hover:text-ghee-gold transition-colors font-medium"
              data-testid="nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('recipes')}
              className="text-ghee-dark hover:text-ghee-gold transition-colors font-medium"
              data-testid="nav-recipes"
            >
              Recipes
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-ghee-dark hover:text-ghee-gold transition-colors font-medium"
              data-testid="nav-contact"
            >
              Contact
            </button>
            <Button className="bg-ghee-gold text-white hover:bg-ghee-accent font-medium" data-testid="button-shop-now">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Shop Now
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              <Menu className="text-ghee-dark text-2xl" />
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-ghee-beige">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-ghee-dark hover:text-ghee-gold transition-colors font-medium text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('products')} className="text-ghee-dark hover:text-ghee-gold transition-colors font-medium text-left">
                Products
              </button>
              <button onClick={() => scrollToSection('about')} className="text-ghee-dark hover:text-ghee-gold transition-colors font-medium text-left">
                About
              </button>
              <button onClick={() => scrollToSection('recipes')} className="text-ghee-dark hover:text-ghee-gold transition-colors font-medium text-left">
                Recipes
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-ghee-dark hover:text-ghee-gold transition-colors font-medium text-left">
                Contact
              </button>
              <Button className="bg-ghee-gold text-white hover:bg-ghee-accent font-medium w-full">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Shop Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
