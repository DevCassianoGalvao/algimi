import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { X } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useReveal } from '../hooks/useReveal';

const ESPECIES = [
  { nome: 'Jatobá', img: 'https://images.unsplash.com/photo-1644925757334-d0397c01518c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600', cor: 'Média', aplicacoes: ['Interna', 'Revestimento'], disponibilidade: 'Imediata', tags: ['Piso', 'Deck', 'Externo'] },
  { nome: 'Ipê Roxo', img: 'https://images.unsplash.com/photo-1581573231179-760e76ddf5d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600', cor: 'Escura', aplicacoes: ['Externa', 'Estrutural'], disponibilidade: 'Médio prazo', tags: ['Fachada', 'Estrutural', 'Externo'] },
  { nome: 'Garapa', img: 'https://images.unsplash.com/photo-1621295693450-080546d2ec8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600', cor: 'Clara', aplicacoes: ['Interna', 'Revestimento'], disponibilidade: 'Imediata', tags: ['Deck', 'Revestimento', 'Piso'] },
  { nome: 'Angelim Pedra', img: 'https://images.unsplash.com/photo-1645894523421-6d4299aefa2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600', cor: 'Média', aplicacoes: ['Estrutural', 'Externa'], disponibilidade: 'Imediata', tags: ['Estrutural', 'Externo', 'Deck'] },
  { nome: 'Maçaranduba', img: 'https://images.unsplash.com/photo-1571205086863-9d186c5cb8fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600', cor: 'Escura', aplicacoes: ['Interna', 'Revestimento'], disponibilidade: 'Médio prazo', tags: ['Piso', 'Interna', 'Revestimento'] },
  { nome: 'Cedro Rosa', img: 'https://images.unsplash.com/photo-1679407263748-56c2af58cefe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600', cor: 'Clara', aplicacoes: ['Interna'], disponibilidade: 'Imediata', tags: ['Marcenaria', 'Interna', 'Painéis'] },
  { nome: 'Cumaru', img: 'https://images.unsplash.com/photo-1632199495802-18f7d21f323b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600', cor: 'Média', aplicacoes: ['Externa', 'Revestimento'], disponibilidade: 'Imediata', tags: ['Deck', 'Externo', 'Estrutural'] },
  { nome: 'Tauari', img: 'https://images.unsplash.com/photo-1645894523421-6d4299aefa2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600', cor: 'Clara', aplicacoes: ['Interna', 'Revestimento'], disponibilidade: 'Médio prazo', tags: ['Painéis', 'Interna', 'Marcenaria'] },
];

type Filters = { cor: string; aplicacao: string; disponibilidade: string };

const COR_SWATCHES: Record<string, string> = {
  Clara: '#d4b896',
  Média: '#8b5e3c',
  Escura: '#3d1f0d',
};

export function AcervoPage() {
  const [filters, setFilters] = useState<Filters>({ cor: '', aplicacao: '', disponibilidade: '' });
  const [selected, setSelected] = useState<typeof ESPECIES[0] | null>(null);
  const heroRef = useReveal<HTMLElement>(0);

  const filtered = ESPECIES.filter((e) => {
    if (filters.cor && e.cor !== filters.cor) return false;
    if (filters.aplicacao && !e.aplicacoes.includes(filters.aplicacao)) return false;
    if (filters.disponibilidade && e.disponibilidade !== filters.disponibilidade) return false;
    return true;
  });

  const toggle = (key: keyof Filters, val: string) =>
    setFilters((f) => ({ ...f, [key]: f[key] === val ? '' : val }));

  const activeCount = Object.values(filters).filter(Boolean).length;

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="pt-40 pb-20" style={{ backgroundColor: '#f3f2eb' }}>
        <div className="max-w-[1440px] mx-auto px-20 max-md:px-6">
          <div className="max-w-2xl" data-reveal>
            <h1
              className="font-display mb-8 leading-[1.08]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 4.5vw, 72px)', fontWeight: 400, color: '#311d13' }}
            >
              Um acervo autoral de madeiras amazônicas.
            </h1>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 14, color: '#47474a', lineHeight: 1.9 }}>
              Cada espécie carrega uma presença própria. Uma cor que não se repete. Uma textura que não se substitui. Uma aplicação que pode transformar o desenho de um projeto.
            </p>
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <div className="sticky top-[76px] z-30 border-b border-[#311d13]/10" style={{ backgroundColor: '#f3f2eb' }}>
        <div className="max-w-[1440px] mx-auto px-20 max-md:px-6 py-5">
          <div className="flex flex-wrap items-center gap-6">

            {/* Cor — swatches */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] tracking-[0.2em] uppercase shrink-0" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, color: '#311d13', opacity: 0.4 }}>Cor</span>
              <div className="flex gap-2">
                {Object.entries(COR_SWATCHES).map(([cor, hex]) => (
                  <button
                    key={cor}
                    onClick={() => toggle('cor', cor)}
                    title={cor}
                    className="w-6 h-6 rounded-full transition-all"
                    style={{
                      backgroundColor: hex,
                      outline: filters.cor === cor ? `2px solid #311d13` : '2px solid transparent',
                      outlineOffset: 2,
                    }}
                    aria-label={cor}
                    aria-pressed={filters.cor === cor}
                  />
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-5 w-px hidden md:block" style={{ backgroundColor: '#311d13', opacity: 0.12 }} />

            {/* Aplicação */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-[10px] tracking-[0.2em] uppercase shrink-0" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, color: '#311d13', opacity: 0.4 }}>Aplicação</span>
              <div className="flex flex-wrap gap-2">
                {['Interna', 'Externa', 'Estrutural', 'Revestimento'].map((v) => (
                  <button
                    key={v}
                    onClick={() => toggle('aplicacao', v)}
                    className="px-3.5 py-1 text-[10px] tracking-[0.1em] uppercase transition-all"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 400,
                      borderRadius: 4,
                      border: `1px solid ${filters.aplicacao === v ? '#311d13' : 'rgba(49,29,19,0.2)'}`,
                      backgroundColor: filters.aplicacao === v ? '#311d13' : 'transparent',
                      color: filters.aplicacao === v ? '#f3f2eb' : '#311d13',
                    }}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-5 w-px hidden md:block" style={{ backgroundColor: '#311d13', opacity: 0.12 }} />

            {/* Disponibilidade */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-[10px] tracking-[0.2em] uppercase shrink-0" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, color: '#311d13', opacity: 0.4 }}>Disponibilidade</span>
              <div className="flex gap-2">
                {['Imediata', 'Médio prazo'].map((v) => (
                  <button
                    key={v}
                    onClick={() => toggle('disponibilidade', v)}
                    className="px-3.5 py-1 text-[10px] tracking-[0.1em] uppercase transition-all"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 400,
                      borderRadius: 4,
                      border: `1px solid ${filters.disponibilidade === v ? '#311d13' : 'rgba(49,29,19,0.2)'}`,
                      backgroundColor: filters.disponibilidade === v ? '#311d13' : 'transparent',
                      color: filters.disponibilidade === v ? '#f3f2eb' : '#311d13',
                    }}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear */}
            {activeCount > 0 && (
              <button
                onClick={() => setFilters({ cor: '', aplicacao: '', disponibilidade: '' })}
                className="flex items-center gap-1.5 text-[10px] tracking-[0.1em] uppercase ml-auto transition-opacity hover:opacity-60"
                style={{ fontFamily: "'Poppins', sans-serif", color: '#311d13', opacity: 0.5 }}
              >
                <X size={12} />
                Limpar ({activeCount})
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-12 pb-24" style={{ backgroundColor: '#f3f2eb' }}>
        <div className="max-w-[1440px] mx-auto px-20 max-md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#311d13]/8">
            {filtered.map((e) => (
              <button
                key={e.nome}
                onClick={() => setSelected(e)}
                className="acervo-card group border-b border-r border-[#311d13]/8 text-left"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <ImageWithFallback
                    src={e.img}
                    alt={e.nome}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[#311d13] opacity-0 group-hover:opacity-15 transition-opacity duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-display mb-2.5" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 500, color: '#311d13' }}>{e.nome}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: COR_SWATCHES[e.cor] }} />
                    <span className="text-[10px] tracking-widest uppercase" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, color: '#47474a', opacity: 0.6 }}>{e.cor}</span>
                    <span style={{ color: '#311d13', opacity: 0.2 }}>·</span>
                    <span className="text-[10px] tracking-wider" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, color: '#47474a', opacity: 0.5 }}>{e.disponibilidade}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {e.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-0.5 border border-[#311d13]/18 text-[9px] tracking-widest uppercase" style={{ fontFamily: "'Poppins', sans-serif", color: '#47474a', borderRadius: 4 }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="py-24 text-center">
              <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, color: '#47474a', opacity: 0.4 }}>Nenhuma espécie encontrada com esses filtros.</p>
            </div>
          )}
        </div>
      </section>

      {/* Species detail modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 sm:p-8"
          style={{ backgroundColor: 'rgba(49,29,19,0.75)' }}
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            style={{ backgroundColor: '#f3f2eb' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="absolute top-5 right-5 z-10 p-1 transition-opacity hover:opacity-60" onClick={() => setSelected(null)} aria-label="Fechar">
              <X size={18} color="#311d13" />
            </button>
            <div className="aspect-[16/9] overflow-hidden">
              <ImageWithFallback src={selected.img} alt={selected.nome} className="w-full h-full object-cover" />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-4 h-4 rounded-full" style={{ backgroundColor: COR_SWATCHES[selected.cor] }} />
                <span className="text-[10px] tracking-widest uppercase" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, color: '#311d13', opacity: 0.5 }}>{selected.cor} · {selected.disponibilidade}</span>
              </div>
              <h2 className="font-display mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontWeight: 400, color: '#311d13' }}>{selected.nome}</h2>
              <div className="flex gap-2 flex-wrap mb-7">
                {selected.tags.map((t) => (
                  <span key={t} className="px-3 py-1 border border-[#311d13]/22 text-[10px] tracking-widest uppercase" style={{ fontFamily: "'Poppins', sans-serif", color: '#47474a', borderRadius: 4 }}>{t}</span>
                ))}
              </div>
              <p className="mb-8 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 13, color: '#47474a', lineHeight: 1.9 }}>
                Espécie selecionada para compor o acervo autoral da Algimi São Paulo, com potencial de aplicação em projetos de arquitetura e interiores de alto padrão.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contato" onClick={() => setSelected(null)} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[11px] tracking-widest uppercase transition-opacity hover:opacity-80" style={{ backgroundColor: '#311d13', color: '#f3f2eb', fontFamily: "'Poppins', sans-serif", textDecoration: 'none' }}>
                  → Solicitar amostra
                </Link>
                <Link to="/contato" onClick={() => setSelected(null)} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[#311d13]/30 text-[11px] tracking-widest uppercase transition-all hover:border-[#311d13]/70" style={{ fontFamily: "'Poppins', sans-serif", color: '#47474a', textDecoration: 'none' }}>
                  → Solicitar especificação para projeto
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
