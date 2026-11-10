"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fades and lifts its children into place the first time they scroll into view.
 *
 * <Reveal>…</Reveal>                      → a div
 * <Reveal as="li" delay={120}>…</Reveal>  → an li that starts 120ms later (for staggering)
 *
 * Plays once per element. Respects "reduce motion" (content just shows).
 */
export default function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Very old browsers: just show the content.
    if (!("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect(); // play once
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-[opacity,transform] duration-1000 ease-editorial motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}