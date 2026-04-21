import { useEffect, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

/* ─── Shooting Stars Canvas ─────────────────────────────── */
const ShootingStars = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let stars = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    class ShootingStar {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height * 0.5;
        this.len = Math.random() * 120 + 60;
        this.speed = Math.random() * 6 + 3;
        this.angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.3;
        this.opacity = 1;
        this.life = 0;
        this.maxLife = Math.random() * 60 + 40;
        this.width = Math.random() * 1.5 + 0.5;
      }
      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.life++;
        this.opacity = 1 - this.life / this.maxLife;
        if (this.life >= this.maxLife) this.reset();
      }
      draw() {
        const tailX = this.x - Math.cos(this.angle) * this.len;
        const tailY = this.y - Math.sin(this.angle) * this.len;
        const grad = ctx.createLinearGradient(tailX, tailY, this.x, this.y);
        grad.addColorStop(0, `rgba(0,171,240,0)`);
        grad.addColorStop(0.6, `rgba(200,240,255,${this.opacity * 0.6})`);
        grad.addColorStop(1, `rgba(255,255,255,${this.opacity})`);
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(this.x, this.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = this.width;
        ctx.shadowColor = "#00abf0";
        ctx.shadowBlur = 6;
        ctx.stroke();
      }
    }

    // Only 3 shooting stars at a time — elegant, not chaotic
    for (let i = 0; i < 3; i++) {
      const s = new ShootingStar();
      s.life = Math.random() * s.maxLife; // stagger
      stars.push(s);
    }

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(s => { s.update(); s.draw(); });
      animId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed", top: 0, left: 0,
        width: "100%", height: "100%",
        pointerEvents: "none", zIndex: 0,
      }}
    />
  );
};

/* ─── Twinkling Static Stars Canvas ────────────────────── */
const TwinklingStars = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Generate fixed star positions
    const starCount = 160;
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.5 + 0.3,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.02 + 0.008,
    }));

    let t = 0;
    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.016;
      stars.forEach(s => {
        const opacity = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(t * s.speed * 60 + s.phase));
        const glow = s.r > 1.2;
        const x = s.x * canvas.width;
        const y = s.y * canvas.height;

        if (glow) {
          ctx.shadowColor = "#00abf0";
          ctx.shadowBlur = 8;
        }
        ctx.beginPath();
        ctx.arc(x, y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 240, 255, ${opacity})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
      animId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed", top: 0, left: 0,
        width: "100%", height: "100%",
        pointerEvents: "none", zIndex: 0,
      }}
    />
  );
};

/* ─── Main Component ────────────────────────────────────── */
const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesOptions = {
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: ["grab", "bubble"] },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        grab:   { distance: 180, links: { opacity: 0.6 } },
        bubble: { distance: 200, size: 5, duration: 0.4, opacity: 0.8 },
        push:   { quantity: 3 },
      },
    },
    particles: {
      color: { value: ["#00abf0", "#4ecdc4", "#a8edea"] },
      links: {
        color: "#00abf0",
        distance: 140,
        enable: true,
        opacity: 0.18,
        width: 1,
        triangles: { enable: true, opacity: 0.04 },
      },
      move: {
        enable: true,
        speed: 0.6,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "out" },
        attract: { enable: true, rotate: { x: 600, y: 1200 } },
      },
      number: {
        density: { enable: true, area: 900 },
        value: 55,
      },
      opacity: {
        value: { min: 0.2, max: 0.7 },
        animation: { enable: true, speed: 0.8, minimumValue: 0.1, sync: false },
      },
      shape: { type: ["circle", "triangle"] },
      size: {
        value: { min: 1, max: 3 },
        animation: { enable: true, speed: 2, minimumValue: 0.5, sync: false },
      },
    },
    detectRetina: true,
  };

  return (
    <>
      {/* Deep space aurora gradient overlay */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        background: `
          radial-gradient(ellipse 80% 40% at 20% 10%, rgba(0,171,240,0.07) 0%, transparent 60%),
          radial-gradient(ellipse 60% 50% at 80% 80%, rgba(78,205,196,0.05) 0%, transparent 60%),
          radial-gradient(ellipse 100% 60% at 50% 0%,  rgba(0,171,240,0.04) 0%, transparent 70%)
        `,
      }} />

      {/* Twinkling static star field */}
      <TwinklingStars />

      {/* Shooting stars streaks */}
      <ShootingStars />

      {/* Interactive floating network particles */}
      {init && (
        <Particles
          id="tsparticles"
          options={particlesOptions}
          style={{ position: "fixed", inset: 0, zIndex: 0 }}
        />
      )}
    </>
  );
};

export default ParticlesBackground;