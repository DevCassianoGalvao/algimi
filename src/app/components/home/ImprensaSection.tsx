import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export function ImprensaSection() {
  const ref = useReveal<HTMLElement>(0);

  return (
    <section ref={ref} className="py-28" style={{ backgroundColor: '#47474a' }}>
      <div className="max-w-[1440px] mx-auto px-20 max-md:px-6">
        <h2
          data-reveal
          className="font-display mb-14"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 3vw, 52px)', fontWeight: 400, color: '#f3f2eb' }}
        >
          Na imprensa especializada.
        </h2>

        <div data-reveal className="border-t border-[#f3f2eb]/12 pt-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div>
              <p
                className="text-[11px] tracking-widest uppercase mb-4"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, color: '#f3f2eb', opacity: 0.4 }}
              >
                Revista Cenário — Edição 86
              </p>
              <h3
                className="font-display max-w-xl leading-snug"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(20px, 2vw, 32px)', fontWeight: 400, color: '#f3f2eb' }}
              >
                Algimi São Paulo inicia operação em Itu de madeiras autorais amazônicas e atendimento premium.
              </h3>
            </div>
            <Link
              to="/imprensa"
              className="shrink-0 inline-flex items-center gap-3 px-7 py-3 border border-[#f3f2eb]/25 transition-all hover:border-[#f3f2eb]/60 mt-2"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 400, letterSpacing: '0.08em', color: '#f3f2eb', textDecoration: 'none' }}
            >
              Leia a matéria completa
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
