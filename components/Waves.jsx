'use client';
import { useEffect, useRef } from 'react';

// Three water layers; each one's clip-path is a moving sine polygon, redrawn every frame while visible.
const LAY = [
  { amp: 16, len: 1.3, sp: 0.0011, base: 30, ph: 0 },
  { amp: 13, len: 1.8, sp: -0.0014, base: 45, ph: 2 },
  { amp: 10, len: 2.4, sp: 0.0018, base: 60, ph: 4 },
];

function shape(t, c) {
  const N = 28, pts = [];
  for (let k = 0; k <= N; k++) {
    const x = k / N;
    const y = c.base + c.amp * Math.sin(x * Math.PI * 2 * c.len + t * c.sp + c.ph) + c.amp * 0.45 * Math.sin(x * Math.PI * 2 * (c.len * 2.1) - t * c.sp * 1.3 + c.ph * 1.7);
    pts.push(`${(x * 100).toFixed(2)}% ${y.toFixed(2)}%`);
  }
  return `polygon(0% 100%, ${pts.join(', ')}, 100% 100%)`;
}

export default function Waves() {
  const box = useRef(null);
  useEffect(() => {
    const layers = [...box.current.children];
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let vis = true, raf = 0;
    const frame = (t) => {
      if (vis) layers.forEach((l, i) => { l.style.clipPath = shape(t, LAY[i]); });
      if (!reduce) raf = requestAnimationFrame(frame);
    };
    frame(0);
    const io = new IntersectionObserver(([e]) => { vis = e.isIntersecting; });
    io.observe(box.current);
    return () => { cancelAnimationFrame(raf); io.disconnect(); };
  }, []);
  return (
    <div className="waves" ref={box} aria-hidden="true">
      <i className="l3" /><i className="l2" /><i className="l1" />
    </div>
  );
}
