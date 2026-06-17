import { Link } from 'react-router';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const WOOD_IMG =
  'https://images.unsplash.com/photo-1644925757334-d0397c01518c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800';

const WOOD_IMG_BG =
  'https://images.unsplash.com/photo-1571205086863-9d186c5cb8fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500';

/* ─── Polygon grid SVG background ───────────────────────────────────────── */
function PolyGrid() {
  return (
    <svg
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <defs>
        <pattern
          id="poly-grid"
          x="0"
          y="0"
          width="52"
          height="52"
          patternUnits="userSpaceOnUse"
        >
          {/* Diamond / rotated square */}
          <polygon
            points="26,2 50,26 26,50 2,26"
            fill="none"
            stroke="#311d13"
            strokeWidth="0.65"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#poly-grid)" opacity="0.065" />
    </svg>
  );
}

/* ─── Floating stat chip ─────────────────────────────────────────────────── */
function StatChip({
  label,
  value,
  style,
}: {
  label: string;
  value: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        position: 'absolute',
        backgroundColor: '#fff',
        boxShadow: '0 4px 24px rgba(49,29,19,0.11), 0 1px 4px rgba(49,29,19,0.07)',
        padding: '11px 18px',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        ...style,
      }}
    >
      <span
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 400,
          fontSize: 8,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: '#311d13',
          opacity: 0.4,
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 500,
          fontSize: 20,
          color: '#311d13',
          lineHeight: 1,
        }}
      >
        {value}
      </span>
    </div>
  );
}

/* ─── Hero ───────────────────────────────────────────────────────────────── */
export function HeroSection() {
  return (
    <section
      style={{
        backgroundColor: '#F5F0E8',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Polygon grid — full section background */}
      <PolyGrid />

      {/* ── Two-column grid ─────────────────────────────────────────────── */}
      <div
        className="grid grid-cols-1 lg:grid-cols-[52fr_48fr]"
        style={{
          flex: 1,
          maxWidth: 1440,
          width: '100%',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* ── LEFT ─────────────────────────────────────────────────────── */}
        <div
          className="flex flex-col justify-center"
          style={{
            padding:
              'clamp(96px, 10vw, 136px) clamp(24px, 4.5vw, 72px) 40px clamp(24px, 5.5vw, 80px)',
          }}
        >
          {/* Badge */}
          <div className="hero-label" style={{ marginBottom: 28 }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
                fontSize: 10,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#311d13',
                opacity: 0.5,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  backgroundColor: '#311d13',
                  opacity: 0.4,
                  flexShrink: 0,
                }}
              />
              Curadoria Autoral · São Paulo
            </span>
          </div>

          {/* Headline — 3 lines */}
          <h1
            className="hero-headline"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(42px, 4.8vw, 76px)',
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
              color: '#311d13',
              marginBottom: 24,
            }}
          >
            Madeiras autorais
            <br />
            amazônicas
            <br />
            <span
              style={{
                fontWeight: 300,
                fontStyle: 'italic',
                fontSize: '0.76em',
                opacity: 0.52,
                letterSpacing: '0.01em',
              }}
            >
              para arquitetura de alto padrão.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="hero-ctas"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 300,
              fontSize: 13,
              color: '#47474a',
              opacity: 0.68,
              maxWidth: 380,
              lineHeight: 1.8,
              marginBottom: 36,
            }}
          >
            Apresentamos ao mercado paulista espécies raras da Amazônia — com
            procedência certificada e atendimento consultivo para projetos de
            alto padrão.
          </p>

          {/* CTAs */}
          <div
            className="hero-ctas"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 20,
              marginBottom: 40,
            }}
          >
            <Link
              to="/contato"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '14px 30px',
                backgroundColor: '#311d13',
                color: '#F5F0E8',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
                fontSize: 10,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.82')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')
              }
            >
              Agendar Apresentação
            </Link>
            <Link
              to="/acervo"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                color: '#311d13',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 300,
                fontSize: 13,
                textDecoration: 'none',
                opacity: 0.65,
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.65')
              }
            >
              Ver Acervo →
            </Link>
          </div>

          {/* Social proof */}
          <div
            className="hero-scroll"
            style={{ display: 'flex', alignItems: 'center', gap: 12 }}
          >
            <div style={{ display: 'flex' }}>
              {(['#8B5E3C', '#5C3D22', '#A0785A'] as const).map((c, i) => (
                <span
                  key={i}
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: '50%',
                    backgroundColor: c,
                    border: '2px solid #F5F0E8',
                    display: 'inline-block',
                    marginLeft: i > 0 ? -8 : 0,
                  }}
                />
              ))}
            </div>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 300,
                fontSize: 11,
                color: '#311d13',
                opacity: 0.5,
                lineHeight: 1.55,
              }}
            >
              Confiada por arquitetos e construtoras
              <br />
              de alto padrão em São Paulo.
            </p>
          </div>
        </div>

        {/* ── RIGHT — floating product illustration ────────────────────── */}
        <div
          className="hero-photo hidden lg:flex items-center justify-center"
          style={{ padding: '96px 36px 80px 16px', position: 'relative' }}
        >
          {/* Card stack */}
          <div style={{ position: 'relative', width: '100%', maxWidth: 460 }}>

            {/* Back card — slightly rotated, depth layer */}
            <div
              style={{
                position: 'absolute',
                top: 22,
                left: -16,
                right: 16,
                bottom: -22,
                backgroundColor: '#C4B49F',
                transform: 'rotate(-2.5deg)',
                boxShadow: '0 12px 48px rgba(49,29,19,0.1)',
                overflow: 'hidden',
              }}
            >
              <ImageWithFallback
                src={WOOD_IMG_BG}
                alt=""
                aria-hidden="true"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.4,
                  display: 'block',
                }}
              />
            </div>

            {/* Main species card */}
            <div
              style={{
                position: 'relative',
                backgroundColor: '#FDFAF6',
                boxShadow:
                  '0 32px 96px rgba(49,29,19,0.17), 0 4px 20px rgba(49,29,19,0.08)',
              }}
            >
              {/* Wood image — taller */}
              <div style={{ height: 300, overflow: 'hidden' }}>
                <ImageWithFallback
                  src={WOOD_IMG}
                  alt="Jatobá — espécie em destaque do acervo Algimi São Paulo"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>

              {/* Card body */}
              <div style={{ padding: '22px 28px 26px' }}>
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 400,
                    fontSize: 8,
                    letterSpacing: '0.24em',
                    textTransform: 'uppercase',
                    color: '#311d13',
                    opacity: 0.35,
                    marginBottom: 7,
                  }}
                >
                  Espécie em destaque
                </p>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 500,
                    fontSize: 32,
                    color: '#311d13',
                    lineHeight: 1.1,
                    marginBottom: 5,
                  }}
                >
                  Jatobá
                </h3>
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 300,
                    fontSize: 11,
                    color: '#47474a',
                    opacity: 0.48,
                    letterSpacing: '0.04em',
                    marginBottom: 16,
                  }}
                >
                  Hymenaea courbaril · Amazônia
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
                  {['Piso', 'Deck', 'Externo'].map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: '4px 11px',
                        border: '1px solid rgba(49,29,19,0.18)',
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 400,
                        fontSize: 9,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: '#311d13',
                        opacity: 0.62,
                        borderRadius: 4,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card footer */}
              <div
                style={{
                  borderTop: '1px solid rgba(49,29,19,0.07)',
                  padding: '13px 28px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 300,
                    fontSize: 10,
                    color: '#311d13',
                    opacity: 0.38,
                    letterSpacing: '0.06em',
                  }}
                >
                  Disponível imediatamente
                </span>
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    backgroundColor: '#6B9E6B',
                    display: 'inline-block',
                  }}
                />
              </div>
            </div>

            {/* Floating chips */}
            <StatChip label="Acervo" value="160+" style={{ top: -18, right: -32 }} />
            <StatChip label="Procedência" value="FSC" style={{ bottom: 48, left: -44 }} />
          </div>
        </div>
      </div>

      {/* ── Stats bar ────────────────────────────────────────────────────── */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          borderTop: '1px solid rgba(49,29,19,0.09)',
          height: 80,
          display: 'flex',
          maxWidth: 1440,
          width: '100%',
          margin: '0 auto',
        }}
      >
        {[
          { num: '160+', label: 'Espécies amazônicas' },
          { num: '30+', label: 'Anos de origem' },
          { num: 'SP', label: 'Capital' },
        ].map((s, i) => (
          <div
            key={s.label}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 3,
              borderRight: i < 2 ? '1px solid rgba(49,29,19,0.09)' : 'none',
            }}
          >
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 500,
                fontSize: 'clamp(18px, 2vw, 26px)',
                color: '#311d13',
                lineHeight: 1,
              }}
            >
              {s.num}
            </span>
            <span
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 300,
                fontSize: 9,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#311d13',
                opacity: 0.4,
              }}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
