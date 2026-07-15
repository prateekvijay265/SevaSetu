import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import About from "@/components/About";
import Programs from "@/components/Programs";
import ImpactMap from "@/components/ImpactMap";
import SuccessStories from "@/components/SuccessStories";
import Donation from "@/components/Donation";
import Volunteer from "@/components/Volunteer";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SevaSetu Foundation | Bridging Service & Social Impact",
  description: "Empowering communities across India through education, women empowerment, environment, and youth development since 2012.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Statistics />
      <About />
      <Programs />
      <ImpactMap />
      <SuccessStories />
      <Donation />
      <Volunteer />
      <Gallery />
      <Footer />
    </>
  );
}
