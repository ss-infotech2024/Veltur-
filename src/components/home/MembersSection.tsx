import { Card, CardContent } from "@/components/ui/card";

const members = [
  
  {
    name: "श्रीमती. सरला सूर्यभानजी मडावी",
    position: "ग्रामपंचायत सदस्य",
    badge: "सदस्य",
    color: "bg-primary",
    image: "/1.jpeg",
  },
  {
    name: "श्रीमती. निर्मला ज्ञानदेवजी कंबले",
    position: "ग्रामपंचायत सदस्य",
    badge: "सदस्य",
    color: "bg-primary",
    image: "/30.jpeg", // Using the provided image file name
  },
  {
    name: "श्री. गणेश संपतराव डखोले",
    position: "ग्रामपंचायत सदस्य",
    badge: "सदस्य",
    color: "bg-primary",
    image: "/33.jpeg",
  },
  {
    name: "सौ. प्रेमिला पामाजी उके",
    position: "ग्रामपंचायत सदस्य",
    badge: "सदस्य",
    color: "bg-primary",
    image: "/31.jpeg",
  },
  {
    name: "सौ. रोशनी राजेशजी चिकाटे",
    position: "ग्रामपंचायत सदस्य",
    badge: "सदस्य",
    color: "bg-primary",
    image: "/34.jpeg",
  },
  {
    name: "श्री. प्रफुल्ल रामेशराव कडू",
    position: "ग्रामपंचायत सदस्य",
    badge: "सदस्य",
    color: "bg-primary",
    image: "/22(1).jpeg",
  },
  
 
];

const MembersSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            प्रतिनिधी
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ग्रामपंचायत सदस्य
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            वेलतूर ग्रामपंचायतचे निवडून आलेले प्रतिनिधी
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <Card 
              key={index} 
              className="group bg-card border-2 border-border hover:border-gold shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                {/* Member Image */}
                <div className="mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-gold mb-4 group-hover:scale-105 transition-transform">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Badge */}
                <span className={`inline-block px-3 py-1 ${member.color} text-primary-foreground rounded-full text-sm font-semibold mb-2`}>
                  {member.badge}
                </span>
                
                {/* Name */}
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                
                {/* Position */}
                <p className="text-sm text-muted-foreground">
                  {member.position}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            टीप: सदस्यांचे फोटो अपलोड करून त्यांचे योग्य path (उदा. /images/members/30.jpeg) src मध्ये टाका. 
            सध्या फक्त श्रीमती. निर्मला कंबले यांचा फोटो (30.jpeg) जोडला आहे; इतरांसाठी तुम्ही फोटो अपलोड करून path अपडेट करा.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MembersSection;