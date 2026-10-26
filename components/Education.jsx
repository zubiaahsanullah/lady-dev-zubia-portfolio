import { EDUCATION } from '@/data/content';

export default function Education() {
  return (
    <section className="s in" id="education" aria-labelledby="edh">
      <div className="shead rv"><div><span className="eyebrow">Education</span><h2 id="edh" style={{ marginTop: 12 }}>My learning journey</h2></div><p>From school in Karachi to a diploma in software engineering.</p></div>
      <div className="journey" id="journey">
        <span className="line" />
        {EDUCATION.map((e, i) => (
          <article key={e.title} className={`stop ${e.dest ? 'dest' : ''}`} style={{ animationDelay: `${0.1 + i * 0.2}s` }}>
            <span className="n">STEP {String(i + 1).padStart(2, '0')}</span>
            <span className="kind">{e.kind}</span>
            <h3>{e.title}</h3>
            <p>{e.school}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
