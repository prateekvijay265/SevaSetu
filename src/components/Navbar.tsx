"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const nav = [
  { href:"/about",     label:"About"     },
  { href:"/programs",  label:"Programs"  },
  { href:"/impact",    label:"Impact"    },
  { href:"/volunteer", label:"Volunteer" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 800,
        height: "var(--nav-h)",
        display: "flex", alignItems: "center",
        padding: "0 2.5rem",
        background: scrolled ? "rgba(250,248,245,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.35s var(--ease)",
      }}>
        {/* Logo */}
        <Link href="/" style={{ display:"flex", alignItems:"center", gap:10, flexShrink:0 }}>
          <div style={{
            width:36, height:36, borderRadius:10,
            background:"var(--green)",
            display:"flex", alignItems:"center", justifyContent:"center",
            boxShadow:"0 2px 8px rgba(29,106,69,0.25)",
          }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 5C3 3.9 3.9 3 5 3h4c1.7 0 3 1.3 3 3s-1.3 3-3 3H5c-1.7 0-3 1.3-3 3s1.3 3 3 3h7" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <div style={{ fontFamily:"var(--serif)", fontWeight:700, fontSize:"1.05rem", color:"var(--ink)", lineHeight:1.1, letterSpacing:"-0.03em" }}>SevaSetu</div>
            <div style={{ fontFamily:"var(--mono)", fontSize:"0.58rem", color:"var(--ink-3)", letterSpacing:"0.1em", textTransform:"uppercase" }}>Foundation</div>
          </div>
        </Link>

        {/* Desktop nav — right side */}
        <nav className="desk-nav" style={{ marginLeft:"auto", display:"flex", alignItems:"center", gap:2 }}>
          {nav.map(l => {
            const active = path === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  padding:"7px 16px",
                  borderRadius:"var(--r-pill)",
                  fontFamily:"var(--sans)",
                  fontWeight: active ? 600 : 400,
                  fontSize:"0.9rem",
                  color: active ? "var(--green)" : "var(--ink-2)",
                  background: active ? "var(--green-light)" : "transparent",
                  transition:"all 0.2s",
                  textDecoration:"none",
                }}
                onMouseEnter={e => { if (!active) (e.target as HTMLElement).style.color = "var(--ink)"; }}
                onMouseLeave={e => { if (!active) (e.target as HTMLElement).style.color = "var(--ink-2)"; }}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div style={{ display:"flex", alignItems:"center", gap:10, marginLeft:16 }}>
          <Link href="/donate" className="desk-nav">
            <motion.button className="btn btn-green" whileHover={{scale:1.03}} whileTap={{scale:0.97}} style={{padding:"9px 22px",fontSize:"0.88rem"}}>
              Donate
            </motion.button>
          </Link>

          {/* Hamburger */}
          <button
            className="mob-btn"
            onClick={() => setOpen(!open)}
            style={{ display:"none", width:38, height:38, alignItems:"center", justifyContent:"center", flexDirection:"column", gap:5, background:"var(--bg-alt)", border:"1px solid var(--border)", borderRadius:8 }}
          >
            <span style={{ display:"block", width:18, height:1.5, background:"var(--ink)", borderRadius:2, transition:"all 0.25s", transform: open ? "rotate(45deg) translate(4px,4.5px)" : "none" }} />
            <span style={{ display:"block", width:14, height:1.5, background:"var(--ink)", borderRadius:2, opacity: open ? 0 : 1, transition:"all 0.25s", alignSelf:"flex-start" }} />
            <span style={{ display:"block", width:18, height:1.5, background:"var(--ink)", borderRadius:2, transition:"all 0.25s", transform: open ? "rotate(-45deg) translate(4px,-4.5px)" : "none" }} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div key="ov" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
              style={{ position:"fixed", inset:0, zIndex:700, background:"rgba(28,25,23,0.4)", backdropFilter:"blur(4px)" }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              key="menu"
              initial={{opacity:0,y:-12}}
              animate={{opacity:1,y:0}}
              exit={{opacity:0,y:-8}}
              transition={{duration:0.28, ease:[0.22,1,0.36,1]}}
              style={{
                position:"fixed", top:"calc(var(--nav-h) + 8px)", left:"1rem", right:"1rem", zIndex:750,
                background:"var(--surface)", border:"1px solid var(--border)", borderRadius:"var(--r-lg)",
                padding:"0.75rem", boxShadow:"var(--shadow-xl)",
              }}
            >
              {nav.map((l,i) => (
                <motion.div key={l.href} initial={{opacity:0,x:-8}} animate={{opacity:1,x:0}} transition={{delay:i*0.05}}>
                  <Link href={l.href} style={{
                    display:"block", padding:"13px 18px", borderRadius:12,
                    fontFamily:"var(--sans)", fontWeight:600, fontSize:"1.05rem",
                    color: path===l.href ? "var(--green)" : "var(--ink)",
                    background: path===l.href ? "var(--green-pale)" : "transparent",
                    transition:"all 0.15s",
                  }}>{l.label}</Link>
                </motion.div>
              ))}
              <div style={{padding:"0.75rem", borderTop:"1px solid var(--border)", marginTop:8}}>
                <Link href="/donate" className="btn btn-green" style={{width:"100%",justifyContent:"center",display:"flex"}}>Donate</Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media(min-width:769px){ .mob-btn{display:none!important;} }
        @media(max-width:768px){ .desk-nav{display:none!important;} .mob-btn{display:flex!important;} }
      `}</style>
    </>
  );
}
