import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { FileText, Download, Baby, Heart, Home, Wallet, Building, Users } from "lucide-react";

const documents = [
  {
    icon: Baby,
    title: "जन्म दाखला",
    description: "जन्माची नोंदणी व प्रमाणपत्र",
    required: ["जन्म वेळचे हॉस्पिटल प्रमाणपत्र", "आई-वडिलांचे आधार कार्ड", "विवाह प्रमाणपत्र"],
    fee: "₹ 10",
  },
  {
    icon: Heart,
    title: "मृत्यू दाखला",
    description: "मृत्यूची नोंदणी व प्रमाणपत्र",
    required: ["मृत्यू प्रमाणपत्र (हॉस्पिटल)", "मृत व्यक्तीचे आधार कार्ड", "अर्जदाराचे आधार कार्ड"],
    fee: "₹ 10",
  },
  {
    icon: Home,
    title: "निवासी प्रमाणपत्र",
    description: "रहिवासी असल्याचा दाखला",
    required: ["आधार कार्ड", "रेशन कार्ड", "वीज बिल/पाणी बिल", "फोटो"],
    fee: "₹ 20",
  },
  {
    icon: Wallet,
    title: "उत्पन्न प्रमाणपत्र",
    description: "वार्षिक उत्पन्नाचा दाखला",
    required: ["आधार कार्ड", "शेतीचे कागदपत्र / नोकरी पत्र", "बँक स्टेटमेंट", "फोटो"],
    fee: "₹ 20",
  },
  {
    icon: Users,
    title: "विवाह नोंदणी प्रमाणपत्र",
    description: "विवाह नोंदणी व प्रमाणपत्र",
    required: ["वधू-वरांचे आधार कार्ड", "वय प्रमाणपत्र", "लग्नपत्रिका", "साक्षीदारांचे आधार", "फोटो"],
    fee: "₹ 50",
  },
  {
    icon: Building,
    title: "बांधकाम परवाना",
    description: "घर बांधकाम परवानगी",
    required: ["जमिनीचे कागदपत्र", "नकाशा", "आधार कार्ड", "फोटो", "शुल्क भरणा पावती"],
    fee: "₹ 100+",
  },
];

const applicationForms = [
  "जन्म नोंदणी अर्ज",
  "मृत्यू नोंदणी अर्ज",
  "निवासी प्रमाणपत्र अर्ज",
  "उत्पन्न प्रमाणपत्र अर्ज",
  "विवाह नोंदणी अर्ज",
  "बांधकाम परवाना अर्ज",
  "शौचालय बांधकाम अर्ज",
  "नळ जोडणी अर्ज",
];

const Documents = () => {
  return (
    <Layout>
      <Helmet>
        <title>दस्तऐवज | वेलतूर ग्रामपंचायत</title>
        <meta name="description" content="वेलतूर ग्रामपंचायतीकडून मिळणारे विविध प्रमाणपत्रे व दस्तऐवज - जन्म दाखला, मृत्यू दाखला, निवासी प्रमाणपत्र." />
      </Helmet>

      <PageHeader 
        title="दस्तऐवज व प्रमाणपत्रे"
        subtitle="ग्रामपंचायतीकडून मिळणारे विविध प्रमाणपत्रे आणि त्यांची माहिती"
        breadcrumbs={[{ label: "दस्तऐवज" }]}
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Documents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {documents.map((doc, index) => (
              <Card key={index} className="bg-card border-2 border-border hover:border-gold transition-all shadow-card hover:shadow-card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <doc.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{doc.title}</h3>
                      <p className="text-sm text-muted-foreground">{doc.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">आवश्यक कागदपत्रे:</h4>
                    <ul className="space-y-1">
                      {doc.required.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-saffron">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-sm text-muted-foreground">शुल्क: <strong className="text-primary">{doc.fee}</strong></span>
                    <Button size="sm" variant="outline" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                      <Download size={14} className="mr-1" /> नमुना
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Application Forms */}
          <div className="bg-secondary rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">अर्ज नमुने डाउनलोड करा</h2>
              <p className="text-muted-foreground">सर्व अर्ज नमुने येथून डाउनलोड करा</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {applicationForms.map((form, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="justify-start text-left h-auto py-3 px-4 bg-card hover:bg-primary hover:text-primary-foreground border-border"
                >
                  <FileText className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span className="truncate">{form}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Documents;
