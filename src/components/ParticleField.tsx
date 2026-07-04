import { useMemo, type CSSProperties } from "react";

interface ParticleFieldProps {
  count?: number;
  className?: string;
}

interface Particle {
  id: number;
  left: string;
  animationDuration: string;
  animationDelay: string;
  size: string;
  opacity: number;
}

export function ParticleField({ count = 25, className = "" }: ParticleFieldProps) {
  const particles: Particle[] = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${(i * 37 + 13) % 100}%`,
      animationDuration: `${3 + (i * 7 + 5) % 5}s`,
      animationDelay: `${(i * 3 + 1) % 8}s`,
      size: `${2 + (i * 11) % 3}px`,
      opacity: 0.2 + ((i * 13) % 5) * 0.1,
    }));
  }, [count]);

  const containerStyle: CSSProperties = {
    position: "absolute",
    inset: 0,
    overflow: "hidden",
    pointerEvents: "none",
  };

  const particleBaseStyle = (p: Particle): CSSProperties => ({
    position: "absolute",
    bottom: "-10px",
    left: p.left,
    width: p.size,
    height: p.size,
    borderRadius: "50%",
    backgroundColor: "#c8a961",
    opacity: p.opacity,
    animation: `particleFloat ${p.animationDuration} ease-in-out ${p.animationDelay} infinite`,
  });

  return (
    <div className={className} style={containerStyle} aria-hidden="true">
      {particles.map((p) => (
        <span key={p.id} style={particleBaseStyle(p)} />
      ))}
      <style>{`
        @keyframes particleFloat {
          0% {
            transform: translate3d(0, 0, 0);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.2;
          }
          100% {
            transform: translate3d(${0}px, -100vh, 0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
