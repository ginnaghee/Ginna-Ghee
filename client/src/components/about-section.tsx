import { Check } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      title: "Grass-Fed Source",
      description: "Only the finest grass-fed butter from trusted dairy farms"
    },
    {
      title: "Slow Browning Process", 
      description: "Patient, controlled browning to achieve perfect flavor and color"
    },
    {
      title: "Quality Testing",
      description: "Each batch tested for purity, flavor, and nutritional content"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ghee-dark mb-6">
              The Art of Browning
            </h2>
            <p className="text-xl text-ghee-medium mb-6 font-serif italic">
              "Every jar tells a story of tradition, patience, and perfection."
            </p>
            <p className="text-lg text-ghee-medium mb-6 leading-relaxed">
              At Ginna Ghee, we honor centuries-old techniques while ensuring the highest quality standards. 
              Our browning process transforms ordinary butter into liquid gold, creating the distinctive nutty 
              flavor and rich aroma that makes our ghee truly special.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-ghee-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="text-white text-sm" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ghee-dark mb-1" data-testid={`text-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      {feature.title}
                    </h4>
                    <p className="text-ghee-medium">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            

          </div>
          
          <div className="relative">
            <img 
              src="https://pixabay.com/get/g236ba598fab8b71e9de504eee989ada954b34a863f444e7d1ddd80764e95e83f7619d62a5ea6db8e58e668c22b2edf76e51b1d568a80d2d7ecc7bb15320511bb_1280.jpg" 
              alt="Traditional ghee making process in copper pot with golden bubbling ghee" 
              className="w-full rounded-2xl shadow-2xl"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-lg border border-ghee-beige">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-ghee-gold rounded-full flex items-center justify-center">
                  <Check className="text-white text-xl" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-ghee-dark" data-testid="text-premium-quality">Premium Quality</p>
                  <p className="text-sm text-ghee-medium">Traditional craftsmanship</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
