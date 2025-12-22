import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet-async";
import { Calendar, FileText, Users, CheckCircle, AlertCircle } from "lucide-react";

const upcomingMeetings = [
  {
    date: "26 जानेवारी 2025",
    type: "प्रजासत्ताक दिन ग्रामसभा",
    agenda: ["वार्षिक अहवाल सादरीकरण", "नवीन प्रकल्प मंजुरी", "नागरिक सूचना"],
  },
  {
    date: "15 ऑगस्ट 2025",
    type: "स्वातंत्र्यदिन ग्रामसभा",
    agenda: ["विकास आढावा", "लाभार्थी निवड", "ठराव मंजुरी"],
  },
];

const pastResolutions = [
  {
    date: "26 जानेवारी 2024",
    title: "रस्ते दुरुस्ती ठराव",
    status: "मंजूर",
    description: "गावातील खराब रस्त्यांची दुरुस्ती करण्याचा ठराव",
  },
  {
    date: "15 ऑगस्ट 2024",
    title: "पाणीपुरवठा सुधारणा",
    status: "मंजूर",
    description: "जलजीवन मिशन अंतर्गत नवीन नळ जोडणी प्रस्ताव",
  },
  {
    date: "2 ऑक्टोबर 2024",
    title: "स्वच्छता अभियान",
    status: "मंजूर",
    description: "साप्ताहिक स्वच्छता मोहीम राबवण्याचा ठराव",
  },
  {
    date: "26 जानेवारी 2024",
    title: "LED दिवे बसवणे",
    status: "प्रलंबित",
    description: "मुख्य रस्त्यांवर LED पथदिवे बसवण्याचा प्रस्ताव",
  },
];

const Gramsabha = () => {
  return (
    <Layout>
      <Helmet>
        <title>ग्रामसभा | वेलतूर ग्रामपंचायत</title>
        <meta name="description" content="वेलतूर ग्रामपंचायतीच्या ग्रामसभा, ठराव, कार्यवाही आणि नागरिक निर्णयांची माहिती." />
      </Helmet>

      <PageHeader 
        title="ग्रामसभा"
        subtitle="लोकशाहीचे मूलभूत व्यासपीठ - नागरिकांचे निर्णय"
        breadcrumbs={[{ label: "ग्रामसभा" }]}
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* About Gramsabha */}
          <div className="mb-12">
            <Card className="bg-gradient-to-r from-primary to-maroon-dark text-primary-foreground border-0">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Users className="w-12 h-12" />
                  <h2 className="text-2xl font-bold">ग्रामसभा म्हणजे काय?</h2>
                </div>
                <p className="text-primary-foreground/90 leading-relaxed">
                  ग्रामसभा ही गावातील सर्व मतदार नागरिकांची सभा आहे. ही लोकशाहीची मूलभूत संस्था असून, 
                  गावाच्या विकासाशी संबंधित महत्त्वाचे निर्णय येथे घेतले जातात. प्रत्येक वर्षी किमान 4 ग्रामसभा 
                  आयोजित करणे बंधनकारक आहे - 26 जानेवारी, 15 ऑगस्ट, 2 ऑक्टोबर आणि इतर.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Upcoming Meetings */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-primary" />
                आगामी ग्रामसभा
              </h2>
              <div className="space-y-4">
                {upcomingMeetings.map((meeting, index) => (
                  <Card key={index} className="bg-card border-2 border-gold shadow-card">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-saffron text-foreground">{meeting.date}</Badge>
                        <Badge variant="outline" className="border-primary text-primary">आगामी</Badge>
                      </div>
                      <CardTitle className="text-lg">{meeting.type}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <h4 className="text-sm font-semibold text-foreground mb-2">कार्यसूची:</h4>
                      <ul className="space-y-1">
                        {meeting.agenda.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-saffron"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Past Resolutions */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary" />
                मागील ठराव
              </h2>
              <div className="space-y-4">
                {pastResolutions.map((resolution, index) => (
                  <Card key={index} className="bg-card border-2 border-border hover:border-gold transition-all shadow-card">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm text-muted-foreground">{resolution.date}</span>
                            <Badge 
                              className={resolution.status === "मंजूर" 
                                ? "bg-green-100 text-green-700" 
                                : "bg-yellow-100 text-yellow-700"
                              }
                            >
                              {resolution.status === "मंजूर" 
                                ? <><CheckCircle className="w-3 h-3 mr-1" /> {resolution.status}</>
                                : <><AlertCircle className="w-3 h-3 mr-1" /> {resolution.status}</>
                              }
                            </Badge>
                          </div>
                          <h3 className="font-bold text-foreground">{resolution.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{resolution.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Citizen Participation */}
          <div className="mt-12">
            <Card className="bg-secondary border-2 border-border">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6 text-center">नागरिक सहभाग</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-3xl">🗳️</span>
                    </div>
                    <h3 className="font-bold text-foreground mb-2">मतदान</h3>
                    <p className="text-sm text-muted-foreground">प्रत्येक ठरावावर मतदान करण्याचा अधिकार</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-saffron/20 flex items-center justify-center">
                      <span className="text-3xl">💡</span>
                    </div>
                    <h3 className="font-bold text-foreground mb-2">सूचना</h3>
                    <p className="text-sm text-muted-foreground">विकासासाठी सूचना सादर करण्याचा अधिकार</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center">
                      <span className="text-3xl">❓</span>
                    </div>
                    <h3 className="font-bold text-foreground mb-2">प्रश्न</h3>
                    <p className="text-sm text-muted-foreground">खर्च व कामकाजाबद्दल प्रश्न विचारण्याचा अधिकार</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gramsabha;
