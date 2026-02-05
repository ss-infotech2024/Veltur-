import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { Home, Droplets, Trash2, Users, Wheat, GraduationCap, FileText, CheckCircle } from "lucide-react";

const schemes = [
  {
    icon: Home,
    title: "प्रधानमंत्री आवास योजना (ग्रामीण)",
    description: "गरीब कुटुंबांना पक्के घर बांधण्यासाठी आर्थिक सहाय्य",
    eligibility: [
      "कच्च्या घरात राहणारे कुटुंब",
      "वार्षिक उत्पन्न ₹3 लाखापेक्षा कमी",
      "जमिनीचा मालकी हक्क असणे",
      "यापूर्वी योजनेचा लाभ न घेतलेले",
    ],
    documents: ["आधार कार्ड", "उत्पन्न प्रमाणपत्र", "जमिनीचे कागदपत्र", "बँक पासबुक", "फोटो"],
    process: "ग्रामरोजगार सेवकाकडे अर्ज करा → पात्रता तपासणी → मंजुरी → घर बांधकाम → अनुदान",
  },
  {
    icon: Droplets,
    title: "जलजीवन मिशन",
    description: "प्रत्येक घरी नळाने शुद्ध पाणी पुरवठा",
    eligibility: [
      "गावातील सर्व कुटुंबे पात्र",
      "नळ जोडणी नसलेली घरे",
      "अनुसूचित जाती/जमाती प्राधान्य",
    ],
    documents: ["आधार कार्ड", "रहिवासी प्रमाणपत्र", "घराचा पुरावा"],
    process: "ग्रामपंचायतीत नोंदणी → सर्वेक्षण → नळ जोडणी → पाणीपुरवठा सुरू",
  },
  {
    icon: Trash2,
    title: "स्वच्छ भारत अभियान (ग्रामीण)",
    description: "शौचालय बांधकाम व स्वच्छता सुविधा",
    eligibility: [
      "शौचालय नसलेली कुटुंबे",
      "बीपीएल कुटुंबांना प्राधान्य",
      "दिव्यांग व वृद्ध व्यक्ती",
    ],
    documents: ["आधार कार्ड", "बीपीएल कार्ड", "फोटो", "बँक पासबुक"],
    process: "ग्रामपंचायतीत अर्ज → मंजुरी → शौचालय बांधकाम → अनुदान",
  },
  {
    icon: Users,
    title: "महिला बचत गट योजना",
    description: "महिलांच्या आर्थिक सक्षमीकरणासाठी",
    eligibility: [
      "10-20 महिलांचा गट",
      "वय 18-60 वर्षे",
      "नियमित बचत करणारे",
    ],
    documents: ["सर्व सदस्यांचे आधार कार्ड", "गट नोंदणी प्रमाणपत्र", "बँक खाते", "सभा इतिवृत्त"],
    process: "गट स्थापना → नोंदणी → बचत → कर्ज सुविधा → व्यवसाय प्रशिक्षण",
  },
  {
    icon: Wheat,
    title: "शेतकरी योजना (पीएम किसान)",
    description: "शेतकऱ्यांना वार्षिक ₹6000 आर्थिक मदत",
    eligibility: [
      "जमीन मालकी असलेले शेतकरी",
      "2 हेक्टरपर्यंत जमीन",
      "कृषी उत्पन्नावर अवलंबून",
    ],
    documents: ["आधार कार्ड", "7/12 उतारा", "8-अ उतारा", "बँक पासबुक"],
    process: "ऑनलाइन/ऑफलाइन नोंदणी → सत्यापन → खात्यात रक्कम जमा",
  },
  {
    icon: GraduationCap,
    title: "विद्यार्थी शिष्यवृत्ती योजना",
    description: "गुणवंत व गरजू विद्यार्थ्यांना शैक्षणिक मदत",
    eligibility: [
      "इयत्ता 5वी ते पदवी विद्यार्थी",
      "किमान 60% गुण",
      "वार्षिक उत्पन्न मर्यादा",
      "SC/ST/OBC प्राधान्य",
    ],
    documents: ["आधार कार्ड", "गुणपत्रक", "उत्पन्न प्रमाणपत्र", "जात प्रमाणपत्र", "बँक पासबुक"],
    process: "ऑनलाइन अर्ज → कागदपत्र सादर → तपासणी → मंजुरी → रक्कम जमा",
  },
];

const Schemes = () => {
  return (
    <Layout>
      <Helmet>
        <title>शासकीय योजना | वेलतूर ग्रामपंचायत</title>
        <meta name="description" content="वेलतूर ग्रामपंचायतीमार्फत उपलब्ध शासकीय योजना - आवास, जलजीवन, स्वच्छ भारत, महिला बचत गट, शेतकरी योजना." />
      </Helmet>

      <PageHeader 
        title="शासकीय योजना"
        subtitle="नागरिकांसाठी उपलब्ध असलेल्या विविध सरकारी योजनांची माहिती"
        breadcrumbs={[{ label: "योजना" }]}
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {schemes.map((scheme, index) => (
              <Card key={index} className="bg-card border-2 border-border hover:border-gold transition-all shadow-card">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <scheme.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground mb-2">{scheme.title}</CardTitle>
                      <p className="text-muted-foreground">{scheme.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Eligibility */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        पात्रता
                      </h4>
                      <ul className="space-y-1">
                        {scheme.eligibility.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-saffron">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Documents */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-blue-600" />
                        आवश्यक कागदपत्रे
                      </h4>
                      <ul className="space-y-1">
                        {scheme.documents.map((doc, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary">•</span>
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Process */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">अर्ज प्रक्रिया</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{scheme.process}</p>
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

export default Schemes;
