import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  { name: "श्री. सुरेश पवार", role: "ग्रामसेवक", emoji: "👨‍💼" },
  { name: "श्री. अमित वानखेडे", role: "कार्यालय सहायक", emoji: "👨‍💻" },
  { name: "श्री. राजू मेश्राम", role: "स्वच्छता कर्मचारी", emoji: "🧹" },
  { name: "श्रीमती कविता गजभिये", role: "डाटा एंट्री ऑपरेटर", emoji: "👩‍💻" },
  { name: "श्री. मनोज ढोरे", role: "जलपुरवठा कर्मचारी", emoji: "💧" },
  { name: "श्री. दिलीप कोडापे", role: "विद्युत कर्मचारी", emoji: "⚡" },
];

const TeamGallerySection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            आमची टीम
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ग्रामपंचायत कार्यसंघ
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            गावाच्या विकासासाठी अथक परिश्रम करणारे आमचे कर्मचारी
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="group bg-card border-2 border-border hover:border-saffron shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-4 text-center">
                {/* Avatar */}
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-cream to-secondary border-2 border-gold/50 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  {member.emoji}
                </div>
                
                {/* Name */}
                <h4 className="font-semibold text-foreground text-sm mb-1 line-clamp-1">
                  {member.name}
                </h4>
                
                {/* Role */}
                <p className="text-xs text-muted-foreground">
                  {member.role}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGallerySection;
