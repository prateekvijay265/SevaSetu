"use client";
import { Suspense, useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Line } from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";
import * as THREE from "three";
import Link from "next/link";

/* ─── 🎨 AI-THEMED NEURAL PARTICLE MESH (HERO BANNER) ─── */
function AINeuralMesh() {
  const pointsRef = useRef<THREE.Points>(null!);
  const count = 1200;
  
  // Generate glowing AI nodes
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);
      const r = 2.4 + Math.random() * 1.8;
      arr[i * 3] = r * Math.sin(theta) * Math.cos(phi);
      arr[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      arr[i * 3 + 2] = r * Math.cos(theta);
    }
    return arr;
  }, []);

  // Generate glowing connection lines between nearby neural nodes
  const linePositions = useMemo(() => {
    const lines: number[] = [];
    for (let i = 0; i < 180; i++) {
      const idx1 = Math.floor(Math.random() * count) * 3;
      const idx2 = Math.floor(Math.random() * count) * 3;
      lines.push(positions[idx1], positions[idx1 + 1], positions[idx1 + 2]);
      lines.push(positions[idx2], positions[idx2 + 1], positions[idx2 + 2]);
    }
    return new Float32Array(lines);
  }, [positions]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += 0.0018;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.08;
  });

  return (
    <group>
      {/* Neural Nodes */}
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00F2FE"
          size={0.022}
          sizeAttenuation
          opacity={0.85}
          depthWrite={false}
        />
      </Points>
      
      {/* Secondary Indigo Nodes */}
      <Points positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#6366F1"
          size={0.012}
          sizeAttenuation
          opacity={0.6}
          depthWrite={false}
        />
      </Points>

      {/* Synaptic AI Connections */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#4FACFE" transparent opacity={0.25} />
      </lineSegments>
    </group>
  );
}

function CameraRig() {
  useFrame((s) => {
    s.camera.position.x += (s.pointer.x * 0.6 - s.camera.position.x) * 0.04;
    s.camera.position.y += (s.pointer.y * 0.4 + 0.2 - s.camera.position.y) * 0.04;
    s.camera.lookAt(0, 0, 0);
  });
  return null;
}

/* ─── ✨ ANIMATED TYPING EFFECT HOOK ─── */
const phrases = [
  "One Life at a Time.",
  "Through AI & Innovation.",
  "With Radical Transparency.",
  "Across 30+ States.",
];

function useTypingEffect(words: string[], typingSpeed = 70, deletingSpeed = 35, pauseTime = 1800) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), pauseTime);
      return () => clearTimeout(timeout);
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, typingSpeed, deletingSpeed, pauseTime]);

  return words[index].substring(0, subIndex);
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  
  const typedText = useTypingEffect(phrases);

  return (
    <section ref={ref} style={{
      position: "relative",
      minHeight: "100vh",
      background: "var(--bg)",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      paddingBottom: "80px",
    }}>
      {/* Warm background texture + AI grid glow */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle at 80% 30%, rgba(0, 242, 254, 0.08) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.06) 0%, transparent 45%)",
        pointerEvents: "none",
      }} />

      {/* 🎨 Custom AI-Themed Neural Banner Canvas — Right side */}
      <div style={{
        position: "absolute",
        right: "-2%", top: "45%",
        transform: "translateY(-50%)",
        width: "58%", height: "92vh",
        minHeight: 600,
      }}>
        <Canvas camera={{ position: [0, 0.2, 7.2], fov: 48 }} style={{ background: "transparent" }}>
          <Suspense fallback={null}>
            <ambientLight intensity={1.4} />
            <pointLight position={[5, 5, 5]} intensity={1.2} color="#00F2FE" />
            <pointLight position={[-4, -3, 2]} intensity={0.8} color="#6366F1" />
            <AINeuralMesh />
            <CameraRig />
          </Suspense>
        </Canvas>
      </div>

      {/* Soft gradient blend for readability */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to right, var(--bg) 40%, rgba(250,248,245,0.65) 65%, transparent 85%)",
        pointerEvents: "none",
        zIndex: 2,
      }} />

      {/* Main Content Area */}
      <motion.div
        className="wrap"
        style={{ position: "relative", zIndex: 3, paddingTop: "var(--nav-h)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div style={{ maxWidth: 660 }}>
          {/* Eyebrow Badge with AI Accent */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1.5rem" }}
          >
            <div style={{ width: 28, height: 3, background: "linear-gradient(90deg, var(--green), var(--ai-blue))", borderRadius: 2 }} />
            <span className="eyebrow" style={{ marginBottom: 0, color: "var(--ink-2)" }}>
              Est. 2012 · Next-Gen Social Impact
            </span>
          </motion.div>

          {/* Headline + ✨ Animated Typing Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: "1.5rem", color: "var(--ink)", minHeight: "2.3em" }}
          >
            Serving India,<br />
            <span className="ai-gradient-text" style={{ fontStyle: "italic", fontWeight: 800 }}>
              {typedText}
            </span>
            <span className="typing-cursor" />
          </motion.h1>

          {/* Body */}
          <motion.p
            className="lead"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: "2.5rem", maxWidth: 540 }}
          >
            SevaSetu Foundation harnesses human empathy and modern technology to bridge the gap between privilege and potential across education, women's rights, and sustainability.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}
          >
            <Link href="/donate">
              <motion.button
                className="btn btn-green"
                whileHover={{ scale: 1.04, boxShadow: "0 10px 30px rgba(29, 106, 69, 0.3)" }}
                whileTap={{ scale: 0.97 }}
                style={{ fontSize: "1rem", padding: "14px 34px", borderRadius: "var(--r-pill)" }}
              >
                Donate Now
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
              </motion.button>
            </Link>
            <Link href="/about">
              <motion.button
                className="btn btn-outline"
                whileHover={{ scale: 1.03, borderColor: "var(--ai-blue)" }}
                whileTap={{ scale: 0.97 }}
                style={{ fontSize: "1rem", borderRadius: "var(--r-pill)" }}
              >
                Explore AI & Mission
              </motion.button>
            </Link>
          </motion.div>

          {/* 🌌 Glassmorphism Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.25rem",
              marginTop: "3.5rem",
            }}
            className="hero-stats"
          >
            {[
              ["25,000+", "Lives Impacted", "Across 30+ states"],
              ["1,000+", "Active Volunteers", "Grassroots network"],
              ["100%", "Transparency", "Audited AI tracking"],
            ].map(([number, label, sub]) => (
              <div key={label} className="glass-card" style={{ padding: "1.2rem 1rem", textAlign: "left" }}>
                <div style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "1.65rem", color: "var(--green)", lineHeight: 1, marginBottom: 4 }}>
                  {number}
                </div>
                <div style={{ fontFamily: "var(--sans)", fontSize: "0.85rem", color: "var(--ink)", fontWeight: 600 }}>
                  {label}
                </div>
                <div style={{ fontFamily: "var(--sans)", fontSize: "0.74rem", color: "var(--ink-3)", marginTop: 2 }}>
                  {sub}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* 〰️ Animated SVG Section Divider at bottom of Hero */}
      <div style={{
        position: "absolute",
        bottom: 0, left: 0, right: 0,
        height: "65px",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 4,
      }}>
        <svg
          className="animated-divider-svg"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "150%", height: "100%", transformOrigin: "bottom" }}
        >
          <path
            d="M0 60C360 -20 720 140 1080 40C1260 -10 1380 80 1440 60V120H0V60Z"
            fill="var(--surface)"
            fillOpacity="0.85"
          />
          <path
            d="M0 90C400 10 800 120 1200 60C1320 40 1400 90 1440 80V120H0V90Z"
            fill="var(--surface)"
          />
        </svg>
      </div>

      <style>{`
        @media(max-width: 768px){
          .hero-stats { grid-template-columns: 1fr!important; gap: 1rem!important; }
          section[style*="min-height: 100vh"] > div[style*="right"] {
            width: 100%!important; right: 0!important; opacity: 0.25;
          }
        }
      `}</style>
    </section>
  );
}
