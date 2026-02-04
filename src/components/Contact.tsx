import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

// TODO: Replace with your Web3Forms access key from https://web3forms.com
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

const contactInfo = [
  {
    icon: MapPin,
    title: "Office",
    details: ["1745 County Rd 4120", "Jacksonville, TX 75766"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["Main: (903) 373-2726", "Office: (956) 456-2971", "Operations: (903) 339-9615"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@rowtokenergy.com"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Emergency: 24/7", "Office: Mon-Fri 8AM-5PM CST"],
  },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Contact Form Submission from ${formData.name}`,
          from_name: "Rowtek Energy Website",
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          service: formData.service || "Not specified",
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully! We'll be in touch soon.");
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to send message. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-display font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Let's Discuss Your Project
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you need emergency technical and electrical support or the planning and construction of your new facility, the Rowtek Energy team is ready to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-display font-bold mb-8">Contact Information</h3>
            
            {contactInfo.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground">{item.title}</h4>
                  {item.details.map((detail) => (
                    <p key={detail} className="text-muted-foreground text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Service Area */}
            <div className="pt-6 border-t border-border">
              <h4 className="font-display font-bold mb-2">Service Area</h4>
              <p className="text-muted-foreground">
                Texas, Louisiana, Oklahoma & New Mexico
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-card rounded-xl border border-border p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold mb-2">
                    Company *
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                    Phone *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold mb-2">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full h-10 px-3 rounded-md bg-background border border-input text-foreground"
                >
                  <option value="">Select a service...</option>
                  <option value="controls">Process Controls & Automation</option>
                  <option value="electrical">Electrical & Instrumentation</option>
                  <option value="skid">Skid Packages</option>
                  <option value="consulting">Consulting/Inspection</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Project Details *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-background resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
