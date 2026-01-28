import { Cpu, Zap, Package, ClipboardCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import instrumentationImg from "@/assets/instrumentation.jpg";
import electricalImg from "@/assets/electrical.jpg";

const services = [
  {
    icon: Cpu,
    title: "Process Controls & Automation",
    description: "PLC integration, SCADA systems, panel fabrication, control system revamps, and new installations that optimize your operations.",
    image: instrumentationImg,
    objectPosition: "center top",
  },
  {
    icon: Zap,
    title: "Electrical & Instrumentation",
    description: "Motor control centers, valve controls, instrument air distribution, new construction, revamps, and 24/7 troubleshooting support.",
    image: electricalImg,
    objectPosition: "center center",
  },
  {
    icon: Package,
    title: "Skid Packages",
    description: "Installation of instruments, valves, wiring, j-boxes, heat trace, sensors, instrument air, and grounding on pre-packaged skids for transfer, pumping, sales, and separators.",
    image: null,
    objectPosition: null,
  },
];

const secondaryService = {
  icon: ClipboardCheck,
  title: "Consulting/Inspection",
  description: "Independent electrical inspection services, project planning and acquisition support, facility evaluation and recommendation.",
};

const Services = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-display font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Comprehensive I&E Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-service electrical, instrumentation, and automation capabilities for energy infrastructure
          </p>
        </div>

        {/* Featured Services (with images) - only first 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {services.slice(0, 2).map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-500"
            >
              {/* Image */}
              {service.image && (
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{ objectPosition: service.objectPosition || 'center center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>
              )}
              
              {/* Content */}
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Services - Skid Packages and Consultant/Inspection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Skid Packages */}
          <div className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 flex gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
              <Package className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-display font-bold mb-2">
                {services[2].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {services[2].description}
              </p>
            </div>
          </div>

          {/* Consultant/Inspection */}
          <div className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 flex gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
              <ClipboardCheck className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-display font-bold mb-2">
                {secondaryService.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {secondaryService.description}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" onClick={scrollToContact}>
            Discuss Your Project
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
