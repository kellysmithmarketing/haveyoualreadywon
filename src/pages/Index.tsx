import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyRowtek from "@/components/WhyRowtek";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Careers from "@/components/Careers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WhyRowtek />
        <Services />
        <Stats />
        <Testimonials />
        <About />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
