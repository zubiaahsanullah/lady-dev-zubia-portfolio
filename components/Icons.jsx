const base = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round' };

export function ArrowIcon() {
  return <svg {...base} strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

const PATHS = {
  screen: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4M7 9l2.5 2L7 13M12 13h4" /></>,
  db: <><ellipse cx="12" cy="5.5" rx="7" ry="2.5" /><path d="M5 5.5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6M5 11.5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" /></>,
  bag: <><path d="M4 7h16l-1.5 11a2 2 0 0 1-2 1.7h-9a2 2 0 0 1-2-1.7z" /><path d="M9 7V5a3 3 0 0 1 6 0v2" /></>,
  grid: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><path d="M14 17.5h7M17.5 14v7" /></>,
  phone: <><rect x="7" y="2.5" width="10" height="19" rx="2.5" /><path d="M11 18.5h2" /></>,
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7z" />,
};

export function ServiceIcon({ name }) {
  return <svg {...base} strokeWidth="1.9">{PATHS[name]}</svg>;
}
