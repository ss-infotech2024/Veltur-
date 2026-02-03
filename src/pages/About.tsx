import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { MapPin, Users, Droplets, Wheat, Building, Calendar, Sun, Mountain } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>आमच्याबद्दल | वेलतूर ग्रामपंचायत</title>
        <meta name="description" content="वेलतूर गावाचा इतिहास, संस्कृती, परंपरा आणि प्रशासकीय माहिती. जाणून घ्या आमच्या गावाबद्दल." />
      </Helmet>

      <PageHeader 
        title="आमच्याबद्दल"
        subtitle="वेलतूर गावाची संपूर्ण माहिती, इतिहास आणि संस्कृती"
        breadcrumbs={[{ label: "आमच्याबद्दल" }]}
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* History Section - Updated with actual info */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  इतिहास व माहिती
                </span>
                <h2 className="text-3xl font-bold text-foreground mb-6">वेलतूर ग्रामपंचायत माहिती</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  <strong>पंचायत समिती:</strong> चामोर्शी<br />
                  <strong>लोकसंख्या:</strong> 1962<br />
                  <strong>क्षेत्रफळ:</strong> ५८०.४ हेक्टर
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  <strong>मुख्य पिके:</strong> भात शेती<br />
                  <strong>जलस्रोत:</strong> नळ पाणीपुरवठा योजना, विहिरी, बोअर
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  वेलतूर हे गडचिरोली जिल्ह्यातील चामोर्शी तालुक्यातील एक ग्रामपंचायत आहे. 
                  गावात प्रामुख्याने भात शेती केली जाते आणि पाणीपुरवठा योजनेद्वारे शुद्ध पाणी उपलब्ध आहे.
                </p>
              </div>
              <div className="gradient-hero rounded-2xl p-8 text-primary-foreground text-center">
                <div className="text-6xl mb-4">🏛️</div>
                <h3 className="text-2xl font-bold mb-2">वेलतूर</h3>
                <p className="text-primary-foreground/80">ता. चामोर्शी, जि. गडचिरोली</p>
                <p className="text-3xl font-bold text-gold mt-4">1962</p>
                <p className="text-primary-foreground/80">लोकसंख्या</p>
              </div>
            </div>
          </div>

          {/* Info Cards - Updated with actual data */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Users, label: "लोकसंख्या", value: "1962", desc: "एकूण नागरिक" },
              { icon: MapPin, label: "क्षेत्रफळ", value: "५८०.४", desc: "हेक्टर" },
              { icon: Wheat, label: "मुख्य पीक", value: "भात", desc: "धान शेती" },
              { icon: Droplets, label: "पाणीपुरवठा", value: "नळ योजना", desc: "शुद्ध पाणी" },
            ].map((item, index) => (
              <Card key={index} className="bg-card border-2 border-border hover:border-gold transition-all shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="text-3xl font-bold text-primary mb-1">{item.value}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                  <p className="font-semibold text-foreground mt-2">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Gram Panchayat Members List from the note */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                ग्रामपंचायत सदस्य
              </span>
              <h2 className="text-3xl font-bold text-foreground mb-4">निवडून आलेले सदस्य</h2>
            </div>
            <Card className="bg-card border-2 border-border">
              <CardContent className="p-8">
                <ol className="space-y-3 text-foreground text-lg">
                  <li>१. श्री. सुधाकर रामसावंत्रि भोयर (सरपंच)</li>
                  <li>२. श्री. नंदकिशोर नारायणबुवि काकडे (उपसरपंच)</li>
                  <li>३. श्री. प्रफुल्ल रमेशराव कडू (सदस्य)</li>
                  <li>४. श्री. गणेश संपतराव डखोले (सदस्य)</li>
                  <li>५. सौ. रोशनी राजेशराव चिकटे (सदस्य)</li>
                  <li>६. सौ. प्रेमिला पामाजी उके (सदस्य)</li>
                  <li>७. श्रीमती. सरला सूर्यभानराव मडावी (सदस्य)</li>
                  <li>८. श्रीमती. निर्मला ज्ञानदेवराव गायक (सदस्य)</li>
                  <li>९. श्री. ममोज गणपतराव भिवडे (मतदार यादीतील नाव)</li>
                  <li>१०. श्री. स्वप्नील घंसीराम निकोसे</li>
                  <li>११. श्री. अटाकिशोर किरणराव भोंडे</li>
                </ol>
              </CardContent>
            </Card>
          </div>

          {/* Additional Details from notes */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card className="bg-card border-2 border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">प्रशासकीय माहिती</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• ग्रामपंचायत ईमेल: grampanchayatveltur1003@gmail.com</li>
                  <li>• सरपंच संपर्क: ३४४</li>
                  <li>• उपसरपंच संपर्क: ३४४</li>
                  <li>• ग्रामसेवक संपर्क: ३२२४४</li>
                  <li>• पाणीपुरवठा कर्मचारी संपर्क: ५५५ १९६३</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-2 border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">शेती व जलस्रोत</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• मुख्य पीक: भात (धान)</li>
                  <li>• इतर पिके: कापूस, सोयाबीन, तूर (दुसऱ्या नोटमध्ये उल्लेख)</li>
                  <li>• पाणीपुरवठा: नळ योजना, बोअर, विहिरी</li>
                  <li>• क्षेत्रफळ: ५८०.४ हेक्टर</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Culture & Traditions - Kept general as no specific new info */}
          <div>
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                संस्कृती
              </span>
              <h2 className="text-3xl font-bold text-foreground mb-4">संस्कृती व परंपरा</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Sun, title: "सण व उत्सव", desc: "दिवाळी, होळी, दसरा, गणेशोत्सव, नवरात्री असे विविध सण मोठ्या उत्साहाने साजरे केले जातात." },
                { icon: Mountain, title: "धार्मिक स्थळे", desc: "गावात अनेक प्राचीन मंदिरे आहेत जी भक्तांचे श्रद्धास्थान आहेत." },
                { icon: Users, title: "सामाजिक एकता", desc: "विविध जाती-धर्माचे लोक एकत्र राहून सामाजिक सौहार्द टिकवून ठेवतात." },
              ].map((item, index) => (
                <Card key={index} className="bg-secondary border-2 border-border">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-saffron/20 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-saffron" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;