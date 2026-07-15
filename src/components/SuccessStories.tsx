"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stories = [
  { name:"Priya Sharma", location:"Rajasthan", age:17, program:"Education", colorBg:"#E8F2EC", color:"#1D6A45",
    emoji:"👩‍🎓",
    quote:"I was three days from dropping out when a SevaSetu coordinator visited our school. A scholarship, a used laptop, and one mentor later — I'm studying Computer Science at Delhi University. First in my family.",
    before:"About to drop out of school", after:"First in family at university" },
  { name:"Kavitha Devi", location:"Tamil Nadu", age:34, program:"Women Empowerment", colorBg:"#FBEEE9", color:"#C0533A",
    emoji:"🧵",
    quote:"With a ₹15,000 microfinance loan and six months of training, I started my tailoring shop. I now employ four women from my village. We are all our own bosses.",
    before:"Financially dependent, no income", after:"Runs business, employs 4 women" },
  { name:"Ajay Patel", location:"Gujarat", age:29, program:"Environment", colorBg:"#E0F0E9", color:"#2E8B5E",
    emoji:"🌱",
    quote:"Our borewell had dried up. SevaSetu organised a watershed restoration drive with our whole village. We planted 800 trees. The water returned the very next monsoon.",
    before:"Village facing water scarcity", after:"Year-round water, 800 trees planted" },
  { name:"Ranjit Meena", location:"Madhya Pradesh", age:22, program:"Youth Development", colorBg:"#F0EBFB", color:"#6B4FA8",
    emoji:"🏗️",
    quote:"The leadership camp was the first time anyone asked me what I thought. I came back and started a sanitation committee. We built 15 toilets in three months using community crowdfunding.",
    before:"Felt powerless to change anything", after:"Led drive, built 15 community toilets" },
];

export default function SuccessStories() {
  const [active, setActive] = useState(0);
  const s = stories[active];

  return (
    <section className="section-pad bg-warm" style={{ position:"relative" }}>
      <div className="wrap">
        {/* Header */}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:"3rem", flexWrap:"wrap", gap:"1.5rem" }}>
          <div>
            <span className="eyebrow">Real Stories</span>
            <h2 style={{ maxWidth:400, marginBottom:0 }}>People who<br/><em>changed everything</em></h2>
          </div>
          {/* Pagination nav */}
          <div style={{ display:"flex", gap:8, alignSelf:"flex-end" }}>
            {stories.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} style={{
                width: i===active ? 28 : 10,
                height:10, borderRadius:5,
                background: i===active ? s.color : "var(--border-dark)",
                border:"none", cursor:"pointer",
                transition:"all 0.3s var(--ease)",
              }} />
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity:0, x:20 }}
            animate={{ opacity:1, x:0 }}
            exit={{ opacity:0, x:-16 }}
            transition={{ duration:0.4, ease:[0.22,1,0.36,1] }}
          >
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"3rem", alignItems:"start" }} className="story-grid">

              {/* Left — The quote, big */}
              <div style={{
                padding:"3rem",
                background:s.colorBg,
                borderRadius:"var(--r-xl)",
                border:`1px solid ${s.color}18`,
                position:"relative", overflow:"hidden",
              }}>
                {/* Quotation mark */}
                <div style={{
                  position:"absolute", top:"1rem", left:"2rem",
                  fontFamily:"var(--serif)", fontSize:"8rem", lineHeight:1,
                  color:`${s.color}12`, fontWeight:700, userSelect:"none",
                }}>"</div>

                <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:"2rem" }}>
                  <div style={{
                    width:52, height:52, borderRadius:14,
                    background:"rgba(255,255,255,0.8)",
                    border:`1px solid ${s.color}22`,
                    display:"flex", alignItems:"center", justifyContent:"center",
                    fontSize:"1.75rem",
                  }}>{s.emoji}</div>
                  <div>
                    <div style={{ fontFamily:"var(--sans)", fontWeight:600, fontSize:"1rem", color:"var(--ink)" }}>{s.name}</div>
                    <div style={{ fontFamily:"var(--sans)", fontSize:"0.8rem", color:"var(--ink-3)" }}>Age {s.age} · {s.location}</div>
                  </div>
                </div>

                <blockquote style={{
                  fontFamily:"var(--serif)",
                  fontSize:"1.15rem",
                  fontStyle:"italic",
                  color:"var(--ink)",
                  lineHeight:1.75,
                  position:"relative", zIndex:1,
                }}>
                  "{s.quote}"
                </blockquote>

                <div style={{ marginTop:"1.5rem" }}>
                  <span className="tag" style={{ background:`${s.color}12`, color:s.color, border:`1px solid ${s.color}25` }}>{s.program}</span>
                </div>
              </div>

              {/* Right — context, transformation, navigation */}
              <div style={{ display:"flex", flexDirection:"column", gap:"1.5rem", paddingTop:"1rem" }}>
                {/* Before / After */}
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
                  <div style={{ padding:"1.25rem", background:"#FEF2F2", border:"1px solid #FECACA", borderRadius:"var(--r-md)" }}>
                    <div style={{ fontFamily:"var(--mono)", fontSize:"0.65rem", letterSpacing:"0.1em", color:"#DC2626", textTransform:"uppercase", marginBottom:8 }}>Before</div>
                    <p style={{ fontSize:"0.88rem", color:"var(--ink-2)", lineHeight:1.6 }}>{s.before}</p>
                  </div>
                  <div style={{ padding:"1.25rem", background:s.colorBg, border:`1px solid ${s.color}25`, borderRadius:"var(--r-md)" }}>
                    <div style={{ fontFamily:"var(--mono)", fontSize:"0.65rem", letterSpacing:"0.1em", color:s.color, textTransform:"uppercase", marginBottom:8 }}>After</div>
                    <p style={{ fontSize:"0.88rem", color:"var(--ink-2)", lineHeight:1.6 }}>{s.after}</p>
                  </div>
                </div>

                {/* Story list */}
                <div style={{ background:"var(--surface)", border:"1px solid var(--border)", borderRadius:"var(--r-lg)", overflow:"hidden", boxShadow:"var(--shadow-sm)" }}>
                  {stories.map((st, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      style={{
                        width:"100%",
                        display:"flex", alignItems:"center", gap:12,
                        padding:"13px 18px",
                        background: i===active ? st.colorBg : "transparent",
                        borderBottom: i<stories.length-1 ? "1px solid var(--border)" : "none",
                        border:"none", cursor:"pointer", textAlign:"left",
                        transition:"background 0.2s",
                      }}
                    >
                      <span style={{ fontSize:"1.2rem" }}>{st.emoji}</span>
                      <div style={{ flex:1 }}>
                        <div style={{ fontFamily:"var(--sans)", fontWeight:600, fontSize:"0.88rem", color: i===active ? st.color : "var(--ink)" }}>{st.name}</div>
                        <div style={{ fontFamily:"var(--sans)", fontSize:"0.75rem", color:"var(--ink-3)" }}>{st.program} · {st.location}</div>
                      </div>
                      {i===active && <span style={{ color:st.color, fontSize:"0.8rem" }}>→</span>}
                    </button>
                  ))}
                </div>

                <p style={{ fontSize:"0.82rem", color:"var(--ink-3)", lineHeight:1.7 }}>
                  Every story you read here is real and verified. Names and photos used with full consent.
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`@media(max-width:768px){.story-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
