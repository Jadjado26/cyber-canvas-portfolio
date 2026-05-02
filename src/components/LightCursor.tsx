import { useEffect, useState } from "react";

const LightCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Outer glow */}
      <div
        className="pointer-events-none fixed z-[9999] rounded-full"
        style={{
          left: pos.x - 60,
          top: pos.y - 60,
          width: 120,
          height: 120,
          background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)",
        }}
      />
      {/* Inner bright dot */}
      <div
        className="pointer-events-none fixed z-[9999] rounded-full"
        style={{
          left: pos.x - 8,
          top: pos.y - 8,
          width: 16,
          height: 16,
          background: "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
          boxShadow: "0 0 20px 8px rgba(255,255,255,0.3), 0 0 60px 20px rgba(255,255,255,0.1)",
        }}
      />
    </>
  );
};

export default LightCursor;
