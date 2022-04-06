import { SectionContainer } from '../../../shared/SectionContainer/SectionContainer';
import HomeIntro from '../HomeIntro/HomeIntro';
import { HomeActionButtons } from '../HomeActionButtons/HomeActionButtons';

export function HomeSection() {
  return (
    <SectionContainer>
      <HomeIntro />
      <HomeActionButtons />
    </SectionContainer>
  );
}
