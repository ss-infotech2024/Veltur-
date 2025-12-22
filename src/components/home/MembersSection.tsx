"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User } from "lucide-react"; // Add this import

// Leadership team members (with images)
const leadershipMembers = [
  {
    name: "श्री. सुधाकर रामरावजी भोयर",
    position: "सरपंच",
    badge: "सरपंच",
    color: "bg-saffron",
    icon: <User className="w-8 h-8" />,
    image: "/20.jpeg",
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
    image: "/23.jpeg",
  },
];

// Staff members (without images)
const staffMembers = [
  { name: "श्री. सुरेश पवार", role: "ग्रामसेवक", emoji: "" },
  { name: "श्री. अमित वानखेडे", role: "कार्यालय सहायक", emoji: "" },
  { name: "श्री. राजू मेश्राम", role: "स्वच्छता कर्मचारी", emoji: "" },
  { name: "श्रीमती कविता गजभिये", role: "डाटा एंट्री ऑपरेटर", emoji: "" },
  { name: "श्री. मनोज ढोरे", role: "जलपुरवठा कर्मचारी", emoji: "" },
  { name: "श्री. दिलीप कोडापे", role: "विद्युत कर्मचारी", emoji: "" },
];

const panchayatMembers = [
  {
    name: "श्रीमती. सरला सूर्यभानजी मडावी",
    position: "ग्रामपंचायत सदस्य",
    badge: "सदस्य",
    color: "bg-primary",
    image: "/1.jpeg",
  },
  {
    name: "श्रीमती. निर्मला ज्ञानदेवजी कांबळे",
    position: "ग्रामपंचायत सदस्य",
    badge: "सदस्य",
    color: "bg-primary",
    image: "/30.jpeg",
  },
  {
    name: "श्री. गणेश संपतराव दाखळे",
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
    name: "सौ. रोशनी राजेशजी चिकटे",
    position: "ग्रामपंचायत सदस्य",
    badge: "सदस्य",
    color: "bg-primary",
    image: "/34.jpeg",
  },
  {
    name: "श्री. प्रफुल्ल रमेशराव कडू",
    position: "ग्रामपंचायत सदस्य",
    badge: "सदस्य",
    color: "bg-primary",
    image: "/22(1).jpeg",
  },
];

// Combine all members with proper types
const allMembers = [
  ...leadershipMembers.map(member => ({
    ...member,
    type: "leadership" as const,
    hasImage: true
  })),
  ...panchayatMembers.map(member => ({
    ...member,
    type: "panchayat" as const,
    hasImage: true
  })),
  ...staffMembers.map(member => ({
    ...member,
    type: "staff" as const,
    hasImage: false,
    position: member.role,
    badge: member.role,
    color: "bg-saffron",
    image: null
  })),
];

const TeamAndMembersSection = () => {
  return (
    <div className="bg-gradient-to-b from-background to-secondary/20">
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Main Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-primary/20 to-saffron/20 text-primary rounded-full text-sm font-semibold mb-4 border border-primary/30">
              आमचे प्रतिनिधी आणि कर्मचारी
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              ग्रामपंचायत संघ
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              वेलतूर गावाच्या विकासासाठी कार्यरत असलेले प्रतिनिधी आणि कर्मचारी
            </p>
          </div>

          {/* Tabs for filtering */}
          <Tabs defaultValue="all" className="mb-12">
            <div className="flex justify-center">
              <TabsList className="bg-muted/50 p-1 rounded-full border border-border">
                <TabsTrigger
                  value="all"
                  className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                >
                  सर्व
                </TabsTrigger>
                <TabsTrigger
                  value="leadership"
                  className="rounded-full px-6 py-2 data-[state=active]:bg-gold data-[state=active]:text-white transition-all"
                >
                  नेतृत्व
                </TabsTrigger>
                <TabsTrigger
                  value="panchayat"
                  className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                >
                  प्रतिनिधी
                </TabsTrigger>
                <TabsTrigger
                  value="staff"
                  className="rounded-full px-6 py-2 data-[state=active]:bg-saffron data-[state=active]:text-white transition-all"
                >
                  कर्मचारी
                </TabsTrigger>
              </TabsList>
            </div>

            {/* All Members Carousel */}
            <TabsContent value="all" className="mt-8">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                  slidesToScroll: 1,
                }}
                className="w-full max-w-7xl mx-auto"
              >
                <CarouselContent className="-ml-4">
                  {allMembers.map((member, index) => (
                    <CarouselItem
                      key={index}
                      className={`pl-4 ${member.type === "staff" ? "basis-full md:basis-1/2 lg:basis-1/4" : "basis-full md:basis-1/2 lg:basis-1/3"}`}
                    >
                      <Card className={`group bg-card/90 backdrop-blur-sm border border-border/60 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full hover:-translate-y-3
                        ${member.type === "leadership" ? "hover:border-gold/40" :
                          member.type === "staff" ? "hover:border-saffron/40" :
                            "hover:border-primary/40"}`}>
                        <CardContent className="p-6 text-center">
                          {/* Avatar/Image */}
                          <div className="relative mx-auto mb-5">
                            {member.hasImage ? (
                              <>
                                <div className="relative w-40 h-40 mx-auto">
                                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-gold/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                                    <img
                                      src={member.image}
                                      alt={member.name}
                                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                  </div>
                                </div>
                                <span className={`inline-block px-4 py-1.5 mt-4 ${member.color} text-primary-foreground rounded-full text-xs font-bold tracking-wide`}>
                                  {member.badge}
                                </span>
                              </>
                            ) : (
                              <div className="relative w-32 h-32 mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-br from-saffron/30 to-gold/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500" />
                                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-cream to-saffron/20 border-4 border-gold/60 flex items-center justify-center text-5xl shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                  {member.icon || <User className="w-16 h-16 text-saffron" />}
                                </div>
                                <span className={`inline-block px-4 py-1.5 mt-4 ${member.color} text-primary-foreground rounded-full text-xs font-bold tracking-wide`}>
                                  {member.badge}
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Name */}
                          <h3 className={`font-bold mb-2 leading-tight ${member.type === "staff" ? "text-lg" : "text-xl"}`}>
                            {member.name}
                          </h3>

                          {/* Role/Position */}
                          <p className={`font-medium ${member.type === "leadership" ? "text-gold" : member.type === "staff" ? "text-saffron" : "text-primary"}`}>
                            {member.position}
                          </p>

                          {/* Type Badge */}
                          <div className="mt-4 pt-4 border-t border-border/50">
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold 
                              ${member.type === "leadership" ? "bg-gold/10 text-gold" :
                                member.type === "staff" ? "bg-saffron/10 text-saffron" :
                                  "bg-primary/10 text-primary"}`}>
                              {member.type === "leadership" ? "नेतृत्व" :
                                member.type === "staff" ? "कर्मचारी" :
                                  "प्रतिनिधी"}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-12 hidden lg:flex" />
                <CarouselNext className="-right-12 hidden lg:flex" />
              </Carousel>
            </TabsContent>

            {/* Leadership Members Only */}
            <TabsContent value="leadership">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full max-w-7xl mx-auto"
              >
                <CarouselContent className="-ml-4">
                  {leadershipMembers.map((member, index) => (
                    <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                      <Card className="group bg-card/90 backdrop-blur-sm border border-border/60 hover:border-gold/40 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full hover:-translate-y-3">
                        <CardContent className="p-6 text-center">
                          <div className="relative w-40 h-40 mx-auto mb-5">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-gold/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                              <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                          </div>
                          <span className={`inline-block px-4 py-1.5 ${member.color} text-primary-foreground rounded-full text-xs font-bold mb-3 tracking-wide`}>
                            {member.badge}
                          </span>
                          <h3 className="text-xl font-bold mb-2 leading-tight">
                            {member.name}
                          </h3>
                          <p className="text-gold font-medium">
                            {member.position}
                          </p>
                          <div className="mt-4 pt-4 border-t border-border/50">
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gold/10 text-gold">
                              नेतृत्व
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-12 hidden lg:flex" />
                <CarouselNext className="-right-12 hidden lg:flex" />
              </Carousel>
            </TabsContent>

            {/* Panchayat Members Only */}
            <TabsContent value="panchayat">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full max-w-7xl mx-auto"
              >
                <CarouselContent className="-ml-4">
                  {panchayatMembers.map((member, index) => (
                    <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                      <Card className="group bg-card/90 backdrop-blur-sm border border-border/60 hover:border-primary/40 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full hover:-translate-y-3">
                        <CardContent className="p-6 text-center">
                          <div className="relative w-40 h-40 mx-auto mb-5">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-gold/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                              <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                          </div>
                          <span className={`inline-block px-4 py-1.5 ${member.color} text-primary-foreground rounded-full text-xs font-bold mb-3 tracking-wide`}>
                            {member.badge}
                          </span>
                          <h3 className="text-xl font-bold mb-2 leading-tight">
                            {member.name}
                          </h3>
                          <p className="text-primary font-medium">
                            {member.position}
                          </p>
                          <div className="mt-4 pt-4 border-t border-border/50">
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                              प्रतिनिधी
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-12 hidden lg:flex" />
                <CarouselNext className="-right-12 hidden lg:flex" />
              </Carousel>
            </TabsContent>

            {/* Staff Members Only */}
            <TabsContent value="staff">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full max-w-7xl mx-auto"
              >
                <CarouselContent className="-ml-4">
                  {staffMembers.map((member, index) => (
                    <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/4">
                      <Card className="group bg-card/90 backdrop-blur-sm border border-border/60 hover:border-saffron/40 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full hover:-translate-y-3">
                        <CardContent className="p-6 text-center">
                          <div className="relative w-32 h-32 mx-auto mb-5">
                            <div className="absolute inset-0 bg-gradient-to-br from-saffron/30 to-gold/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500" />
                            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-cream to-saffron/20 border-4 border-gold/60 flex items-center justify-center text-5xl shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                              <User className="w-16 h-16 text-saffron" />
                            </div>
                          </div>
                          <span className="inline-block px-4 py-1.5 bg-saffron text-white rounded-full text-xs font-bold mb-3 tracking-wide">
                            {member.role}
                          </span>
                          <h3 className="text-lg font-bold mb-2 leading-tight">
                            {member.name}
                          </h3>
                          <p className="text-saffron font-medium">
                            {member.role}
                          </p>
                          <div className="mt-4 pt-4 border-t border-border/50">
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-saffron/10 text-saffron">
                              कर्मचारी
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-12 hidden lg:flex" />
                <CarouselNext className="-right-12 hidden lg:flex" />
              </Carousel>
            </TabsContent>
          </Tabs>

          {/* Mobile Navigation Instructions */}
          <div className="mt-8 text-center lg:hidden">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <span className="text-lg">👉</span>
              स्वाइप करून बाकीचे सदस्य पहा
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamAndMembersSection;