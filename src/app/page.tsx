"use client";

import Navbar from "@/components/pages-components/home/Navbar";
import HeroSection from "@/components/pages-components/home/HeroSection";
import CitiesSection from "@/components/pages-components/home/CitiesSection";
import CategoriesSection from "@/components/pages-components/home/CategoriesSection";
import BirthdayHallsSection from "@/components/pages-components/home/BirthdayHallsSection";
import BanquetHallsSection from "@/components/pages-components/home/BanquetHallsSection";
import EngagementAnniversarySection from "@/components/pages-components/home/EngagementAnniversarySection";
import VenueShowcase from "@/components/pages-components/home/VenueShowcase";
import PartyPlanningIdeas from "@/components/pages-components/home/PartyPlanningIdeas";
import TestimonialsSection from "@/components/pages-components/home/TestimonialsSection";
import FinalCTA from "@/components/pages-components/home/FinalCTA";
import Footer from "@/components/pages-components/home/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <CitiesSection />
      <BirthdayHallsSection />
      <BanquetHallsSection />
      <EngagementAnniversarySection />
      <VenueShowcase />
      <PartyPlanningIdeas />
      <TestimonialsSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
