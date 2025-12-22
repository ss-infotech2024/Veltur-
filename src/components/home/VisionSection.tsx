import { CheckCircle2, Calendar, Users, Trees } from "lucide-react";

const visionPoints = [
  "शुद्ध पाणीपुरवठा व जलस्रोत संवर्धन",
  "ग्राम स्वच्छता अभियान व स्वच्छ गाव",
  "शास्त्रोक्त कचरा व्यवस्थापन",
  "महिला सशक्तीकरण व बचत गट",
  "डिजिटल ग्रामपंचायत सेवा",
  "रस्ते व पायाभूत सुविधा विकास",
  "आरोग्य व शिक्षण सुविधा",
  "शेती व रोजगार निर्मिती",
];

const VisionSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Content */}
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              आमची दृष्टी
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              वेलतूर गावाचा<br />
              <span className="text-primary">विकास दृष्टिकोन</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              वेलतूर ग्रामपंचायत गावाच्या सर्वांगीण विकासासाठी वचनबद्ध आहे.
              स्वच्छता, पाणीपुरवठा, शिक्षण, आरोग्य आणि रोजगार निर्मिती या क्षेत्रात
              आम्ही सातत्याने काम करत आहोत.
            </p>

            {/* Vision points grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {visionPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-saffron mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm font-medium">{point}</span>
                </div>
              ))}
            </div>

            {/* Recent Activity Card - Original Provided Information Only */}
            <div className="bg-card border border-border rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-2 text-primary mb-3">
                <Calendar className="w-5 h-5" />
                <span className="text-sm font-medium">२५/०९/२०२५</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार हमी योजनेचे काम तपासणी कार्यक्रम
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                सावनेर : आज दिनांक २५/९/२०२५ रोजी महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार हमी योजनेचे काम तपासणी करिता मा आयुक्त मग्रारोहयो, नागपूर डॉ. भरत बास्टेवाड सर यांच्या उपस्थितीत ग्रामपंचायत वेलतूर ग्रामपंचायत ग्रामविकास अधिकारी रोडे जी, सरपंच सुधाकर भोयर, ग्राम रोजगार सेवक मोंढे तसेच तालुका कृषी अधिकारी व तालुकास्तरीय चमूच्या उपस्थितीत ग्रामपंचायत मधील कामाचे रेकॉर्ड, फुल शेती, फळबाग लागवड, तसेच रोपवाटिकेची कामे, पाहण्यात आली तसेच कामाच्या गुणवत्तेबाबत सूचना करण्यात आली.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                तसेच पाटणसावंगी येथील सामाजिक वनीकरण विभागाचे रोप वाटिकाचे काम आर एफ ओ प्रशांत हुमणे यांचे सहकारी बैस तसेच त्यांच्या चमू समक्ष रोपवाटिका च्या कामाची पाहणी करण्यात आली.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                यावेळी मा उपजिल्हाधिकारी रोहयो, नागपूर विशाल कुमार मेश्राम, राज्य एमआयएस समन्वयक अभय तिजारे, जिल्हा एमआयएस समन्वयक स्वाती कमाले, मा. तहसीलदार अक्षय पोयाम, सहा गट विकास अधिकारी नरेगा वंदना बेले, राऊंड ऑफिसर सामा. वनीकरण प्रशांत हुमणे, गटविकास अधिकारी मनोज कुमार हिरुडकर, कृषी सहाय्यक रोशन डंबारे, सहाय्यक कार्यक्रम अधिकारी नरेगा दिनेश सोमकुवर तसेच तालुका नरेगा टीम पंचायत समिती सावनेर प्रामुख्याने उपस्थित होते.
              </p>

              <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>मा. आयुक्त डॉ. भरत बास्टेवाड व टीम</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trees className="w-4 h-4" />
                  <span>फळबाग, रोपवाटिका व फुलशेती</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Original Images Gallery */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold text-foreground text-center">
              काम तपासणी कार्यक्रम दृश्ये (२५ सप्टेंबर २०२५)
            </h3>

            {/* Main large image - Top group photo */}
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-gold/20">
              <img 
                src="/f1.jpeg" 
                alt="मा. आयुक्त डॉ. भरत बास्टेवाड व टीमचे ग्रुप फोटो - रोपवाटिका समोर" 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Bottom two images in grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-gold/20">
                <img 
                  src="/f2.jpeg" 
                  alt="अधिकारी व टीमचे फील्ड व्हिजिट - रस्त्यावर चालताना" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-gold/20">
                <img 
                  src="/f3.jpeg" 
                  alt="रोपवाटिका व फळबाग लागवड तपासणी" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;