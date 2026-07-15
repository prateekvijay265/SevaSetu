"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <section className="section-pad bg-warm" style={{ position:"relative", overflow:"hidden" }}>
      {/* Subtle corner decoration */}
      <div style={{
        position:"absolute", top:0, right:0, width:300, height:300,
        background:"var(--green-pale)", borderRadius:"0 0 0 100%",
        opacity:0.6, pointerEvents:"none",
      }} />

      <div className="wrap">
        {/* Two-col layout — intentionally unequal */}
        <div style={{ display:"grid", gridTemplateColumns:"5fr 4fr", gap:"6rem", alignItems:"center" }} className="about-grid">

          {/* Left — the story, typographic */}
          <motion.div initial={{opacity:0,x:-24}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.8,ease:[0.22,1,0.36,1]}}>
            <span className="eyebrow">About SevaSetu</span>
            <h2 style={{ marginBottom:"1.75rem" }}>
              Built on service,<br/><em>driven by belief</em>
            </h2>

            <p style={{ fontSize:"1.05rem", marginBottom:"1.25rem", lineHeight:1.85 }}>
              In 2012, five friends sat in a Delhi classroom and asked a simple question: <em>"What if we just showed up?"</em> That question became SevaSetu — a Hindi compound meaning "bridge of service."
            </p>
            <p style={{ marginBottom:"1.25rem", lineHeight:1.85 }}>
              Today we work across 30 states, running six major programs with over 1,000 volunteers. But the spirit hasn't changed. We still believe the most powerful thing anyone can do is simply <strong>show up</strong> — for their community, for their country, for each other.
            </p>

            {/* Pull quote */}
            <blockquote style={{
              margin:"2rem 0",
              paddingLeft:"1.5rem",
              borderLeft:"3px solid var(--green)",
              fontFamily:"var(--serif)",
              fontSize:"1.2rem",
              fontStyle:"italic",
              color:"var(--ink-2)",
              lineHeight:1.65,
            }}>
              "The measure of a society is not its wealth, but how it treats its most vulnerable."
              <cite style={{ display:"block", fontFamily:"var(--sans)", fontSize:"0.78rem", fontStyle:"normal", color:"var(--ink-3)", marginTop:10, letterSpacing:"0.03em" }}>
                — Foundation Charter, 2012
              </cite>
            </blockquote>

            <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
              <Link href="/about"><button className="btn btn-green">Read Our Full Story</button></Link>
              <Link href="/programs"><button className="btn btn-outline">See Our Programs</button></Link>
            </div>
          </motion.div>

          {/* Right — mission / vision / values in a clean stacked layout */}
          <motion.div initial={{opacity:0,x:24}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.8,delay:0.15,ease:[0.22,1,0.36,1]}}>
            {[
              { num:"01", title:"Mission",  color:"var(--green)", text:"Empowering marginalized communities with sustainable programs in education, health, environment, and livelihood." },
              { num:"02", title:"Vision",   color:"var(--gold)",  text:"A world where every person — regardless of birth — has equal access to opportunity, dignity, and the tools to thrive." },
              { num:"03", title:"Values",   color:"var(--terra)", text:"Radical transparency, community-first design, deep listening, and long-term accountability over short-term metrics." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity:0, y:16 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ delay:0.25 + i*0.12, duration:0.55 }}
                style={{
                  padding:"1.5rem",
                  background:"var(--surface)",
                  border:"1px solid var(--border)",
                  borderRadius:"var(--r-lg)",
                  marginBottom: i<2 ? "1rem" : 0,
                  boxShadow:"var(--shadow-sm)",
                }}
              >
                <div style={{ display:"flex", gap:14, alignItems:"flex-start" }}>
                  <span style={{ fontFamily:"var(--mono)", fontSize:"0.72rem", color:item.color, fontWeight:500, marginTop:3, flexShrink:0 }}>{item.num}</span>
                  <div>
                    <h4 style={{ marginBottom:6, color:item.color }}>{item.title}</h4>
                    <p style={{ fontSize:"0.88rem", lineHeight:1.7, color:"var(--ink-2)" }}>{item.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`@media(max-width:860px){.about-grid{grid-template-columns:1fr!important;gap:2.5rem!important;}}`}</style>
    </section>
  );
}
