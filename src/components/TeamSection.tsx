"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import bdoimage from "../../public/BOD.png";

interface Leader {
  name: string;
  title: string;
  party: string;
  image: string;
}

const leaders: Leader[] = [
  {
    name: "देवेंद्र फडणवीस",
    title: "माननीय मुख्यमंत्री, महाराष्ट्र",
    party: "भाजप",
    image:
      "https://media.assettype.com/freepressjournal/2025-03-25/kyd5ikza/20250324142L.jpg?width=1200",
  },
  {
    name: "एकनाथ शिंदे",
    title: "माननीय उपमुख्यमंत्री, महाराष्ट्र",
    party: "शिवसेना (शिंदे गट)",
    image:
      "https://images.moneycontrol.com/static-hindinews/2024/11/Eknath-Shinde-1.jpg?impolicy=website&width=770&height=431",
  },
  {
    name: "सुनेत्रा पवार",
    title: "माननीय उपमुख्यमंत्री, महाराष्ट्र",
    party: "राष्ट्रवादी काँग्रेस पक्ष",
    image:
      "https://sc0.blr1.cdn.digitaloceanspaces.com/article/199057-woagcldveq-1709730300.jpg",
  },
  {
    name: "विनायक महामुनी",
    title: "मुख्य कार्यकारी अधिकारी",
    party: "जिल्हा परिषद नागपूर",
    image:
      "https://static.toiimg.com/thumb/msid-112908113,width-1280,height-720,resizemode-72/112908113.jpg",
  },
  {
    name: "श्री मनोजकुमार हिरुडकर",
    title: "गट विकास अधिकारी",
    party: "पंचायत समिती सावनेर",
    image: bdoimage,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

export default function LeadershipSection() {
  return (
    <section className="py-16 bg-muted/50 overflow-hidden">
      <div className="container mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 px-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            महाराष्ट्र सरकार नेतृत्व
          </h2>

          <p className="text-lg text-muted-foreground mt-2">
            आमचे मार्गदर्शक नेते आणि प्रशासकीय अधिकारी
          </p>
        </motion.div>

        {/* ONE LINE CARD ROW */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            flex gap-8 
            overflow-x-auto 
            px-6 
            pb-6
            scroll-smooth
          "
        >
          {leaders.map((leader) => (
            <motion.div
              key={leader.name}
              variants={itemVariants}
              className="flex-shrink-0"
            >
              <Card
                className="
                  w-[270px] 
                  text-center 
                  group 
                  cursor-pointer
                  shadow-lg 
                  hover:shadow-2xl
                  transition-all
                  duration-300
                  hover:-translate-y-3
                  border
                "
              >
                <CardContent className="p-6">

                  {/* Image */}
                  <div className="
                    w-36 h-36 
                    mx-auto mb-5 
                    rounded-full 
                    overflow-hidden 
                    border-4 
                    border-primary/20 
                    group-hover:border-primary/50
                    transition-all
                  ">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="
                        w-full h-full object-cover
                        group-hover:scale-110
                        transition-transform duration-500
                      "
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          leader.name
                        )}&background=7B1818&color=fff&bold=true&size=256`;
                      }}
                    />
                  </div>

                  {/* Name */}
                  <h3 className="font-bold text-lg text-foreground mb-1">
                    {leader.name}
                  </h3>

                  {/* Title */}
                  <p className="text-primary font-medium text-sm">
                    {leader.title}
                  </p>

                  {/* Party */}
                  <p className="text-muted-foreground text-sm mt-1">
                    {leader.party}
                  </p>

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
