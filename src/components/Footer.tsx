import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
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
              {["Home", "Services", "About", "Contact"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(`#${link.toLowerCase()}`)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
              <li>
                <Link
                  to="/careers"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Process Controls & Automation</li>
              <li>Electrical & Instrumentation</li>
              <li>Skid Packages</li>
              <li>Consulting/Inspection</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  1745 County Rd 4120<br />Jacksonville, TX 75766
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-muted-foreground">
                  <a href="tel:+19033732726" className="hover:text-primary transition-colors block">
                    Main: (903) 373-2726
                  </a>
                  <a href="tel:+19564562971" className="hover:text-primary transition-colors block">
                    Office: (956) 456-2971
                  </a>
                  <a href="tel:+19033399615" className="hover:text-primary transition-colors block">
                    Operations: (903) 339-9615
                  </a>
                </div>
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
