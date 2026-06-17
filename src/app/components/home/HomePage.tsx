import { HeroSection } from './HeroSection';
import { ManifestoSection } from './ManifestoSection';
import { PilaresSection } from './PilaresSection';
import { AcervoSection } from './AcervoSection';
import { ProjetosSection } from './ProjetosSection';
import { SociosSection } from './SociosSection';
import { ImprensaSection } from './ImprensaSection';
import { CTASection } from './CTASection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ManifestoSection />
      <PilaresSection />
      <AcervoSection />
      <ProjetosSection />
      <SociosSection />
      <ImprensaSection />
      <CTASection />
    </>
  );
}
