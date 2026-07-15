"use client";
import { motion } from "framer-motion";

const items = [
  { label:"Education Drive – New Delhi 2024",  emoji:"📚", colorBg:"#E8F2EC", c:"#1D6A45", col:2, row:1.4 },
  { label:"Women Empowerment Workshop",         emoji:"👩‍💼", colorBg:"#FBEEE9", c:"#C0533A", col:1, row:1 },
  { label:"Annual Volunteer Gathering",          emoji:"🤝", colorBg:"#EBF1FA", c:"#2558A0", col:1, row:1 },
  { label:"Youth Leadership Summit 2024",        emoji:"🚀", colorBg:"#F0EBFB", c:"#6B4FA8", col:1, row:1 },
  { label:"Plantation Drive – 3000 trees",       emoji:"🌳", colorBg:"#E0F0E9", c:"#2E8B5E", col:2, row:1.2 },
  { label:"Animal Rescue Operation",             emoji:"🐾", colorBg:"#FBF0E3", c:"#B5722A", col:1, row:1 },
  { label:"Community Health Camp, Odisha",       emoji:"🏥", colorBg:"#FBEEE9", c:"#C0533A", col:1, row:1 },
  { label:"Rural School Renovation",             emoji:"🏫", colorBg:"#E8F2EC", c:"#1D6A45", col:1, row:1 },
];

const BASE_H = 220;

export default function Gallery() {
  return (
    <section className="section-pad bg-cream" style={{ position:"relative" }}>
      <div className="wrap">
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:"2.5rem", flexWrap:"wrap", gap:"1rem" }}>
          <div>
            <span className="eyebrow">Gallery</span>
            <h2 style={{ marginBottom:0 }}>Moments of<br/><em>hope & change</em></h2>
          </div>
          <p style={{ maxWidth:340, color:"var(--ink-3)", fontSize:"0.9rem", lineHeight:1.75, alignSelf:"flex-end" }}>
            A visual journey through the communities we serve and the lives we've touched together.
          </p>
        </div>

        {/* Masonry-style bento */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gridAutoRows:`${BASE_H}px`, gap:12 }} className="gallery-bento">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity:0, scale:0.95 }}
              whileInView={{ opacity:1, scale:1 }}
              viewport={{ once:true, margin:"-30px" }}
              transition={{ delay:i*0.06, duration:0.5, ease:[0.22,1,0.36,1] }}
              whileHover={{ scale:1.02, boxShadow:"var(--shadow-lg)" }}
              style={{
                gridColumn:`span ${item.col}`,
                gridRow:`span ${item.row}`,
                borderRadius:"var(--r-lg)",
                background:item.colorBg,
                border:`1px solid ${item.c}20`,
                position:"relative",
                overflow:"hidden",
                cursor:"pointer",
                boxShadow:"var(--shadow-sm)",
                transition:"box-shadow 0.3s var(--ease)",
              }}
            >
              {/* Subtle cross-hatch pattern */}
              <div style={{
                position:"absolute", inset:0,
                backgroundImage:`repeating-linear-gradient(45deg, ${item.c}04 0px, ${item.c}04 1px, transparent 1px, transparent 12px)`,
              }} />

              {/* Emoji */}
              <div style={{
                position:"absolute", inset:0,
                display:"flex", alignItems:"center", justifyContent:"center",
                fontSize: item.col>1 ? "4.5rem" : "3rem",
              }}>
                {item.emoji}
              </div>

              {/* Caption */}
              <div style={{
                position:"absolute", bottom:0, left:0, right:0,
                padding:"1rem 1.25rem",
                background:`linear-gradient(to top, ${item.colorBg}f0, transparent)`,
              }}>
                <p style={{
                  fontFamily:"var(--sans)", fontWeight:500, fontSize:"0.8rem",
                  color:"var(--ink-2)", margin:0,
                }}>
                  {item.label}
                </p>
              </div>

              {/* Color dot */}
              <div style={{ position:"absolute", top:12, right:12, width:8, height:8, borderRadius:"50%", background:item.c }} />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:900px){ .gallery-bento{grid-template-columns:repeat(2,1fr)!important;} .gallery-bento>div[style*="span 2"]{grid-column:span 2!important;} }
        @media(max-width:480px){ .gallery-bento{grid-template-columns:1fr!important;} .gallery-bento>div{grid-column:span 1!important;grid-row:span 1!important;} }
      `}</style>
    </section>
  );
}
