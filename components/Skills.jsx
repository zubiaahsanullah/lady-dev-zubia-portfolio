import { SKILLS } from '@/data/content';

export default function Skills() {
  return (
    <section className="s in" id="skills" aria-labelledby="sh">
      <div className="shead rv"><div><span className="eyebrow">Skills</span><h2 id="sh" style={{ marginTop: 12 }}>My toolkit</h2></div><p>The languages, frameworks and platforms I use to ship work.</p></div>
      <div className="skills">
        {SKILLS.map(([group, list], i) => (
          <div key={group} className="sk rv-c" style={{ animationDelay: `${(i % 2) * 0.08}s`, gridColumn: i === SKILLS.length - 1 ? '1/-1' : undefined }}>
            <h3>{group}<span>{String(list.length).padStart(2, '0')}</span></h3>
            <div className="chips">{list.map((s) => <span key={s} className="chip">{s}</span>)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
