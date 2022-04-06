import { SectionContainer } from '../../../shared/SectionContainer/SectionContainer';
import { AboutIntro } from '../AboutIntro/AboutIntro';
import { AboutFrontendToolbox } from '../AboutFrontendToolbox/AboutFrontendToolbox';

export function AboutSection() {
  return (
    <SectionContainer>
      <AboutIntro />
      <AboutFrontendToolbox />
    </SectionContainer>
  );
}
