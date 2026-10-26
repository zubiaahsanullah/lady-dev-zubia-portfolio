'use client';
import { useEffect } from 'react';

// Page-wide effects: liquid hover origin on buttons and cards, and clip-path reveals as blocks scroll in.
export default function ClientEffects() {
  useEffect(() => {
    const setOrigin = (e) => {
      const el = e.target.closest?.('.btn,.card');
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty('--x', ((e.clientX - r.left) / r.width) * 100 + '%');
      el.style.setProperty('--y', ((e.clientY - r.top) / r.height) * 100 + '%');
    };
    const out = (e) => {
      const el = e.target.closest?.('.btn,.card');
      if (el && !el.contains(e.relatedTarget)) setOrigin(e);
    };
    document.addEventListener('pointerover', setOrigin);
    document.addEventListener('pointerout', out);

    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let ro;
    if (!reduce && 'IntersectionObserver' in window) {
      const vh = innerHeight;
      ro = new IntersectionObserver(
        (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('go'); ro.unobserve(e.target); } }),
        { rootMargin: '0px 0px 12% 0px' }
      );
      document.querySelectorAll('.rv,.rv-c,.rv-w,#journey,#track').forEach((el) => {
        if (el.getBoundingClientRect().top > vh * 0.98) {
          if (el.id === 'track') el.classList.add('armed');
          ro.observe(el);
        }
      });
    }
    return () => {
      document.removeEventListener('pointerover', setOrigin);
      document.removeEventListener('pointerout', out);
      ro?.disconnect();
    };
  }, []);
  return null;
}
