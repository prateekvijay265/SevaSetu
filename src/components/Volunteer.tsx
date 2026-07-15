"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  { id:"teach", emoji:"📚", title:"Education Volunteer",  time:"4 hrs/week", mode:"In-person", color:"#1D6A45", bg:"#E8F2EC" },
  { id:"tech",  emoji:"💻", title:"Tech & Digital",       time:"Flexible",   mode:"Remote",    color:"#2558A0", bg:"#EBF1FA" },
  { id:"field", emoji:"🌿", title:"Field Coordinator",    time:"Weekends",   mode:"In-person", color:"#2E8B5E", bg:"#E0F0E9" },
  { id:"media", emoji:"🎨", title:"Creative & Media",     time:"Flexible",   mode:"Remote",    color:"#6B4FA8", bg:"#F0EBFB" },
  { id:"health",emoji:"🏥", title:"Health Worker",        time:"6 hrs/week", mode:"In-person", color:"#C0533A", bg:"#FBEEE9" },
  { id:"admin", emoji:"📋", title:"Admin & Operations",   time:"4 hrs/week", mode:"Hybrid",    color:"#B5722A", bg:"#FBF0E3" },
];

const perks = [
  ["📜","Verified certificate at 50+ hours"],
  ["🧠","Free skill workshops quarterly"],
  ["🤝","Network of 1,000+ volunteers"],
  ["✈️","Field trip opportunities across India"],
  ["🏆","Annual Volunteer Excellence Awards"],
  ["💼","LinkedIn recommendation from founders"],
];

export default function Volunteer() {
  const [role, setRole] = useState("teach");
  const [form, setForm] = useState({ name:"", email:"", city:"", why:"" });
  const [submitted, setSubmitted] = useState(false);
  const r = roles.find(x=>x.id===role)!;

  return (
    <section className="section-pad bg-white" style={{ position:"relative" }}>
      <div className="wrap">
        {/* Header */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"4rem", marginBottom:"3rem", alignItems:"end" }} className="vol-hdr">
          <div>
            <span className="eyebrow">Join the Movement</span>
            <h2 style={{ marginBottom:0 }}>Volunteer<br/><em>your time & talent</em></h2>
          </div>
          <p className="lead" style={{ alignSelf:"flex-end" }}>
            It doesn't take wealth to change the world — it takes will. Find a role that matches your skills and schedule.
          </p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1.1fr", gap:"3rem", alignItems:"start" }} className="vol-grid">
          {/* Left */}
          <div>
            <div style={{ marginBottom:"1.5rem" }}>
              <div style={{ fontFamily:"var(--mono)", fontSize:"0.68rem", color:"var(--ink-3)", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:12 }}>Choose a role</div>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
                {roles.map(rl => (
                  <motion.button
                    key={rl.id}
                    onClick={() => setRole(rl.id)}
                    whileHover={{ y:-2 }}
                    style={{
                      display:"flex", flexDirection:"column", gap:6, padding:"14px",
                      borderRadius:"var(--r-md)",
                      background: role===rl.id ? rl.bg : "var(--bg-alt)",
                      border:`1px solid ${role===rl.id ? rl.color+"28" : "var(--border)"}`,
                      textAlign:"left", cursor:"pointer",
                      transition:"all 0.2s var(--ease)",
                      boxShadow: role===rl.id ? "var(--shadow-sm)" : "none",
                    }}
                  >
                    <span style={{ fontSize:"1.25rem" }}>{rl.emoji}</span>
                    <span style={{ fontFamily:"var(--sans)", fontWeight:600, fontSize:"0.82rem", color: role===rl.id ? rl.color : "var(--ink)" }}>{rl.title}</span>
                    <div style={{ display:"flex", gap:4, flexWrap:"wrap" }}>
                      {[rl.time, rl.mode].map(tag => (
                        <span key={tag} style={{ fontFamily:"var(--sans)", fontSize:"0.68rem", color:"var(--ink-3)", background:"rgba(0,0,0,0.04)", padding:"2px 7px", borderRadius:4 }}>{tag}</span>
                      ))}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Perks */}
            <div style={{ background:"var(--bg-warm)", border:"1px solid var(--border)", borderRadius:"var(--r-lg)", padding:"1.5rem" }}>
              <div style={{ fontFamily:"var(--mono)", fontSize:"0.68rem", color:"var(--ink-3)", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:14 }}>What you get</div>
              <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                {perks.map(([ico,txt],i) => (
                  <div key={i} style={{ display:"flex", gap:10, alignItems:"center" }}>
                    <span style={{ fontSize:"1rem", flexShrink:0 }}>{ico}</span>
                    <span style={{ fontFamily:"var(--sans)", fontSize:"0.85rem", color:"var(--ink-2)" }}>{txt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form key="form" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}}
                onSubmit={e=>{e.preventDefault();setSubmitted(true)}}
                style={{ background:"var(--surface)", border:"1px solid var(--border)", borderRadius:"var(--r-xl)", padding:"2.5rem", boxShadow:"var(--shadow-md)", display:"flex", flexDirection:"column", gap:16 }}
              >
                <div>
                  <h4 style={{ marginBottom:4 }}>Apply to volunteer</h4>
                  <p style={{ fontSize:"0.85rem", color:"var(--ink-3)" }}>
                    Role: <strong style={{ color:r.color }}>{r.title}</strong>
                  </p>
                </div>

                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
                  <div><label className="field-label">Full Name *</label><input required className="field" placeholder="Arjun Mehta" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} /></div>
                  <div><label className="field-label">Email *</label><input required type="email" className="field" placeholder="arjun@email.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} /></div>
                </div>
                <div><label className="field-label">City / State</label><input className="field" placeholder="Mumbai, Maharashtra" value={form.city} onChange={e=>setForm({...form,city:e.target.value})} /></div>
                <div>
                  <label className="field-label">Why do you want to volunteer?</label>
                  <textarea className="field" rows={4} placeholder="Share your motivation..." value={form.why} onChange={e=>setForm({...form,why:e.target.value})} style={{resize:"vertical",minHeight:100}} />
                </div>

                <motion.button type="submit" className="btn btn-green" whileHover={{scale:1.02}} whileTap={{scale:0.97}} style={{justifyContent:"center",fontSize:"1rem",padding:"14px"}}>
                  Submit Application →
                </motion.button>
              </motion.form>
            ) : (
              <motion.div key="done" initial={{opacity:0,scale:0.94}} animate={{opacity:1,scale:1}}
                style={{ background:"var(--green-light)", border:"1px solid rgba(29,106,69,0.2)", borderRadius:"var(--r-xl)", padding:"3rem 2.5rem", textAlign:"center" }}
              >
                <div style={{ fontSize:"3rem", marginBottom:"1rem" }}>🎉</div>
                <h3 style={{ marginBottom:"0.75rem" }}>Application received!</h3>
                <p style={{ marginBottom:"1.5rem", lineHeight:1.75 }}>
                  Thanks, <strong>{form.name||"friend"}</strong>! Our volunteer coordinator will be in touch within 48 hours.
                </p>
                <button className="btn btn-outline" onClick={() => setSubmitted(false)}>Apply for another role</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){.vol-grid{grid-template-columns:1fr!important;gap:2rem!important;}}
        @media(max-width:768px){.vol-hdr{grid-template-columns:1fr!important;gap:1rem!important;}}
      `}</style>
    </section>
  );
}
