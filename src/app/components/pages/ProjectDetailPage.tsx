import { useParams, Link, Navigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useReveal } from '../hooks/useReveal';

const PROJETOS: Record<string, {
  nome: string;
  local: string;
  ano: string;
  especie: string;
  arquiteto: string;
  descricao: string;
  imgs: string[];
}> = {
  'casa-eden': {
    nome: 'Casa Éden',
    local: 'Itu, São Paulo',
    ano: '2022',
    especie: 'Jatobá · Maçaranduba',
    arquiteto: 'Cassius Marcelus',
    descricao: 'A Casa Éden é o projeto que originou a Algimi São Paulo. O arquiteto Cassius Marcelus conduziu a curadoria técnica das madeiras amazônicas, transformando cada ambiente em uma composição entre estrutura, textura e presença.',
    imgs: [
      'https://images.unsplash.com/photo-1760067537064-b3a93d6e4bc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200',
      'https://images.unsplash.com/photo-1760067538299-3f58e7a99fc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      'https://images.unsplash.com/photo-1760067537639-0fb475c87657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    ],
  },
  'residencia-montenegro': {
    nome: 'Residência Montenegro',
    local: 'São Paulo, SP',
    ano: '2023',
    especie: 'Ipê Roxo · Garapa',
    arquiteto: 'Escritório Montenegro Arquitetura',
    descricao: 'Residência de alto padrão no bairro Cidade Jardim. O projeto explorou o contraste entre o Ipê Roxo escuro nos painéis de fachada e a Garapa clara nos interiores, criando uma paleta única e autoral.',
    imgs: [
      'https://images.unsplash.com/photo-1778731525375-e4945e58892c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200',
      'https://images.unsplash.com/photo-1778731660335-28733e2e6b7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      'https://images.unsplash.com/photo-1770625467936-37cb2d4156bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    ],
  },
  'estudio-calvo': {
    nome: 'Estúdio Calvo',
    local: 'Campinas, SP',
    ano: '2024',
    especie: 'Cedro Rosa · Cumaru',
    arquiteto: 'Calvo Arquitetura',
    descricao: 'Espaço de trabalho criativo com identidade forte em madeira. O Cedro Rosa foi utilizado nos painéis internos e mobiliário sob medida, enquanto o Cumaru compõe o deck externo de acesso.',
    imgs: [
      'https://images.unsplash.com/photo-1778731660335-28733e2e6b7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200',
      'https://images.unsplash.com/photo-1758448511533-e1502259fff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      'https://images.unsplash.com/photo-1760067537064-b3a93d6e4bc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    ],
  },
  'loft-consolacao': {
    nome: 'Loft Consolação',
    local: 'São Paulo, SP',
    ano: '2024',
    especie: 'Angelim Pedra',
    arquiteto: 'Atelier Nova Lima',
    descricao: 'Loft em edifício histórico na Consolação. O Angelim Pedra, com suas fibras irregulares e coloração expressiva, foi escolhido para o forro do espaço principal, trazendo presença e exclusividade ao projeto.',
    imgs: [
      'https://images.unsplash.com/photo-1760067537639-0fb475c87657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200',
      'https://images.unsplash.com/photo-1760067537064-b3a93d6e4bc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    ],
  },
  'casa-fazenda-mogiana': {
    nome: 'Casa Fazenda Mogiana',
    local: 'Atibaia, SP',
    ano: '2025',
    especie: 'Jatobá · Cumaru',
    arquiteto: 'Moreto & Siqueira Arquitetura',
    descricao: 'Casa de campo em terreno arborizado. O projeto utiliza madeira amazônica tanto na estrutura quanto nos revestimentos externos, dialogando com a paisagem e criando uma relação de pertencimento com o entorno natural.',
    imgs: [
      'https://images.unsplash.com/photo-1760067538299-3f58e7a99fc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200',
      'https://images.unsplash.com/photo-1682887523090-8eed9a92a6e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    ],
  },
  'lobby-torre-faria-lima': {
    nome: 'Lobby Torre Faria Lima',
    local: 'São Paulo, SP',
    ano: '2025',
    especie: 'Ipê Roxo · Tauari',
    arquiteto: 'Forma Arquitetura Corporativa',
    descricao: 'Lobby de torre corporativa na Faria Lima. O revestimento em Ipê Roxo confere exclusividade e identidade ao espaço de chegada, enquanto o Tauari foi aplicado nos painéis internos com acabamento natural.',
    imgs: [
      'https://images.unsplash.com/photo-1758448511533-e1502259fff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200',
      'https://images.unsplash.com/photo-1778731525375-e4945e58892c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    ],
  },
};

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const projeto = slug ? PROJETOS[slug] : null;
  const bodyRef = useReveal<HTMLDivElement>(80);

  if (!projeto) return <Navigate to="/projetos" replace />;

  return (
    <>
      {/* Hero image */}
      <div className="relative h-[70vh] min-h-[480px] overflow-hidden pt-[76px]">
        <ImageWithFallback
          src={projeto.imgs[0]}
          alt={projeto.nome}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(49,29,19,0.75) 0%, rgba(49,29,19,0.05) 50%)' }} />
        <div className="absolute bottom-0 left-0 right-0 max-w-[1440px] mx-auto px-20 max-md:px-6 pb-14">
          <h1
            className="font-display leading-[1.08] mb-3"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 5vw, 80px)', fontWeight: 400, color: '#f3f2eb' }}
          >
            {projeto.nome}
          </h1>
          <p className="text-[11px] tracking-widest uppercase" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, color: '#f3f2eb', opacity: 0.55 }}>
            {projeto.local} · {projeto.ano}
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="py-20" style={{ backgroundColor: '#f3f2eb' }}>
        <div className="max-w-[1440px] mx-auto px-20 max-md:px-6" ref={bodyRef}>
          {/* Back link */}
          <Link
            to="/projetos"
            className="inline-flex items-center gap-2 mb-14 transition-opacity hover:opacity-60"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, fontWeight: 400, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#311d13', textDecoration: 'none' }}
          >
            <ArrowLeft size={14} />
            Todos os projetos
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Meta */}
            <div data-reveal className="flex flex-col gap-8">
              <div className="h-px" style={{ backgroundColor: '#311d13', opacity: 0.1 }} />
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, color: '#311d13', opacity: 0.4 }}>Localização</p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 400, color: '#311d13' }}>{projeto.local}</p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, color: '#311d13', opacity: 0.4 }}>Ano</p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 400, color: '#311d13' }}>{projeto.ano}</p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, color: '#311d13', opacity: 0.4 }}>Espécies</p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 400, color: '#311d13' }}>{projeto.especie}</p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, color: '#311d13', opacity: 0.4 }}>Arquitetura</p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 400, color: '#311d13' }}>{projeto.arquiteto}</p>
              </div>
            </div>

            {/* Description */}
            <div data-reveal className="lg:col-span-2">
              <div className="h-px mb-8" style={{ backgroundColor: '#311d13', opacity: 0.1 }} />
              <p
                className="leading-relaxed mb-10"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 15, color: '#47474a', lineHeight: 1.9 }}
              >
                {projeto.descricao}
              </p>
              {/* Secondary images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projeto.imgs.slice(1).map((img, i) => (
                  <div key={i} className="aspect-[4/3] overflow-hidden">
                    <ImageWithFallback
                      src={img}
                      alt={`${projeto.nome} — detalhe ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div data-reveal className="mt-20 pt-16 border-t border-[#311d13]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p
              className="font-display max-w-sm"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(20px, 2.2vw, 28px)', fontWeight: 400, color: '#311d13' }}
            >
              Quer especificar madeira autoral no seu projeto?
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-widest uppercase transition-opacity hover:opacity-80"
              style={{ backgroundColor: '#311d13', color: '#f3f2eb', fontFamily: "'Poppins', sans-serif", textDecoration: 'none' }}
            >
              → Falar com a Algimi
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
