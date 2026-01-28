import { CheckCircle } from "lucide-react";
import electricalSwitchgearImg from "@/assets/stats-bg.jpg";

const values = [
  {
    title: "Client-Focused Solutions",
    description: "Every facility has unique challenges, and we tailor our approach to meet your specific operational needs.",
  },
  {
    title: "Qualified Team",
    description: "We invest heavily in ongoing training, safety certifications, and professional development.",
  },
  {
    title: "Complete Project Support",
    description: "From preliminary planning through installation, commissioning, and ongoing maintenance.",
  },
  {
    title: "Safety Record We're Proud Of",
    description: "Our comprehensive safety program protects your facility, your people, and our team.",
  },
];

const leadership = [
  { name: "Servando Ramirez", title: "Owner / CEO" },
  { name: "Omar Contreras", title: "Owner / CFO" },
  { name: "William Perez", title: "Owner / Operations Coordinator" },
];

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={electricalSwitchgearImg}
                alt="Electrical switchgear equipment"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-display font-bold">60+</div>
              <div className="text-sm font-semibold uppercase tracking-wider">Years Combined Experience</div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-display font-semibold uppercase tracking-[0.2em] text-primary mb-4">
                About Rowtek Energy
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Building Energy Infrastructure.{" "}
                <span className="text-gradient-gold">One Project at a Time.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Rowtek Energy was founded on three unwavering principles: <strong className="text-foreground">Safety. Quality. Experience.</strong> These aren't just words on a page—they're the foundation of every project we undertake and every relationship we build.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              {values.map((value) => (
                <div key={value.title} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-bold text-foreground">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Leadership */}
            <div className="pt-6 border-t border-border">
              <h4 className="font-display font-bold text-lg mb-4">Leadership Team</h4>
              <div className="flex flex-wrap gap-6">
                {leadership.map((person) => (
                  <div key={person.name}>
                    <div className="font-semibold text-foreground">{person.name}</div>
                    <div className="text-sm text-primary">{person.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
