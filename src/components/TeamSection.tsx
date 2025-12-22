import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { User, Phone, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "श्री. सुधाकर रामरावजी भोयर",
    position: "सरपंच",
    badge: "सरपंच",
    color: "bg-saffron",
    icon: <User className="w-8 h-8" />,
    image: "/20.jpeg", // Replace with actual image path
  },
  {
    name: "श्री. नंदकिशोर नारायणजी काकडे",
    position: "उपसरपंच",
    badge: "उपसरपंच",
    color: "bg-gold",
    icon: <User className="w-8 h-8" />,
    image: "/35.jpeg",
  },
  {
    name: "श्री. अशोक शंकरराव रोडे",
    position: "ग्रामपंचायत अधिकारी",
    badge: "ग्रामविकास अधिकारी",
    color: "bg-primary",
    icon: <User className="w-8 h-8" />,
    image: "/21.jpeg",
  },
  {
    name: "सौ. सोनाली शंकरराव राऊत",
    position: "आशा कार्यकर्ता (उपकेंद्र वाकी)",
    badge: "आशा कार्यकर्ता",
    color: "bg-primary",
    icon: <User className="w-8 h-8" />,
    image: "/6.jpeg",
  },
  {
    name: "श्री. विष्णू कोंडबाजी हजारे",
    position: "सहाय्यक शिक्षक, झेड पी प्राथमिक शाळा वेलतूर",
    badge: "सहाय्यक शिक्षक",
    color: "bg-primary",
    icon: <User className="w-8 h-8" />,
    image: "/24.jpeg",
  },
  {
    name: "श्रीमती. कुंदा देवीदासजी मोहोड",
    position: "अंगणवाडी सेविका",
    badge: "अंगणवाडी सेविका",
    color: "bg-primary",
    icon: <User className="w-8 h-8" />,
    image: "/29.jpeg",
  },
  {
    name: "सौ. सुनिता सुभाषरावजी मालापुरे",
    position: "मुख्याध्यापिका, झेड पी प्राथमिक शाळा वेलतूर",
    badge: "मुख्याध्यापिका",
    color: "bg-primary",
    image: "/23.jpeg", // Replace with actual image path when available
  },
];

const TeamSection = () => {
  return (
   <>
    

      {/* Team Members Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              प्रतिनिधी व कर्मचारी
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              ग्रामपंचायत टीम
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="group bg-card border-2 border-border hover:border-gold shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
              >
                <CardContent className="p-6 text-center">
                  {/* Profile Image */}
                  <div className="mx-auto w-40 h-40 rounded-full overflow-hidden border-4 border-gold mb-6 group-hover:scale-105 transition-transform">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Badge */}
                  <span className={`inline-block px-4 py-1 ${member.color} text-primary-foreground rounded-full text-sm font-semibold mb-3`}>
                    {member.badge}
                  </span>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {member.name}
                  </h3>

                  {/* Position */}
                  <p className="text-muted-foreground mb-4">
                    {member.position}
                  </p>

                  {/* Optional Contact Info - Add if available */}
                  {/* Example:
                  <div className="flex justify-center gap-4 text-muted-foreground">
                    <Phone className="w-5 h-5" />
                    <Mail className="w-5 h-5" />
                  </div>
                  */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      </>
   
  );
};

export default TeamSection;