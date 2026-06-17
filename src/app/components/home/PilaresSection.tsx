import { useReveal } from '../hooks/useReveal';

const PILARES = [
  {
    label: 'Curadoria',
    text: 'Seleção de madeiras amazônicas raras, com valor estético e técnico, escolhidas para ampliar o repertório do arquiteto.',
  },
  {
    label: 'Personalização',
    text: 'Fornecimento sob medida. Corte, dimensão e acabamento adaptados ao desenho do projeto.',
  },
  {
    label: 'Parceria',
    text: 'Participação consultiva no processo criativo, do conceito à especificação técnica.',
  },
];

export function PilaresSection() {
  const ref = useReveal<HTMLElement>(100);

  return (
    <section ref={ref} className="py-28" style={{ backgroundColor: '#f3f2eb' }}>
      <div className="max-w-[1440px] mx-auto px-20 max-md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#311d13]/12">
          {PILARES.map((pilar) => (
            <div
              key={pilar.label}
              data-reveal
              className="px-0 md:px-12 first:pl-0 last:pr-0 py-8 md:py-0"
            >
              <p
                className="text-[11px] tracking-[0.25em] uppercase mb-5"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, color: '#311d13' }}
              >
                {pilar.label}
              </p>
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 300,
                  fontSize: 14,
                  color: '#47474a',
                  lineHeight: 1.85,
                }}
              >
                {pilar.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
