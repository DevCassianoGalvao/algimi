import { useRef } from 'react';
import { Link } from 'react-router';
import { useReveal } from '../hooks/useReveal';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const PROJETOS = [
  {
    slug: 'casa-eden',
    nome: 'Casa Éden',
    local: 'Itu, São Paulo',
    img: 'https://images.unsplash.com/photo-1760067537064-b3a93d6e4bc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
  },
  {
    slug: 'residencia-montenegro',
    nome: 'Residência Montenegro',
    local: 'São Paulo, SP',
    img: 'https://images.unsplash.com/photo-1778731525375-e4945e58892c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
  },
  {
    slug: 'estudio-calvo',
    nome: 'Estúdio Calvo',
    local: 'Campinas, SP',
    img: 'https://images.unsplash.com/photo-1778731660335-28733e2e6b7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
  },
];

export function ProjetosSection() {
  const titleRef = useReveal<HTMLDivElement>(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = scrollLeft.current - (x - startX.current);
  };
  const handleMouseUp = () => { isDragging.current = false; };

  return (
    <section className="py-28 overflow-hidden" style={{ backgroundColor: '#311d13' }}>
      <div ref={titleRef} className="max-w-[1440px] mx-auto px-20 max-md:px-6 mb-14">
        <h2
          data-reveal
          className="font-display leading-[1.12]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(28px, 3.5vw, 56px)',
            fontWeight: 400,
            color: '#f3f2eb',
          }}
        >
          Cada projeto é uma escolha. Cada espécie, uma assinatura.
        </h2>
      </div>

      {/* Horizontal drag-scroll */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto select-none cursor-grab active:cursor-grabbing pb-2 px-20 max-md:px-6"
        style={{ scrollbarWidth: 'none' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {PROJETOS.map((p) => (
          <Link
            key={p.slug}
            to={`/projetos/${p.slug}`}
            className="group shrink-0 w-[400px] max-md:w-[300px]"
            style={{ textDecoration: 'none' }}
          >
            <div className="aspect-[4/5] overflow-hidden relative">
              <ImageWithFallback
                src={p.img}
                alt={p.nome}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-[#311d13] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            </div>
            <div className="pt-5">
              <h3
                className="font-display mb-1"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 500, color: '#f3f2eb' }}
              >
                {p.nome}
              </h3>
              <p
                className="text-[11px] tracking-widest uppercase"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, color: '#f3f2eb', opacity: 0.45 }}
              >
                {p.local}
              </p>
            </div>
          </Link>
        ))}
        <div className="shrink-0 w-16" />
      </div>

      <div className="max-w-[1440px] mx-auto px-20 max-md:px-6 mt-12">
        <Link
          to="/projetos"
          className="inline-flex items-center gap-3 px-8 py-3.5 border border-[#f3f2eb]/30 text-[11px] tracking-widest uppercase transition-all hover:border-[#f3f2eb]/70"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, color: '#f3f2eb', textDecoration: 'none' }}
        >
          → Ver todos os projetos
        </Link>
      </div>
    </section>
  );
}
