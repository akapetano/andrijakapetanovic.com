import { SectionContainer } from '../../../shared/SectionContainer/SectionContainer';
import { AboutIntro } from '../AboutIntro/AboutIntro';
import { AboutFrontendToolbox } from '../AboutFrontendToolbox/AboutFrontendToolbox';
import { AboutOtherTools } from '../AboutOtherTools/AboutOtherTools';

export function AboutSection() {
  return (
    <SectionContainer>
      <AboutIntro />
      <AboutFrontendToolbox />
      <AboutOtherTools />
    </SectionContainer>
  );
}
