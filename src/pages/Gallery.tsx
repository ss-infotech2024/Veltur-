import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";

// Image imports - replace these with your actual images
import event1 from "/28.jpeg";
import event2 from "/3.jpeg";
import event3 from "/4.jpeg";
import event4 from "/5.jpeg";
import festival1 from "/7.jpeg";
import festival2 from "/8.jpeg";
import festival3 from "/9.jpeg";
import festival4 from "/10.jpeg";
import gramsabha1 from "/11.jpeg";
import gramsabha2 from "/12.jpeg";
import gramsabha3 from "/13.jpeg";
import gramsabha4 from "/14.jpeg";
import social1 from "/15.jpeg";
import social2 from "/16.jpeg";
import social3 from "/17.jpeg";
import social4 from "/18.jpeg";
import development1 from"/19.jpeg";
import development2 from "/f1.jpeg";
import development3 from "/f2.jpeg";
import development4 from "/f3.jpeg";
import team1 from "/f4.jpeg";
import team2 from "/26.jpeg";
import team3 from "/27.jpeg";
import team4 from "/2.jpeg";

const galleryItems = [
  // Events
  { 
    title: "स्वातंत्र्यदिन समारोह 2024", 
    image: event1,
    category: "कार्यक्रम"
  },
  { 
    title: "प्रजासत्ताक दिन", 
    image: event2,
    category: "कार्यक्रम"
  },
  { 
    title: "महिला दिन कार्यक्रम", 
    image: event3,
    category: "कार्यक्रम"
  },
  { 
    title: "शेतकरी मेळावा", 
    image: event4,
    category: "कार्यक्रम"
  },
  
  // Festivals
  { 
    title: "गणेशोत्सव", 
    image: festival1,
    category: "उत्सव"
  },
  { 
    title: "दिवाळी सण", 
    image: festival2,
    category: "उत्सव"
  },
  { 
    title: "होळी उत्सव", 
    image: festival3,
    category: "उत्सव"
  },
  { 
    title: "नवरात्री उत्सव", 
    image: festival4,
    category: "उत्सव"
  },
  
  // Gram Sabha
  { 
    title: "वार्षिक ग्रामसभा 2024", 
    image: gramsabha1,
    category: "ग्रामसभा"
  },
  { 
    title: "विशेष ग्रामसभा", 
    image: gramsabha2,
    category: "ग्रामसभा"
  },
  { 
    title: "महिला ग्रामसभा", 
    image: gramsabha3,
    category: "ग्रामसभा"
  },
  { 
    title: "युवा ग्रामसभा", 
    image: gramsabha4,
    category: "ग्रामसभा"
  },
  
  // Social Activities
  { 
    title: "रक्तदान शिबीर", 
    image: social1,
    category: "सामाजिक उपक्रम"
  },
  { 
    title: "स्वच्छता अभियान", 
    image: social2,
    category: "सामाजिक उपक्रम"
  },
  { 
    title: "वृक्षारोपण", 
    image: social3,
    category: "सामाजिक उपक्रम"
  },
  { 
    title: "आरोग्य शिबीर", 
    image: social4,
    category: "सामाजिक उपक्रम"
  },
  
  // Development Works
  { 
    title: "रस्ते बांधकाम", 
    image: development1,
    category: "विकासकामे"
  },
  { 
    title: "पाणी टाकी उद्घाटन", 
    image: development2,
    category: "विकासकामे"
  },
  { 
    title: "शौचालय बांधकाम", 
    image: development3,
    category: "विकासकामे"
  },
  { 
    title: "एलईडी दिवे", 
    image: development4,
    category: "विकासकामे"
  },
  
  // Team Gallery
  { 
    title: "ग्रामसेवक कार्यालय", 
    image: team1,
    category: "टीम गॅलरी"
  },
  { 
    title: "कर्मचारी टीम", 
    image: team2,
    category: "टीम गॅलरी"
  },
  { 
    title: "स्वच्छता कर्मचारी", 
    image: team3,
    category: "टीम गॅलरी"
  },
  { 
    title: "ग्रामपंचायत सदस्य", 
    image: team4,
    category: "टीम गॅलरी"
  },
];

const Gallery = () => {
  return (
    <Layout>
      <Helmet>
        <title>फोटो गॅलरी | वेलतूर ग्रामपंचायत</title>
        <meta name="description" content="वेलतूर ग्रामपंचायतीचे कार्यक्रम, उत्सव, ग्रामसभा आणि विकासकामांचे फोटो." />
      </Helmet>

      <div className="relative h-96 md:h-[60vh] overflow-hidden">
      {/* Background Image */}
      <img
        src="/28.jpeg"
        alt="वेलतूर ग्रामपंचायत गॅलरी हीरो"
        className="absolute inset-0 w-full h-full object-cover"
      />
      </div>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <Card 
                key={index} 
                className="group bg-card border-2 border-border hover:border-primary overflow-hidden cursor-pointer transition-all duration-300 shadow-card hover:shadow-xl hover:-translate-y-1"
              >
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                        // Fallback if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = `https://via.placeholder.com/400x400/3b82f6/ffffff?text=${encodeURIComponent(item.title)}`;
                      }}
                    />
                  </div>
                  
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Placeholder for more images */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">अधिक फोटो लवकरच...</p>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-2 opacity-50">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="aspect-square rounded-lg bg-secondary"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;