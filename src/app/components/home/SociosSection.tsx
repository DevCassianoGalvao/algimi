import { Link } from 'react-router';
import { User } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const SOCIOS = [
  {
    nome: 'Sandro Silva',
    bio: 'Visão empresarial e curadoria. Empreendedor há mais de 30 anos, construiu carreira no setor de tecnologia e varejo até a venda de sua empresa em 2019. Conheceu a cadeia produtiva da madeira amazônica no projeto da Casa Éden, em Itu, e enxergou ali a oportunidade de transformar a madeira em protagonista da arquitetura paulista.',
  },
  {
    nome: 'Cassius Marcelus',
    bio: 'Arquitetura autoral. Responsável pelo projeto da Casa Éden e pela curadoria técnica que conectou Sandro à Algimi Florestal. Traz à Algimi São Paulo a leitura do arquiteto — entende a madeira como elemento de composição, não como acabamento.',
  },
  {
    nome: 'Larissa Schmitt',
    bio: 'Origem florestal. Representante da família fundadora da Algimi Florestal, é o elo entre a operação amazônica e o mercado paulista. Garante a procedência, o manejo responsável e a continuidade da tradição que sustenta a marca há mais de três décadas.',
  },
];

export function SociosSection() {
  const titleRef = useReveal<HTMLDivElement>(0);
  const cardsRef = useReveal<HTMLDivElement>(120);

  return (
    <section className="py-28" style={{ backgroundColor: '#f3f2eb' }}>
      <div className="max-w-[1440px] mx-auto px-20 max-md:px-6">
        <div className="h-px mb-20" style={{ backgroundColor: '#311d13', opacity: 0.1 }} />

        <div ref={titleRef} className="mb-16">
          <h2
            data-reveal
            className="font-display mb-5"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 4vw, 64px)', fontWeight: 400, color: '#311d13' }}
          >
            Três visões. Uma marca.
          </h2>
          <p
            data-reveal
            className="max-w-2xl leading-relaxed"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 14, color: '#47474a', lineHeight: 1.85 }}
          >
            Sandro Silva, Cassius Marcelus e Larissa Schmitt reúnem na Algimi São Paulo a experiência empresarial, a arquitetura autoral e a origem florestal.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {SOCIOS.map((s) => (
            <div key={s.nome} data-reveal>
              <div
                className="aspect-[3/4] mb-6 flex flex-col items-center justify-center gap-3"
                style={{ backgroundColor: '#47474a' }}
              >
                <User size={44} color="#f3f2eb" strokeWidth={1} opacity={0.35} />
                <span
                  className="text-[10px] tracking-[0.3em] uppercase"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, color: '#f3f2eb', opacity: 0.3 }}
                >
                  foto
                </span>
              </div>
              <h3
                className="font-display mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 500, color: '#311d13' }}
              >
                {s.nome}
              </h3>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 13, color: '#47474a', lineHeight: 1.85 }}>
                {s.bio}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Link
            to="/a-marca"
            className="inline-flex items-center gap-3 px-8 py-4 border border-[#311d13] text-[11px] tracking-widest uppercase transition-all hover:bg-[#311d13] hover:text-[#f3f2eb]"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, color: '#311d13', textDecoration: 'none' }}
          >
            → Conheça nossa história
          </Link>
        </div>
      </div>
    </section>
  );
}
