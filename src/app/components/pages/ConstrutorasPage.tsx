import { Link } from 'react-router';
import { Clock, Settings, Headphones, ArrowLeftRight, ShieldCheck } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const SERVICOS = [
  { icon: Clock, label: 'Fornecimento sob medida com prazos definidos' },
  { icon: Settings, label: 'Beneficiamento controlado' },
  { icon: Headphones, label: 'Suporte técnico para especificação e execução' },
  { icon: ArrowLeftRight, label: 'Atendimento direto, sem intermediários' },
  { icon: ShieldCheck, label: 'Rastreabilidade e certificação da madeira fornecida' },
];

export function ConstrutorasPage() {
  const heroRef = useReveal<HTMLElement>(0);
  const bodyRef = useReveal<HTMLDivElement>(100);

  return (
    <>
      <section ref={heroRef} className="pt-40 pb-28" style={{ backgroundColor: '#f3f2eb' }}>
        <div className="max-w-[1440px] mx-auto px-20 max-md:px-6">
          <h1 data-reveal className="font-display mb-8 leading-[1.08] max-w-2xl" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px, 5.5vw, 88px)', fontWeight: 400, color: '#311d13' }}>
            Madeira amazônica autoral com segurança de fornecimento.
          </h1>
          <p data-reveal className="max-w-2xl leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 15, color: '#47474a', lineHeight: 1.9 }}>
            A Algimi São Paulo atende construtoras e incorporadoras que executam projetos de alto padrão. Trabalhamos com madeira própria, disponibilidade controlada por espécie, beneficiamento qualificado e suporte técnico para a execução.
          </p>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: '#311d13' }}>
        <div className="max-w-[1440px] mx-auto px-20 max-md:px-6" ref={bodyRef}>
          <div className="h-px mb-14" style={{ backgroundColor: '#f3f2eb', opacity: 0.1 }} />
          <h2 className="font-display mb-14" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 3vw, 48px)', fontWeight: 400, color: '#f3f2eb' }}>O que oferecemos</h2>
          <div className="flex flex-col border-t border-[#f3f2eb]/12">
            {SERVICOS.map(({ icon: Icon, label }) => (
              <div key={label} data-reveal className="flex items-center gap-8 py-7 border-b border-[#f3f2eb]/12">
                <Icon size={18} color="#f3f2eb" strokeWidth={1} className="shrink-0 opacity-45" />
                <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 14, color: '#f3f2eb', opacity: 0.7, lineHeight: 1.7 }}>{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-14">
            <Link to="/contato" className="inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-widest uppercase transition-opacity hover:opacity-80" style={{ backgroundColor: '#f3f2eb', color: '#311d13', fontFamily: "'Poppins', sans-serif", textDecoration: 'none' }}>
              → Fale com o comercial
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
