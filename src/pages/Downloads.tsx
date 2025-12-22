import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { FileText, Download, FileCheck, ClipboardList, Bell } from "lucide-react";

const downloadCategories = [
  {
    icon: FileCheck,
    title: "प्रमाणपत्र अर्ज",
    color: "bg-blue-100 text-blue-600",
    items: [
      "जन्म नोंदणी अर्ज नमुना",
      "मृत्यू नोंदणी अर्ज नमुना",
      "निवासी प्रमाणपत्र अर्ज",
      "उत्पन्न प्रमाणपत्र अर्ज",
      "विवाह नोंदणी अर्ज",
      "जात प्रमाणपत्र अर्ज",
    ],
  },
  {
    icon: ClipboardList,
    title: "योजना अर्ज",
    color: "bg-green-100 text-green-600",
    items: [
      "प्रधानमंत्री आवास योजना अर्ज",
      "जलजीवन मिशन नळ जोडणी अर्ज",
      "शौचालय बांधकाम अर्ज",
      "महिला बचत गट नोंदणी",
      "पीएम किसान नोंदणी अर्ज",
      "मनरेगा जॉब कार्ड अर्ज",
    ],
  },
  {
    icon: FileText,
    title: "परवाने व सेवा",
    color: "bg-saffron/30 text-saffron",
    items: [
      "बांधकाम परवाना अर्ज",
      "दुकान परवाना अर्ज",
      "पाणी जोडणी अर्ज",
      "वीज जोडणी शिफारस पत्र",
      "व्यवसाय परवाना अर्ज",
      "ना हरकत प्रमाणपत्र अर्ज",
    ],
  },
  {
    icon: Bell,
    title: "सूचना व माहिती",
    color: "bg-purple-100 text-purple-600",
    items: [
      "ग्रामसभा कार्यवाही",
      "वार्षिक अहवाल 2023-24",
      "अंदाजपत्रक 2024-25",
      "लाभार्थी यादी",
      "मतदार यादी",
      "ग्रामपंचायत नियम",
    ],
  },
];

const Downloads = () => {
  return (
    <Layout>
      <Helmet>
        <title>डाउनलोड | वेलतूर ग्रामपंचायत</title>
        <meta name="description" content="वेलतूर ग्रामपंचायतीचे अर्ज नमुने, प्रमाणपत्रे, योजना फॉर्म आणि सूचना पत्रके डाउनलोड करा." />
      </Helmet>

      <PageHeader 
        title="डाउनलोड केंद्र"
        subtitle="सर्व अर्ज नमुने, प्रमाणपत्रे आणि माहिती पत्रके डाउनलोड करा"
        breadcrumbs={[{ label: "डाउनलोड" }]}
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: "एकूण दस्तऐवज", value: "50+" },
              { label: "अर्ज नमुने", value: "20+" },
              { label: "योजना माहिती", value: "15+" },
              { label: "सूचना पत्रके", value: "10+" },
            ].map((stat, index) => (
              <div key={index} className="bg-secondary rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Download Categories */}
          <div className="grid md:grid-cols-2 gap-6">
            {downloadCategories.map((category, index) => (
              <Card key={index} className="bg-card border-2 border-border hover:border-gold transition-all shadow-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center`}>
                      <category.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.items.map((item, i) => (
                      <div 
                        key={i} 
                        className="flex items-center justify-between p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                      >
                        <span className="text-sm text-foreground">{item}</span>
                        <Button size="sm" variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10">
                          <Download size={16} />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Help Section */}
          <div className="mt-12">
            <Card className="bg-gradient-to-r from-primary to-maroon-dark text-primary-foreground border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">मदत हवी आहे?</h3>
                <p className="text-primary-foreground/90 mb-6">
                  अर्ज भरण्यात अडचण असल्यास किंवा अधिक माहिती हवी असल्यास 
                  ग्रामपंचायत कार्यालयाशी संपर्क साधा.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-saffron hover:bg-gold text-foreground">
                    📞 फोन करा: +91 7588XXXXXX
                  </Button>
                  <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                    ✉️ ईमेल करा
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Downloads;
