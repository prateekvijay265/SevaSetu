"use client";
import { motion } from "framer-motion";

const timeline = [
  { year:"2012", event:"Foundation Established", desc:"Five friends, one classroom, New Delhi. SevaSetu was born from a simple question: 'What if we just showed up?'" },
  { year:"2015", event:"1,000 Beneficiaries",    desc:"Expanded to 3 states, launched Women Empowerment program. First dedicated field team." },
  { year:"2018", event:"National Award",          desc:"Received the National Award for Outstanding Voluntary Service from the Ministry of Social Justice." },
  { year:"2020", event:"COVID Relief",            desc:"Mobilised 400 volunteers to provide food, medicine and mental health support to 15,000 families." },
  { year:"2022", event:"10-Year Milestone",       desc:"25,000+ lives impacted, 1,000+ active volunteers across 30 states." },
  { year:"2024", event:"Digital Expansion",       desc:"Launched e-learning platform. 5,000+ rural students accessing quality education remotely." },
];

const team = [
  { name:"Dr. Anand Verma",  role:"Founder & CEO",     emoji:"👨‍💼", color:"var(--green)"  },
  { name:"Sunita Krishnan",  role:"Director, Programs", emoji:"👩‍🎓", color:"var(--terra)"  },
  { name:"Rahul Mehta",      role:"Head, Technology",   emoji:"👨‍💻", color:"var(--blue)"   },
  { name:"Preeti Sharma",    role:"Director, Outreach", emoji:"🤝",  color:"var(--gold)"   },
  { name:"Vijay Nair",       role:"CFO",                emoji:"📊",  color:"var(--green)"  },
  { name:"Deepa Rao",        role:"Head, Partnerships", emoji:"💡",  color:"var(--terra)"  },
];

export default function AboutExtras() {
  return (
    <>
      {/* Timeline */}
      <section className="section-pad bg-white" style={{ position:"relative" }}>
        <div className="wrap">
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"4rem", alignItems:"start", marginBottom:"4rem" }} className="tl-hdr">
            <div>
              <span className="eyebrow">Our Journey</span>
              <h2 style={{ marginBottom:0 }}>A decade of<br/><em>meaningful action</em></h2>
            </div>
            <p className="lead" style={{ alignSelf:"flex-end" }}>
              From five people in a classroom to a national movement — here is how we got here.
            </p>
          </div>

          <div style={{ display:"flex", flexDirection:"column", gap:0 }}>
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity:0, x:-16 }}
                whileInView={{ opacity:1, x:0 }}
                viewport={{ once:true }}
                transition={{ delay:i*0.1, duration:0.55 }}
                style={{
                  display:"grid",
                  gridTemplateColumns:"100px 1px 1fr",
                  gap:"0 2rem",
                  paddingBottom: i<timeline.length-1 ? "2.5rem" : 0,
                }}
              >
                {/* Year */}
                <div style={{ textAlign:"right", paddingTop:4 }}>
                  <span style={{ fontFamily:"var(--serif)", fontWeight:700, fontSize:"1.5rem", color:"var(--green)", lineHeight:1 }}>{item.year}</span>
                </div>

                {/* Line + dot */}
                <div style={{ display:"flex", flexDirection:"column", alignItems:"center" }}>
                  <div style={{ width:10, height:10, borderRadius:"50%", background:"var(--green)", border:"2px solid var(--bg)", boxShadow:"0 0 0 2px var(--green)", flexShrink:0, marginTop:6 }} />
                  {i<timeline.length-1 && <div style={{ width:1, flex:1, background:"var(--border)", marginTop:4 }} />}
                </div>

                {/* Content */}
                <div style={{ paddingBottom: i<timeline.length-1 ? 0 : 0 }}>
                  <div style={{ fontFamily:"var(--sans)", fontWeight:600, fontSize:"1rem", color:"var(--ink)", marginBottom:6 }}>{item.event}</div>
                  <p style={{ fontSize:"0.88rem", color:"var(--ink-3)", lineHeight:1.7, maxWidth:500, margin:0 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.tl-hdr{grid-template-columns:1fr!important;gap:1.5rem!important;}}`}</style>
      </section>

      {/* Team */}
      <section className="section-pad bg-warm">
        <div className="wrap">
          <div style={{ marginBottom:"3rem" }}>
            <span className="eyebrow">Our Team</span>
            <h2>Led by <em>passionate people</em></h2>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1.25rem" }} className="team-grid">
            {team.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity:0, y:16 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ delay:i*0.09, duration:0.5 }}
                whileHover={{ y:-4, boxShadow:"var(--shadow-md)" }}
                style={{
                  padding:"1.75rem",
                  background:"var(--surface)",
                  border:"1px solid var(--border)",
                  borderRadius:"var(--r-lg)",
                  boxShadow:"var(--shadow-sm)",
                  transition:"all 0.25s var(--ease)",
                }}
              >
                <div style={{ width:52, height:52, borderRadius:14, background:"var(--bg-alt)", border:"1px solid var(--border)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.5rem", marginBottom:"1rem" }}>
                  {m.emoji}
                </div>
                <div style={{ fontFamily:"var(--sans)", fontWeight:700, fontSize:"0.95rem", color:"var(--ink)", marginBottom:3 }}>{m.name}</div>
                <div style={{ fontFamily:"var(--sans)", fontSize:"0.82rem", color:m.color }}>{m.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.team-grid{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
      </section>
    </>
  );
}
