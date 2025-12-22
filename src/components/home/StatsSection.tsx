import { Users, Map, Building, Calendar } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "686",
    label: "एकूण लोकसंख्या",
    suffix: "नागरिक (पुरुष: 358, स्त्री: 328)",
  },
  {
    icon: Map,
    value: "300.8",
    label: "क्षेत्रफळ",
    suffix: "हेक्टर",
  },
  {
    icon: Building,
    value: "2",
    label: "एकूण प्रकल्प",
    suffix: "प्रकल्प",
  },
  {
    icon: Calendar,
    value: "1962",
    label: "स्थापना वर्ष",
    suffix: "पासून",
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 gradient-hero relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIvPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-saffron/20 text-saffron rounded-full text-sm font-medium mb-4">
            आकडेवारी
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            वेलतूर गाव माहिती
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            आमच्या गावाची महत्त्वाची आकडेवारी व माहिती
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-saffron/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <stat.icon className="w-7 h-7 text-saffron" />
              </div>

              {/* Value */}
              <p className="text-3xl md:text-4xl font-bold text-gold mb-1">
                {stat.value}
              </p>

              {/* Suffix */}
              <p className="text-primary-foreground/80 text-sm mb-1">
                {stat.suffix}
              </p>

              {/* Label */}
              <p className="text-primary-foreground font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
