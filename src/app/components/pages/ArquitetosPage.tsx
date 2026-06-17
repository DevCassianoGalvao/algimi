import { Link } from 'react-router';
import { BookOpen, Ruler, Package, Presentation, Wrench } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const SERVICOS = [
  { icon: BookOpen, label: 'Acervo de espécies amazônicas raras, com paletas e texturas diferenciadas' },
  { icon: Ruler, label: 'Fichas técnicas completas para especificação em projeto' },
  { icon: Package, label: 'Fornecimento sob medida (corte, dimensão, beneficiamento)' },
  { icon: Presentation, label: 'Apresentação presencial do mostruário no escritório ou no showroom em Itu' },
  { icon: Wrench, label: 'Suporte técnico durante a execução da obra' },
];

const PROCESSO = [
  'Contato inicial e entendimento do projeto',
  'Apresentação do acervo e curadoria de espécies',
  'Especificação técnica e definição de medidas',
  'Fornecimento sob medida e acompanhamento da entrega',
  'Suporte na execução',
];

export function ArquitetosPage() {
  const heroRef = useReveal<HTMLElement>(0);
  const servicosRef = useReveal<HTMLDivElement>(80);
  const processoRef = useReveal<HTMLDivElement>(100);

  return (
    <>
      <section ref={heroRef} className="pt-40 pb-28" style={{ backgroundColor: '#f3f2eb' }}>
        <div className="max-w-[1440px] mx-auto px-20 max-md:px-6">
          <h1 data-reveal className="font-display mb-8 leading-[1.08] max-w-2xl" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px, 5.5vw, 88px)', fontWeight: 400, color: '#311d13' }}>
            Madeira como linguagem de projeto.
          </h1>
          <p data-reveal className="max-w-2xl leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 15, color: '#47474a', lineHeight: 1.9 }}>
            A Algimi São Paulo atende escritórios de arquitetura autoral com um modelo consultivo. Mais do que fornecer madeira, participamos da especificação — do entendimento do conceito do projeto à seleção da espécie certa para cada aplicação.
          </p>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: '#311d13' }}>
        <div className="max-w-[1440px] mx-auto px-20 max-md:px-6">
          <div className="h-px mb-14" style={{ backgroundColor: '#f3f2eb', opacity: 0.1 }} />
          <h2 className="font-display mb-14" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 3vw, 48px)', fontWeight: 400, color: '#f3f2eb' }}>O que oferecemos</h2>
          <div ref={servicosRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: 'rgba(243,242,235,0.08)' }}>
            {SERVICOS.map(({ icon: Icon, label }) => (
              <div key={label} data-reveal className="p-8" style={{ backgroundColor: '#311d13' }}>
                <Icon size={20} color="#f3f2eb" strokeWidth={1} className="mb-5 opacity-55" />
                <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 13, color: '#f3f2eb', opacity: 0.7, lineHeight: 1.85 }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: '#f3f2eb' }}>
        <div className="max-w-[1440px] mx-auto px-20 max-md:px-6" ref={processoRef}>
          <div className="h-px mb-14" style={{ backgroundColor: '#311d13', opacity: 0.1 }} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 data-reveal className="font-display mb-12" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 3vw, 48px)', fontWeight: 400, color: '#311d13' }}>Como trabalhamos</h2>
              <div className="flex flex-col">
                {PROCESSO.map((step, i) => (
                  <div key={i} data-reveal className="flex gap-6 py-6 border-b border-[#311d13]/8">
                    <span className="shrink-0 w-8 h-8 flex items-center justify-center border border-[#311d13]/22 text-[11px]" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, color: '#311d13' }}>{i + 1}</span>
                    <p className="flex items-center" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 14, color: '#47474a', lineHeight: 1.7 }}>{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-end pb-6">
              <Link to="/contato" data-reveal className="inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-widest uppercase transition-opacity hover:opacity-80" style={{ backgroundColor: '#311d13', color: '#f3f2eb', fontFamily: "'Poppins', sans-serif", textDecoration: 'none' }}>
                → Agende uma apresentação
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
