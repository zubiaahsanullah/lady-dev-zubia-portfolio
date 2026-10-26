'use client';
import { useEffect, useState } from 'react';
import { LogoMark } from './Logo';
import { NAV } from '@/data/content';

export default function Nav() {
  const [stuck, setStuck] = useState(false);
  const [active, setActive] = useState(-1);

  useEffect(() => {
    const secs = NAV.map(([href]) => document.querySelector(href));
    const onScroll = () => {
      setStuck(scrollY > 8);
      let cur = -1;
      secs.forEach((s, i) => { if (s && s.getBoundingClientRect().top < innerHeight * 0.4) cur = i; });
      setActive(cur);
    };
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav id="nav" className={stuck ? 'stuck' : ''} aria-label="Main">
      <div className="in">
        <LogoMark />
        <div className="links">
          {NAV.map(([href, label], i) => (
            <a key={href} href={href} className={i === active ? 'on' : ''}>{label}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}
