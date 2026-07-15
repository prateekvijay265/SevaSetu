import type { Metadata } from "next";
import Volunteer from "@/components/Volunteer";
import Footer from "@/components/Footer";
import VolunteerFaq from "./faq";

export const metadata: Metadata = {
  title: "Volunteer | SevaSetu Foundation",
  description: "Volunteer with SevaSetu Foundation — choose from 6 roles, earn a certificate, and join 1,000+ change-makers across India.",
};

export default function VolunteerPage() {
  return (
    <>
      <section style={{
        paddingTop:"calc(var(--nav-h) + 5rem)", paddingBottom:"5rem",
        background:"var(--bg-alt)",
        position:"relative", overflow:"hidden",
      }}>
        <div style={{ position:"absolute", bottom:0, right:0, width:280, height:280, background:"var(--blue-light)", borderRadius:"60% 0 0 0", opacity:0.5, pointerEvents:"none" }} />
        <div className="wrap" style={{ position:"relative", zIndex:2 }}>
          <span className="eyebrow">Join the Movement</span>
          <h1 style={{ marginBottom:"1.25rem", maxWidth:560 }}>
            Give your time,<br/><em style={{ color:"var(--green)" }}>change a life</em>
          </h1>
          <p className="lead" style={{ maxWidth:500 }}>
            It doesn't take wealth to make a difference — it takes will. Choose a role that matches your passion and schedule.
          </p>
        </div>
      </section>
      <Volunteer />
      <VolunteerFaq />
      <Footer />
    </>
  );
}
