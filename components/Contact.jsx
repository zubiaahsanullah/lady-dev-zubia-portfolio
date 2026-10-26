import Waves from './Waves';
import { ArrowIcon } from './Icons';
import { LINKEDIN } from '@/data/content';

export default function Contact() {
  return (
    <section className="pool" id="contact" aria-labelledby="ch">
      <Waves />
      <div className="in">
        <span className="eyebrow rv">Contact</span>
        <h2 id="ch" className="rv">Let&apos;s build<br /><span className="liquid" style={{ animation: 'flow 7s ease-in-out infinite' }}>something together.</span></h2>
        <p className="rv">Have a website, store or business system in mind? Send me a message on LinkedIn and let&apos;s talk about it.</p>
        <div className="cta"><a className="btn solid" href={LINKEDIN} target="_blank" rel="noopener">Message me on LinkedIn <ArrowIcon /></a></div>
      </div>
    </section>
  );
}
