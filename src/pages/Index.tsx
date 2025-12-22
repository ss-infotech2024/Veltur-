import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import LeadershipSection from "@/components/home/LeadershipSection";
import VisionSection from "@/components/home/VisionSection";
import ServicesSection from "@/components/home/ServicesSection";
import StatsSection from "@/components/home/StatsSection";
import MembersSection from "@/components/home/MembersSection";
import TeamGallerySection from "@/components/home/TeamGallerySection";
import TeamSection from "@/components/TeamSection"
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <Layout>
     
      
      <HeroSection />
      {/* <LeadershipSection /> */}
      <TeamSection/>
      <VisionSection />
      <ServicesSection />
      <StatsSection />
      <MembersSection />
      <TeamGallerySection />
    </Layout>
  );
};

export default Index;
