"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import bdoimage from "../../public/BOD.png"

interface Leader {
  name: string;
  title: string;
  party: string;
  image: string;
}

const leaders: Leader[] = [
  {
    name: "देवेंद्र फडणवीस",
    title: "माननीय मुख्यमंत्री",
    party: "भाजप",
    image:
      "https://images.mid-day.com/images/images/2025/apr/devandra-0904_d.jpg",
  },
  {
    name: "एकनाथ शिंदे",
    title: "माननीय उपमुख्यमंत्री",
    party: "शिवसेना",
    image:
      "https://images.mid-day.com/images/images/2025/feb/Eknath-Shinde-new-file_d.jpg",
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
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function LeadershipSection() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            महाराष्ट्र सरकार नेतृत्व
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            आमचे मार्गदर्शक नेते आणि प्रशासकीय अधिकारी
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center max-w-6xl mx-auto"
        >
          {leaders.map((leader) => (
            <motion.div
              key={leader.name}
              variants={itemVariants}
              className="flex justify-center"
            >
              <Card className="w-[260px] overflow-hidden text-center group cursor-pointer shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-4 md:p-6">
                  <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-all">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          leader.name
                        )}&background=7B1818&color=fff&bold=true&size=256`;
                      }}
                    />
                  </div>

                  <h3 className="font-bold text-base md:text-lg text-foreground mb-1">
                    {leader.name}
                  </h3>

                  <p className="text-sm md:text-base text-primary font-medium">
                    {leader.title} • {leader.party}
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
