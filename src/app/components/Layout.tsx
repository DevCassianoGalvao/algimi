import { useEffect, useRef, useState } from 'react';
import { Outlet, NavLink, Link, useLocation } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { Menu, X, MessageCircle } from 'lucide-react';
import { AlgimiLogo } from './AlgimiLogo';

gsap.registerPlugin(ScrollTrigger);

const NAV_LINKS = [
  { to: '/', label: 'Início', exact: true },
  { to: '/a-marca', label: 'A Marca' },
  { to: '/acervo', label: 'Acervo' },
  { to: '/projetos', label: 'Projetos' },
  { to: '/manejo', label: 'Manejo' },
  { to: '/para-arquitetos', label: 'Para Arquitetos' },
  { to: '/para-construtoras', label: 'Para Construtoras' },
  { to: '/showroom', label: 'Showroom' },
  { to: '/contato', label: 'Contato' },
];

const FOOTER_LINKS = [
  { to: '/a-marca', label: 'A Marca' },
  { to: '/acervo', label: 'Acervo' },
  { to: '/projetos', label: 'Projetos' },
  { to: '/manejo', label: 'Manejo' },
  { to: '/para-arquitetos', label: 'Para Arquitetos' },
  { to: '/para-construtoras', label: 'Para Construtoras' },
  { to: '/showroom', label: 'Showroom' },
  { to: '/imprensa', label: 'Imprensa' },
  { to: '/contato', label: 'Contato' },
];

const NAV_LINK_STYLE: React.CSSProperties = {
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 300,
  fontSize: 12,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: '#311d13',
  textDecoration: 'none',
  transition: 'opacity 0.2s ease',
  position: 'relative',
};

export function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cookieDismissed, setCookieDismissed] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const lenisInstance = new Lenis();
    lenisInstance.on('scroll', () => ScrollTrigger.update());
    const tickerFn = (time: number) => lenisInstance.raf(time * 1000);
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);

    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);

    return () => {
      lenisInstance.destroy();
      gsap.ticker.remove(tickerFn);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const cookieAlreadySet =
    typeof localStorage !== 'undefined' && localStorage.getItem('algimi-cookie') === '1';
  const showCookie = !cookieDismissed && !cookieAlreadySet;

  const handleCookieAccept = () => {
    localStorage.setItem('algimi-cookie', '1');
    setCookieDismissed(true);
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* ─── HEADER ─────────────────────────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: scrolled ? 'rgba(245,240,232,0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(49,29,19,0.08)' : '1px solid transparent',
          transition: 'background-color 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
        }}
      >
        {/* Logo left · Links right */}
        <div
          className="max-w-[1440px] mx-auto px-16 max-md:px-6 flex items-center justify-between"
          style={{ height: 76 }}
        >
          {/* Logo — left */}
          <Link to="/" aria-label="Algimi São Paulo" className="shrink-0">
            <AlgimiLogo variant="dark" width={140} />
          </Link>

          {/* Nav links — right, desktop only */}
          <nav className="hidden xl:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.exact}
                style={({ isActive }) => ({
                  ...NAV_LINK_STYLE,
                  opacity: isActive ? 1 : 0.55,
                })}
                className={({ isActive }) => (isActive ? 'nav-link is-active' : 'nav-link')}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="xl:hidden p-2"
            style={{ color: '#311d13' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* ─── MOBILE NAV OVERLAY ─────────────────────────────────────────────── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col pt-20 px-8 pb-10"
          style={{ backgroundColor: '#F5F0E8' }}
        >
          <nav className="flex flex-col gap-6 mt-10">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.exact}
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: 30, color: '#311d13', textDecoration: 'none' }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-auto pt-8">
            <Link
              to="/contato"
              style={{ display: 'inline-block', padding: '12px 28px', backgroundColor: '#311d13', color: '#F5F0E8', fontFamily: "'Poppins', sans-serif", fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none' }}
              onClick={() => setMobileOpen(false)}
            >
              Agendar Apresentação
            </Link>
          </div>
        </div>
      )}

      {/* ─── PAGE CONTENT ────────────────────────────────────────────────────── */}
      <main>
        <Outlet />
      </main>

      {/* ─── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer style={{ backgroundColor: '#1a0e08' }} className="pt-20 pb-12">
        <div className="max-w-[1440px] mx-auto px-16 max-md:px-6">
          <div className="pb-14 border-b border-white/[0.07]">
            <AlgimiLogo variant="light" width={172} />
            <p
              className="mt-5 max-w-xs"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 13, color: '#f3f2eb', opacity: 0.45, lineHeight: 1.85 }}
            >
              Madeiras autorais amazônicas para arquitetura de alto padrão.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-14 border-b border-white/[0.07]">
            <div>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#f3f2eb', opacity: 0.28, marginBottom: 20 }}>Navegação</p>
              <nav className="flex flex-col gap-3">
                {FOOTER_LINKS.slice(0, 5).map((link) => (
                  <Link key={link.to} to={link.to} style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 13, color: '#f3f2eb', opacity: 0.42, textDecoration: 'none' }}>{link.label}</Link>
                ))}
              </nav>
            </div>
            <div>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#f3f2eb', opacity: 0.28, marginBottom: 20 }}>&nbsp;</p>
              <nav className="flex flex-col gap-3">
                {FOOTER_LINKS.slice(5).map((link) => (
                  <Link key={link.to} to={link.to} style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 13, color: '#f3f2eb', opacity: 0.42, textDecoration: 'none' }}>{link.label}</Link>
                ))}
              </nav>
            </div>
            <div>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#f3f2eb', opacity: 0.28, marginBottom: 20 }}>Showroom</p>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 13, color: '#f3f2eb', opacity: 0.42, lineHeight: 1.85 }}>
                Rua Francisco Benedito<br />da Silveira, 43<br />Itu Novo Centro – SP
              </p>
            </div>
            <div>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#f3f2eb', opacity: 0.28, marginBottom: 20 }}>Contato</p>
              <div className="flex flex-col gap-3">
                <a href="https://wa.me/5511933427616" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 13, color: '#f3f2eb', opacity: 0.42, textDecoration: 'none' }}>(11) 9.3342-7616</a>
                <a href="mailto:contato@algimisaopaulo.com.br" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 13, color: '#f3f2eb', opacity: 0.42, textDecoration: 'none' }}>contato@algimisaopaulo.com.br</a>
                <a href="https://instagram.com/algimisaopaulo" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 13, color: '#f3f2eb', opacity: 0.42, textDecoration: 'none' }}>@algimisaopaulo</a>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between gap-4">
            <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 11, color: '#f3f2eb', opacity: 0.22 }}>
              Algimi SP é uma operação da Algimi Florestal (Santarém-PA), certificada FSC.
            </p>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 11, color: '#f3f2eb', opacity: 0.22 }}>
              © 2026 Algimi São Paulo. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* ─── WHATSAPP BUTTON ─────────────────────────────────────────────────── */}
      <a
        href="https://wa.me/5511933427616"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 flex items-center justify-center shadow-xl transition-transform hover:scale-105"
        style={{
          bottom: showCookie ? 72 : 28,
          right: 28,
          width: 52,
          height: 52,
          backgroundColor: '#311d13',
          borderRadius: '50%',
          transition: 'bottom 0.3s ease, transform 0.2s ease',
        }}
        aria-label="Fale com a Algimi São Paulo"
      >
        <MessageCircle size={20} color="#F5F0E8" />
      </a>

      {/* ─── COOKIE CONSENT ──────────────────────────────────────────────────── */}
      {showCookie && (
        <div
          className="fixed bottom-0 left-0 right-0 z-40 px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ backgroundColor: '#311d13' }}
        >
          <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 12, color: '#f3f2eb', opacity: 0.75, lineHeight: 1.6 }}>
            Usamos cookies para melhorar sua experiência. Ao continuar, você concorda com nossa política de privacidade.
          </p>
          <button
            onClick={handleCookieAccept}
            style={{ padding: '8px 24px', border: '1px solid rgba(243,242,235,0.3)', color: '#f3f2eb', fontFamily: "'Poppins', sans-serif", fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', background: 'transparent', cursor: 'pointer', whiteSpace: 'nowrap' }}
          >
            Aceitar
          </button>
        </div>
      )}
    </div>
  );
}
