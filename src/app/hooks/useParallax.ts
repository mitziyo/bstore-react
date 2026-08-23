import { useEffect, useRef } from "react";

export function useParallax<T extends HTMLElement>(scalarX: number, scalarY: number) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const layers = container.querySelectorAll<HTMLElement>(".layer");

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const relX = (event.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const relY = (event.clientY - rect.top - rect.height / 2) / (rect.height / 2);

      layers.forEach((layer) => {
        const depth = parseFloat(layer.dataset.depth ?? "0");
        const x = relX * depth * scalarX;
        const y = relY * depth * scalarY;
        layer.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [scalarX, scalarY]);

  return ref;
}
