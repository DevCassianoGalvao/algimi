import { User } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const TIMELINE = [
  {
    ano: '1992 — A origem na floresta',
    texto: 'Sandro Silva, empresário com mais de 30 anos no setor de tecnologia e varejo, recebe do arquiteto Cassius Marcelus a curadoria técnica para o projeto de sua residência em Itu — a Casa Éden. Ali, a madeira amazônica deixa de ser insumo e se revela protagonista da arquitetura.',
  },
  {
    ano: '2019 — O encontro',
    texto: 'Da experiência da Casa Éden nasce a tese: conectar a origem florestal certificada à especificação autoral. A sociedade entre Sandro, Cassius e Larissa Schmitt — representante da família fundadora da Algimi Florestal — estrutura a operação paulista com Centro de Distribuição em Piedade e showroom em Itu.',
  },
  {
    ano: '2024-2026 — Algimi São Paulo',
    texto: 'A Algimi São Paulo não atua como revendedora. Trabalha com madeira própria, controle integral da cadeia, customização de cortes e venda consultiva.',
  },
];

const SOCIOS = [
  { nome: 'Sandro Silva', bio: 'Visão empresarial e curadoria. Empreendedor há mais de 30 anos, construiu carreira no setor de tecnologia e varejo até a venda de sua empresa em 2019. Conheceu a cadeia produtiva da madeira amazônica no projeto da Casa Éden, em Itu, e enxergou ali a oportunidade de transformar a madeira em protagonista da arquitetura paulista.' },
  { nome: 'Cassius Marcelus', bio: 'Arquitetura autoral. Responsável pelo projeto da Casa Éden e pela curadoria técnica que conectou Sandro à Algimi Florestal. Traz à Algimi São Paulo a leitura do arquiteto — entende a madeira como elemento de composição, não como acabamento.' },
  { nome: 'Larissa Schmitt', bio: 'Origem florestal. Representante da família fundadora da Algimi Florestal, é o elo entre a operação amazônica e o mercado paulista. Garante a procedência, o manejo responsável e a continuidade da tradição que sustenta a marca há mais de três décadas.' },
];

export function MarcaPage() {
  const heroRef = useReveal<HTMLElement>(0);
  const manifestoRef = useReveal<HTMLDivElement>(120);
  const sociosRef = useReveal<HTMLDivElement>(120);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="pt-40 pb-28" style={{ backgroundColor: '#311d13' }}>
        <div className="max-w-[1440px] mx-auto px-20 max-md:px-6">
          <h1
            data-reveal
            className="font-display leading-[1.08] max-w-3xl"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 5vw, 80px)', fontWeight: 400, color: '#f3f2eb' }}
          >
            A Algimi São Paulo nasce no encontro entre a tradição florestal amazônica e a arquitetura autoral paulista.
          </h1>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-24" style={{ backgroundColor: '#f3f2eb' }}>
        <div className="max-w-[1440px] mx-auto px-20 max-md:px-6">
          <div ref={manifestoRef} className="max-w-2xl">
            <div className="h-px mb-14" style={{ backgroundColor: '#311d13', opacity: 0.1 }} />
            <p data-reveal className="font-display leading-relaxed mb-10" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(18px, 2vw, 28px)', fontWeight: 300, color: '#311d13', lineHeight: 1.75 }}>
              Não trabalhamos com madeira como commodity. Apresentamos matéria-prima com presença, cor e textura próprias — para projetos que tratam o material como parte da criação, não apenas como insumo.
            </p>
            <p data-reveal className="font-display leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(18px, 2vw, 28px)', fontWeight: 300, color: '#311d13', lineHeight: 1.75, opacity: 0.7 }}>
              Cada espécie do nosso acervo é uma escolha. Cada corte, uma resposta ao desenho de um arquiteto. Cada entrega, um diálogo entre origem e projeto.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 overflow-hidden" style={{ backgroundColor: '#311d13' }}>
        <div className="max-w-[1440px] mx-auto px-20 max-md:px-6">
          <div className="overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
            <div className="flex gap-0 min-w-max">
              {TIMELINE.map((item, i) => (
                <div key={i} className="w-[400px] max-md:w-[320px] border-l border-[#f3f2eb]/15 pl-8 pr-16 py-4">
                  <p className="text-[10px] tracking-[0.2em] uppercase mb-6" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, color: '#f3f2eb', opacity: 0.38 }}>{item.ano}</p>
                  <p className="leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 13, color: '#f3f2eb', opacity: 0.7, lineHeight: 1.9 }}>{item.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sócios */}
      <section className="py-24" style={{ backgroundColor: '#f3f2eb' }}>
        <div className="max-w-[1440px] mx-auto px-20 max-md:px-6" ref={sociosRef}>
          <div className="h-px mb-14" style={{ backgroundColor: '#311d13', opacity: 0.1 }} />
          <h2 data-reveal className="font-display mb-14" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 3.5vw, 56px)', fontWeight: 400, color: '#311d13' }}>
            Os sócios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {SOCIOS.map((s) => (
              <div key={s.nome} data-reveal>
                <div className="aspect-[3/4] mb-6 flex flex-col items-center justify-center gap-3" style={{ backgroundColor: '#47474a' }}>
                  <User size={44} color="#f3f2eb" strokeWidth={1} opacity={0.35} />
                  <span className="text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, color: '#f3f2eb', opacity: 0.3 }}>foto</span>
                </div>
                <h3 className="font-display mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 500, color: '#311d13' }}>{s.nome}</h3>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 13, color: '#47474a', lineHeight: 1.85 }}>{s.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
