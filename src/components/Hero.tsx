"use client";
import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";
import * as THREE from "three";
import Link from "next/link";

function Globe() {
  const ref = useRef<THREE.Points>(null!);
  const count = 1800;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    const phi = Math.PI * (Math.sqrt(5) - 1);
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count-1)) * 2;
      const r = Math.sqrt(Math.max(0, 1 - y*y));
      const theta = phi * i;
      arr[i*3]   = r * Math.cos(theta) * 2.4;
      arr[i*3+1] = y * 2.4;
      arr[i*3+2] = r * Math.sin(theta) * 2.4;
    }
    return arr;
  }, []);

  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.0014;
    ref.current.rotation.x = Math.sin(s.clock.elapsedTime * 0.07) * 0.04;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#1D6A45" size={0.013} sizeAttenuation opacity={0.7} depthWrite={false} />
    </Points>
  );
}

function Dust() {
  const ref = useRef<THREE.Points>(null!);
  const count = 400;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3.2 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      arr[i*3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i*3+2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y -= 0.0005;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#B5722A" size={0.018} sizeAttenuation opacity={0.25} depthWrite={false} />
    </Points>
  );
}

function CameraRig() {
  useFrame((s) => {
    s.camera.position.x += (s.pointer.x * 0.4 - s.camera.position.x) * 0.03;
    s.camera.position.y += (s.pointer.y * 0.25 + 0.3 - s.camera.position.y) * 0.03;
    s.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset:["start start","end start"] });
  const y = useTransform(scrollYProgress, [0,1], [0, 100]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} style={{
      position:"relative",
      minHeight:"100vh",
      background:"var(--bg)",
      overflow:"hidden",
      display:"flex",
      alignItems:"center",
    }}>
      {/* Subtle warm texture overlay */}
      <div style={{
        position:"absolute", inset:0,
        backgroundImage:"url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b5722a' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        pointerEvents:"none",
      }} />

      {/* Globe canvas — right side */}
      <div style={{
        position:"absolute",
        right:"-5%", top:"50%",
        transform:"translateY(-50%)",
        width:"55%", height:"95vh",
        minHeight:600,
      }}>
        <Canvas camera={{position:[0,0.3,7.5],fov:48}} style={{background:"transparent"}}>
          <Suspense fallback={null}>
            <ambientLight intensity={1.2} />
            <pointLight position={[4,4,4]} intensity={0.8} color="#1D6A45" />
            <Globe />
            <Dust />
            <CameraRig />
          </Suspense>
        </Canvas>
      </div>

      {/* Fade globe edge */}
      <div style={{
        position:"absolute", inset:0,
        background:"linear-gradient(to right, var(--bg) 38%, rgba(250,248,245,0.5) 62%, transparent 80%)",
        pointerEvents:"none",
        zIndex:2,
      }} />

      {/* Content */}
      <motion.div
        className="wrap"
        style={{ position:"relative", zIndex:3, paddingTop:"var(--nav-h)" }}
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ duration:0.6 }}
      >
        <div style={{ maxWidth:640 }}>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity:0, y:16 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.6, ease:[0.22,1,0.36,1] }}
            style={{ display:"flex", alignItems:"center", gap:12, marginBottom:"1.5rem" }}
          >
            <div style={{ width:28, height:2, background:"var(--green)", borderRadius:2 }} />
            <span className="eyebrow" style={{ marginBottom:0 }}>Est. 2012 · New Delhi, India</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity:0, y:24 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.8, delay:0.1, ease:[0.22,1,0.36,1] }}
            style={{ marginBottom:"1.5rem", color:"var(--ink)" }}
          >
            Serving India,<br />
            <em style={{ color:"var(--green)", fontStyle:"italic" }}>One Life</em><br />
            at a Time.
          </motion.h1>

          {/* Body */}
          <motion.p
            className="lead"
            initial={{ opacity:0, y:16 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.7, delay:0.25, ease:[0.22,1,0.36,1] }}
            style={{ marginBottom:"2.5rem", maxWidth:520 }}
          >
            SevaSetu Foundation bridges the gap between privilege and potential — empowering communities through education, women's rights, environmental care, and more.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity:0, y:14 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.6, delay:0.4, ease:[0.22,1,0.36,1] }}
            style={{ display:"flex", gap:12, flexWrap:"wrap", alignItems:"center" }}
          >
            <Link href="/donate">
              <motion.button className="btn btn-green" whileHover={{scale:1.04}} whileTap={{scale:0.97}} style={{fontSize:"1rem",padding:"14px 32px"}}>
                Donate Now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
              </motion.button>
            </Link>
            <Link href="/about">
              <motion.button className="btn btn-outline" whileHover={{scale:1.03}} whileTap={{scale:0.97}} style={{fontSize:"1rem"}}>
                Our Story
              </motion.button>
            </Link>
          </motion.div>

          {/* Small stat row */}
          <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay:0.7, duration:0.6 }}
            style={{ display:"flex", gap:"2.5rem", marginTop:"3.5rem", paddingTop:"2rem", borderTop:"1px solid var(--border)" }}
            className="hero-stats"
          >
            {[["25,000+","Lives impacted"],["1,000+","Volunteers"],["12 yrs","Of service"]].map(([n,l]) => (
              <div key={l}>
                <div style={{ fontFamily:"var(--serif)", fontWeight:700, fontSize:"1.6rem", color:"var(--green)", lineHeight:1, marginBottom:4 }}>{n}</div>
                <div style={{ fontFamily:"var(--sans)", fontSize:"0.78rem", color:"var(--ink-3)", fontWeight:400 }}>{l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:1.5 }}
        style={{ position:"absolute", bottom:"2rem", left:"50%", transform:"translateX(-50%)", zIndex:4, textAlign:"center" }}
      >
        <motion.div animate={{y:[0,6,0]}} transition={{repeat:Infinity,duration:1.8,ease:"easeInOut"}}>
          <svg width="20" height="28" viewBox="0 0 20 28" fill="none">
            <rect x="1" y="1" width="18" height="26" rx="9" stroke="var(--ink-4)" strokeWidth="1.5"/>
            <rect x="9" y="6" width="2" height="7" rx="1" fill="var(--green)"/>
          </svg>
        </motion.div>
      </motion.div>

      <style>{`
        @media(max-width:768px){
          .hero-stats{ gap:1.5rem!important; }
          section[style*="min-height:100vh"] > div[style*="right"]{
            width:100%!important; right:0!important; opacity:0.3;
          }
        }
      `}</style>
    </section>
  );
}
