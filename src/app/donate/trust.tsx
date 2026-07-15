"use client";
import { motion } from "framer-motion";

const tiers = [
  { tier:"Platinum", count:"15+",  range:"₹1L+ annually",     color:"var(--green)", bg:"var(--green-light)" },
  { tier:"Gold",     count:"85+",  range:"₹25k–1L annually",  color:"var(--gold)",  bg:"var(--gold-light)"  },
  { tier:"Silver",   count:"350+", range:"₹5k–25k annually",  color:"var(--ink-3)", bg:"var(--bg-alt)"      },
  { tier:"Community",count:"2k+",  range:"Up to ₹5k annually",color:"var(--blue)",  bg:"var(--blue-light)"  },
];

export default function DonateTrust() {
  return (
    <section className="section-pad bg-white">
      <div className="wrap">
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:"3rem", flexWrap:"wrap", gap:"1.5rem" }}>
          <div>
            <span className="eyebrow">Our Champions</span>
            <h2 style={{ marginBottom:0 }}>Thank you,<br/><em>generous souls</em></h2>
          </div>
          <p style={{ maxWidth:360, color:"var(--ink-3)", fontSize:"0.9rem", lineHeight:1.75, alignSelf:"flex-end" }}>
            Our donors are the backbone of everything we do. Every tier, every amount, creates real ripples.
          </p>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"1.25rem" }} className="tiers-grid">
          {tiers.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity:0, y:16 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ delay:i*0.1, duration:0.5 }}
              whileHover={{ y:-4, boxShadow:"var(--shadow-md)" }}
              style={{
                padding:"2rem 1.5rem",
                background:t.bg,
                border:"1px solid var(--border)",
                borderRadius:"var(--r-lg)",
                textAlign:"center",
                boxShadow:"var(--shadow-sm)",
                transition:"all 0.25s var(--ease)",
              }}
            >
              <div style={{ fontFamily:"var(--serif)", fontWeight:700, fontSize:"2.5rem", color:t.color, lineHeight:1, marginBottom:6 }}>{t.count}</div>
              <div style={{ fontFamily:"var(--sans)", fontWeight:700, fontSize:"0.9rem", color:"var(--ink)", marginBottom:4 }}>{t.tier} Donors</div>
              <div style={{ fontFamily:"var(--sans)", fontSize:"0.78rem", color:"var(--ink-3)" }}>{t.range}</div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.tiers-grid{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
    </section>
  );
}
