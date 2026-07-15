"use client";
import { motion } from "framer-motion";

const usage = [
  { label:"Direct Program Expenses", pct:78, color:"var(--green)" },
  { label:"Volunteer Training",       pct:12, color:"var(--gold)"  },
  { label:"Operations",               pct:7,  color:"var(--terra)" },
  { label:"Fundraising",              pct:3,  color:"var(--blue)"  },
];

const reports = [
  { year:"2023–24", items:["25,000 Lives","₹2.4 Cr Utilized","50 Projects"],  color:"var(--green)" },
  { year:"2022–23", items:["18,000 Lives","₹1.8 Cr Utilized","38 Projects"],  color:"var(--gold)"  },
  { year:"2021–22", items:["12,000 Lives","₹1.2 Cr Utilized","25 Projects"],  color:"var(--terra)" },
];

export default function ImpactReports() {
  return (
    <section className="section-pad bg-warm">
      <div className="wrap">
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"5rem", alignItems:"start" }} className="rep-grid">

          {/* Fund allocation */}
          <motion.div initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.7}}>
            <span className="eyebrow">Transparency</span>
            <h2 style={{ marginBottom:"1.25rem" }}>How we use<br/><em>your donation</em></h2>
            <p style={{ marginBottom:"2rem", lineHeight:1.8 }}>
              78 paise of every rupee goes directly to our programs. We publish full audited accounts every year — no exceptions.
            </p>
            <div style={{ display:"flex", flexDirection:"column", gap:18 }}>
              {usage.map((u, i) => (
                <div key={i}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"baseline", marginBottom:8 }}>
                    <span style={{ fontFamily:"var(--sans)", fontWeight:500, fontSize:"0.9rem", color:"var(--ink-2)" }}>{u.label}</span>
                    <span style={{ fontFamily:"var(--serif)", fontWeight:700, fontSize:"1.1rem", color:u.color }}>{u.pct}%</span>
                  </div>
                  <div style={{ height:6, background:"var(--border)", borderRadius:3, overflow:"hidden" }}>
                    <motion.div
                      initial={{ width:0 }}
                      whileInView={{ width:`${u.pct}%` }}
                      viewport={{ once:true }}
                      transition={{ duration:1.3, delay:i*0.15, ease:[0.22,1,0.36,1] }}
                      style={{ height:"100%", background:u.color, borderRadius:3 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Annual reports */}
          <motion.div initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.7}}>
            <span className="eyebrow">Annual Reports</span>
            <h2 style={{ marginBottom:"1.5rem" }}>Download our<br/><em>impact reports</em></h2>
            <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
              {reports.map((r, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x:4 }}
                  style={{
                    display:"flex", justifyContent:"space-between", alignItems:"center", gap:"1rem",
                    padding:"1.5rem",
                    background:"var(--surface)",
                    border:"1px solid var(--border)",
                    borderRadius:"var(--r-lg)",
                    cursor:"pointer",
                    boxShadow:"var(--shadow-sm)",
                    transition:"all 0.2s var(--ease)",
                  }}
                >
                  <div>
                    <div style={{ fontFamily:"var(--serif)", fontWeight:700, fontSize:"1.3rem", color:r.color, marginBottom:6 }}>{r.year}</div>
                    <div style={{ display:"flex", flexWrap:"wrap", gap:10 }}>
                      {r.items.map((it,j) => (
                        <span key={j} style={{ fontFamily:"var(--sans)", fontSize:"0.78rem", color:"var(--ink-3)", display:"flex", alignItems:"center", gap:4 }}>
                          <span style={{ color:r.color }}>✓</span> {it}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button style={{
                    padding:"8px 16px", borderRadius:"var(--r-pill)",
                    background:"var(--bg-alt)", border:"1px solid var(--border)",
                    fontFamily:"var(--sans)", fontWeight:600, fontSize:"0.78rem",
                    color:"var(--ink-2)", cursor:"pointer", flexShrink:0,
                    transition:"all 0.2s",
                  }}
                    onMouseEnter={e => { (e.target as HTMLElement).style.background = "var(--green)"; (e.target as HTMLElement).style.color = "white"; }}
                    onMouseLeave={e => { (e.target as HTMLElement).style.background = "var(--bg-alt)"; (e.target as HTMLElement).style.color = "var(--ink-2)"; }}
                  >
                    PDF ↓
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:860px){.rep-grid{grid-template-columns:1fr!important;gap:3rem!important;}}`}</style>
    </section>
  );
}
