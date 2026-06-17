import { Link } from 'react-router';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useReveal } from '../hooks/useReveal';

const SHOWROOM_IMG = 'https://images.unsplash.com/photo-1758448511533-e1502259fff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1440';

export function ShowroomPage() {
  const heroRef = useReveal<HTMLElement>(0);
  const bodyRef = useReveal<HTMLDivElement>(120);

  return (
    <>
      {/* Hero with showroom photo */}
      <section ref={heroRef} className="relative h-[65vh] min-h-[440px] flex items-end overflow-hidden">
        <ImageWithFallback src={SHOWROOM_IMG} alt="Showroom Algimi São Paulo" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(49,29,19,0.88) 0%, rgba(49,29,19,0.12) 60%)' }} />
        <div className="relative max-w-[1440px] mx-auto px-20 max-md:px-6 pb-16 w-full">
          <h1
            data-reveal
            className="font-display leading-[1.08]"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px, 5.5vw, 88px)', fontWeight: 400, color: '#f3f2eb' }}
          >
            Itu Novo Centro.
          </h1>
        </div>
      </section>

      {/* Body */}
      <section className="py-24" style={{ backgroundColor: '#f3f2eb' }}>
        <div className="max-w-[1440px] mx-auto px-20 max-md:px-6" ref={bodyRef}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <div className="h-px mb-14" style={{ backgroundColor: '#311d13', opacity: 0.1 }} />
              <p data-reveal className="leading-relaxed mb-8" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 15, color: '#47474a', lineHeight: 1.9 }}>
                O showroom da Algimi São Paulo fica em Itu, ponto estratégico para o atendimento a escritórios de arquitetura, decoradores e construtoras do interior e da capital paulista.
              </p>
              <p data-reveal className="leading-relaxed mb-8" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 15, color: '#47474a', lineHeight: 1.9 }}>
                O espaço é dedicado à apresentação do acervo, à curadoria de espécies para projetos em desenvolvimento e ao encontro com arquitetos parceiros.
              </p>
              <p data-reveal className="leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 15, color: '#47474a', lineHeight: 1.9 }}>
                Atendimento por agendamento.
              </p>
            </div>
            <div>
              <div className="h-px mb-14" style={{ backgroundColor: '#311d13', opacity: 0.1 }} />
              <div data-reveal className="mb-10">
                <h2
                  className="font-display mb-6 leading-[1.1]"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(22px, 2.5vw, 40px)', fontWeight: 400, color: '#311d13' }}
                >
                  Rua Francisco Benedito da Silveira, 43<br />
                  Itu Novo Centro – São Paulo<br />
                  (11) 9.3342-7616
                </h2>
              </div>
              <Link
                to="/contato"
                data-reveal
                className="inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-widest uppercase transition-opacity hover:opacity-80"
                style={{ backgroundColor: '#311d13', color: '#f3f2eb', fontFamily: "'Poppins', sans-serif", textDecoration: 'none' }}
              >
                → Agendar visita
              </Link>
            </div>
          </div>

          {/* Map embed */}
          <div data-reveal className="mt-16 overflow-hidden" style={{ height: 400 }}>
            <iframe
              src="https://www.google.com/maps?q=Rua+Francisco+Benedito+da+Silveira,43,Itu,SP,Brasil&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Algimi São Paulo"
            />
          </div>
        </div>
      </section>
    </>
  );
}
