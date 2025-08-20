import { Flame, Heart, Leaf, Shield } from "lucide-react";

export default function NutritionalFacts() {
  const nutritionalCards = [
    {
      icon: Flame,
      value: "Rich",
      label: "Nutty Flavor",
      description: "Distinctive browned taste"
    },
    {
      icon: Heart,
      value: "112",
      label: "Calories/Tbsp",
      description: "Energy-rich healthy fats"
    },
    {
      icon: Leaf,
      value: "Pure",
      label: "Dairy Butter",
      description: "Made from quality butter"
    },
    {
      icon: Shield,
      value: "A,D,E,K",
      label: "Vitamins",
      description: "Essential fat-soluble vitamins"
    }
  ];

  const healthBenefits = [
    {
      icon: "🌟",
      title: "Digestive Health",
      description: "Contains butyric acid that nourishes intestinal cells and supports healthy gut lining"
    },
    {
      icon: "❤️",
      title: "Heart Health",
      description: "Rich in omega-3 fatty acids and antioxidants that support cardiovascular wellness"
    },
    {
      icon: "⚖️",
      title: "Weight Management",
      description: "CLA content may help reduce body fat and support healthy metabolism"
    },
    {
      icon: "🦴",
      title: "Bone Health",
      description: "Vitamin K aids calcium absorption and supports overall bone metabolism"
    },
    {
      icon: "✨",
      title: "Skin Health",
      description: "Natural moisturizer rich in vitamins A & E for healthy, glowing skin"
    },
    {
      icon: "🛡️",
      title: "Immunity",
      description: "High in antioxidants and anti-inflammatory compounds that boost immune function"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-ghee-beige to-ghee-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ghee-dark mb-4">
            Nutritional Excellence
          </h2>
          <p className="text-xl text-ghee-medium max-w-3xl mx-auto">
            Rich in essential vitamins and beneficial fatty acids for optimal health
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {nutritionalCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div key={index} className="nutritional-card rounded-xl p-6 text-center border border-ghee-gold/20">
                <div className="w-16 h-16 bg-ghee-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="text-white text-2xl" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-ghee-dark mb-2" data-testid={`text-nutrition-${card.value.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                  {card.value}
                </h3>
                <p className="text-ghee-medium font-medium">{card.label}</p>
                <p className="text-sm text-ghee-medium/80 mt-2">{card.description}</p>
              </div>
            );
          })}
        </div>
        
        {/* Health Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {healthBenefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">{benefit.icon}</div>
              <h4 className="text-xl font-serif font-semibold text-ghee-dark mb-3" data-testid={`text-benefit-${benefit.title.toLowerCase().replace(/\s+/g, '-')}`}>
                {benefit.title}
              </h4>
              <p className="text-ghee-medium leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
