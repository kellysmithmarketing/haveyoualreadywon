import { Phone, Mail, MapPin } from "lucide-react";
import logoDark from "@/assets/logo-dark.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-charcoal-deep border-t border-border">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Tagline */}
          <div className="lg:col-span-1">
            <img
              src={logoDark}
              alt="Rowtek Energy"
              className="h-16 w-auto mb-4"
            />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Delivering specialized electrical, instrumentation, and automation services to the energy sector since day one.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Services", "About", "Careers", "Contact"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(`#${link.toLowerCase()}`)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Process Controls & Automation</li>
              <li>Electrical & Instrumentation</li>
              <li>Pipeline Services</li>
              <li>Roustabout & Field Services</li>
              <li>Civil Construction</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  34429 FM 732<br />San Benito, TX 78586
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+19565784927" className="text-muted-foreground hover:text-primary transition-colors">
                  (956) 578-4927
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:info@rowtokenergy.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@rowtokenergy.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Rowtek Energy LLC. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Serving Texas, Louisiana, Oklahoma & New Mexico
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
