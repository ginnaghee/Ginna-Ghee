import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ProductShowcase from "@/components/product-showcase";
import NutritionalFacts from "@/components/nutritional-facts";
import AboutSection from "@/components/about-section";
import RecipesSection from "@/components/recipes-section";
import Testimonials from "@/components/testimonials";
import FAQSection from "@/components/faq-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatbot";

export default function Home() {
  return (
    <div className="bg-ghee-bg text-ghee-dark font-sans">
      <Header />
      <HeroSection />
      <ProductShowcase />
      <NutritionalFacts />
      <AboutSection />
      <RecipesSection />
      <Testimonials />
      <FAQSection />
      <ContactSection />
      <Footer />
      <Chatbot />
    </div>
  );
}
