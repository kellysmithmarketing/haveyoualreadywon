import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Working with Rowtek Energy has proven to produce exceptional project completions. Providing assistance in all phases of our construction project, they've been a pleasure to work with.",
    author: "Stuart H.",
    role: "I&E Inspector",
  },
  {
    quote: "I've worked closely with this team on many occasions—from new construction SWDs to trouble calls and controls troubleshooting. They're always ready to help.",
    author: "Johnny N.",
    role: "Field Operations Manager",
  },
  {
    quote: "Their QA/QC process really helped guide us in the right direction. They provided great input on industry standards and worked very well with our team.",
    author: "T. Taylor",
    role: "Project Manager",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-display font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Client Success Stories
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            Trusted by Industry Leaders
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="relative p-8 rounded-xl bg-background border border-border hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/30 mb-6" />
              
              {/* Quote Text */}
              <blockquote className="text-foreground/90 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Author */}
              <div className="border-t border-border pt-4">
                <div className="font-display font-bold text-foreground">
                  {testimonial.author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
