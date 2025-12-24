import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, Facebook, Youtube, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "गृहपृष्ठ", path: "/" },
  { name: "आमच्याबद्दल", path: "/about" },
  { name: "प्रकल्प", path: "/projects" },
  { name: "योजना", path: "/schemes" },
  { name: "दस्तऐवज", path: "/documents" },
  { name: "गॅलरी", path: "/gallery" },
  { name: "संपर्क", path: "/contact" },
];

const socialLinks = [
  { icon: Facebook, url: "#", label: "Facebook" },
  { icon: Youtube, url: "#", label: "YouTube" },
  { icon: Instagram, url: "#", label: "Instagram" },
  { icon: Twitter, url: "#", label: "Twitter" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar with social links and contact info */}
      <div className="bg-primary text-primary-foreground py-1">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <span className="text-xs">📞</span>
                <a href="tel:+911234567890" className="text-xs hover:text-gold transition-colors">
                  +91 1234567890
                </a>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xs">✉️</span>
                <a href="mailto:info@velturpanchayat.com" className="text-xs hover:text-gold transition-colors">
                  info@velturpanchayat.com
                </a>
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-card shadow-card border-b-4 border-gold">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Left Logo - Always Visible */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src="https://image.jimcdn.com/app/cms/image/transf/dimension=origxorig:format=png/path/se80bcf7e1bbfb507/image/i7cfd90ee07d01559/version/1479517966/image.png"
                alt="वेलतूर ग्रामपंचायत लोगो"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-contain border-[3px] sm:border-[4px] border-yellow-400 shadow-lg bg-white ring-2 sm:ring-4 ring-yellow-300/30"
              />
              <div className="hidden sm:block">
                <h1 className="text-lg sm:text-xl font-bold text-primary">वेलतूर ग्रामपंचायत</h1>
                <p className="text-xs text-muted-foreground">ता. सावनेर जि. नागपूर</p>
              </div>
            </Link>

            {/* Desktop Navigation - Only on large screens */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${location.pathname === link.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary hover:text-primary"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Logo and Menu Button */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Right Logo - Always Visible */}
              <div className="flex items-center">
                <img
                  src="https://dewa.org.in/images/great-persons/2023-10-21-12-01-57pm.jpg"
                  alt="वेलतूर ग्रामपंचायत लोगो"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-contain border-[3px] sm:border-[4px] border-yellow-400 shadow-lg bg-white ring-2 sm:ring-4 ring-yellow-300/30"
                />
              </div>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-primary"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden bg-card border-t border-border animate-fade-in mt-3">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3 rounded-md font-medium transition-all ${location.pathname === link.path
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary"
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Mobile social links */}
                <div className="flex items-center justify-center gap-4 pt-4 mt-2 border-t">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      aria-label={social.label}
                      className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;