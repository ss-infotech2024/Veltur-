import { Card, CardContent } from "@/components/ui/card";
import { Building2, Droplets, Trash2, Briefcase, Users, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Building2,
    title: "ग्रामरोजगार सेवक कार्यालय",
    description: "सर्व प्रशासकीय कामकाज व नागरिक सेवा केंद्र",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Droplets,
    title: "पाणीपुरवठा योजना",
    description: "शुद्ध व स्वच्छ पाणीपुरवठा व्यवस्था",
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    icon: Trash2,
    title: "कचरा व्यवस्थापन",
    description: "स्वच्छ भारत अभियान अंतर्गत कचरा संकलन",
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    icon: Briefcase,
    title: "रोजगार हमी योजना",
    description: "महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार योजना",
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
  {
    icon: Users,
    title: "महिला बचत गट",
    description: "महिला सशक्तीकरण व आर्थिक स्वावलंबन",
    color: "text-pink-600",
    bg: "bg-pink-100",
  },
  {
    icon: GraduationCap,
    title: "शिक्षण व शाळा",
    description: "प्राथमिक व माध्यमिक शिक्षण सुविधा",
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            सुविधा
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ग्रामपंचायत सेवा व सुविधा
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            नागरिकांसाठी उपलब्ध असलेल्या विविध सेवा आणि सुविधांची माहिती
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link to="/schemes" key={index}>
              <Card 
                className="group bg-card border-2 border-border hover:border-primary shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl ${service.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className={`w-7 h-7 ${service.color}`} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Arrow indicator */}
                  <div className="mt-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    अधिक माहिती →
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
