import { useState } from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { sendContactEmail } from "@/lib/email-service";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: sendContactEmail,
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you soon."
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error Sending Message",
        description: error.message,
        variant: "destructive"
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ghee-dark mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-ghee-medium">
            We'd love to hear from you. Reach out with any questions or feedback.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-ghee-cream to-ghee-beige rounded-2xl p-8">
            <h3 className="text-2xl font-serif font-bold text-ghee-dark mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-ghee-dark font-medium">First Name *</Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="Your first name"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="mt-2 border-ghee-gold/30 focus:border-ghee-gold bg-white"
                    data-testid="input-first-name"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-ghee-dark font-medium">Last Name *</Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Your last name"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className="mt-2 border-ghee-gold/30 focus:border-ghee-gold bg-white"
                    data-testid="input-last-name"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="text-ghee-dark font-medium">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="mt-2 border-ghee-gold/30 focus:border-ghee-gold bg-white"
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-ghee-dark font-medium">Phone Number (Optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="mt-2 border-ghee-gold/30 focus:border-ghee-gold bg-white"
                  data-testid="input-phone"
                />
              </div>
              
              <div>
                <Label htmlFor="subject" className="text-ghee-dark font-medium">Subject *</Label>
                <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                  <SelectTrigger className="mt-2 border-ghee-gold/30 focus:border-ghee-gold bg-white" data-testid="select-subject">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                    <SelectItem value="Product Question">Product Question</SelectItem>
                    <SelectItem value="Wholesale/Business">Wholesale/Business</SelectItem>
                    <SelectItem value="Recipe Support">Recipe Support</SelectItem>
                    <SelectItem value="Nutritional Information">Nutritional Information</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="message" className="text-ghee-dark font-medium">Message *</Label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us how we can help you..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="mt-2 border-ghee-gold/30 focus:border-ghee-gold bg-white"
                  data-testid="textarea-message"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={contactMutation.isPending}
                className="w-full bg-ghee-gold text-white hover:bg-ghee-accent font-semibold text-lg h-12"
                data-testid="button-send-message"
              >
                {contactMutation.isPending ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-ghee-dark mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ghee-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ghee-dark mb-1">Email Us</h4>
                    <p className="text-ghee-medium" data-testid="text-email-hello">hello@ginnaghee.com</p>
                    <p className="text-ghee-medium" data-testid="text-email-support">support@ginnaghee.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ghee-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ghee-dark mb-1">Call Us</h4>
                    <p className="text-ghee-medium" data-testid="text-phone-number">+1 (555) 123-GHEE</p>
                    <p className="text-sm text-ghee-medium/80">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ghee-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ghee-dark mb-1">Visit Us</h4>
                    <p className="text-ghee-medium" data-testid="text-address-dmv">DMV</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h4 className="text-xl font-serif font-bold text-ghee-dark mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-ghee-gold rounded-full flex items-center justify-center text-white hover:bg-ghee-accent transition-colors" data-testid="link-facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-ghee-gold rounded-full flex items-center justify-center text-white hover:bg-ghee-accent transition-colors" data-testid="link-instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-ghee-gold rounded-full flex items-center justify-center text-white hover:bg-ghee-accent transition-colors" data-testid="link-youtube">
                  <Youtube size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-ghee-gold rounded-full flex items-center justify-center text-white hover:bg-ghee-accent transition-colors" data-testid="link-twitter">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
