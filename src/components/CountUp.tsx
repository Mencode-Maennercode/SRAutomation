"use client";

import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function CountUp({ value, suffix = "" }: { value: string, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const target = parseInt(value);

  useEffect(() => {
    if (!isInView) return;

    const start = 0;
    const end = target;
    const duration = 2000;
    let startTime: number | null = null;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function: slow down gradually (easeOutQuad)
      const ease = 1 - (1 - progress) * (1 - progress);
      
      const currentCount = Math.floor(ease * end);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}