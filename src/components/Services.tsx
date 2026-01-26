import { Cpu, Zap, PipetteIcon, HardHat, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import instrumentationImg from "@/assets/instrumentation.jpg";
import pipelineImg from "@/assets/pipeline.jpg";
import electricalImg from "@/assets/electrical.jpg";

const services = [
  {
    icon: Cpu,
    title: "Process Controls & Automation",
    description: "PLC integration, SCADA systems, panel fabrication, control system revamps, and new installations that optimize your operations.",
    image: electricalImg,
  },
  {
    icon: Zap,
    title: "Electrical & Instrumentation",
    description: "Motor control centers, valve controls, instrument air distribution, new construction, revamps, and 24/7 troubleshooting support.",
    image: instrumentationImg,
  },
  {
    icon: PipetteIcon,
    title: "Pipeline Services",
    description: "Welding, fabrication, pressure testing, and logistics coordination for pipeline projects of any scale.",
    image: pipelineImg,
  },
  {
    icon: HardHat,
    title: "Roustabout & Field Services",
    description: "Containment cleanup, valve replacement, filter changes, site maintenance, and general contractor support.",
    image: null,
  },
  {
    icon: Building2,
    title: "Civil Construction",
    description: "Foundations, pad preparation, and site development for new facilities and expansions.",
    image: null,
  },
];

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
            Comprehensive E&I Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-service electrical, instrumentation, and automation capabilities for energy infrastructure
          </p>
        </div>

        {/* Featured Services (with images) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {services.slice(0, 3).map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-500"
            >
              {/* Image */}
              {service.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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

        {/* Secondary Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.slice(3).map((service) => (
            <div
              key={service.title}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 flex gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
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
