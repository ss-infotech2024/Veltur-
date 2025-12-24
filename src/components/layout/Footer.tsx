import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Youtube, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">संपर्क</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 text-saffron" />
                <span>वेलतूर ग्रामपंचायत कार्यालय,<br />पो. दवकी, ता. सावकर,<br />जि. जामखेड, महाराष्ट्र</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-saffron" />
                <span>+91 9881851068 (आपत्कालीन)</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-saffron" />
                <span>grampanchayatveltur10@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={18} className="text-saffron" />
                <span>सोम - शनि: सकाळी 10 - संध्या 5</span>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">महत्त्वाचे दुवे</h3>
            <ul className="space-y-2">
              <li><Link to="/schemes" className="hover:text-saffron transition-colors">→ योजना</Link></li>
              <li><Link to="/documents" className="hover:text-saffron transition-colors">→ अर्ज नमुने</Link></li>
              <li><Link to="/documents" className="hover:text-saffron transition-colors">→ प्रमाणपत्रे</Link></li>
              <li><Link to="/gramsabha" className="hover:text-saffron transition-colors">→ ग्रामसभा</Link></li>
              <li><Link to="/downloads" className="hover:text-saffron transition-colors">→ डाउनलोड</Link></li>
              <li><Link to="/news" className="hover:text-saffron transition-colors">→ बातम्या</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">ग्रामपंचायत सेवा</h3>
            <ul className="space-y-2">
              <li><Link to="/documents" className="hover:text-saffron transition-colors">→ जन्म दाखला</Link></li>
              <li><Link to="/documents" className="hover:text-saffron transition-colors">→ मृत्यू दाखला</Link></li>
              <li><Link to="/documents" className="hover:text-saffron transition-colors">→ निवासी प्रमाणपत्र</Link></li>
              <li><Link to="/documents" className="hover:text-saffron transition-colors">→ उत्पन्न प्रमाणपत्र</Link></li>
              <li><Link to="/documents" className="hover:text-saffron transition-colors">→ बांधकाम परवाना</Link></li>
              <li><Link to="/documents" className="hover:text-saffron transition-colors">→ विवाह नोंदणी</Link></li>
            </ul>
          </div>


        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-maroon-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm">
            <p>© 2024 वेलतूर ग्रामपंचायत, पं.स. सावकर पं. जामखेड. सर्व हक्क राखीव.</p>
            <p>
              विकसित:{" "}
              <a
                href="https://ssinfotech.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-saffron font-medium hover:underline"
              >
                SS Infotech
              </a>
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
