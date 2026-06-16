'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Abstract AI network cluster - Tony Stark JARVIS hologram style
export default function JarvisCore({ progress = 0 }) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;

    const nodes = Array.from({ length: 28 }, (_, i) => ({
      id: i,
      x: 250 + Math.cos((i / 28) * Math.PI * 2) * (80 + Math.random() * 120),
      y: 250 + Math.sin((i / 28) * Math.PI * 2) * (80 + Math.random() * 120),
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: 2 + Math.random() * 3,
      glow: Math.random() > 0.7,
    }));

    const rings = [60, 120, 180];
    let frame = 0;

    const draw = () => {
      ctx.clearRect(0, 0, 500, 500);

      // Rotating rings
      rings.forEach((r, i) => {
        ctx.save();
        ctx.translate(250, 250);
        ctx.rotate(frame * 0.002 * (i % 2 === 0 ? 1 : -1));
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 30, 255, ${0.08 + i * 0.02})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 12]);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();

        // Small tick marks on rings
        for (let t = 0; t < 12; t++) {
          const angle = (t / 12) * Math.PI * 2 + frame * 0.002 * (i % 2 === 0 ? 1 : -1);
          const tx = 250 + Math.cos(angle) * r;
          const ty = 250 + Math.sin(angle) * r;
          ctx.beginPath();
          ctx.arc(tx, ty, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 255, 65, ${t % 3 === 0 ? 0.7 : 0.2})`;
          ctx.fill();
        }
      });

      // Center core
      const pulse = Math.sin(frame * 0.04) * 0.3 + 0.7;
      const grad = ctx.createRadialGradient(250, 250, 0, 250, 250, 40 * pulse);
      grad.addColorStop(0, 'rgba(0, 30, 255, 0.6)');
      grad.addColorStop(0.5, 'rgba(0, 30, 255, 0.1)');
      grad.addColorStop(1, 'rgba(0, 30, 255, 0)');
      ctx.beginPath();
      ctx.arc(250, 250, 40 * pulse, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(250, 250, 8, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 255, 65, 0.9)';
      ctx.shadowColor = '#00FF41';
      ctx.shadowBlur = 20;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Update & draw nodes
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        const dx = n.x - 250, dy = n.y - 250;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > 200) { n.vx *= -0.8; n.vy *= -0.8; }
        if (dist < 30) { n.vx += dx * 0.02; n.vy += dy * 0.02; }

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = n.glow ? 'rgba(0, 255, 65, 0.85)' : 'rgba(0, 30, 255, 0.6)';
        if (n.glow) { ctx.shadowColor = '#00FF41'; ctx.shadowBlur = 10; }
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw connections between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 90) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(0, 30, 255, ${(1 - d / 90) * 0.35})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      // Scan line
      const scanY = 250 + Math.sin(frame * 0.015) * 180;
      const scanGrad = ctx.createLinearGradient(50, scanY - 5, 450, scanY + 5);
      scanGrad.addColorStop(0, 'rgba(0, 255, 65, 0)');
      scanGrad.addColorStop(0.5, 'rgba(0, 255, 65, 0.15)');
      scanGrad.addColorStop(1, 'rgba(0, 255, 65, 0)');
      ctx.fillStyle = scanGrad;
      ctx.fillRect(50, scanY - 2, 400, 4);

      frame++;
      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <div className="relative flex items-center justify-center">
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-primary/5 blur-3xl" />
      <canvas
        ref={canvasRef}
        className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] drop-shadow-2xl"
        style={{ filter: 'drop-shadow(0 0 40px rgba(0, 30, 255, 0.3))' }}
      />
      {/* JARVIS label */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass-panel px-4 py-1.5">
        <p className="font-mono text-[9px] tracking-[0.3em] text-cyber">JARVIS.CORE v2.6.1</p>
      </div>
    </div>
  );
}
