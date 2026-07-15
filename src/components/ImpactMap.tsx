"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const locs = [
  { name:"New Delhi",    state:"Delhi",         beneficiaries:"4,200", lat:57, lng:38, color:"#1D6A45", programs:["Education","Youth"] },
  { name:"Mumbai",       state:"Maharashtra",   beneficiaries:"3,100", lat:30, lng:57, color:"#C0533A", programs:["Women Empowerment"] },
  { name:"Jaipur",       state:"Rajasthan",     beneficiaries:"2,400", lat:48, lng:34, color:"#B5722A", programs:["Education","Animal Welfare"] },
  { name:"Chennai",      state:"Tamil Nadu",    beneficiaries:"2,800", lat:55, lng:73, color:"#2558A0", programs:["Women Empowerment"] },
  { name:"Bhopal",       state:"M.P.",          beneficiaries:"1,900", lat:47, lng:50, color:"#6B4FA8", programs:["Youth","Community"] },
  { name:"Bhubaneswar",  state:"Odisha",        beneficiaries:"1,600", lat:55, lng:62, color:"#2E8B5E", programs:["Environment"] },
  { name:"Ahmedabad",    state:"Gujarat",       beneficiaries:"2,100", lat:33, lng:47, color:"#1D6A45", programs:["Environment","Youth"] },
  { name:"Guwahati",     state:"Assam",         beneficiaries:"1,200", lat:70, lng:38, color:"#2558A0", programs:["Education"] },
];

export default function ImpactMap() {
  const [active, setActive] = useState<typeof locs[0]|null>(null);

  return (
    <section className="section-pad bg-white" style={{ position:"relative" }}>
      <div className="wrap">
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:"3rem", flexWrap:"wrap", gap:"1.5rem" }}>
          <div>
            <span className="eyebrow">Where We Work</span>
            <h2 style={{ marginBottom:0 }}>Across<br/><em>incredible India</em></h2>
          </div>
          <p style={{ maxWidth:360, color:"var(--ink-3)", fontSize:"0.9rem", lineHeight:1.75, alignSelf:"flex-end" }}>
            Our programs reach 30+ states. Click a city to see its story.
          </p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 360px", gap:"2.5rem", alignItems:"start" }} className="map-layout">
          {/* Map */}
          <div style={{ position:"relative" }}>
            <div style={{
              position:"relative",
              width:"100%", paddingBottom:"85%",
              background:"var(--bg-alt)",
              border:"1px solid var(--border)",
              borderRadius:"var(--r-xl)",
              overflow:"hidden",
              boxShadow:"var(--shadow-sm)",
            }}>
              {/* Grid lines */}
              {[20,40,60,80].map(p => (
                <div key={p} style={{ position:"absolute", left:0, right:0, top:`${p}%`, height:1, background:"rgba(0,0,0,0.04)" }} />
              ))}
              {[20,40,60,80].map(p => (
                <div key={p} style={{ position:"absolute", top:0, bottom:0, left:`${p}%`, width:1, background:"rgba(0,0,0,0.04)" }} />
              ))}

              {/* Label */}
              <div style={{ position:"absolute", top:16, left:20, fontFamily:"var(--mono)", fontSize:"0.65rem", color:"var(--ink-4)", letterSpacing:"0.08em", textTransform:"uppercase" }}>
                India · 30+ States
              </div>

              {/* Dots */}
              {locs.map((loc, i) => (
                <motion.button
                  key={loc.name}
                  initial={{ opacity:0, scale:0 }}
                  whileInView={{ opacity:1, scale:1 }}
                  viewport={{ once:true }}
                  transition={{ delay:i*0.1, type:"spring", stiffness:350, damping:20 }}
                  onClick={() => setActive(active?.name===loc.name ? null : loc)}
                  style={{
                    position:"absolute",
                    left:`${loc.lat}%`, top:`${loc.lng}%`,
                    transform:"translate(-50%,-50%)",
                    background:"none", border:"none", cursor:"pointer", padding:0,
                    zIndex: active?.name===loc.name ? 20 : 10,
                  }}
                >
                  {/* Pulse */}
                  <motion.div
                    animate={{ scale:[1,2,1], opacity:[0.5,0,0.5] }}
                    transition={{ duration:2.2, repeat:Infinity, delay:i*0.25 }}
                    style={{
                      position:"absolute", inset:-6,
                      borderRadius:"50%",
                      background:loc.color, opacity:0.4, pointerEvents:"none",
                    }}
                  />
                  {/* Dot */}
                  <div style={{
                    width: active?.name===loc.name ? 14 : 10,
                    height: active?.name===loc.name ? 14 : 10,
                    borderRadius:"50%",
                    background:loc.color,
                    border:`2px solid white`,
                    boxShadow:`0 1px 4px rgba(0,0,0,0.2)`,
                    transition:"all 0.25s",
                    position:"relative", zIndex:2,
                  }} />
                  {/* Tooltip */}
                  {active?.name===loc.name && (
                    <div style={{
                      position:"absolute", bottom:"calc(100% + 8px)", left:"50%", transform:"translateX(-50%)",
                      background:"var(--ink)", color:"white",
                      borderRadius:6, padding:"4px 10px", whiteSpace:"nowrap",
                      fontFamily:"var(--sans)", fontSize:"0.72rem", fontWeight:600,
                      pointerEvents:"none", zIndex:30,
                      boxShadow:"var(--shadow-md)",
                    }}>
                      {loc.name}
                    </div>
                  )}
                </motion.button>
              ))}

              <div style={{ position:"absolute", bottom:14, right:16, fontFamily:"var(--mono)", fontSize:"0.62rem", color:"var(--ink-4)", letterSpacing:"0.04em" }}>
                SevaSetu · 2024
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <AnimatePresence mode="wait">
              {active && (
                <motion.div
                  key={active.name}
                  initial={{ opacity:0, y:-10 }}
                  animate={{ opacity:1, y:0 }}
                  exit={{ opacity:0, y:8 }}
                  transition={{ duration:0.3, ease:[0.22,1,0.36,1] }}
                  style={{
                    padding:"1.5rem",
                    background:"var(--surface)",
                    border:`1px solid ${active.color}28`,
                    borderRadius:"var(--r-lg)",
                    marginBottom:16,
                    boxShadow:"var(--shadow-md)",
                  }}
                >
                  <div style={{ fontFamily:"var(--sans)", fontWeight:700, fontSize:"1.1rem", color:active.color, marginBottom:2 }}>{active.name}</div>
                  <div style={{ fontFamily:"var(--sans)", fontSize:"0.8rem", color:"var(--ink-3)", marginBottom:12 }}>{active.state}</div>
                  <div style={{ fontFamily:"var(--serif)", fontWeight:700, fontSize:"2.2rem", color:"var(--ink)", lineHeight:1, marginBottom:3 }}>{active.beneficiaries}</div>
                  <div style={{ fontFamily:"var(--sans)", fontSize:"0.78rem", color:"var(--ink-3)", marginBottom:12 }}>beneficiaries reached</div>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                    {active.programs.map(p => (
                      <span key={p} className="tag tag-green">{p}</span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div style={{ fontFamily:"var(--mono)", fontSize:"0.65rem", letterSpacing:"0.1em", color:"var(--ink-4)", textTransform:"uppercase", marginBottom:10 }}>All Locations</div>
            <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
              {locs.map((loc, i) => (
                <motion.button
                  key={loc.name}
                  initial={{ opacity:0, x:12 }}
                  whileInView={{ opacity:1, x:0 }}
                  viewport={{ once:true }}
                  transition={{ delay:i*0.06 }}
                  onClick={() => setActive(active?.name===loc.name ? null : loc)}
                  style={{
                    display:"flex", alignItems:"center", gap:10,
                    padding:"10px 12px",
                    background: active?.name===loc.name ? `${loc.color}08` : "transparent",
                    border:`1px solid ${active?.name===loc.name ? `${loc.color}25` : "var(--border)"}`,
                    borderRadius:"var(--r-md)",
                    textAlign:"left", cursor:"pointer",
                    transition:"all 0.2s var(--ease)",
                  }}
                >
                  <div style={{ width:8, height:8, borderRadius:"50%", background:loc.color, flexShrink:0 }} />
                  <div style={{ flex:1 }}>
                    <div style={{ fontFamily:"var(--sans)", fontWeight:600, fontSize:"0.85rem", color: active?.name===loc.name ? loc.color : "var(--ink)" }}>{loc.name}</div>
                    <div style={{ fontFamily:"var(--sans)", fontSize:"0.72rem", color:"var(--ink-3)" }}>{loc.state}</div>
                  </div>
                  <span style={{ fontFamily:"var(--serif)", fontWeight:700, fontSize:"0.9rem", color:loc.color }}>{loc.beneficiaries}</span>
                </motion.button>
              ))}
            </div>

            <div style={{ marginTop:12, padding:"12px 14px", background:"var(--green-light)", border:"1px solid rgba(29,106,69,0.2)", borderRadius:"var(--r-md)", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
              <span style={{ fontFamily:"var(--sans)", fontSize:"0.82rem", color:"var(--ink-2)" }}>Total reached</span>
              <span style={{ fontFamily:"var(--serif)", fontWeight:700, fontSize:"1.2rem", color:"var(--green)" }}>19,300+</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`@media(max-width:860px){.map-layout{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
