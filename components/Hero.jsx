'use client';
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from 'react';
import Waves from './Waves';
import { ArrowIcon } from './Icons';
import { LINKEDIN, ROLES } from '@/data/content';

export default function Hero() {
  const roller = useRef(null);

  // rotate the role line with a clip-path swap
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const items = [...roller.current.children];
    let i = 0;
    const id = setInterval(() => {
      const a = items[i], b = items[(i + 1) % items.length];
      i = (i + 1) % items.length;
      b.style.transition = 'none'; b.classList.remove('out'); void b.offsetWidth; b.style.transition = '';
      a.classList.remove('on'); a.classList.add('out'); b.classList.add('on');
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="hero" id="top">
      <div className="in">
        <div>
          <span className="eyebrow fade" style={{ animationDelay: '.05s' }}>Karachi, Pakistan · 2+ years experience</span>
          <h1><span className="w">Zubia</span><br /><span className="w liquid">Ahsanullah</span></h1>
          <p className="roleline fade" style={{ animationDelay: '.35s' }}>
            <span className="hello">I&apos;m a</span>
            <span className="roller" ref={roller}>
              {ROLES.map((r, k) => <span key={r} className={k === 0 ? 'on' : ''}>{r}</span>)}
            </span>
          </p>
          <p className="lead fade" style={{ animationDelay: '.45s' }}>I build <b>fast, scalable web applications</b> with React.js, Next.js, Node.js, PHP, REST APIs and SQL, from the first screen to the database behind it.</p>
          <div className="cta fade" style={{ animationDelay: '.6s' }}>
            <a className="btn solid" href="#projects">See my work <ArrowIcon /></a>
            <a className="btn" href={LINKEDIN} target="_blank" rel="noopener">LinkedIn <ArrowIcon /></a>
          </div>
          <div className="facts fade" style={{ animationDelay: '.75s' }}>
            <div><b>2+</b><span>years building for the web</span></div>
            <div><b>3</b><span>companies</span></div>
            <div><b>Full stack</b><span>frontend · backend · ERP</span></div>
          </div>
        </div>
        <div className="stage" aria-hidden="true">
          <div className="halo" />
          <svg className="orbit o1" viewBox="0 0 200 200"><circle cx="100" cy="100" r="96" fill="none" stroke="#d8ccff" strokeWidth=".8" /><circle cx="100" cy="4" r="3.2" fill="#7b5cf1" /><circle cx="4" cy="100" r="2" fill="#4fc9e3" /></svg>
          <svg className="orbit o2" viewBox="0 0 200 200"><circle cx="100" cy="100" r="80" fill="none" stroke="#c2b1ff" strokeWidth=".8" strokeDasharray="2 5" /><circle cx="180" cy="100" r="2.6" fill="#131a35" /></svg>
          <div className="emblem"><img src="/logo.png" alt="" /></div>
          <div className="float f1"><i>&lt;/&gt;</i><span>React.js · Next.js<small>Frontend</small></span></div>
          <div className="float f2"><i>{'{ }'}</i><span>Node.js · PHP · SQL<small>Backend and APIs</small></span></div>
          <div className="float f3"><i>W</i><span>WordPress · Shopify<small>E-commerce</small></span></div>
        </div>
      </div>
      <Waves />
    </header>
  );
}
