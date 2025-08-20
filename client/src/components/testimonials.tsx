import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      initial: "S",
      name: "Sarah Johnson",
      role: "Home Chef",
      rating: 5,
      text: "The richness and nutty flavor of Ginna Ghee has completely transformed my cooking. It's now a staple in my kitchen!"
    },
    {
      initial: "R", 
      name: "Raj Patel",
      role: "Restaurant Owner",
      rating: 5,
      text: "As a restaurant owner, quality is everything. Ginna Ghee delivers consistent excellence that my customers notice and love."
    },
    {
      initial: "M",
      name: "Maria Rodriguez", 
      role: "Nutritionist",
      rating: 5,
      text: "I recommend Ginna Ghee to my clients for its nutritional benefits and purity. The grass-fed quality makes all the difference."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ghee-dark mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-ghee-medium">
            Real experiences from ghee lovers worldwide
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-gradient rounded-xl p-6 border border-ghee-gold/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-ghee-gold rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.initial}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-ghee-dark" data-testid={`text-customer-${testimonial.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-ghee-medium">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex text-ghee-gold mb-3" data-testid={`rating-${testimonial.name.toLowerCase().replace(/\s+/g, '-')}`}>
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-ghee-medium italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
