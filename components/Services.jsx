import { ServiceIcon } from './Icons';
import { SERVICES } from '@/data/content';

const DELAYS = [0, 0.08, 0.16, 0.04, 0.12, 0.2];

export default function Services() {
  return (
    <section className="s in" id="build" aria-labelledby="bh">
      <div className="shead rv"><div><span className="eyebrow">What I build</span><h2 id="bh" style={{ marginTop: 12 }}>From pixel to database</h2></div><p>Hover a card. Each one is a kind of work I do every week.</p></div>
      <div className="cards">
        {SERVICES.map((s, i) => (
          <article key={s.title} className="card rv-c" style={{ animationDelay: `${DELAYS[i]}s` }}>
            <span className="ic"><ServiceIcon name={s.icon} /></span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <span className="tech">{s.tech}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
