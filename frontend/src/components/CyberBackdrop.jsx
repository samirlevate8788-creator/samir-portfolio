import { useEffect, useRef } from "react";

const glyphs = "01<>[]{}#$+=/\\";

export default function CyberBackdrop() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0;
    let height = 0;
    let drops = [];
    let animationFrame = 0;
    let lastFrame = 0;
    const fontSize = 15;
    const columnWidth = 25;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      drops = Array.from({ length: Math.ceil(width / columnWidth) }, () =>
        Math.random() * (height / fontSize),
      );
      context.clearRect(0, 0, width, height);
    };

    const draw = (time) => {
      animationFrame = window.requestAnimationFrame(draw);
      if (reducedMotion.matches || time - lastFrame < 55) return;
      lastFrame = time;

      context.fillStyle = "rgba(2, 2, 3, 0.11)";
      context.fillRect(0, 0, width, height);
      context.font = `${fontSize}px ui-monospace, Consolas, monospace`;

      drops.forEach((drop, column) => {
        const glyph = glyphs[Math.floor(Math.random() * glyphs.length)];
        const signal = Math.random();
        context.fillStyle = signal > 0.992
          ? "rgba(255, 54, 82, 0.52)"
          : signal > 0.94
            ? "rgba(132, 255, 164, 0.60)"
            : "rgba(2, 247, 76, 0.22)";
        context.fillText(glyph, column * columnWidth, drop * fontSize);

        if (drop * fontSize > height && Math.random() > 0.978) {
          drops[column] = 0;
        } else {
          drops[column] += 0.6 + Math.random() * 0.6;
        }
      });
    };

    resize();
    if (!reducedMotion.matches) animationFrame = window.requestAnimationFrame(draw);

    const handleMotionChange = () => {
      window.cancelAnimationFrame(animationFrame);
      context.clearRect(0, 0, width, height);
      if (!reducedMotion.matches) animationFrame = window.requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize, { passive: true });
    reducedMotion.addEventListener?.("change", handleMotionChange);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      reducedMotion.removeEventListener?.("change", handleMotionChange);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="cyber-rain" aria-hidden="true" />
      <div className="cyber-atmosphere" aria-hidden="true">
        <span className="cyber-orb cyber-orb-green" />
        <span className="cyber-orb cyber-orb-red" />
        <span className="cyber-scanline" />
      </div>
    </>
  );
}
