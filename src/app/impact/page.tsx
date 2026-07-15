import type { Metadata } from "next";
import Statistics from "@/components/Statistics";
import ImpactMap from "@/components/ImpactMap";
import SuccessStories from "@/components/SuccessStories";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import ImpactReports from "./reports";

export const metadata: Metadata = {
  title: "Impact | SevaSetu Foundation",
  description: "Discover the real impact of SevaSetu — 25,000+ lives changed across India, with full financial transparency.",
};

export default function ImpactPage() {
  return (
    <>
      <section style={{
        paddingTop:"calc(var(--nav-h) + 5rem)", paddingBottom:"5rem",
        background:"var(--green-pale)",
        position:"relative", overflow:"hidden",
      }}>
        <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"40%", background:"linear-gradient(to top, var(--surface), transparent)", pointerEvents:"none" }} />
        <div className="wrap" style={{ position:"relative", zIndex:2 }}>
          <span className="eyebrow">Our Impact</span>
          <h1 style={{ marginBottom:"1.25rem", maxWidth:600 }}>
            Measuring what<br/><em style={{ color:"var(--green)" }}>truly matters</em>
          </h1>
          <p className="lead" style={{ maxWidth:520 }}>
            Behind every statistic is a human story. Explore the depth of our impact — and hold us accountable.
          </p>
        </div>
      </section>
      <Statistics />
      <ImpactMap />
      <SuccessStories />
      <ImpactReports />
      <Gallery />
      <Footer />
    </>
  );
}
