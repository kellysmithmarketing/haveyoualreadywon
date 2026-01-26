import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src="https://www.youtube.com/embed/19IAvWIcA04?autoplay=1&mute=1&loop=1&playlist=19IAvWIcA04&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
            title="Rowtek Energy Background Video"
            className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ minWidth: '100%', minHeight: '100%' }}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(180deg, hsla(220, 15%, 6%, 0.6) 0%, hsla(220, 15%, 6%, 0.75) 50%, hsl(220, 15%, 8%) 100%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container-wide text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-up">
          {/* Tagline */}
          <p className="text-sm md:text-base font-display font-semibold uppercase tracking-[0.3em] text-primary">
            Safety • Quality • Experience
          </p>
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
            Powering Critical{" "}
            <span className="text-gradient-gold">Energy Infrastructure</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 max-w-3xl mx-auto font-light leading-relaxed">
            Electrical, Instrumentation & Automation Solutions That Keep Your Operations Running
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Rowtek Energy delivers specialized electrical, instrumentation, and automation services to midstream and downstream energy facilities across Texas, Louisiana, Oklahoma, and New Mexico.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => scrollToSection("#contact")}
            >
              Get a Quote
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl"
              onClick={() => scrollToSection("#services")}
            >
              View Our Services
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection("#why-rowtek")}
            className="text-foreground/50 hover:text-primary transition-colors"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
