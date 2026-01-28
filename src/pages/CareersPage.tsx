import { useState } from "react";
import { Briefcase, GraduationCap, TrendingUp, Shield, DollarSign, ChevronRight, Upload, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const benefits = [
  { icon: DollarSign, title: "Competitive Compensation", description: "We recognize and reward skilled professionals" },
  { icon: GraduationCap, title: "Ongoing Training", description: "Regular safety and technical development" },
  { icon: Briefcase, title: "Diverse Projects", description: "Routine maintenance to major capital projects" },
  { icon: Shield, title: "Safety Culture", description: "Prioritizing your safety on every job site" },
  { icon: TrendingUp, title: "Growth Opportunities", description: "We promote from within and invest in development" },
];

const positions = [
  {
    id: "electrical-journeyman",
    title: "Electrical Journeyman",
    type: "Full-time",
    requirements: ["4+ years experience", "Able to read electrical schematics", "Install electrical equipment and raceways"],
  },
  {
    id: "electrical-helper",
    title: "Electrical Helper",
    type: "Entry-level",
    requirements: ["Willing to work 40+ hours per week", "Willing to relocate", "Apprentice license"],
  },
  {
    id: "instrument-technician",
    title: "Instrument Technician",
    type: "Full-time",
    requirements: ["Installation of air supply systems", "Able to read P&ID's", "Knowledge of instrument calibration and installation"],
  },
];

const CareersPage = () => {
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application submitted successfully! We'll be in touch soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      message: "",
    });
    setResumeFile(null);
    setSelectedPosition(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleApplyClick = (positionId: string, positionTitle: string) => {
    setSelectedPosition(positionId);
    setFormData(prev => ({ ...prev, position: positionTitle }));
    // Scroll to form
    setTimeout(() => {
      document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-card">
          <div className="container-wide">
            {/* Back Link */}
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-gold-light transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            {/* Section Header */}
            <div className="text-center mb-16">
              <p className="text-sm font-display font-semibold uppercase tracking-[0.2em] text-primary mb-4">
                Join Our Team
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Build Your Career in{" "}
                <span className="text-gradient-gold">Energy Infrastructure</span>
              </h1>
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
          </div>
        </section>

        {/* Open Positions */}
        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-12">Current Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {positions.map((position) => (
                <div
                  key={position.id}
                  className={`p-6 rounded-xl bg-card border transition-all duration-300 group cursor-pointer ${
                    selectedPosition === position.id ? 'border-primary' : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => handleApplyClick(position.id, position.title)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-display font-bold">{position.title}</h3>
                      <span className="text-sm text-primary">{position.type}</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <ul className="space-y-2 mb-4">
                    {position.requirements.map((req) => (
                      <li key={req} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="hero" 
                    size="sm" 
                    className="w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleApplyClick(position.id, position.title);
                    }}
                  >
                    Apply Now
                  </Button>
                </div>
              ))}
            </div>

            {/* Application Form */}
            <div id="application-form" className="max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-8">
                {selectedPosition ? `Apply for ${formData.position}` : 'Submit Your Application'}
              </h2>
              
              <form onSubmit={handleSubmit} className="bg-card rounded-xl border border-border p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Full Name *
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <div>
                    <label htmlFor="position" className="block text-sm font-semibold mb-2">
                      Position *
                    </label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                      className="w-full h-10 px-3 rounded-md bg-background border border-input text-foreground"
                    >
                      <option value="">Select a position...</option>
                      {positions.map((pos) => (
                        <option key={pos.id} value={pos.title}>{pos.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Resume Upload */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Resume *
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      required
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-background border border-input border-dashed hover:border-primary/50 transition-colors">
                      <Upload className="w-5 h-5 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {resumeFile ? resumeFile.name : "Click to upload resume (PDF, DOC, DOCX)"}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Additional Information
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="bg-background resize-none"
                    placeholder="Tell us about your experience and why you're interested in joining Rowtek Energy..."
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CareersPage;
