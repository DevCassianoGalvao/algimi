import { useEffect, useRef } from 'react';
import { useReveal } from '../hooks/useReveal';

const LINE1 = 'A Algimi São Paulo não é uma fornecedora de madeira.';
const LINE2 =
  'Apresenta ao mercado paulista uma forma de pensar a madeira como linguagem arquitetônica — autoral, raríssima, sob medida.';

export function ManifestoSection() {
  const containerRef = useReveal<HTMLElement>();
  const wordsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const words = wordsRef.current.filter(Boolean);
    let observer: IntersectionObserver | null = null;

    const section = containerRef.current;
    if (!section) return;

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          words.forEach((word, i) => {
            setTimeout(() => {
              word.style.opacity = '1';
              word.style.transform = 'translateY(0)';
            }, i * 40);
          });
          observer?.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(section);
    return () => observer?.disconnect();
  }, []);

  const splitLine = (text: string, startIdx: number) =>
    text.split(' ').map((word, i) => (
      <span
        key={`${startIdx + i}`}
        ref={(el) => { if (el) wordsRef.current[startIdx + i] = el; }}
        className="manifesto-word inline-block mr-[0.22em]"
        style={{ transition: 'opacity 0.5s ease, transform 0.5s ease' }}
      >
        {word}
      </span>
    ));

  const line1Words = LINE1.split(' ').length;

  return (
    <section
      id="manifesto"
      ref={containerRef}
      className="relative py-28"
      style={{ backgroundColor: '#311d13' }}
    >
      <div className="max-w-[1440px] mx-auto px-20 max-md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-display leading-[1.2] tracking-wide mb-8"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(26px, 3.2vw, 52px)',
              fontWeight: 400,
              color: '#f3f2eb',
            }}
          >
            {splitLine(LINE1, 0)}
          </h2>

          <div className="mx-auto mb-8 h-px w-16" style={{ backgroundColor: '#f3f2eb', opacity: 0.2 }} />

          <p
            className="font-display leading-relaxed tracking-wide"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(18px, 2vw, 28px)',
              fontWeight: 300,
              color: '#f3f2eb',
              opacity: 0.82,
            }}
          >
            {splitLine(LINE2, line1Words)}
          </p>
        </div>
      </div>
    </section>
  );
}
