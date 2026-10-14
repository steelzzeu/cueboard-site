import { useEffect, useRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface FlickeringGridProps extends HTMLAttributes<HTMLDivElement> {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  maxOpacity?: number;
}

export function FlickeringGrid({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.12,
  color = "rgb(255, 255, 255)",
  className,
  maxOpacity = 0.18,
  ...props
}: FlickeringGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let cols = 0;
    let rows = 0;
    let squares = new Float32Array(0);
    let last = 0;
    let visible = false;
    const dpr = 1;

    const setup = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      cols = Math.ceil(width / (squareSize + gridGap));
      rows = Math.ceil(height / (squareSize + gridGap));
      squares = new Float32Array(cols * rows);
      for (let i = 0; i < squares.length; i += 1) {
        squares[i] = Math.random() * maxOpacity;
      }
    };

    const draw = (time: number) => {
      if (!visible) {
        raf = 0;
        return;
      }
      const delta = Math.min((time - last) / 1000, 0.05);
      last = time;
      for (let i = 0; i < squares.length; i += 1) {
        if (Math.random() < flickerChance * delta) {
          squares[i] = Math.random() * maxOpacity;
        }
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const match = color.match(/\d+/g);
      const [r, g, b] = match ? match.map(Number) : [255, 255, 255];
      for (let i = 0; i < cols; i += 1) {
        for (let j = 0; j < rows; j += 1) {
          const opacity = squares[i * rows + j] ?? 0;
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
          ctx.fillRect(
            i * (squareSize + gridGap) * dpr,
            j * (squareSize + gridGap) * dpr,
            squareSize * dpr,
            squareSize * dpr
          );
        }
      }
      raf = requestAnimationFrame(draw);
    };

    const motionOk = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setup();
    const resizeObserver = new ResizeObserver(setup);
    resizeObserver.observe(container);
    const viewObserver = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && motionOk && raf === 0) {
          raf = requestAnimationFrame(draw);
        }
      },
      { threshold: 0 }
    );
    viewObserver.observe(container);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      viewObserver.disconnect();
    };
  }, [color, flickerChance, gridGap, maxOpacity, squareSize]);

  return (
    <div ref={containerRef} className={cn("h-full w-full", className)} {...props}>
      <canvas ref={canvasRef} className="pointer-events-none size-full" />
    </div>
  );
}
