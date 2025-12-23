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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full">


      {/* Main header */}
      <div className="bg-card shadow-card border-b-4 border-gold">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
                         <img 
  src="/logo2.png" 
  alt="वेलतूर ग्रामपंचायत लोगो" 
  className="w-32 h-32 md:w-20 md:h-20 rounded-full object-contain border-[6px] border-yellow-400 shadow-2xl drop-shadow-lg bg-white ring-8 ring-yellow-300/30"
/>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-primary">वेलतूर ग्रामपंचायत</h1>
                <p className="text-xs text-muted-foreground">ता. चामोर्शी, जि. गडचिरोली, महाराष्ट्र</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
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

            {/* Right side */}
            <div className="flex items-center gap-2">

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
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border animate-fade-in">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
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

            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
