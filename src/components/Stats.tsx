const stats = [
  { value: "50+", label: "Years Combined Experience", description: "Leadership expertise in energy infrastructure" },
  { value: "100+", label: "Projects Completed", description: "Successfully delivered across four states" },
  { value: "24/7", label: "Emergency Support", description: "Response and troubleshooting support" },
  { value: "4", label: "States Served", description: "Texas, Louisiana, Oklahoma & New Mexico" },
];

const Stats = () => {
  return (
    <section className="py-16 md:py-20 bg-card border-y border-border">
      <div className="container-wide">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient-gold mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-display font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
