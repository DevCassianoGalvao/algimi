import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useReveal } from '../hooks/useReveal';

const FOREST_IMG = 'https://images.unsplash.com/photo-1682887523090-8eed9a92a6e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1440';

export function ManejoPage() {
  const heroRef = useReveal<HTMLElement>(0);
  const bodyRef = useReveal<HTMLDivElement>(140);

  return (
    <>
      {/* Hero with forest photo */}
      <section ref={heroRef} className="relative h-[70vh] min-h-[480px] flex items-end overflow-hidden">
        <ImageWithFallback src={FOREST_IMG} alt="Floresta amazônica com manejo sustentável" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(49,29,19,0.85) 0%, rgba(49,29,19,0.15) 60%)' }} />
        <div className="relative max-w-[1440px] mx-auto px-20 max-md:px-6 pb-16 w-full">
          <h1
            data-reveal
            className="font-display leading-[1.08]"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 5vw, 80px)', fontWeight: 400, color: '#f3f2eb' }}
          >
            Da floresta à arquitetura. Com rastreabilidade.
          </h1>
        </div>
      </section>

      {/* Body */}
      <section className="py-28" style={{ backgroundColor: '#f3f2eb' }}>
        <div className="max-w-[1440px] mx-auto px-20 max-md:px-6" ref={bodyRef}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <div className="h-px mb-14" style={{ backgroundColor: '#311d13', opacity: 0.1 }} />
              <p data-reveal className="leading-relaxed mb-8" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 15, color: '#47474a', lineHeight: 1.9 }}>
                A madeira comercializada pela Algimi São Paulo é proveniente de manejo florestal sustentável, com concessões legalizadas e inventário técnico realizado por drone.
              </p>
              <p data-reveal className="leading-relaxed mb-8" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 15, color: '#47474a', lineHeight: 1.9 }}>
                A extração é controlada em até 30% por lote, garantindo a regeneração natural da área explorada. O manejo opera por ciclos de 10 anos — o tempo necessário para a floresta se regenerar antes de uma nova intervenção.
              </p>
              <p data-reveal className="leading-relaxed mb-8" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 15, color: '#47474a', lineHeight: 1.9 }}>
                A certificação internacional assegura que cada lote respeita critérios ambientais, sociais e econômicos. A rastreabilidade é parte do produto: cada peça que chega a São Paulo carrega a procedência de uma cadeia documentada, controlada e verificável.
              </p>
            </div>
            <div className="flex items-end">
              <div className="w-full">
                <div className="h-px mb-14" style={{ backgroundColor: '#311d13', opacity: 0.1 }} />
                <h2
                  data-reveal
                  className="font-display leading-[1.08]"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 4vw, 64px)', fontWeight: 400, color: '#311d13' }}
                >
                  Não é discurso. É operação.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
