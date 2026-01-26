import { Briefcase, GraduationCap, TrendingUp, Shield, DollarSign, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  { icon: DollarSign, title: "Competitive Compensation", description: "We recognize and reward skilled professionals" },
  { icon: GraduationCap, title: "Ongoing Training", description: "Regular safety and technical development" },
  { icon: Briefcase, title: "Diverse Projects", description: "Routine maintenance to major capital projects" },
  { icon: Shield, title: "Safety Culture", description: "Prioritizing your safety on every job site" },
  { icon: TrendingUp, title: "Growth Opportunities", description: "We promote from within and invest in development" },
];

const positions = [
  {
    title: "Electrical Journeyman",
    type: "Full-time",
    requirements: ["4+ years commercial/industrial experience", "NEC knowledge", "Motor controls experience"],
  },
  {
    title: "Electrical Helper",
    type: "Entry-level",
    requirements: ["Less than 4 years experience", "Willingness to learn", "Valid driver's license"],
  },
  {
    title: "Instrumentation Technician",
    type: "Full-time",
    requirements: ["Instrument air systems", "P&ID reading", "Calibration knowledge"],
  },
];

const Careers = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="careers" className="section-padding bg-card">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-display font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Join Our Team
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Build Your Career in{" "}
            <span className="text-gradient-gold">Energy Infrastructure</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're always looking for skilled professionals who take pride in their work and share our commitment to safety and quality.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="p-6 rounded-lg bg-background border border-border text-center hover:border-primary/30 transition-colors"
            >
              <benefit.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-display font-bold text-sm mb-1">{benefit.title}</h4>
              <p className="text-xs text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Open Positions */}
        <div className="mb-12">
          <h3 className="text-2xl font-display font-bold text-center mb-8">Current Opportunities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {positions.map((position) => (
              <div
                key={position.title}
                className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-display font-bold">{position.title}</h4>
                    <span className="text-sm text-primary">{position.type}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <ul className="space-y-2">
                  {position.requirements.map((req) => (
                    <li key={req} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" onClick={scrollToContact}>
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Careers;
