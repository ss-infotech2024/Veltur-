import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "संदेश पाठवला",
      description: "आपला संदेश यशस्वीरित्या पाठवला गेला. लवकरच संपर्क केला जाईल.",
    });
    setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <Helmet>
        <title>संपर्क | वेलतूर ग्रामपंचायत</title>
        <meta name="description" content="वेलतूर ग्रामपंचायतीशी संपर्क साधा. पत्ता, फोन नंबर, ईमेल आणि कार्यालयीन वेळ." />
      </Helmet>

      <PageHeader 
        title="संपर्क साधा"
        subtitle="आपल्या सूचना, तक्रारी किंवा माहितीसाठी संपर्क करा"
        breadcrumbs={[{ label: "संपर्क" }]}
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">संपर्क माहिती</h2>
              
              <div className="space-y-6">
                <Card className="bg-card border-2 border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">पत्ता</h3>
                        <p className="text-muted-foreground">
                          वेलतूर ग्रामपंचायत कार्यालय,<br />
                          वेलतूर, पो. दवकी,<br />
                          ता. सावकर, जि. जामखेड,<br />
                          महाराष्ट्र ४१३४०८
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-2 border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">फोन</h3>
                        <p className="text-muted-foreground">
                          ग्रामसेवक: +91 9881851068<br />
                          सरपंच: +91 9823731765<br />
                          उपसरपंच: +91 9421320202
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-2 border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">ईमेल</h3>
                        <p className="text-muted-foreground">
                          grampanchayatveltur10@gmail.com<br />
                          velturgrampanchayat@gmail.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-2 border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-saffron/20 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-saffron" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">कार्यालयीन वेळ</h3>
                        <p className="text-muted-foreground">
                          सोमवार - शनिवार: सकाळी 10:00 - संध्याकाळी 5:00<br />
                          दुपारी ब्रेक: 1:00 - 2:00<br />
                          रविवार: बंद<br />
                          शासकीय सुट्ट्या: बंद
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Map placeholder */}
              <div className="mt-8">
                <h3 className="font-bold text-foreground mb-4">स्थान नकाशा</h3>
                <div className="aspect-video bg-secondary rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground">वेलतूर ग्रामपंचायत, जामखेड</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      गूगल मॅप्स वर शोधा: "वेलतूर ग्रामपंचायत"
                    </p>
                    <Button 
                      variant="outline" 
                      className="mt-3"
                      onClick={() => window.open('https://maps.google.com/?q=Veltur+Grampanchayat+Jambhed', '_blank')}
                    >
                      नकाशा पहा
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">संदेश पाठवा</h2>
              
              <Card className="bg-card border-2 border-border shadow-card">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          पूर्ण नाव *
                        </label>
                        <Input
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="आपले नाव"
                          required
                          className="bg-background"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          मोबाइल नंबर *
                        </label>
                        <Input
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="आपला मोबाइल नंबर"
                          required
                          className="bg-background"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        ईमेल
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="आपला ईमेल (पर्यायी)"
                        className="bg-background"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        विषय *
                      </label>
                      <Input
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="संदेशाचा विषय"
                        required
                        className="bg-background"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        संदेश *
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="आपला संदेश येथे लिहा..."
                        rows={5}
                        required
                        className="bg-background"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-maroon-light text-primary-foreground">
                      <Send className="w-4 h-4 mr-2" />
                      संदेश पाठवा
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Additional Contact Info */}
              <div className="mt-8 bg-gradient-to-r from-primary to-maroon-dark rounded-xl p-6 text-primary-foreground">
                <h3 className="text-xl font-bold mb-4">तातडीचे संपर्क</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="font-medium">🚨 आपत्कालीन</p>
                    <p>112 - सर्व आपत्कालीन</p>
                    <p>108 - रुग्णवाहिका</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium">👮‍♂️ सुरक्षा</p>
                    <p>100 - पोलीस</p>
                    <p>101 - अग्निशमन</p>
                  </div>
                </div>
                
                {/* Local Contacts */}
                <div className="mt-6 pt-4 border-t border-primary-foreground/20">
                  <h4 className="font-bold mb-2">स्थानिक संपर्क</h4>
                  <div className="space-y-1 text-sm">
                    <p>📞 पंचायत समिती: 02135-262221</p>
                    <p>📞 जिल्हा परिषद: 02135-262001</p>
                    <p>📞 तालुका कार्यालय: 02135-262201</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-6">
                <h3 className="font-bold text-foreground mb-3">द्रुत लिंक्स</h3>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" onClick={() => window.open('https://www.tcs.com', '_blank')}>
                    TCS वेबसाइट
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => window.open('https://mahagrampanchayat.gov.in', '_blank')}>
                    महाग्रामपंचायत
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => window.open('https://jamtaluka.org', '_blank')}>
                    जामखेड तालुका
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;