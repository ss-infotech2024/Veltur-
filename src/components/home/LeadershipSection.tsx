import { Card, CardContent } from "@/components/ui/card";

const leaders = [
  {
    name: "मा. देवेंद्र फडणवीस",
    designation: "मुख्यमंत्री, महाराष्ट्र राज्य",
    role: "मा. मुख्यमंत्री",
  },
  {
    name: "मा. एकनाथ शिंदे",
    designation: "उपमुख्यमंत्री, महाराष्ट्र राज्य",
    role: "मा. उपमुख्यमंत्री",
  },
  {
    name: "मा. धर्मराव बाबा आत्राम",
    designation: "पालकमंत्री, गडचिरोली जिल्हा",
    role: "मा. पालकमंत्री",
  },
  {
    name: "श्री. संजय मीणा (IAS)",
    designation: "जिल्हा मुख्य कार्यकारी अधिकारी",
    role: "मा. जिल्हा CEO",
  },
];

const LeadershipSection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            महाराष्ट्र शासन
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            शासकीय नेतृत्व
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            महाराष्ट्र राज्याच्या विकासासाठी कार्यरत असलेले आमचे मार्गदर्शक नेते
          </p>
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((leader, index) => (
            <Card 
              key={index} 
              className="group bg-card border-2 border-border hover:border-gold shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                {/* Avatar placeholder */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-full gradient-hero border-4 border-gold flex items-center justify-center text-3xl text-primary-foreground group-hover:scale-105 transition-transform">
                  👤
                </div>
                
                {/* Role badge */}
                <span className="inline-block px-3 py-1 bg-saffron/20 text-saffron rounded-full text-xs font-semibold mb-3">
                  {leader.role}
                </span>
                
                {/* Name */}
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {leader.name}
                </h3>
                
                {/* Designation */}
                <p className="text-sm text-muted-foreground">
                  {leader.designation}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
