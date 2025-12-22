import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border-4 border-gold/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 border-4 border-saffron/10 rounded-full"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-saffron/20 border border-saffron/40 rounded-full px-4 py-2 mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-saffron animate-pulse"></span>
            <span className="text-primary-foreground text-sm font-medium">स्वागत आहे | Welcome</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
            आधुनिक व पारदर्शक<br />
            <span className="text-gold">वेलतूर ग्रामपंचायत</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            विकास, स्वच्छता, जलव्यवस्थापन, डिजिटल सेवा आणि नागरिक कल्याणासाठी कटिबद्ध. 
            आमच्या गावाच्या प्रगतीसाठी एकत्रितपणे काम करूया.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg" className="bg-saffron hover:bg-gold text-foreground font-semibold px-8 shadow-lg hover:shadow-xl transition-all">
              <Link to="/about">
                अधिक माहिती <ChevronRight size={18} className="ml-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8">
              <Link to="/contact">
                संपर्क करा
              </Link>
            </Button>
          </div>

          {/* Stats preview */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div>
              <p className="text-3xl font-bold text-gold">1687</p>
              <p className="text-primary-foreground/70 text-sm">लोकसंख्या</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gold">580+</p>
              <p className="text-primary-foreground/70 text-sm">हेक्टर क्षेत्रफळ</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gold">1948</p>
              <p className="text-primary-foreground/70 text-sm">स्थापना वर्ष</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(40, 30%, 97%)"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
