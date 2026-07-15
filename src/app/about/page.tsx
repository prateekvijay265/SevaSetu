import type { Metadata } from "next";
import About from "@/components/About";
import Statistics from "@/components/Statistics";
import Footer from "@/components/Footer";
import AboutExtras from "./extras";

export const metadata: Metadata = {
  title: "About | SevaSetu Foundation",
  description: "Learn about SevaSetu Foundation — our story, mission, vision, and the team behind 12 years of social impact across India.",
};

export default function AboutPage() {
  return (
    <>
      <section style={{
        paddingTop:"calc(var(--nav-h) + 5rem)", paddingBottom:"5rem",
        background:"var(--bg-warm)",
        position:"relative", overflow:"hidden",
      }}>
        <div style={{ position:"absolute", top:0, right:0, width:400, height:400, background:"var(--green-pale)", borderRadius:"0 0 0 60%", opacity:0.5, pointerEvents:"none" }} />
        <div className="wrap" style={{ position:"relative", zIndex:2 }}>
          <span className="eyebrow">Est. 2012</span>
          <h1 style={{ marginBottom:"1.25rem", maxWidth:600 }}>
            About <em style={{ color:"var(--green)" }}>SevaSetu</em> Foundation
          </h1>
          <p className="lead" style={{ maxWidth:560 }}>
            A grassroots movement turned national organization — committed to bridging the gap between privilege and potential, one community at a time.
          </p>
        </div>
      </section>
      <About />
      <Statistics />
      <AboutExtras />
      <Footer />
    </>
  );
}
