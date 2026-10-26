import { Fragment } from 'react';
import { MARQUEE } from '@/data/content';

export default function Marquee() {
  const run = (key) => MARQUEE.map((w, i) => (
    <Fragment key={key + w}>
      {i % 3 === 0 ? <b>{w}</b> : <span>{w}</span>}
      <span>✦</span>
    </Fragment>
  ));
  return (
    <div className="marq" aria-hidden="true"><div>{run('a')}{run('b')}</div></div>
  );
}
