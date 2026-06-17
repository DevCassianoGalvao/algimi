import { ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export function ImprensaPage() {
  const heroRef = useReveal<HTMLElement>(0);
  const bodyRef = useReveal<HTMLDivElement>(0);

  return (
    <>
      <section ref={heroRef} className="pt-40 pb-20" style={{ backgroundColor: '#f3f2eb' }}>
        <div className="max-w-[1440px] mx-auto px-20 max-md:px-6">
          <div className="max-w-2xl" data-reveal>
            <h1 className="font-display mb-6 leading-[1.08]" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 4.5vw, 72px)', fontWeight: 400, color: '#311d13' }}>
              A Algimi São Paulo na imprensa especializada.
            </h1>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 14, color: '#47474a', lineHeight: 1.9 }}>
              Acompanhe publicações, citações e reportagens sobre a marca.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: '#f3f2eb' }}>
        <div className="max-w-[1440px] mx-auto px-20 max-md:px-6" ref={bodyRef}>
          <div className="h-px mb-12" style={{ backgroundColor: '#311d13', opacity: 0.1 }} />
          <div data-reveal className="border-b border-[#311d13]/10 py-10 group">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
              <div>
                <p className="text-[11px] tracking-widest uppercase mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, color: '#47474a', opacity: 0.45 }}>
                  Revista Cenário — Edição 86
                </p>
                <h2 className="font-display max-w-2xl leading-snug mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(22px, 2.5vw, 36px)', fontWeight: 400, color: '#311d13' }}>
                  Algimi São Paulo inicia operação em Itu de madeiras autorais amazônicas e atendimento premium.
                </h2>
              </div>
              <a
                href="#"
                className="shrink-0 inline-flex items-center gap-3 px-7 py-3 border border-[#311d13]/25 transition-all hover:border-[#311d13]/60"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 400, letterSpacing: '0.08em', color: '#311d13', textDecoration: 'none' }}
              >
                Leia a matéria completa
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
          <div className="pt-16 text-center">
            <p className="text-[12px] tracking-wide" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, color: '#47474a', opacity: 0.35 }}>Mais publicações em breve.</p>
          </div>
        </div>
      </section>
    </>
  );
}
