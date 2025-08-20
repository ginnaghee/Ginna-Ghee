// Comprehensive ghee knowledge base for the AI chatbot
const gheeKnowledgeBase = {
  health_benefits: {
    digestive: "Ghee contains butyric acid that nourishes intestinal cells and supports healthy gut lining. It helps with conditions like Crohn's disease and stimulates digestive enzymes when consumed on empty stomach.",
    heart: "Rich in monounsaturated omega-3 fatty acids and antioxidants that combat oxidative stress. May help maintain healthy cholesterol levels when consumed in moderation.",
    weight: "Contains CLA (Conjugated Linoleic Acid) that may help reduce body fat. Short/medium-chain fatty acids aren't stored as fat and can slow glucose absorption.",
    immunity: "High in antioxidants that fight free radicals. Butyric acid has proven anti-inflammatory properties. Fat-soluble vitamins support immune function.",
    bone: "Vitamin K aids calcium absorption and bone metabolism. Essential fatty acids support overall bone health.",
    skin: "Natural moisturizer rich in vitamins A & E. Can be applied topically or consumed for skin benefits. Traditionally used for burns, wounds, and skin conditions."
  },
  
  nutritional_facts: {
    calories: "112-120 calories per tablespoon (14g)",
    fats: "14g total fat, 8-9g saturated fat per tablespoon",
    vitamins: "Rich in vitamins A, D, E, K - essential fat-soluble vitamins",
    cholesterol: "33mg per tablespoon",
    lactose: "Virtually lactose-free (less than 0.1%) due to clarification process",
    compounds: "Contains butyric acid, CLA, and omega-3 fatty acids"
  },
  
  cooking_uses: {
    smoke_point: "485°F (252°C) - higher than most cooking oils, perfect for high-heat cooking",
    applications: "Deep frying, sautéing, stir-frying, baking, roasting, grilling, butter substitute",
    storage: "Room temperature stable for 18 months, no refrigeration required",
    flavor: "Rich, nutty flavor that enhances dishes"
  },
  
  safety_consumption: {
    daily_amount: "Up to 10% of daily calories from ghee is generally safe. For a 2000-calorie diet, that's 1-2 tablespoons daily",
    heart_disease: "Those with heart disease, high cholesterol, or metabolic conditions should consult their doctor",
    weight_loss: "Contains beneficial compounds but is calorie-dense - moderation is key"
  },
  
  storage_tips: {
    room_temp: "Can be stored at room temperature for up to 18 months",
    location: "Keep in cool, dry place away from direct sunlight", 
    refrigeration: "Optional but can extend shelf life",
    container: "Store in airtight container"
  },
  
  faqs: {
    lactose_free: "Yes! The clarification process removes virtually all lactose and casein, making it suitable for most people with dairy sensitivities.",
    vs_butter: "Ghee is cooked longer than butter, creating nutty flavor. It has higher smoke point, longer shelf life, concentrated nutrients, and is lactose-free.",
    grass_fed: "Grass-fed ghee has higher levels of beneficial nutrients like CLA and omega-3s, making it the preferred choice.",
    homemade: "Heat unsalted butter on low heat, simmer until water evaporates and milk solids turn golden, then strain."
  }
};

export async function getChatbotResponse(question: string): Promise<string> {
  const lowerQuestion = question.toLowerCase();
  
  // Health benefits queries
  if (lowerQuestion.includes('health') || lowerQuestion.includes('benefit')) {
    if (lowerQuestion.includes('digest') || lowerQuestion.includes('gut') || lowerQuestion.includes('stomach')) {
      return `🌟 **Digestive Health Benefits:**\n\n${gheeKnowledgeBase.health_benefits.digestive}\n\nFor best digestive benefits, try consuming 1 teaspoon of ghee on an empty stomach in the morning.`;
    }
    if (lowerQuestion.includes('heart') || lowerQuestion.includes('cardiovascular')) {
      return `❤️ **Heart Health Benefits:**\n\n${gheeKnowledgeBase.health_benefits.heart}\n\nRemember to consume ghee in moderation as part of a balanced diet.`;
    }
    if (lowerQuestion.includes('weight') || lowerQuestion.includes('fat') || lowerQuestion.includes('loss')) {
      return `⚖️ **Weight Management:**\n\n${gheeKnowledgeBase.health_benefits.weight}\n\nWhile ghee can support weight management, it's calorie-dense, so portion control is important.`;
    }
    if (lowerQuestion.includes('skin') || lowerQuestion.includes('beauty')) {
      return `✨ **Skin Health Benefits:**\n\n${gheeKnowledgeBase.health_benefits.skin}\n\nYou can use ghee both internally and topically for skin benefits!`;
    }
    if (lowerQuestion.includes('bone') || lowerQuestion.includes('calcium')) {
      return `🦴 **Bone Health Benefits:**\n\n${gheeKnowledgeBase.health_benefits.bone}\n\nThe vitamin K in ghee is particularly important for bone metabolism.`;
    }
    if (lowerQuestion.includes('immun') || lowerQuestion.includes('inflamm')) {
      return `🛡️ **Immunity & Anti-inflammatory Benefits:**\n\n${gheeKnowledgeBase.health_benefits.immunity}\n\nThe butyric acid in ghee is a powerful anti-inflammatory compound.`;
    }
    
    // General health benefits
    return `🌟 **Ghee Health Benefits:**\n\n• **Digestive Health:** ${gheeKnowledgeBase.health_benefits.digestive.substring(0, 100)}...\n• **Heart Health:** Contains beneficial omega-3s and antioxidants\n• **Weight Management:** CLA content may help with fat reduction\n• **Immunity:** High in antioxidants and anti-inflammatory compounds\n• **Bone Health:** Rich in vitamin K for calcium absorption\n• **Skin Health:** Natural moisturizer with vitamins A & E\n\nWould you like details about any specific benefit?`;
  }
  
  // Nutritional information queries
  if (lowerQuestion.includes('nutrition') || lowerQuestion.includes('calorie') || lowerQuestion.includes('vitamin') || lowerQuestion.includes('fat')) {
    return `📊 **Nutritional Facts (Per Tablespoon):**\n\n• **Calories:** ${gheeKnowledgeBase.nutritional_facts.calories}\n• **Total Fat:** ${gheeKnowledgeBase.nutritional_facts.fats}\n• **Vitamins:** ${gheeKnowledgeBase.nutritional_facts.vitamins}\n• **Cholesterol:** ${gheeKnowledgeBase.nutritional_facts.cholesterol}\n• **Lactose:** ${gheeKnowledgeBase.nutritional_facts.lactose}\n• **Special Compounds:** ${gheeKnowledgeBase.nutritional_facts.compounds}`;
  }
  
  // Cooking queries
  if (lowerQuestion.includes('cook') || lowerQuestion.includes('recipe') || lowerQuestion.includes('kitchen') || lowerQuestion.includes('fry') || lowerQuestion.includes('heat')) {
    if (lowerQuestion.includes('temperature') || lowerQuestion.includes('smoke') || lowerQuestion.includes('point')) {
      return `🔥 **Cooking Temperature:**\n\n**Smoke Point:** ${gheeKnowledgeBase.cooking_uses.smoke_point}\n\nThis high smoke point makes ghee perfect for:\n• Deep frying\n• Stir-frying\n• Sautéing\n• High-heat roasting\n• Grilling\n\nUnlike many oils, ghee won't break down into harmful compounds at high temperatures!`;
    }
    return `👨‍🍳 **Cooking with Ghee:**\n\n**Smoke Point:** ${gheeKnowledgeBase.cooking_uses.smoke_point}\n\n**Perfect for:** ${gheeKnowledgeBase.cooking_uses.applications}\n\n**Flavor:** ${gheeKnowledgeBase.cooking_uses.flavor}\n\n**Pro tip:** Replace butter 1:1 with ghee in any recipe for richer flavor and better heat stability!`;
  }
  
  // Storage queries
  if (lowerQuestion.includes('stor') || lowerQuestion.includes('keep') || lowerQuestion.includes('shelf') || lowerQuestion.includes('refrigerat')) {
    return `📦 **Storage Instructions:**\n\n• **Room Temperature:** ${gheeKnowledgeBase.storage_tips.room_temp}\n• **Location:** ${gheeKnowledgeBase.storage_tips.location}\n• **Refrigeration:** ${gheeKnowledgeBase.storage_tips.refrigeration}\n• **Container:** ${gheeKnowledgeBase.storage_tips.container}\n\nGhee is naturally shelf-stable due to the removal of milk solids and water during the clarification process!`;
  }
  
  // Safety and consumption queries
  if (lowerQuestion.includes('safe') || lowerQuestion.includes('daily') || lowerQuestion.includes('much') || lowerQuestion.includes('amount')) {
    return `⚖️ **Safe Consumption Guidelines:**\n\n• **Daily Amount:** ${gheeKnowledgeBase.safety_consumption.daily_amount}\n• **Special Conditions:** ${gheeKnowledgeBase.safety_consumption.heart_disease}\n• **Weight Management:** ${gheeKnowledgeBase.safety_consumption.weight_loss}\n\nAlways consult with your healthcare provider if you have specific health conditions!`;
  }
  
  // Lactose queries
  if (lowerQuestion.includes('lactose') || lowerQuestion.includes('dairy') || lowerQuestion.includes('intoleran')) {
    return `🥛 **Lactose-Free Information:**\n\n${gheeKnowledgeBase.faqs.lactose_free}\n\nThe clarification process used in making ghee removes virtually all lactose and casein proteins, making it suitable for most people with dairy sensitivities. Our ghee contains less than 0.1% lactose.`;
  }
  
  // Comparison queries
  if (lowerQuestion.includes('butter') || lowerQuestion.includes('difference') || lowerQuestion.includes('vs') || lowerQuestion.includes('compare')) {
    return `🧈 **Ghee vs Butter:**\n\n${gheeKnowledgeBase.faqs.vs_butter}\n\n**Key Advantages of Ghee:**\n• Higher smoke point (485°F vs 350°F)\n• Longer shelf life\n• Lactose-free\n• More concentrated nutrients\n• Richer, nuttier flavor\n• Better for high-heat cooking`;
  }
  
  // Grass-fed queries
  if (lowerQuestion.includes('grass') || lowerQuestion.includes('quality') || lowerQuestion.includes('best')) {
    return `🌱 **Grass-Fed Quality:**\n\n${gheeKnowledgeBase.faqs.grass_fed}\n\nGrass-fed ghee like Ginna Ghee typically contains:\n• Higher levels of CLA\n• More omega-3 fatty acids\n• Better vitamin profile\n• Superior flavor\n• Ethical farming practices`;
  }
  
  // Recipe/homemade queries
  if (lowerQuestion.includes('make') || lowerQuestion.includes('recipe') || lowerQuestion.includes('home')) {
    return `🏠 **How to Make Ghee at Home:**\n\n${gheeKnowledgeBase.faqs.homemade}\n\n**Detailed Steps:**\n1. Use high-quality unsalted butter\n2. Heat on low-medium heat\n3. Simmer until foaming stops\n4. Continue until milk solids turn golden brown\n5. Strain through fine mesh or cheesecloth\n6. Cool and store in clean jar\n\n**Pro tip:** The browning process creates that distinctive nutty flavor that makes Ginna Ghee special!`;
  }
  
  // Brand-specific queries
  if (lowerQuestion.includes('ginna') || lowerQuestion.includes('brand') || lowerQuestion.includes('your')) {
    return `🏆 **About Ginna Ghee:**\n\n"Richness You Can Taste" - that's our promise!\n\n**What makes us special:**\n• Premium grass-fed butter source\n• Traditional browning process for rich, nutty flavor\n• Small-batch artisanal production\n• Rigorous quality testing\n• 18-month shelf stability\n• Award-winning taste\n\nWe honor centuries-old techniques while maintaining the highest quality standards. Every jar tells a story of tradition, patience, and perfection!`;
  }
  
  // Default response for unrecognized queries
  return `👋 **Hi there!** I'm here to help with all your ghee questions!\n\nI can provide information about:\n• 🌟 Health benefits and nutrition\n• 👨‍🍳 Cooking tips and techniques\n• 📦 Storage instructions\n• ⚖️ Safe consumption guidelines\n• 🧈 Comparisons with butter\n• 🏠 Homemade ghee recipes\n• 🏆 Ginna Ghee quality and benefits\n\n**Could you be more specific about what you'd like to know?** For example:\n- "What are the health benefits of ghee?"\n- "How do I cook with ghee?"\n- "How should I store ghee?"\n- "Is ghee lactose-free?"`;
}
