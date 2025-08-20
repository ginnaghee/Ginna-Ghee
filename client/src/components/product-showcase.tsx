import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import signatureGheeImage from "@assets/honey-5864_1280_1755659334621.jpg";

export default function ProductShowcase() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ghee-dark mb-4">
            Premium Ghee Collection
          </h2>
          <p className="text-xl text-ghee-medium max-w-3xl mx-auto leading-relaxed">
            Discover our signature browned ghee, meticulously crafted to deliver exceptional richness and nutty flavor
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Product */}
          <div className="lg:col-span-2 bg-gradient-to-br from-ghee-cream to-ghee-beige rounded-2xl p-8 product-shadow">
            <img 
              src={signatureGheeImage} 
              alt="Premium Ginna Ghee signature browned ghee in glass jar with golden honey-like consistency" 
              className="w-full h-64 object-cover rounded-xl mb-6"
            />
            
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-serif font-bold text-ghee-dark mb-2" data-testid="text-signature-browned-ghee">
                  Signature Browned Ghee
                </h3>
                <p className="text-ghee-medium">Our flagship product - rich, nutty, and perfectly browned</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-ghee-gold" data-testid="text-price-24-99">$24.99</p>
                <p className="text-sm text-ghee-medium">16 oz jar</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary" className="bg-ghee-gold/20 text-ghee-dark">Grass-Fed</Badge>
              <Badge variant="secondary" className="bg-ghee-gold/20 text-ghee-dark">Premium Quality</Badge>
              <Badge variant="secondary" className="bg-ghee-gold/20 text-ghee-dark">Rich & Nutty</Badge>
              <Badge variant="secondary" className="bg-ghee-gold/20 text-ghee-dark">Artisanal</Badge>
            </div>
            

          </div>
          
          {/* Additional Products */}
          <div className="space-y-6">
            <div className="bg-white border border-ghee-beige rounded-xl p-6 hover:shadow-lg transition-shadow">
              <img 
                src="https://pixabay.com/get/gab0b4c555f16e26718297d2e114799fd36b8b3830029da76ee669896434f72d321cc43f08620acb87ab23861a5743b39720aed9942a2cd0daac4cdbc06bb5856_1280.jpg" 
                alt="Small batch artisanal ghee in traditional earthen pot" 
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="text-lg font-serif font-semibold text-ghee-dark mb-2" data-testid="text-artisan-small-batch">
                Artisan Small Batch
              </h4>
              <p className="text-sm text-ghee-medium mb-3">Limited edition, ultra-premium</p>
              <div className="text-center">
                <span className="text-xl font-bold text-ghee-gold" data-testid="text-price-34-99">$34.99</span>
              </div>
            </div>
            
            <div className="bg-white border border-ghee-beige rounded-xl p-6 hover:shadow-lg transition-shadow">
              <img 
                src="https://pixabay.com/get/g47c40055ec2e81a243e2364f2ab344c071164dc31ca92a6dbf816b7ebeef27c4e490e75b12e4fb74a3c20f93af0134ba3b53e2623810b138f13b3caa92019a23_1280.jpg" 
                alt="Large family size ghee container with bulk packaging" 
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="text-lg font-serif font-semibold text-ghee-dark mb-2" data-testid="text-family-size">
                Family Size
              </h4>
              <p className="text-sm text-ghee-medium mb-3">Perfect for large families</p>
              <div className="text-center">
                <span className="text-xl font-bold text-ghee-gold" data-testid="text-price-39-99">$39.99</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
