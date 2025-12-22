import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet-async";
import { Route, Droplets, Building2, Camera, Lightbulb, HeartPulse, TreePine, Home } from "lucide-react";

const projects = [
  {
    icon: Route,
    title: "रस्ते विकास प्रकल्प",
    description: "गावातील अंतर्गत रस्त्यांचे काँक्रीटीकरण व दुरुस्ती. मुख्य रस्त्यांना जोडणारे संपर्क मार्ग.",
    status: "पूर्ण झाले",
    statusColor: "bg-green-100 text-green-700",
    budget: "₹ 25 लाख",
    year: "2023",
  },
  {
    icon: Droplets,
    title: "पाणीपुरवठा टाकी बांधकाम",
    description: "जलजीवन मिशन अंतर्गत नवीन पाणी साठवण टाकी बांधकाम. प्रत्येक घरी नळ जोडणी.",
    status: "सुरू आहे",
    statusColor: "bg-blue-100 text-blue-700",
    budget: "₹ 40 लाख",
    year: "2024",
  },
  {
    icon: Building2,
    title: "सार्वजनिक शौचालय बांधकाम",
    description: "स्वच्छ भारत अभियान अंतर्गत सार्वजनिक शौचालय उभारणी. महिला व पुरुषांसाठी स्वतंत्र सुविधा.",
    status: "पूर्ण झाले",
    statusColor: "bg-green-100 text-green-700",
    budget: "₹ 8 लाख",
    year: "2022",
  },
  {
    icon: Camera,
    title: "सीसीटीव्ही प्रकल्प",
    description: "गावातील महत्त्वाच्या ठिकाणी सीसीटीव्ही कॅमेरे बसवणे. सुरक्षा निगराणी व्यवस्था.",
    status: "प्रस्तावित",
    statusColor: "bg-yellow-100 text-yellow-700",
    budget: "₹ 5 लाख",
    year: "2025",
  },
  {
    icon: Lightbulb,
    title: "एलईडी पथदिवे बसवणे",
    description: "संपूर्ण गावात ऊर्जा बचत एलईडी पथदिवे बसवणे. सौर ऊर्जेवर चालणारे दिवे.",
    status: "सुरू आहे",
    statusColor: "bg-blue-100 text-blue-700",
    budget: "₹ 12 लाख",
    year: "2024",
  },
  {
    icon: HeartPulse,
    title: "आरोग्य शिबिरे",
    description: "नियमित आरोग्य तपासणी शिबिरे, लसीकरण मोहीम, जनजागृती कार्यक्रम.",
    status: "चालू",
    statusColor: "bg-green-100 text-green-700",
    budget: "₹ 3 लाख/वर्ष",
    year: "सातत्याने",
  },
  {
    icon: TreePine,
    title: "वृक्षारोपण मोहीम",
    description: "गाव परिसरात व रस्त्यांच्या कडेला वृक्षारोपण. हरित गाव अभियान.",
    status: "पूर्ण झाले",
    statusColor: "bg-green-100 text-green-700",
    budget: "₹ 2 लाख",
    year: "2023",
  },
  {
    icon: Home,
    title: "आवास योजना",
    description: "प्रधानमंत्री आवास योजना अंतर्गत पात्र लाभार्थ्यांना घरे बांधून देणे.",
    status: "सुरू आहे",
    statusColor: "bg-blue-100 text-blue-700",
    budget: "₹ 60 लाख",
    year: "2023-24",
  },
];

const Projects = () => {
  return (
    <Layout>
      <Helmet>
        <title>प्रकल्प | वेलतूर ग्रामपंचायत</title>
        <meta name="description" content="वेलतूर ग्रामपंचायतीचे विविध विकास प्रकल्प - रस्ते, पाणीपुरवठा, स्वच्छता, आरोग्य आणि पायाभूत सुविधा." />
      </Helmet>

      <PageHeader 
        title="विकास प्रकल्प"
        subtitle="गावाच्या सर्वांगीण विकासासाठी राबवले जात असलेले प्रकल्प"
        breadcrumbs={[{ label: "प्रकल्प" }]}
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: "एकूण प्रकल्प", value: "15+" },
              { label: "पूर्ण झालेले", value: "10" },
              { label: "सुरू असलेले", value: "4" },
              { label: "एकूण गुंतवणूक", value: "₹ 1.5 कोटी" },
            ].map((stat, index) => (
              <div key={index} className="bg-secondary rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card border-2 border-border hover:border-gold transition-all shadow-card hover:shadow-card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <project.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                        <Badge className={project.statusColor}>{project.status}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-primary font-semibold">{project.budget}</span>
                        <span className="text-muted-foreground">वर्ष: {project.year}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
