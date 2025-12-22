"use client";

interface Leader {
  name: string;
  title: string;
  image: string;
}

const leaders: Leader[] = [
  {
    name: "देवेंद्र फडणवीस",
    title: "माननीय मुख्यमंत्री",
    image: "https://media.assettype.com/freepressjournal/2025-01-05/fko1xjle/Ggi6h6gbcAA2ZJ.jpg?width=1200"
  },
  {
    name: "एकनाथ शिंदे",
    title: "माननीय उपमुख्यमंत्री",
    image: "https://www.newsonair.gov.in/wp-content/uploads/2024/11/64-Eknath-Shinde.jpg"
  },
  {
    name: "अजित पवार",
    title: "माननीय उपमुख्यमंत्री",
    image: "https://www.livehindustan.com/lh-img/smart/img/2024/09/05/1600x900/Ajit-Pawar--Helpline-0_1725544632678_1725544662953.JPG"
  },
  {
    name: "चंद्रशेखर बावनकुळे",
    title: "माननीय पालकमंत्री",
    image: "https://images.bhaskarassets.com/web2images/5483/2025/12/02/730-x-548-1-copy-71682683338-1_1764654997.jpg"
  },
  {
    name: "डॉ. विपिन इतानकर",
    title: "जिल्हा मुख्य अधिकारी",
    image: "https://www.abhijeetbharat.com/Encyc/2024/1/18/nagpur-collector-dr-vipin-i_202401181335040401_H@@IGHT_445_W@@IDTH_846.jpg"
  }
];

const LeadershipSection = () => {
  return (
    <div className="bg-gradient-to-b from-background via-white to-secondary/20">
      <section className="py-16 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-slate-100 opacity-20" />
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-saffron/5 to-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-tr from-primary/5 to-blue-500/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-primary/20 to-saffron/20 text-primary rounded-full text-sm font-semibold mb-4 border border-primary/30">
              राज्य नेतृत्व
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              महाराष्ट्र सरकार नेतृत्व
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              आमचे मार्गदर्शक नेते आणि प्रशासकीय अधिकारी
            </p>
          </div>

          {/* Leaders Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
              {leaders.map((leader, index) => (
                <div
                  key={leader.name}
                  className="group animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 h-full">

                    {/* Leader Image */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-gold/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                      <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl">
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(leader.name)}&background=7B1818&color=fff&bold=true&size=256`;
                            e.currentTarget.className = "w-full h-full object-cover bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center";
                          }}
                        />
                      </div>

                      {/* Badge based on role */}
                      <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg
                        ${leader.title.includes("मुख्यमंत्री")
                          ? "bg-gradient-to-r from-saffron to-gold"
                          : leader.title.includes("उपमुख्यमंत्री")
                            ? "bg-gradient-to-r from-primary to-blue-600"
                            : "bg-gradient-to-r from-emerald-600 to-emerald-500"
                        }`}>
                        {leader.title.includes("मुख्यमंत्री")
                          ? "मुख्यमंत्री"
                          : leader.title.includes("उपमुख्यमंत्री")
                            ? "उपमुख्यमंत्री"
                            : "अधिकारी"
                        }
                      </div>
                    </div>

                    {/* Leader Name */}
                    <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                      {leader.name}
                    </h3>

                    {/* Leader Title */}
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed min-h-[40px]">
                      {leader.title}
                    </p>

                    {/* Decorative Divider */}
                    <div className="mt-4 pt-4 border-t border-slate-200/50">
                      <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
                    </div>

                    {/* Hover Effect Indicator */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-flex items-center gap-1 text-xs text-primary font-medium">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                        </svg>
                        महाराष्ट्र सरकार
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>



          {/* Mobile Navigation Hint */}
          <div className="mt-8 text-center lg:hidden">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <span className="text-lg animate-pulse">👉</span>
              स्वाइप करून बाकीचे नेते पहा
            </p>
          </div>
        </div>

        {/* Animation styles */}
        <style jsx global>{`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out forwards;
            opacity: 0;
          }
          
          .bg-grid-slate-100 {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23e2e8f0'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
          }
          
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </section>
    </div>
  );
};

export default LeadershipSection;