import { useEffect, useRef, useState } from "react";

export function Avatar3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [look, setLook] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function onMove(e: MouseEvent) {
      const el = containerRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) / Math.max(window.innerWidth / 2, 1);
      const dy = (e.clientY - cy) / Math.max(window.innerHeight / 2, 1);
      setLook({
        x: Math.max(-1, Math.min(1, dx)),
        y: Math.max(-1, Math.min(1, dy)),
      });
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Eye/pupil offsets
  const pupilX = look.x * 4;
  const pupilY = look.y * 3;
  // Head tilt
  const headRotate = look.x * 8;
  const headShiftX = look.x * 4;
  const headShiftY = look.y * 3;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center overflow-hidden"
    >
      {/* Grid floor */}
      <div
        className="absolute inset-x-6 bottom-10 top-12 rounded-2xl opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.72 0.13 180 / 0.25) 1px, transparent 1px), linear-gradient(90deg, oklch(0.72 0.13 180 / 0.25) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      {/* Glow halo */}
      <div
        className="absolute w-56 h-56 rounded-full blur-3xl opacity-50 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--teal-glow), transparent 70%)" }}
      />

      <div className="relative animate-float" style={{ filter: "drop-shadow(0 18px 30px rgba(0,0,0,0.5))" }}>
        <svg
          viewBox="0 0 240 300"
          width="220"
          height="275"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.78 0.13 180)" />
              <stop offset="100%" stopColor="oklch(0.55 0.12 200)" />
            </linearGradient>
            <radialGradient id="faceGrad" cx="0.5" cy="0.4" r="0.7">
              <stop offset="0%" stopColor="#f5d6b3" />
              <stop offset="100%" stopColor="#d9a877" />
            </radialGradient>
            <linearGradient id="hairGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2a2118" />
              <stop offset="100%" stopColor="#15110c" />
            </linearGradient>
          </defs>

          {/* Body / shirt */}
          <path
            d="M55 290 C 55 220, 80 195, 120 195 C 160 195, 185 220, 185 290 Z"
            fill="url(#bodyGrad)"
          />
          {/* Neck */}
          <rect x="108" y="178" width="24" height="24" rx="6" fill="#d9a877" />

          {/* Waving arm (right side of viewer = character's left) */}
          <g style={{ transformOrigin: "175px 215px" }} className="animate-wave">
            <path
              d="M170 215 C 195 200, 215 170, 210 130"
              stroke="url(#bodyGrad)"
              strokeWidth="22"
              strokeLinecap="round"
              fill="none"
            />
            {/* Hand */}
            <g transform="translate(208 125)">
              <circle r="14" fill="#f5d6b3" />
              {/* fingers hint */}
              <path d="M-6 -10 L-6 -18 M-1 -12 L-1 -22 M5 -11 L5 -20 M10 -8 L12 -15"
                stroke="#c89263" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            </g>
          </g>

          {/* Static left arm */}
          <path
            d="M70 215 C 55 240, 55 265, 65 285"
            stroke="url(#bodyGrad)"
            strokeWidth="22"
            strokeLinecap="round"
            fill="none"
          />

          {/* Head group — tracks cursor */}
          <g
            style={{
              transform: `translate(${headShiftX}px, ${headShiftY}px) rotate(${headRotate}deg)`,
              transformOrigin: "120px 130px",
              transition: "transform 0.15s ease-out",
            }}
          >
            {/* Round head */}
            <circle cx="120" cy="115" r="60" fill="url(#faceGrad)" />
            {/* Hair cap */}
            <path
              d="M62 105 C 62 70, 90 50, 120 50 C 152 50, 180 72, 180 108 C 175 92, 158 82, 140 84 C 130 70, 105 70, 92 84 C 76 84, 64 94, 62 105 Z"
              fill="url(#hairGrad)"
            />
            {/* Ears */}
            <ellipse cx="62" cy="120" rx="7" ry="11" fill="#d9a877" />
            <ellipse cx="178" cy="120" rx="7" ry="11" fill="#d9a877" />

            {/* Eyebrows */}
            <path d="M92 100 q10 -6 22 0" stroke="#15110c" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M126 100 q10 -6 22 0" stroke="#15110c" strokeWidth="3" fill="none" strokeLinecap="round" />

            {/* Eyes (whites) */}
            <ellipse cx="103" cy="118" rx="9" ry="10" fill="#fff" />
            <ellipse cx="137" cy="118" rx="9" ry="10" fill="#fff" />

            {/* Pupils — track cursor */}
            <g style={{ transform: `translate(${pupilX}px, ${pupilY}px)`, transition: "transform 0.1s ease-out" }}>
              <circle cx="103" cy="119" r="4" fill="#1a1a1a" />
              <circle cx="137" cy="119" r="4" fill="#1a1a1a" />
              <circle cx="104.5" cy="117.5" r="1.2" fill="#fff" />
              <circle cx="138.5" cy="117.5" r="1.2" fill="#fff" />
            </g>

            {/* Nose */}
            <path d="M120 125 q-3 12 0 18 q3 2 6 0" stroke="#b88555" strokeWidth="2" fill="none" strokeLinecap="round" />

            {/* Smile */}
            <path d="M104 150 q16 12 32 0" stroke="#7a3b2a" strokeWidth="3" fill="none" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}
