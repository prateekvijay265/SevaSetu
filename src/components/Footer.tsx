"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { href:"/about",     l:"About Us"   },
  { href:"/programs",  l:"Programs"   },
  { href:"/impact",    l:"Impact"     },
  { href:"/volunteer", l:"Volunteer"  },
  { href:"/donate",    l:"Donate"     },
];

const programs = ["Education","Women Empowerment","Environment","Animal Welfare","Community Welfare","Youth Development"];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subbed, setSubbed] = useState(false);

  return (
    <footer style={{ background:"var(--ink)", color:"var(--bg)", position:"relative", overflow:"hidden" }}>
      {/* Top CTA band — forest green */}
      <div style={{ background:"var(--green)", padding:"4rem 0" }}>
        <div className="wrap">
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", gap:"2rem", flexWrap:"wrap" }}>
            <div>
              <h2 style={{ color:"white", marginBottom:"0.5rem", fontFamily:"var(--serif)" }}>
                Ready to create<br/><em>real change?</em>
              </h2>
              <p style={{ color:"rgba(255,255,255,0.7)", marginBottom:0 }}>Every action ripples outward. Join us.</p>
            </div>
            <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
              <Link href="/donate">
                <motion.button
                  whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}
                  style={{ background:"white", color:"var(--green)", padding:"13px 28px", borderRadius:"var(--r-pill)", fontFamily:"var(--sans)", fontWeight:700, fontSize:"0.95rem", border:"none", cursor:"pointer" }}
                >
                  Donate Now
                </motion.button>
              </Link>
              <Link href="/volunteer">
                <motion.button
                  whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}
                  style={{ background:"transparent", color:"white", padding:"12px 26px", borderRadius:"var(--r-pill)", fontFamily:"var(--sans)", fontWeight:600, fontSize:"0.95rem", border:"1.5px solid rgba(255,255,255,0.5)", cursor:"pointer" }}
                >
                  Volunteer
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="wrap" style={{ padding:"4rem 2.5rem" }}>
        <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1.7fr", gap:"3rem" }} className="footer-cols">

          {/* Brand */}
          <div>
            <Link href="/" style={{ display:"flex", alignItems:"center", gap:10, marginBottom:"1.25rem" }}>
              <div style={{ width:36, height:36, borderRadius:10, background:"var(--green)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 5C3 3.9 3.9 3 5 3h4c1.7 0 3 1.3 3 3s-1.3 3-3 3H5c-1.7 0-3 1.3-3 3s1.3 3 3 3h7" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily:"var(--serif)", fontWeight:700, fontSize:"1.05rem", color:"white" }}>SevaSetu</div>
                <div style={{ fontFamily:"var(--mono)", fontSize:"0.58rem", color:"rgba(255,255,255,0.4)", letterSpacing:"0.1em", textTransform:"uppercase" }}>Foundation</div>
              </div>
            </Link>
            <p style={{ color:"rgba(255,255,255,0.55)", fontSize:"0.88rem", lineHeight:1.8, marginBottom:"1.5rem", maxWidth:260 }}>
              Bridging Service and Social Impact since 2012. Working with communities across India to build a more just, compassionate world.
            </p>
            {/* Socials */}
            <div style={{ display:"flex", gap:10 }}>
              {[
                { icon:"inst", d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                { icon:"fb",   d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                { icon:"yt",   d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
              ].map(({ icon, d }) => (
                <a key={icon} href="#"
                  style={{ width:34, height:34, borderRadius:8, background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.1)", display:"flex", alignItems:"center", justifyContent:"center", transition:"all 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.16)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"; }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)"><path d={d}/></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <div style={{ fontFamily:"var(--mono)", fontSize:"0.68rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"rgba(255,255,255,0.35)", marginBottom:16 }}>Navigation</div>
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              {navLinks.map(l => (
                <Link key={l.href} href={l.href} style={{ fontFamily:"var(--sans)", fontSize:"0.88rem", color:"rgba(255,255,255,0.6)", transition:"color 0.2s" }}
                  onMouseEnter={e => (e.target as HTMLElement).style.color = "white"}
                  onMouseLeave={e => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.6)"}
                >{l.l}</Link>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <div style={{ fontFamily:"var(--mono)", fontSize:"0.68rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"rgba(255,255,255,0.35)", marginBottom:16 }}>Programs</div>
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              {programs.map(p => (
                <Link key={p} href="/programs" style={{ fontFamily:"var(--sans)", fontSize:"0.88rem", color:"rgba(255,255,255,0.6)", transition:"color 0.2s" }}
                  onMouseEnter={e => (e.target as HTMLElement).style.color = "white"}
                  onMouseLeave={e => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.6)"}
                >{p}</Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <div style={{ fontFamily:"var(--mono)", fontSize:"0.68rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"rgba(255,255,255,0.35)", marginBottom:8 }}>Newsletter</div>
            <p style={{ fontSize:"0.85rem", color:"rgba(255,255,255,0.55)", marginBottom:16, lineHeight:1.7 }}>
              Monthly impact reports, volunteer stories, and opportunities to help.
            </p>
            {!subbed ? (
              <form onSubmit={e=>{e.preventDefault();if(email)setSubbed(true)}} style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:"1.5rem" }}>
                <input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@email.com"
                  style={{ padding:"11px 14px", background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.15)", borderRadius:"var(--r-md)", color:"white", fontFamily:"var(--sans)", fontSize:"0.88rem", outline:"none" }}
                />
                <button type="submit" style={{ padding:"11px", background:"var(--green)", color:"white", border:"none", borderRadius:"var(--r-md)", fontFamily:"var(--sans)", fontWeight:600, fontSize:"0.88rem", cursor:"pointer" }}>
                  Subscribe →
                </button>
              </form>
            ) : (
              <motion.div initial={{opacity:0,y:6}} animate={{opacity:1,y:0}}
                style={{ padding:"12px 14px", background:"rgba(29,106,69,0.3)", border:"1px solid rgba(29,106,69,0.4)", borderRadius:"var(--r-md)", fontSize:"0.85rem", color:"rgba(255,255,255,0.8)", marginBottom:"1.5rem" }}>
                ✓ Thank you for subscribing!
              </motion.div>
            )}
            <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
              {[["✉","hello@sevasetu.org"],["📞","+91 98765 43210"],["📍","New Delhi, India"]].map(([i,t])=>(
                <div key={t} style={{ display:"flex", gap:10, alignItems:"center" }}>
                  <span style={{ fontSize:"0.9rem" }}>{i}</span>
                  <span style={{ fontFamily:"var(--sans)", fontSize:"0.8rem", color:"rgba(255,255,255,0.45)" }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop:"1px solid rgba(255,255,255,0.08)", marginTop:"3rem", paddingTop:"1.75rem", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"1rem" }}>
          <p style={{ fontFamily:"var(--sans)", fontSize:"0.78rem", color:"rgba(255,255,255,0.35)", margin:0 }}>
            © {new Date().getFullYear()} SevaSetu Foundation · Reg. 12345/2012 · Made with ❤️ for India
          </p>
          <div style={{ display:"flex", gap:"1.5rem" }}>
            {["Privacy Policy","Terms of Use","80G Certificate"].map(l => (
              <a key={l} href="#" style={{ fontFamily:"var(--sans)", fontSize:"0.78rem", color:"rgba(255,255,255,0.35)", transition:"color 0.2s" }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.6)"}
                onMouseLeave={e => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.35)"}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){ .footer-cols{grid-template-columns:1fr 1fr!important;} }
        @media(max-width:560px){ .footer-cols{grid-template-columns:1fr!important;} }
      `}</style>
    </footer>
  );
}
