"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const programs = [
  { id:"edu",   num:"01", icon:"📚", title:"Education",           color:"#1D6A45", colorBg:"#E8F2EC", accent:"Forest Green",
    headline:"Lighting the path forward",
    body:"From one-room tutoring centres in rural Bihar to digital skills labs in Delhi — we ensure every child has access to quality learning. Our scholarship program has put 5,000 children through school who would otherwise have dropped out.",
    tags:["Scholarships","Digital Labs","Tutoring","STEM"], stat:"5,000+", statLabel:"students enrolled" },
  { id:"wom",  num:"02", icon:"👩‍💼", title:"Women Empowerment",   color:"#C0533A", colorBg:"#FBEEE9", accent:"Terracotta",
    headline:"Breaking barriers, building leaders",
    body:"Microfinance loans, legal awareness workshops, skill training in tailoring, baking, and coding — we don't just provide resources, we help women build independent livelihoods and reclaim their agency.",
    tags:["Microfinance","Legal Aid","Skill Training","Leadership"], stat:"3,200+", statLabel:"women supported" },
  { id:"env",  num:"03", icon:"🌳", title:"Environment",           color:"#2E8B5E", colorBg:"#E0F0E9", accent:"Emerald",
    headline:"Healing the earth we share",
    body:"Watershed restoration, solar energy adoption, tree plantation drives and zero-waste communities. We believe ecological and social justice are inseparable — clean air and clean water are human rights.",
    tags:["Reforestation","Solar","Clean Water","Waste"], stat:"3M+", statLabel:"trees planted" },
  { id:"com",  num:"04", icon:"🏘️", title:"Community Welfare",     color:"#2558A0", colorBg:"#EBF1FA", accent:"Deep Blue",
    headline:"Stronger, together",
    body:"Free health camps, sanitation infrastructure, emergency relief, and nutrition drives. We show up for communities before, during, and after crises — because welfare is not charity, it's community.",
    tags:["Health Camps","Sanitation","Emergency Aid","Nutrition"], stat:"400+", statLabel:"villages served" },
  { id:"ani",  num:"05", icon:"🐾", title:"Animal Welfare",         color:"#B5722A", colorBg:"#FBF0E3", accent:"Warm Gold",
    headline:"Every life deserves compassion",
    body:"Rescue operations, veterinary treatment, vaccination drives, and anti-cruelty advocacy. We work with strays, farm animals, and endangered species — because a compassionate society protects all living beings.",
    tags:["Rescue","Vaccination","Shelters","Advocacy"], stat:"3,000+", statLabel:"animals rescued" },
  { id:"yth",  num:"06", icon:"🚀", title:"Youth Development",      color:"#6B4FA8", colorBg:"#F0EBFB", accent:"Violet",
    headline:"Building the generation of change",
    body:"Leadership camps, entrepreneurship incubators, mental health programs, and civic education. We invest in young people not as future leaders, but as present-day change-makers.",
    tags:["Leadership","Entrepreneurship","Mental Health","Civic Ed"], stat:"10,000+", statLabel:"youth engaged" },
];

export default function Programs() {
  const [active, setActive] = useState(programs[0]);

  return (
    <section className="section-pad bg-cream" style={{ position:"relative" }}>
      <div className="wrap">
        {/* Header */}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:"3rem", flexWrap:"wrap", gap:"1.5rem" }}>
          <div>
            <span className="eyebrow">What We Do</span>
            <h2 style={{ marginBottom:0, maxWidth:440 }}>Six pillars of<br/><em>lasting change</em></h2>
          </div>
          <p style={{ maxWidth:380, color:"var(--ink-3)", fontSize:"0.92rem", lineHeight:1.75, alignSelf:"flex-end" }}>
            Each program is community-designed, community-led, and community-owned. We don't work <em>for</em> people — we work <em>with</em> them.
          </p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"260px 1fr", gap:"2.5rem", alignItems:"start" }} className="prog-layout">
          {/* Sidebar nav */}
          <div style={{ position:"sticky", top:"calc(var(--nav-h) + 1.5rem)" }}>
            {programs.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p)}
                style={{
                  width:"100%",
                  display:"flex", alignItems:"center", gap:12,
                  padding:"12px 14px",
                  borderRadius:"var(--r-md)",
                  marginBottom:6,
                  background: active.id===p.id ? p.colorBg : "transparent",
                  border: `1px solid ${active.id===p.id ? p.color+"28" : "transparent"}`,
                  textAlign:"left",
                  transition:"all 0.2s var(--ease)",
                  cursor:"pointer",
                }}
              >
                <span style={{ fontSize:"1.1rem", flexShrink:0 }}>{p.icon}</span>
                <span style={{
                  fontFamily:"var(--sans)", fontWeight: active.id===p.id ? 600 : 400,
                  fontSize:"0.9rem",
                  color: active.id===p.id ? p.color : "var(--ink-2)",
                  transition:"color 0.2s",
                }}>{p.title}</span>
                {active.id===p.id && (
                  <div style={{ marginLeft:"auto", fontFamily:"var(--mono)", fontSize:"0.68rem", color:p.color, opacity:0.7 }}>{p.num}</div>
                )}
              </button>
            ))}

            <div style={{ marginTop:"1.5rem", padding:"1.25rem", background:"var(--bg-warm)", borderRadius:"var(--r-lg)", border:"1px solid var(--border)" }}>
              <div style={{ fontFamily:"var(--mono)", fontSize:"0.68rem", color:"var(--ink-3)", letterSpacing:"0.08em", marginBottom:8, textTransform:"uppercase" }}>Quick fact</div>
              <p style={{ fontSize:"0.85rem", color:"var(--ink-2)", lineHeight:1.65 }}>
                All six programs run simultaneously. Each is independently funded and managed by a dedicated team.
              </p>
            </div>
          </div>

          {/* Detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity:0, y:16 }}
              animate={{ opacity:1, y:0 }}
              exit={{ opacity:0, y:-12 }}
              transition={{ duration:0.35, ease:[0.22,1,0.36,1] }}
            >
              {/* Main panel */}
              <div style={{
                borderRadius:"var(--r-xl)",
                overflow:"hidden",
                border:"1px solid var(--border)",
                background:"var(--surface)",
                boxShadow:"var(--shadow-md)",
              }}>
                {/* Colored header band */}
                <div style={{
                  padding:"2.5rem 3rem",
                  background:active.colorBg,
                  borderBottom:`1px solid ${active.color}18`,
                  position:"relative", overflow:"hidden",
                }}>
                  {/* Large background number */}
                  <div style={{
                    position:"absolute", right:"2rem", top:"50%", transform:"translateY(-50%)",
                    fontFamily:"var(--serif)", fontWeight:900, fontSize:"8rem",
                    color:`${active.color}08`, lineHeight:1, userSelect:"none", pointerEvents:"none",
                  }}>{active.num}</div>

                  <div style={{ display:"flex", alignItems:"flex-start", gap:"1.5rem", position:"relative" }}>
                    <div style={{
                      fontSize:"2.5rem",
                      width:64, height:64,
                      background:"rgba(255,255,255,0.7)",
                      border:`1px solid ${active.color}22`,
                      borderRadius:16,
                      display:"flex", alignItems:"center", justifyContent:"center",
                      flexShrink:0,
                      boxShadow:"0 2px 8px rgba(0,0,0,0.06)",
                    }}>{active.icon}</div>
                    <div>
                      <div style={{ fontFamily:"var(--mono)", fontSize:"0.7rem", color:active.color, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:6 }}>
                        Program {active.num} · {active.accent}
                      </div>
                      <h3 style={{ color:"var(--ink)", marginBottom:4 }}>{active.title}</h3>
                      <p style={{ fontFamily:"var(--serif)", fontStyle:"italic", fontSize:"1rem", color:"var(--ink-2)" }}>{active.headline}</p>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding:"2.5rem 3rem" }}>
                  <p style={{ fontSize:"1.02rem", lineHeight:1.85, marginBottom:"2rem", color:"var(--ink-2)" }}>{active.body}</p>

                  {/* Stat */}
                  <div style={{ display:"flex", gap:"2rem", alignItems:"center", marginBottom:"2rem", flexWrap:"wrap" }}>
                    <div>
                      <div style={{ fontFamily:"var(--serif)", fontWeight:700, fontSize:"3rem", color:active.color, lineHeight:1 }}>{active.stat}</div>
                      <div style={{ fontFamily:"var(--sans)", fontSize:"0.82rem", color:"var(--ink-3)", marginTop:4 }}>{active.statLabel}</div>
                    </div>
                    <div style={{ width:1, height:56, background:"var(--border)", flexShrink:0 }} className="stat-div" />
                    <p style={{ fontSize:"0.88rem", color:"var(--ink-3)", lineHeight:1.7, maxWidth:280 }} className="stat-note">
                      Numbers as of March 2024. Updated quarterly in our impact reports.
                    </p>
                  </div>

                  {/* Tags */}
                  <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:"2rem" }}>
                    {active.tags.map(t => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>

                  <div style={{ display:"flex", gap:12 }}>
                    <Link href="/programs"><button className="btn btn-green">Learn More →</button></Link>
                    <Link href="/volunteer"><button className="btn btn-outline">Volunteer for this</button></Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        @media(max-width:860px){
          .prog-layout{grid-template-columns:1fr!important;}
          div[style*="position: sticky"]{position:relative!important;top:auto!important;}
          .prog-layout > div:first-child{display:flex;overflow-x:auto;padding-bottom:8px;}
          .stat-div,.stat-note{display:none!important;}
        }
      `}</style>
    </section>
  );
}
