import { useEffect, useState, type CSSProperties } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import logoVAsset from "@/assets/velaro-logo-full.png.asset.json";

const SESSION_KEY = "velaro-loading-shown";

interface LoadingScreenProps {
  duration?: number;
}

export function LoadingScreen({ duration = 2000 }: LoadingScreenProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isLoaded, setIsLoaded] = useState(() => {
    // Skip the loading screen if already shown this session
    if (typeof window !== "undefined") {
      return sessionStorage.getItem(SESSION_KEY) === "true";
    }
    return false;
  });

  useEffect(() => {
    // If already shown or reduced motion, mark as loaded immediately
    if (isLoaded) return;

    if (prefersReducedMotion) {
      setIsLoaded(true);
      sessionStorage.setItem(SESSION_KEY, "true");
      return;
    }

    const timer = setTimeout(() => {
      setIsLoaded(true);
      sessionStorage.setItem(SESSION_KEY, "true");
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, prefersReducedMotion, isLoaded]);

  // Don't render anything if already loaded (sessionStorage hit or reduced motion)
  if (isLoaded) return null;

  const overlayStyle: CSSProperties = {
    position: "fixed",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#0a0a0a",
    zIndex: 9999,
    opacity: 1,
    pointerEvents: "auto",
    transition: "opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  };

  const logoStyle: CSSProperties = {
    width: "200px",
    height: "auto",
    animation: "loadingPulse 1.5s ease-in-out infinite",
  };

  const shimmerBarStyle: CSSProperties = {
    width: "120px",
    height: "2px",
    marginTop: "32px",
    borderRadius: "1px",
    background: "linear-gradient(90deg, transparent, #c8a961, transparent)",
    backgroundSize: "200% 100%",
    animation: "shimmerMove 1.5s ease-in-out infinite",
  };

  return (
    <div style={overlayStyle} aria-label="Loading">
      <img src={logoVAsset.url} alt="VELARO" style={logoStyle} />
      <div style={shimmerBarStyle} />
      <style>{`
        @keyframes loadingPulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.02); }
        }
        @keyframes shimmerMove {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
}
