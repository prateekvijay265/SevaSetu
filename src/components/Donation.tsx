"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tiers = [500,1000,2500,5000,10000];
const impactMap: Record<number,string[]> = {
  500:   ["📚 1 child's school supplies for a year","💊 Basic medicines for 2 families"],
  1000:  ["🌱 5 saplings planted and nurtured","📖 Digital tutoring for 1 child, 1 month"],
  2500:  ["🎒 Full school kit for 3 children","🩺 Health checkup for 10 villagers"],
  5000:  ["💡 Solar lamp for a rural home","🌾 Crop seeds for one farming family"],
  10000: ["🏫 Sponsor a child's full year of school","👩‍💼 Skill training for one woman entrepreneur"],
};

export default function Donation() {
  const [amount, setAmount] = useState(1000);
  const [custom, setCustom] = useState("");
  const [mode, setMode] = useState<"once"|"monthly">("once");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const finalAmt = custom ? (parseInt(custom)||0) : amount;
  const closest = tiers.reduce((a,b) => Math.abs(b-finalAmt)<Math.abs(a-finalAmt)?b:a);
  const impact = impactMap[closest]||impactMap[500];

  return (
    <section className="section-pad bg-green-pale" style={{ position:"relative" }}>
      <div className="wrap">
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"5rem", alignItems:"start" }} className="donate-grid">

          {/* Left */}
          <motion.div initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.7}}>
            <span className="eyebrow">Make an Impact</span>
            <h2 style={{ marginBottom:"1.25rem" }}>
              Every rupee<br/><em>transforms a life</em>
            </h2>
            <p style={{ marginBottom:"2rem", lineHeight:1.85 }}>
              100% of your donation goes directly to programs. No management overhead, no hidden fees. We publish audited financials every year — because your trust is sacred.
            </p>

            {/* Guarantees */}
            <div style={{ display:"flex", flexDirection:"column", gap:14, marginBottom:"2rem" }}>
              {[
                { ico:"🔒", t:"Fully secure payment", s:"256-bit SSL, no card data stored" },
                { ico:"📜", t:"80G Tax exemption",     s:"Deductible under Income Tax Act, India" },
                { ico:"📊", t:"100% transparent",      s:"Annual report published every March" },
              ].map((g,i) => (
                <div key={i} style={{ display:"flex", gap:14, alignItems:"center" }}>
                  <div style={{ width:38, height:38, background:"var(--surface)", border:"1px solid var(--border)", borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1rem", flexShrink:0, boxShadow:"var(--shadow-sm)" }}>{g.ico}</div>
                  <div>
                    <div style={{ fontFamily:"var(--sans)", fontWeight:600, fontSize:"0.88rem", color:"var(--ink)" }}>{g.t}</div>
                    <div style={{ fontFamily:"var(--sans)", fontSize:"0.78rem", color:"var(--ink-3)" }}>{g.s}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Impact preview */}
            <div style={{ padding:"1.5rem", background:"var(--surface)", border:"1px solid var(--border)", borderRadius:"var(--r-lg)", boxShadow:"var(--shadow-sm)" }}>
              <div style={{ fontFamily:"var(--mono)", fontSize:"0.68rem", color:"var(--green)", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:12 }}>
                ₹{finalAmt.toLocaleString("en-IN")} will provide:
              </div>
              <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                {impact.map((item,i) => (
                  <motion.div key={i} initial={{opacity:0,x:-8}} animate={{opacity:1,x:0}} transition={{delay:i*0.1}} style={{ display:"flex", alignItems:"center", gap:10 }}>
                    <span style={{ fontSize:"1.15rem", flexShrink:0 }}>{item.split(" ")[0]}</span>
                    <span style={{ fontFamily:"var(--sans)", fontSize:"0.88rem", color:"var(--ink-2)" }}>{item.slice(item.indexOf(" ")+1)}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.7}}>
            <AnimatePresence mode="wait">
              {!done ? (
                <motion.div key="form" initial={{opacity:0,scale:0.98}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:0.97}}
                  style={{ background:"var(--surface)", border:"1px solid var(--border)", borderRadius:"var(--r-xl)", padding:"2.5rem", boxShadow:"var(--shadow-lg)" }}
                >
                  <h4 style={{ marginBottom:"1.5rem" }}>Choose your impact</h4>

                  {/* Mode toggle */}
                  <div style={{ display:"flex", background:"var(--bg-alt)", border:"1px solid var(--border)", borderRadius:"var(--r-pill)", padding:4, marginBottom:"1.5rem" }}>
                    {(["once","monthly"] as const).map(m => (
                      <button key={m} onClick={() => setMode(m)} style={{
                        flex:1, padding:"9px", borderRadius:"var(--r-pill)",
                        fontFamily:"var(--sans)", fontWeight: mode===m?600:400, fontSize:"0.88rem",
                        background: mode===m?"var(--green)":"transparent",
                        color: mode===m?"white":"var(--ink-3)",
                        transition:"all 0.22s", border:"none", cursor:"pointer",
                      }}>{m==="once"?"One-time":"Monthly"}</button>
                    ))}
                  </div>

                  {/* Amount grid */}
                  <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8, marginBottom:"1rem" }}>
                    {tiers.map(a => (
                      <button key={a} onClick={() => { setAmount(a); setCustom(""); }} style={{
                        padding:"11px 6px",
                        borderRadius:"var(--r-md)",
                        fontFamily:"var(--sans)", fontWeight:600, fontSize:"0.88rem",
                        background: amount===a&&!custom?"var(--green)":"var(--bg-alt)",
                        border:`1px solid ${amount===a&&!custom?"transparent":"var(--border)"}`,
                        color: amount===a&&!custom?"white":"var(--ink-2)",
                        cursor:"pointer", transition:"all 0.18s",
                      }}>₹{a>=1000?a/1000+"k":a}</button>
                    ))}
                  </div>

                  <div style={{ position:"relative", marginBottom:"1.5rem" }}>
                    <span style={{ position:"absolute", left:14, top:"50%", transform:"translateY(-50%)", fontFamily:"var(--sans)", fontWeight:500, color:"var(--ink-3)" }}>₹</span>
                    <input className="field" placeholder="Custom amount" value={custom} onChange={e=>setCustom(e.target.value)} type="number" style={{ paddingLeft:28 }} />
                  </div>

                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:"1rem" }}>
                    <div><label className="field-label">First Name</label><input className="field" placeholder="Rahul" value={name} onChange={e=>setName(e.target.value)} /></div>
                    <div><label className="field-label">Last Name</label><input className="field" placeholder="Sharma" /></div>
                  </div>
                  <div style={{ marginBottom:"1.5rem" }}>
                    <label className="field-label">Email</label>
                    <input className="field" type="email" placeholder="rahul@email.com" value={email} onChange={e=>setEmail(e.target.value)} />
                  </div>

                  <motion.button className="btn btn-green" onClick={() => setDone(true)} whileHover={{scale:1.02}} whileTap={{scale:0.97}}
                    style={{ width:"100%", justifyContent:"center", fontSize:"1rem", padding:"15px" }}
                  >
                    Donate ₹{finalAmt.toLocaleString("en-IN")}{mode==="monthly"?" / month":""}
                  </motion.button>

                  <p style={{ textAlign:"center", marginTop:12, fontSize:"0.75rem", color:"var(--ink-4)" }}>
                    You'll receive your 80G receipt within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.div key="done" initial={{opacity:0,scale:0.94}} animate={{opacity:1,scale:1}}
                  style={{ background:"var(--green-light)", border:"1px solid rgba(29,106,69,0.2)", borderRadius:"var(--r-xl)", padding:"3rem 2.5rem", textAlign:"center", boxShadow:"var(--shadow-md)" }}
                >
                  <div style={{ fontSize:"3.5rem", marginBottom:"1rem" }}>🌱</div>
                  <h3 style={{ marginBottom:"0.75rem" }}>Thank you, {name||"friend"}!</h3>
                  <p style={{ marginBottom:"2rem", lineHeight:1.75 }}>
                    Your donation of <strong style={{ color:"var(--green)" }}>₹{finalAmt.toLocaleString("en-IN")}</strong> has been received. Your 80G certificate is on its way to your inbox.
                  </p>
                  <button className="btn btn-outline" onClick={() => setDone(false)}>Make another donation</button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:860px){.donate-grid{grid-template-columns:1fr!important;gap:2.5rem!important;}}`}</style>
    </section>
  );
}
