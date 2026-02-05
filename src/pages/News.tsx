import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet-async";
import { Calendar, AlertTriangle, PartyPopper, Newspaper, Megaphone } from "lucide-react";

const newsItems = [
  {
    type: "सूचना",
    icon: Megaphone,
    badge: "महत्त्वाचे",
    badgeColor: "bg-red-100 text-red-700",
    date: "20 डिसेंबर 2024",
    title: "प्रजासत्ताक दिन ग्रामसभा सूचना",
    content: "दि. 26 जानेवारी 2025 रोजी सकाळी 10 वाजता ग्रामपंचायत कार्यालयात ग्रामसभा आयोजित करण्यात येत आहे. सर्व नागरिकांनी उपस्थित राहावे.",
  },
  {
    type: "विकास",
    icon: Newspaper,
    badge: "नवीन",
    badgeColor: "bg-green-100 text-green-700",
    date: "15 डिसेंबर 2024",
    title: "नवीन पाणी टाकी बांधकाम पूर्ण",
    content: "जलजीवन मिशन अंतर्गत गावात नवीन पाणी साठवण टाकीचे बांधकाम पूर्ण झाले. आता प्रत्येक घरी नळाने पाणी मिळणार.",
  },
  {
    type: "आपत्कालीन",
    icon: AlertTriangle,
    badge: "तातडीचे",
    badgeColor: "bg-yellow-100 text-yellow-700",
    date: "10 डिसेंबर 2024",
    title: "हवामान सूचना - थंडीची लाट",
    content: "पुढील आठवड्यात कडाक्याच्या थंडीची शक्यता आहे. वृद्ध व लहान मुलांची विशेष काळजी घ्या. रात्री उघड्यावर झोपू नका.",
  },
  {
    type: "उत्सव",
    icon: PartyPopper,
    badge: "आगामी",
    badgeColor: "bg-purple-100 text-purple-700",
    date: "5 डिसेंबर 2024",
    title: "मकरसंक्रांती उत्सव आयोजन",
    content: "दि. 14 जानेवारी 2025 रोजी गावात मकरसंक्रांती उत्सव मोठ्या प्रमाणात साजरा केला जाणार. पतंग महोत्सव व सांस्कृतिक कार्यक्रम.",
  },
  {
    type: "विकास",
    icon: Newspaper,
    badge: "प्रगती",
    badgeColor: "bg-blue-100 text-blue-700",
    date: "1 डिसेंबर 2024",
    title: "LED पथदिवे बसवण्याचे काम सुरू",
    content: "मुख्य रस्त्यांवर LED पथदिवे बसवण्याचे काम सुरू झाले. पहिल्या टप्प्यात 50 दिवे बसवले जातील.",
  },
  {
    type: "सूचना",
    icon: Megaphone,
    badge: "सूचना",
    badgeColor: "bg-gray-100 text-gray-700",
    date: "25 नोव्हेंबर 2024",
    title: "मतदार यादी सुधारणा मोहीम",
    content: "नवीन मतदार नोंदणी व यादी सुधारणा मोहीम सुरू आहे. पात्र नागरिकांनी ग्रामपंचायत कार्यालयात संपर्क साधावा.",
  },
];

const News = () => {
  return (
    <Layout>
      <Helmet>
        <title>बातम्या व सूचना | वेलतूर ग्रामपंचायत</title>
        <meta name="description" content="वेलतूर ग्रामपंचायतीच्या ताज्या बातम्या, घोषणा, आपत्कालीन सूचना आणि विकास अपडेट." />
      </Helmet>

      <PageHeader 
        title="बातम्या व सूचना"
        subtitle="गावातील ताज्या घडामोडी, सूचना आणि महत्त्वाच्या बातम्या"
        breadcrumbs={[{ label: "बातम्या" }]}
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {["सर्व", "सूचना", "विकास", "आपत्कालीन", "उत्सव"].map((tab) => (
              <Badge 
                key={tab} 
                className={`cursor-pointer px-4 py-2 ${tab === "सर्व" ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground"}`}
              >
                {tab}
              </Badge>
            ))}
          </div>

          {/* News Grid */}
          <div className="space-y-6">
            {newsItems.map((item, index) => (
              <Card key={index} className="bg-card border-2 border-border hover:border-gold transition-all shadow-card hover:shadow-card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <Badge className={item.badgeColor}>{item.badge}</Badge>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Calendar size={14} />
                          {item.date}
                        </span>
                        <Badge variant="outline" className="text-xs">{item.type}</Badge>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Emergency Notice */}
          <div className="mt-12">
            <Card className="bg-red-50 border-2 border-red-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-red-800 mb-1">आपत्कालीन संपर्क</h3>
                    <p className="text-red-700 text-sm">
                      कोणत्याही आपत्कालीन परिस्थितीत तात्काळ 112 वर संपर्क साधा | 
                      ग्रामरोजगार सेवक: +91 7588XXXXXX
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Subscribe Section */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              ताज्या सूचना मिळवण्यासाठी ग्रामपंचायतीच्या सोशल मीडिया पेजला फॉलो करा
            </p>
            <div className="flex justify-center gap-4">
              <Badge className="bg-blue-600 hover:bg-blue-700 cursor-pointer px-4 py-2">
                📘 Facebook
              </Badge>
              <Badge className="bg-red-600 hover:bg-red-700 cursor-pointer px-4 py-2">
                📺 YouTube
              </Badge>
              <Badge className="bg-green-600 hover:bg-green-700 cursor-pointer px-4 py-2">
                📱 WhatsApp
              </Badge>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
