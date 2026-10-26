'use client';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { JOBS } from '@/data/content';

const SPAN = 24; // months shown on the timeline, from Nov 2024
const TICKS = [['Nov 2024', 0], ['May 2025', 6], ['Nov 2025', 12], ['May 2026', 18], ['Now', SPAN]];

export default function Experience() {
  const [active, setActive] = useState(0);
  const [swap, setSwap] = useState(0);
  const [nowIdx, setNowIdx] = useState(23.9);
  const tabs = useRef([]);
  const pill = useRef(null);

  const placePill = useCallback(() => {
    const t = tabs.current[active];
    if (!t || !pill.current) return;
    Object.assign(pill.current.style, { width: t.offsetWidth + 'px', height: t.offsetHeight + 'px', transform: `translate(${t.offsetLeft}px,${t.offsetTop}px)` });
  }, [active]);

  useLayoutEffect(placePill, [placePill]);
  useEffect(() => {
    const n = new Date();
    setNowIdx((n.getFullYear() - 2024) * 12 + n.getMonth() - 10 + n.getDate() / 31);
    addEventListener('resize', placePill);
    document.fonts?.ready.then(placePill);
    return () => removeEventListener('resize', placePill);
  }, [placePill]);

  const show = (i) => { setActive(i); setSwap((s) => s + 1); };
  const onKey = (e) => {
    const next = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
    if (!next) return;
    e.preventDefault();
    const n = (active + next + JOBS.length) % JOBS.length;
    show(n);
    tabs.current[n]?.focus();
  };

  const j = JOBS[active];
  return (
    <section className="s in" id="experience" aria-labelledby="eh">
      <div className="shead rv"><div><span className="eyebrow">Experience</span><h2 id="eh" style={{ marginTop: 12 }}>Where I have worked</h2></div><p>Pick a company to see what I did there.</p></div>
      <div className="xp rv-c">
        <div className="xtabs" role="tablist" aria-label="Companies" onKeyDown={onKey}>
          <span className="xpill" ref={pill} />
          {JOBS.map((job, i) => (
            <button key={job.co} type="button" role="tab" aria-selected={i === active} className={`xtab ${i === active ? 'on' : ''}`} ref={(el) => (tabs.current[i] = el)} onClick={() => show(i)}>
              <b>{job.co}</b><span>{job.short}</span>
              {job.live ? <span className="live">Now</span> : <span className="yr">{job.yr}</span>}
            </button>
          ))}
        </div>
        <article key={swap} className={`xpanel ${swap ? 'swap' : ''}`} role="tabpanel" aria-live="polite">
          <div className="x-top stagger"><h3>{j.co}</h3><span className="x-when">{j.when}</span></div>
          <div className="x-meta stagger">{j.meta.map((m) => <span key={m}>{m}</span>)}</div>
          <div className="x-roles">
            {j.roles.map(([ic, title, text], k) => (
              <div key={title} className="x-role" style={{ animation: `fadeUp .7s var(--ease) ${0.12 + k * 0.1}s both` }}><i>{ic}</i><b>{title}</b><span>{text}</span></div>
            ))}
          </div>
          <div className="tags" style={{ animation: 'fadeUp .7s var(--ease) .3s both' }}>{j.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
        </article>
      </div>
      <div className="xscale rv">
        <span className="lbl2">My timeline, to scale</span>
        <div className="track" id="track">
          <span className="rail" />
          {JOBS.map((job, i) => {
            const e = job.e ?? nowIdx;
            return (
              <button key={job.co} type="button" className={`seg ${i === active ? 'on' : ''}`} aria-label={`${job.co}, ${job.when}`} onClick={() => show(i)}
                style={{ left: `${(job.s / SPAN) * 100}%`, width: `${Math.max(1.6, ((e - job.s) / SPAN) * 100)}%`, background: job.color, animationDelay: `${0.15 + i * 0.15}s` }} />
            );
          })}
        </div>
        <div className="ticks">{TICKS.map(([t, m]) => <span key={t} style={{ left: `${(m / SPAN) * 100}%` }}>{t}</span>)}</div>
      </div>
    </section>
  );
}
