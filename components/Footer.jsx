import { LogoMark } from './Logo';

export default function Footer() {
  return (
    <footer>
      <div className="in"><LogoMark /><span>© {new Date().getFullYear()} Zubia Ahsanullah · Full Stack Developer, Karachi</span></div>
    </footer>
  );
}
