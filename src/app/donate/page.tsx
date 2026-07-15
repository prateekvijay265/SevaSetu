import type { Metadata } from "next";
import Donation from "@/components/Donation";
import Footer from "@/components/Footer";
import DonateTrust from "./trust";

export const metadata: Metadata = {
  title: "Donate | SevaSetu Foundation",
  description: "Support SevaSetu Foundation. 100% of your donation goes directly to programs. Tax-exempt under 80G. Donate once or monthly.",
};

export default function DonatePage() {
  return (
    <>
      <section style={{
        paddingTop:"calc(var(--nav-h) + 5rem)", paddingBottom:"5rem",
        background:"var(--green-pale)",
        position:"relative", overflow:"hidden",
      }}>
        <div style={{ position:"absolute", top:0, right:0, width:350, height:350, background:"var(--green-light)", borderRadius:"0 0 0 70%", opacity:0.5, pointerEvents:"none" }} />
        <div className="wrap" style={{ position:"relative", zIndex:2 }}>
          <span className="eyebrow">Make a Difference</span>
          <h1 style={{ marginBottom:"1.25rem", maxWidth:560 }}>
            Every rupee<br/><em style={{ color:"var(--green)" }}>changes a life</em>
          </h1>
          <p className="lead" style={{ maxWidth:480, marginBottom:"2rem" }}>
            100% of your donation reaches programs directly. No overhead, no bureaucracy — just real, measurable impact.
          </p>
          <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
            {[["🔒","Secure Payment"],["📜","80G Tax Exempt"],["📊","100% Transparent"]].map(([ic,lb]) => (
              <span key={lb} className="tag tag-green" style={{ padding:"7px 14px" }}>
                <span>{ic}</span> {lb}
              </span>
            ))}
          </div>
        </div>
      </section>
      <Donation />
      <DonateTrust />
      <Footer />
    </>
  );
}
