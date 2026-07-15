import type { Metadata } from "next";
import Programs from "@/components/Programs";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Programs | SevaSetu Foundation",
  description: "Explore SevaSetu's six core programs: Education, Women Empowerment, Environment, Animal Welfare, Community Welfare, and Youth Development.",
};

export default function ProgramsPage() {
  return (
    <>
      <section style={{
        paddingTop:"calc(var(--nav-h) + 5rem)", paddingBottom:"5rem",
        background:"var(--bg-alt)",
        position:"relative", overflow:"hidden",
      }}>
        <div style={{ position:"absolute", top:0, left:0, width:300, height:300, background:"var(--gold-light)", borderRadius:"0 0 60% 0", opacity:0.6, pointerEvents:"none" }} />
        <div className="wrap" style={{ position:"relative", zIndex:2 }}>
          <span className="eyebrow">What We Do</span>
          <h1 style={{ marginBottom:"1.25rem", maxWidth:580 }}>
            Six pillars of<br/><em style={{ color:"var(--green)" }}>lasting change</em>
          </h1>
          <p className="lead" style={{ maxWidth:520 }}>
            Each program is community-designed and community-led. We build <em>with</em> communities, not for them.
          </p>
        </div>
      </section>
      <Programs />
      <Footer />
    </>
  );
}
