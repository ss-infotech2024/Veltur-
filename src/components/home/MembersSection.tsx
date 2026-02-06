"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import swapnil from "../../../public/Swapnil.jpeg"
import manoj from "../../../public/Manoj.jpeg"
import nandkishor from "../../../public/Nandkishor.jpeg"

// Leadership team members
const leadershipMembers = [
  {
    name: "श्री. सुधाकर रामरावजी भोयर",
    position: "सरपंच",
    badge: "सरपंच",
    color: "bg-orange-500",
    image: "/20.jpeg",
    highlight: true,
  },
  {
    name: "श्री. नंदकिशोर नारायणजी काकडे",
    position: "उपसरपंच",
    badge: "उपसरपंच",
    color: "bg-yellow-500",
    image: "/35.jpeg",
  },
  {
    name: "श्री. अशोक शंकरराव रोडे",
    position: "ग्रामपंचायत अधिकारी",
    badge: "ग्रामपंचायत अधिकारी",
    color: "bg-primary",
    image: "/21.jpeg",
  },
  {
    name: "सौ. सोनाली शंकरराव राऊत",
    position: "आशा कार्यकर्ता (उपकेंद्र वाकी)",
    badge: "आशा कार्यकर्ता",
    color: "bg-primary",
    image: "/6.jpeg",
  },
  {
    name: "श्री. विष्णू कोंडबाजी हजारे",
    position: "सहाय्यक शिक्षक",
    badge: "सहाय्यक शिक्षक",
    color: "bg-primary",
    image: "/24.jpeg",
  },
  {
    name: "श्रीमती. कुंदा देवीदासजी मोहोड",
    position: "अंगणवाडी सेविका",
    badge: "अंगणवाडी सेविका",
    color: "bg-primary",
    image: "/29.jpeg",
  },
  {
    name: "सौ. सुनिता सुभाषरावजी मालापुरे",
    position: "मुख्याध्यापिका",
    badge: "मुख्याध्यापिका",
    color: "bg-primary",
    image: "/23.jpeg",
  },
];

// Panchayat Members
const panchayatMembers = [
  { name: "श्रीमती. सरला सूर्यभानजी मडावी", position: "ग्रामपंचायत सदस्य", badge: "सदस्य", color: "bg-primary", image: "/1.jpeg" },
  { name: "श्रीमती. निर्मला ज्ञानदेवजी कांबळे", position: "ग्रामपंचायत सदस्य", badge: "सदस्य", color: "bg-primary", image: "/30.jpeg" },
  { name: "श्री. गणेश संपतराव डाखोळे", position: "ग्रामपंचायत सदस्य", badge: "सदस्य", color: "bg-primary", image: "/33.jpeg" },
  { name: "सौ. प्रेमिला पामाजी उके", position: "ग्रामपंचायत सदस्य", badge: "सदस्य", color: "bg-primary", image: "/31.jpeg" },
  { name: "सौ. रोशनी राजेशजी चिकटे", position: "ग्रामपंचायत सदस्य", badge: "सदस्य", color: "bg-primary", image: "/34.jpeg" },
  { name: "श्री. प्रफुल्ल रमेशराव कडू", position: "ग्रामपंचायत सदस्य", badge: "सदस्य", color: "bg-primary", image: "/22(1).jpeg" },
];

// ✅ Staff Members Added
// ✅ Staff Members
const staffMembers = [
  {
    name: "श्री. नंदकिशोर किसानाजी मोंढे",
    position: "ग्राम रोजगार सेवक व विद्युत कर्मचारी",
    badge: "कर्मचारी",
    color: "bg-green-600",
    image: nandkishor,
  },
  {
    name: "श्री. स्वप्निल बन्सीधरजी निकोसे",
    position: "डेटा एंट्री ऑपरेटर",
    badge: "कर्मचारी",
    color: "bg-green-600",
    image: swapnil,
  },
  {
    name: "श्री. मनोज गणपताराजी चिकाटे",
    position: "जी.पी. कर्मचारी",
    badge: "कर्मचारी",
    color: "bg-green-600",
    image: manoj,
  },
];


// ⭐ Member Card
const MemberCard = ({ member }: any) => {
  const isVIP = member.highlight;

  return (
    <Card
      className={`
        group transition-all duration-300 hover:-translate-y-2
        ${isVIP
          ? "w-[300px] shadow-2xl border-2 border-yellow-400 scale-105 bg-gradient-to-b from-yellow-50 to-white"
          : "w-[240px] shadow-lg border border-border/60 bg-card"}
      `}
    >
      <CardContent className="p-6 text-center">

        {/* Avatar */}
        <div className="relative mx-auto mb-4">
          <div
            className={`
              ${isVIP ? "w-36 h-36 ring-4 ring-yellow-400" : "w-28 h-28"}
              rounded-full overflow-hidden mx-auto shadow-xl
            `}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Badge */}
        <span
          className={`inline-block px-3 py-1 mb-2 text-xs font-semibold rounded-full text-white ${member.color}`}
        >
          {member.badge}
        </span>

        {/* Name */}
        <h3 className={`font-bold leading-snug ${isVIP ? "text-xl" : "text-lg"}`}>
          {member.name}
        </h3>

        {/* Position */}
        <p className={`mt-1 font-medium ${isVIP ? "text-yellow-600" : "text-primary"}`}>
          {member.position}
        </p>

        {isVIP && (
          <div className="mt-2 text-xs font-semibold text-yellow-600">
            ⭐ ग्रामपंचायत प्रमुख
          </div>
        )}

      </CardContent>
    </Card>
  );
};


const TeamAndMembersSection = () => {

  const allMembers = [
    ...leadershipMembers,
    ...panchayatMembers,
    ...staffMembers,
  ];

  return (
    <div className="bg-gradient-to-b from-background to-secondary/20">
      <section className="py-16">
        <div className="container mx-auto px-4">

          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              आमचे प्रतिनिधी आणि कर्मचारी
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ग्रामपंचायत संघ
            </h2>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              वेलतूर गावाच्या विकासासाठी कार्यरत असलेले प्रतिनिधी आणि कर्मचारी
            </p>
          </div>

          <Tabs defaultValue="all">

            <div className="flex justify-center mb-10">
              <TabsList className="rounded-full">
                <TabsTrigger value="all">सर्व</TabsTrigger>
                <TabsTrigger value="leadership">नेतृत्व</TabsTrigger>
                <TabsTrigger value="panchayat">प्रतिनिधी</TabsTrigger>
                <TabsTrigger value="staff">कर्मचारी</TabsTrigger>
              </TabsList>
            </div>

            {/* ALL */}
            <TabsContent value="all">
              <div className="flex flex-wrap justify-center gap-8">
                {allMembers.map((m, i) => (
                  <MemberCard key={i} member={m} />
                ))}
              </div>
            </TabsContent>

            {/* Leadership */}
            <TabsContent value="leadership">
              <div className="flex flex-wrap justify-center gap-8">
                {leadershipMembers.map((m, i) => (
                  <MemberCard key={i} member={m} />
                ))}
              </div>
            </TabsContent>

            {/* Panchayat */}
            <TabsContent value="panchayat">
              <div className="flex flex-wrap justify-center gap-8">
                {panchayatMembers.map((m, i) => (
                  <MemberCard key={i} member={m} />
                ))}
              </div>
            </TabsContent>

            {/* ✅ Staff */}
            <TabsContent value="staff">
              <div className="flex flex-wrap justify-center gap-8">
                {staffMembers.map((m, i) => (
                  <MemberCard key={i} member={m} />
                ))}
              </div>
            </TabsContent>

          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default TeamAndMembersSection;
