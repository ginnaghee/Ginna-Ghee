import { Clock, ArrowRight, Thermometer, Flame, Utensils, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RecipesSection() {
  const recipes = [
    {
      title: "Traditional Dal Tadka",
      description: "Classic lentil curry enhanced with our signature ghee tempering for authentic flavor",
      time: "30 mins",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      title: "Ghee-Roasted Vegetables",
      description: "Seasonal vegetables roasted to perfection with our nutty browned ghee",
      time: "25 mins", 
      image: "https://pixabay.com/get/g8623832cd3489aee3a2821674b979973cb1c2b5ebb3d68cb662e7be5e8c4beda25ce5424d3f04a05b2af586176d51acdd86574bd5da34e7c93d1c25dcbd94e64_1280.jpg"
    },
    {
      title: "Ghee Halwa",
      description: "Rich, aromatic semolina halwa made with generous amounts of our premium ghee",
      time: "20 mins",
      image: "https://pixabay.com/get/g6658ab3995764bad997d23384830f43f1221f080e9a0da536fd93dfebe84ddf0c275d3e7d06c677471b5d582a7fae0f94d255ac9330c951ea39fadf59bd6e9ae_1280.jpg"
    }
  ];

  const cookingTips = [
    {
      icon: Thermometer,
      title: "Traditional Cooking",
      description: "Perfect for authentic recipes and traditional Indian cuisine"
    },
    {
      icon: Flame,
      title: "Spice Tempering", 
      description: "Heat ghee and add whole spices for aromatic tempering"
    },
    {
      icon: Utensils,
      title: "Butter Substitute",
      description: "Replace butter 1:1 in baking for richer flavor"
    },
    {
      icon: Leaf,
      title: "Finishing Touch",
      description: "Drizzle over rice, vegetables, or bread for instant richness"
    }
  ];

  return (
    <section id="recipes" className="py-20 bg-gradient-to-br from-ghee-cream to-ghee-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ghee-dark mb-4">
            Culinary Inspiration
          </h2>
          <p className="text-xl text-ghee-medium max-w-3xl mx-auto">
            Discover delicious ways to use our premium ghee in your everyday cooking
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recipes.map((recipe, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={recipe.image}
                alt={`${recipe.title} with golden ghee and spices`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-ghee-dark mb-2" data-testid={`text-recipe-${recipe.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  {recipe.title}
                </h3>
                <p className="text-ghee-medium mb-4">
                  {recipe.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-ghee-medium flex items-center" data-testid={`text-time-${recipe.time.replace(/\s+/g, '-')}`}>
                    <Clock className="mr-1" size={16} />{recipe.time}
                  </span>
                  <Button 
                    variant="ghost" 
                    className="text-ghee-gold hover:text-ghee-accent font-semibold p-0"
                    data-testid={`button-view-recipe-${recipe.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    View Recipe <ArrowRight className="ml-1" size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Cooking Tips */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-serif font-bold text-ghee-dark mb-6 text-center">
            Expert Cooking Tips
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cookingTips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-ghee-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-ghee-gold" size={24} />
                  </div>
                  <h4 className="font-semibold text-ghee-dark mb-2" data-testid={`text-tip-${tip.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    {tip.title}
                  </h4>
                  <p className="text-sm text-ghee-medium">{tip.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
