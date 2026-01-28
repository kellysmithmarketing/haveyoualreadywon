import logoTransparent from "@/assets/logo-light.png";

const LogoBanner = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container-wide">
        <div className="flex justify-center">
          <img
            src={logoTransparent}
            alt="Rowtek Energy"
            className="w-[400px] md:w-[500px] lg:w-[600px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default LogoBanner;
