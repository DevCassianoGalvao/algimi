import { Link } from 'react-router';
import { useReveal } from '../hooks/useReveal';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const ESPECIES = [
  {
    nome: 'Jatobá',
    img: 'https://images.unsplash.com/photo-1644925757334-d0397c01518c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    tags: ['Piso', 'Deck', 'Externo'],
  },
  {
    nome: 'Ipê Roxo',
    img: 'https://images.unsplash.com/photo-1581573231179-760e76ddf5d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    tags: ['Fachada', 'Estrutural', 'Externo'],
  },
  {
    nome: 'Garapa',
    img: 'https://images.unsplash.com/photo-1621295693450-080546d2ec8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    tags: ['Deck', 'Revestimento', 'Piso'],
  },
  {
    nome: 'Angelim Pedra',
    img: 'https://images.unsplash.com/photo-1645894523421-6d4299aefa2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    tags: ['Estrutural', 'Externo', 'Deck'],
  },
  {
    nome: 'Maçaranduba',
    img: 'https://images.unsplash.com/photo-1571205086863-9d186c5cb8fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    tags: ['Piso', 'Interna', 'Revestimento'],
  },
  {
    nome: 'Cedro Rosa',
    img: 'https://images.unsplash.com/photo-1679407263748-56c2af58cefe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    tags: ['Marcenaria', 'Interna', 'Painéis'],
  },
];

export function AcervoSection() {
  const titleRef = useReveal<HTMLDivElement>(0);
  const gridRef = useReveal<HTMLDivElement>(70);

  return (
    <section className="py-28" style={{ backgroundColor: '#f3f2eb' }}>
      <div className="max-w-[1440px] mx-auto px-20 max-md:px-6">
        <div className="h-px mb-20" style={{ backgroundColor: '#311d13', opacity: 0.1 }} />

        <div ref={titleRef} data-reveal>
          <h2
            className="font-display mb-16 max-w-2xl leading-[1.12]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(28px, 3vw, 48px)',
              fontWeight: 400,
              color: '#311d13',
            }}
          >
            Um acervo de espécies amazônicas, com paletas, texturas e aplicações que ampliam o vocabulário da arquitetura contemporânea.
          </h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {ESPECIES.map((e) => (
            <div
              key={e.nome}
              data-reveal
              className="acervo-card group cursor-pointer border-b border-r border-[#311d13]/10 last:border-r-0"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <ImageWithFallback
                  src={e.img}
                  alt={`Madeira ${e.nome}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-[#311d13] opacity-0 group-hover:opacity-[0.15] transition-opacity duration-500" />
              </div>
              <div className="p-6">
                <h3
                  className="font-display mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 500, color: '#311d13' }}
                >
                  {e.nome}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {e.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 border border-[#311d13]/25 text-[10px] tracking-widest uppercase"
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, color: '#47474a', borderRadius: 4 }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            to="/acervo"
            className="inline-flex items-center gap-3 px-10 py-4 text-[11px] tracking-widest uppercase transition-all hover:opacity-80"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, backgroundColor: '#311d13', color: '#f3f2eb', textDecoration: 'none' }}
          >
            → Ver acervo completo
          </Link>
        </div>
      </div>
    </section>
  );
}
