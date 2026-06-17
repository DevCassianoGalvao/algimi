import { Link } from 'react-router';
import { useReveal } from '../hooks/useReveal';

export function CTASection() {
  const ref = useReveal<HTMLElement>(0);

  return (
    <section ref={ref} className="py-40" style={{ backgroundColor: '#311d13' }}>
      <div className="max-w-[1440px] mx-auto px-20 max-md:px-6 text-center">
        <h2
          data-reveal
          className="font-display mb-6 leading-[1.08]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(40px, 5.5vw, 88px)',
            fontWeight: 400,
            color: '#f3f2eb',
          }}
        >
          Agende uma apresentação.
        </h2>
        <p
          data-reveal
          className="max-w-lg mx-auto mb-12 leading-relaxed"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 15, color: '#f3f2eb', opacity: 0.65, lineHeight: 1.85 }}
        >
          Receba o portfólio digital e conheça o acervo com a curadoria da equipe Algimi São Paulo.
        </p>
        <div data-reveal className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contato"
            className="inline-flex items-center gap-3 px-10 py-4 text-[12px] tracking-widest uppercase transition-opacity hover:opacity-85"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, backgroundColor: '#f3f2eb', color: '#311d13', textDecoration: 'none' }}
          >
            → Falar com a gente
          </Link>
          <Link
            to="/acervo"
            className="inline-flex items-center gap-3 px-10 py-4 border border-[#f3f2eb]/35 text-[12px] tracking-widest uppercase transition-all hover:border-[#f3f2eb]/70"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, color: '#f3f2eb', textDecoration: 'none' }}
          >
            Solicite o portfólio
          </Link>
        </div>
      </div>
    </section>
  );
}
