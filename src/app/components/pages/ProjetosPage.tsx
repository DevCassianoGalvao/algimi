import { Link } from 'react-router';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useReveal } from '../hooks/useReveal';

const PROJETOS = [
  { slug: 'casa-eden', nome: 'Casa Éden', local: 'Itu, São Paulo', img: 'https://images.unsplash.com/photo-1760067537064-b3a93d6e4bc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900', especie: 'Jatobá · Maçaranduba' },
  { slug: 'residencia-montenegro', nome: 'Residência Montenegro', local: 'São Paulo, SP', img: 'https://images.unsplash.com/photo-1778731525375-e4945e58892c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900', especie: 'Ipê Roxo · Garapa' },
  { slug: 'estudio-calvo', nome: 'Estúdio Calvo', local: 'Campinas, SP', img: 'https://images.unsplash.com/photo-1778731660335-28733e2e6b7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900', especie: 'Cedro Rosa · Cumaru' },
  { slug: 'loft-consolacao', nome: 'Loft Consolação', local: 'São Paulo, SP', img: 'https://images.unsplash.com/photo-1760067537639-0fb475c87657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900', especie: 'Angelim Pedra' },
  { slug: 'casa-fazenda-mogiana', nome: 'Casa Fazenda Mogiana', local: 'Atibaia, SP', img: 'https://images.unsplash.com/photo-1760067538299-3f58e7a99fc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900', especie: 'Jatobá · Cumaru' },
  { slug: 'lobby-torre-faria-lima', nome: 'Lobby Torre Faria Lima', local: 'São Paulo, SP', img: 'https://images.unsplash.com/photo-1758448511533-e1502259fff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900', especie: 'Ipê Roxo · Tauari' },
];

export function ProjetosPage() {
  const heroRef = useReveal<HTMLElement>(0);
  const gridRef = useReveal<HTMLDivElement>(80);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative pt-40 pb-24 overflow-hidden" style={{ backgroundColor: '#311d13' }}>
        <div className="max-w-[1440px] mx-auto px-20 max-md:px-6">
          <div data-reveal className="max-w-3xl">
            <h1
              className="font-display mb-8 leading-[1.08]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 5vw, 80px)', fontWeight: 400, color: '#f3f2eb' }}
            >
              Projetos que escolheram a madeira como assinatura.
            </h1>
            <p
              className="leading-relaxed"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 14, color: '#f3f2eb', opacity: 0.6, lineHeight: 1.9 }}
            >
              Cada projeto é um diálogo entre o arquiteto, a obra e a matéria. Conheça aplicações reais do acervo Algimi São Paulo em residências, comércios e espaços autorais.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 pb-24" style={{ backgroundColor: '#f3f2eb' }}>
        <div className="max-w-[1440px] mx-auto px-20 max-md:px-6">
          <div ref={gridRef} className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {PROJETOS.map((p, i) => (
              <div key={p.slug} data-reveal className="break-inside-avoid">
                <Link to={`/projetos/${p.slug}`} className="group block" style={{ textDecoration: 'none' }}>
                  <div className="overflow-hidden relative" style={{ aspectRatio: i % 3 === 1 ? '4/5' : '4/3' }}>
                    <ImageWithFallback
                      src={p.img}
                      alt={p.nome}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-[#311d13] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                    {/* Arrow overlay */}
                    <div className="absolute bottom-5 right-5 w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: '#f3f2eb' }}>
                      <span style={{ color: '#311d13', fontSize: 14 }}>→</span>
                    </div>
                  </div>
                  <div className="pt-4 pb-6">
                    <h3 className="font-display mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 500, color: '#311d13' }}>{p.nome}</h3>
                    <div className="flex items-center gap-3">
                      <p className="text-[11px] tracking-widest uppercase" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, color: '#47474a', opacity: 0.55 }}>{p.local}</p>
                      <span style={{ color: '#311d13', opacity: 0.18 }}>·</span>
                      <p className="text-[11px]" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, color: '#47474a', opacity: 0.45 }}>{p.especie}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
