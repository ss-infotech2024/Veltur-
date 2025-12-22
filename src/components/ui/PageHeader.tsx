import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; path?: string }[];
}

const PageHeader = ({ title, subtitle, breadcrumbs = [] }: PageHeaderProps) => {
  return (
    <section className="gradient-hero py-16 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDF6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-primary-foreground/80 mb-4">
          <Link to="/" className="flex items-center gap-1 hover:text-gold transition-colors">
            <Home size={14} />
            <span>गृहपृष्ठ</span>
          </Link>
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center gap-2">
              <ChevronRight size={14} />
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-gold transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-gold">{crumb.label}</span>
              )}
            </div>
          ))}
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-3">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-background/20 to-transparent"></div>
    </section>
  );
};

export default PageHeader;
