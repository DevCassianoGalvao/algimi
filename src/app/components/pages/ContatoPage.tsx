import { useState } from 'react';
import { MessageSquare, Mail, MapPin, Instagram } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

type FormData = { nome: string; escritorio: string; telefone: string; mensagem: string };
type Status = 'idle' | 'success' | 'error';

export function ContatoPage() {
  const heroRef = useReveal<HTMLElement>(0);
  const formRef = useReveal<HTMLDivElement>(150);
  const [formData, setFormData] = useState<FormData>({ nome: '', escritorio: '', telefone: '', mensagem: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.nome && formData.escritorio && formData.telefone) {
      setStatus('success');
    } else {
      setStatus('error');
    }
  };

  const inputStyle: React.CSSProperties = {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 300,
    fontSize: 14,
    backgroundColor: 'transparent',
    borderBottom: '1px solid rgba(49,29,19,0.2)',
    color: '#311d13',
    outline: 'none',
    paddingBottom: 10,
    paddingTop: 8,
    width: '100%',
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 400,
    fontSize: 10,
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: '#311d13',
    opacity: 0.45,
    display: 'block',
    marginBottom: 6,
  };

  return (
    <>
      <section ref={heroRef} className="pt-40 pb-20" style={{ backgroundColor: '#f3f2eb' }}>
        <div className="max-w-[1440px] mx-auto px-20 max-md:px-6">
          <div className="max-w-xl" data-reveal>
            <h1 className="font-display mb-5 leading-[1.08]" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px, 5vw, 80px)', fontWeight: 400, color: '#311d13' }}>
              Vamos conversar.
            </h1>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 14, color: '#47474a', lineHeight: 1.9 }}>
              Para apresentação do acervo, especificação em projeto ou agendamento de visita ao showroom.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 pb-28" style={{ backgroundColor: '#f3f2eb' }}>
        <div className="max-w-[1440px] mx-auto px-20 max-md:px-6" ref={formRef}>
          <div className="h-px mb-16" style={{ backgroundColor: '#311d13', opacity: 0.1 }} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact info */}
            <div className="flex flex-col gap-9">
              {[
                { icon: MessageSquare, label: 'WhatsApp', value: '(11) 9.3342-7616', href: 'https://wa.me/5511933427616' },
                { icon: Mail, label: 'E-mail', value: 'contato@algimisaopaulo.com.br', href: 'mailto:contato@algimisaopaulo.com.br' },
                { icon: MapPin, label: 'Endereço', value: 'Rua Francisco Benedito da Silveira, 43\nItu Novo Centro – São Paulo', href: undefined },
                { icon: Instagram, label: 'Instagram', value: '@algimisaopaulo', href: 'https://instagram.com/algimisaopaulo' },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} data-reveal className="flex items-start gap-5">
                  <Icon size={17} color="#311d13" strokeWidth={1} className="mt-1 shrink-0 opacity-40" />
                  <div>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#311d13', opacity: 0.38, marginBottom: 5 }}>{label}</p>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: 21, color: '#311d13', textDecoration: 'none', whiteSpace: 'pre-line' }} className="hover:opacity-60 transition-opacity">{value}</a>
                    ) : (
                      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: 21, color: '#311d13', lineHeight: 1.5, whiteSpace: 'pre-line' }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div data-reveal>
              {status === 'success' ? (
                <div className="py-16 text-center">
                  <p className="font-display" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 400, color: '#311d13' }}>Mensagem recebida.</p>
                  <p className="mt-3" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 14, color: '#47474a', opacity: 0.65 }}>Em breve entraremos em contato.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  {status === 'error' && (
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, color: '#c0392b', fontSize: 13 }}>
                      Não foi possível enviar. Tente novamente em instantes.
                    </p>
                  )}
                  {[
                    { id: 'nome', label: 'Nome *', type: 'text', required: true },
                    { id: 'escritorio', label: 'Escritório ou empresa *', type: 'text', required: true },
                    { id: 'telefone', label: 'Telefone *', type: 'tel', required: true },
                  ].map(({ id, label, type, required }) => (
                    <div key={id}>
                      <label htmlFor={id} style={labelStyle}>{label}</label>
                      <input id={id} name={id} type={type} required={required} value={(formData as Record<string, string>)[id]} onChange={handleChange} style={inputStyle} />
                    </div>
                  ))}
                  <div>
                    <label htmlFor="mensagem" style={labelStyle}>Mensagem</label>
                    <textarea id="mensagem" name="mensagem" rows={4} value={formData.mensagem} onChange={handleChange} style={{ ...inputStyle, resize: 'none' }} />
                  </div>
                  <div>
                    <button type="submit" className="inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-widest uppercase transition-opacity hover:opacity-80" style={{ backgroundColor: '#311d13', color: '#f3f2eb', fontFamily: "'Poppins', sans-serif" }}>
                      → Enviar mensagem
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
