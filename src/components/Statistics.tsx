"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { n:25000, s:"+",  label:"Lives Impacted",      sub:"Across 30+ Indian states" },
  { n:1000,  s:"+",  label:"Active Volunteers",    sub:"From all walks of life" },
  { n:150,   s:"+",  label:"Community Projects",   sub:"Completed and ongoing" },
  { n:3,     s:"M+", label:"Trees Planted",        sub:"Environmental drive" },
  { n:50,    s:"+",  label:"Education Programs",   sub:"Scholarships & resources" },
  { n:12,    s:"+",  label:"Years of Service",     sub:"Since 2012" },
];

function Counter({ target, suffix, active }: { target:number; suffix:string; active:boolean }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const total = 70;
    const tick = () => {
      frame++;
      const progress = frame / total;
      const eased = 1 - Math.pow(1 - progress, 3);
      setV(Math.round(eased * target));
      if (frame < total) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target]);

  const fmt = (n: number) => n >= 1000 ? Math.round(n/1000)+"k" : String(n);
  return <>{fmt(v)}{suffix}</>;
}

const words = [
  "Education for All","Women's Rights","Clean Environment","Youth Leadership",
  "Animal Welfare","Rural Health","Digital Literacy","Clean Water",
  "Skill Training","Mental Wellness","Elderly Care","Food Security",
];

function Marquee({ dir = 1, speed = 28 }: { dir?: number; speed?: number }) {
  const items = [...words, ...words];
  return (
    <div className="fade-x" style={{ overflow:"hidden", padding:"10px 0" }}>
      <div style={{
        display:"flex", gap:16, width:"max-content",
        animation:`${dir>0?"marquee-l":"marquee-r"} ${speed}s linear infinite`,
      }}>
        {items.map((w,i) => (
          <span key={i} style={{
            display:"inline-flex", alignItems:"center", gap:8,
            padding:"7px 18px",
            borderRadius:"var(--r-pill)",
            border:"1px solid var(--border)",
            background:"var(--surface)",
            fontFamily:"var(--sans)",
            fontSize:"0.8rem",
            fontWeight:500,
            color:"var(--ink-3)",
            whiteSpace:"nowrap",
          }}>
            <span style={{
              width:6, height:6, borderRadius:"50%",
              background: i%3===0?"var(--green)":i%3===1?"var(--gold)":"var(--terra)",
              flexShrink:0,
            }}/>
            {w}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Statistics() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once:true, margin:"-60px" });

  return (
    <section className="section-pad bg-white" style={{ position:"relative" }}>
      {/* Marquees at top */}
      <div style={{ marginBottom:"4rem", display:"flex", flexDirection:"column", gap:12 }}>
        <Marquee dir={1} speed={32} />
        <Marquee dir={-1} speed={38} />
      </div>

      <div className="wrap">
        {/* Header — left-aligned, not centered */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"4rem", alignItems:"end", marginBottom:"3.5rem" }} className="stats-hdr">
          <div>
            <span className="eyebrow">Our Numbers</span>
            <h2 style={{ marginBottom:0 }}>Impact that<br/><em>speaks for itself</em></h2>
          </div>
          <p className="lead" style={{ alignSelf:"flex-end" }}>
            Every metric below represents a real person whose life was touched, a community that grew stronger, and a future made a little brighter.
          </p>
        </div>

        {/* Stats — full-width ruled list, not grid of cards */}
        <div ref={ref}>
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity:0, x:-20 }}
              whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }}
              transition={{ delay:i*0.08, duration:0.5, ease:[0.22,1,0.36,1] }}
              style={{
                display:"grid",
                gridTemplateColumns:"3fr 2fr 3fr",
                alignItems:"center",
                padding:"1.5rem 0",
                borderBottom:`1px solid var(--border)`,
                gap:"2rem",
              }}
              className="stat-row"
            >
              <div style={{ fontFamily:"var(--serif)", fontSize:"clamp(2rem,4vw,3.2rem)", fontWeight:700, color:"var(--green)", lineHeight:1 }}>
                <Counter target={s.n} suffix={s.s} active={inView} />
              </div>
              <div>
                <div style={{ fontFamily:"var(--sans)", fontWeight:600, fontSize:"1rem", color:"var(--ink)", marginBottom:2 }}>{s.label}</div>
                <div style={{ fontFamily:"var(--sans)", fontSize:"0.82rem", color:"var(--ink-3)", fontWeight:400 }}>{s.sub}</div>
              </div>
              {/* Progress bar — visual encoding */}
              <div style={{ height:4, background:"var(--bg-alt)", borderRadius:2, overflow:"hidden" }}>
                <motion.div
                  initial={{ width:0 }}
                  whileInView={{ width:`${[78,62,55,40,48,92][i]}%` }}
                  viewport={{ once:true }}
                  transition={{ duration:1.4, delay:i*0.1+0.3, ease:[0.22,1,0.36,1] }}
                  style={{
                    height:"100%", borderRadius:2,
                    background: i%3===0?"var(--green)":i%3===1?"var(--gold)":"var(--terra)",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .stats-hdr{grid-template-columns:1fr!important;gap:1.5rem!important;}
          .stat-row{grid-template-columns:1fr 1fr!important;}
          .stat-row>div:last-child{display:none!important;}
        }
      `}</style>
    </section>
  );
}
