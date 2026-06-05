import { useEffect, useRef, useState } from "react";
import avatarImg from "@/assets/avatar-3d.png";

export function Avatar3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function onMove(e: MouseEvent) {
      const el = containerRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) / window.innerWidth;
      const dy = (e.clientY - cy) / window.innerHeight;
      setOffset({ x: Math.max(-1, Math.min(1, dx)) * 10, y: Math.max(-1, Math.min(1, dy)) * 8 });
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-end justify-center overflow-hidden"
    >
      {/* Grid floor */}
      <div
        className="absolute inset-x-6 bottom-16 top-10 rounded-2xl opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.72 0.13 180 / 0.25) 1px, transparent 1px), linear-gradient(90deg, oklch(0.72 0.13 180 / 0.25) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />
      <div
        className="relative animate-float"
        style={{
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
          transition: "transform 0.25s ease-out",
        }}
      >
        <img
          src={avatarImg}
          alt="3D avatar waving"
          width={260}
          height={340}
          className="relative z-10 h-[280px] w-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
          style={{ filter: "drop-shadow(0 0 24px oklch(0.72 0.13 180 / 0.35))" }}
        />
      </div>
    </div>
  );
}
