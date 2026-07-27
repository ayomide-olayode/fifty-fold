"use client";

import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import { STATS, type StatItem } from "@/data";

export { STATS, type StatItem };

interface AnimatedCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  duration = 3000,
}: AnimatedCounterProps): React.JSX.Element {
  const [count, setCount] = useState<number>(0);
  const elementRef = useRef<HTMLSpanElement | null>(null);
  const hasAnimatedRef = useRef<boolean>(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let animationFrameId: number;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          const startTime = performance.now();
          const startValue = target > 1000 ? Math.max(0, target - 40) : 0;

          const animate = (currentTime: number): void => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            // Ease out cubic function for smooth slowing down at the end
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(
              startValue + (target - startValue) * easeProgress
            );

            setCount(currentCount);

            if (progress < 1) {
              animationFrameId = requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          animationFrameId = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [target, duration]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export interface StatsProps {
  stats?: StatItem[];
  className?: string;
}

export function Stats({
  stats = STATS,
  className,
}: StatsProps): React.JSX.Element {
  return (
    <section className={clsx("border-b border-stone-200 bg-white", className)}>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 text-center md:grid-cols-4 md:px-8 md:py-16">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex flex-col items-center justify-center text-center"
          >
            <div className="text-[34px] font-extrabold tracking-tight text-brand-black md:text-[44px]">
              <AnimatedCounter
                target={s.numericTarget}
                prefix={s.prefix}
                suffix={s.suffix}
              />
            </div>
            <div className="mt-1.5 text-[14px] font-medium text-stone-500 md:text-[15px]">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
