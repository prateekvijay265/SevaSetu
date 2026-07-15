"use client";
import { motion } from "framer-motion";

const faqs = [
  { q:"Do I need prior experience to volunteer?", a:"Not at all. We train every volunteer. What we need is your passion, reliability, and commitment to show up." },
  { q:"How much time do I need to commit?", a:"From 2 hours/week to full-time — we have options for every schedule. You choose what fits your life." },
  { q:"Can I volunteer remotely?", a:"Many roles — digital support, content creation, remote tutoring — are fully remote. We welcome volunteers from anywhere in India." },
  { q:"Will I receive a certificate?", a:"All volunteers receive an official SevaSetu certificate upon completing 50+ hours of service, verified by our team." },
  { q:"Is there an age requirement?", a:"You must be 16+. Volunteers under 18 need parental consent. There is absolutely no upper age limit." },
  { q:"Can companies partner for corporate volunteering?", a:"Yes! We welcome CSR partnerships, university collaborations, and group volunteering programs. Email us at hello@sevasetu.org." },
];

export default function VolunteerFaq() {
  return (
    <section className="section-pad bg-cream" style={{ position:"relative" }}>
      <div className="wrap-narrow">
        <div style={{ marginBottom:"3rem" }}>
          <span className="eyebrow">Common Questions</span>
          <h2>Got questions?<br/><em>We've got answers.</em></h2>
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
          {faqs.map((faq, i) => (
            <motion.details
              key={i}
              initial={{ opacity:0, y:12 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ delay:i*0.07, duration:0.45 }}
              style={{
                background:"var(--surface)",
                border:"1px solid var(--border)",
                borderRadius:"var(--r-md)",
                overflow:"hidden",
                boxShadow:"var(--shadow-sm)",
              }}
            >
              <summary style={{
                padding:"1.25rem 1.5rem",
                display:"flex", justifyContent:"space-between", alignItems:"center", gap:16,
                fontFamily:"var(--sans)", fontWeight:600, fontSize:"0.95rem", color:"var(--ink)",
                cursor:"pointer",
                userSelect:"none",
              }}>
                {faq.q}
                <span style={{ color:"var(--green)", fontSize:"1.25rem", flexShrink:0, fontWeight:300, lineHeight:1 }}>+</span>
              </summary>
              <div style={{ padding:"0 1.5rem 1.25rem", fontFamily:"var(--sans)", fontSize:"0.9rem", color:"var(--ink-3)", lineHeight:1.75 }}>
                {faq.a}
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
