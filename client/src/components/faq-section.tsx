import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes Ginna Ghee special?",
      answer: "Our ghee is carefully browned to create a rich, nutty flavor that's distinctive and aromatic. We use traditional methods and premium grass-fed butter to ensure exceptional quality in every jar."
    },
    {
      question: "What makes Ginna Ghee different from regular butter?",
      answer: "Our ghee is cooked longer than regular clarified butter, creating a rich nutty flavor through the browning process. It has a longer shelf life, concentrated nutrients, and distinctive aroma that enhances any dish."
    },
    {
      question: "How should I store ghee?",
      answer: "Ghee is shelf-stable and can be stored at room temperature for up to 18 months. Keep it in a cool, dry place away from direct sunlight. Refrigeration is optional but can extend shelf life."
    },
    {
      question: "How much ghee is safe to consume daily?",
      answer: "Studies suggest up to 10% of daily calories from ghee is generally safe for healthy individuals. For a 2000-calorie diet, that's about 1-2 tablespoons daily. Consult your healthcare provider for personalized advice."
    },
    {
      question: "Can people with heart disease eat ghee?",
      answer: "Those with heart disease, high cholesterol, or metabolic conditions should consult their doctor before consuming ghee. While ghee has some heart-healthy properties, it's high in saturated fat and should be consumed in moderation."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-ghee-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ghee-dark mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-ghee-medium">
            Everything you need to know about ghee
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
              <button 
                className="w-full text-left flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
                data-testid={`button-faq-${index}`}
              >
                <h3 className="text-lg font-semibold text-ghee-dark pr-4" data-testid={`text-faq-question-${index}`}>
                  {faq.question}
                </h3>
                {openFAQ === index ? (
                  <ChevronUp className="text-ghee-gold flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-ghee-gold flex-shrink-0" size={20} />
                )}
              </button>
              {openFAQ === index && (
                <div className="mt-4 text-ghee-medium" data-testid={`text-faq-answer-${index}`}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
