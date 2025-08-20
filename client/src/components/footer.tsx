import { Facebook, Instagram, Youtube } from "lucide-react";
import logoImage from "@assets/ginna-ghee-logo.jpeg";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: "Home", href: "home" },
    { name: "Products", href: "products" },
    { name: "About Us", href: "about" },
    { name: "Recipes", href: "recipes" },
    { name: "Contact", href: "contact" }
  ];

  const products = [
    "Signature Browned Ghee",
    "Artisan Small Batch", 
    "Family Size",
    "Gift Sets",
    "Wholesale"
  ];

  const support = [
    "FAQ",
    "Nutritional Guide",
    "Cooking Tips",
    "Shipping Info",
    "Returns"
  ];

  return (
    <footer className="bg-ghee-dark text-ghee-cream py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-ghee-gold">
                <img 
                  src={logoImage} 
                  alt="Ginna Ghee Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold" data-testid="text-footer-brand">Ginna Ghee</h3>
                <p className="text-xs italic">Richness You Can Taste</p>
              </div>
            </div>
            <p className="text-ghee-cream/80 mb-4 leading-relaxed">
              Premium browned ghee crafted with traditional methods and modern quality standards. 
              Experience the richness and nutritional benefits in every jar.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-ghee-gold rounded-full flex items-center justify-center text-white hover:bg-ghee-accent transition-colors" data-testid="link-footer-facebook">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-ghee-gold rounded-full flex items-center justify-center text-white hover:bg-ghee-accent transition-colors" data-testid="link-footer-instagram">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-ghee-gold rounded-full flex items-center justify-center text-white hover:bg-ghee-accent transition-colors" data-testid="link-footer-youtube">
                <Youtube size={16} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="text-ghee-cream/80 hover:text-ghee-gold transition-colors"
                    data-testid={`link-footer-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product}>
                  <a href="#" className="text-ghee-cream/80 hover:text-ghee-gold transition-colors" data-testid={`link-footer-product-${product.toLowerCase().replace(/\s+/g, '-')}`}>
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {support.map((item) => (
                <li key={item}>
                  <a href="#" className="text-ghee-cream/80 hover:text-ghee-gold transition-colors" data-testid={`link-footer-support-${item.toLowerCase().replace(/\s+/g, '-')}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-ghee-cream/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-ghee-cream/60 text-sm" data-testid="text-copyright">
            © 2024 Ginna Ghee. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-ghee-cream/60 hover:text-ghee-gold text-sm transition-colors" data-testid="link-privacy-policy">Privacy Policy</a>
            <a href="#" className="text-ghee-cream/60 hover:text-ghee-gold text-sm transition-colors" data-testid="link-terms-of-service">Terms of Service</a>
            <a href="#" className="text-ghee-cream/60 hover:text-ghee-gold text-sm transition-colors" data-testid="link-shipping-policy">Shipping Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
