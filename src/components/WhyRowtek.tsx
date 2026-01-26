import { Shield, Users, Clock, Wrench } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "Operational Continuity",
    description: "We minimize downtime with rapid response times and expert troubleshooting. When your facility needs support, we're ready 24/7.",
  },
  {
    icon: Users,
    title: "Industry Expertise",
    description: "Our team has worked in every environment—from compressor stations and refineries to SWDs and tank batteries. We speak your language.",
  },
  {
    icon: Shield,
    title: "Safety-First Culture",
    description: "With rigorous safety protocols and ongoing training, we maintain an exemplary safety record across all projects.",
  },
  {
    icon: Wrench,
    title: "Turnkey Capabilities",
    description: "From initial design and panel fabrication to installation, commissioning, and ongoing support—we handle the complete project lifecycle.",
  },
];

const WhyRowtek = () => {
  return (
    <section id="why-rowtek" className="section-padding bg-card">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-display font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            Why Energy Companies Choose{" "}
            <span className="text-gradient-gold">Rowtek</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group p-8 rounded-lg bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRowtek;
