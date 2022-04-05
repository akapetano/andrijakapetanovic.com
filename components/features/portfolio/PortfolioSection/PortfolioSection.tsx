import { SectionContainer } from '../../../shared/SectionContainer/SectionContainer';
import { PortfolioIntro } from '../PortfolioIntro/PortfolioIntro';
import { PersonalProjectsGrid } from '../PersonalProjectsGrid/PersonalProjectsGrid';
import { CourseProjectsGrid } from '../CourseProjectsGrid/CourseProjectsGrid';

export function PortfolioSection() {
  return (
    <SectionContainer>
      <PortfolioIntro />
      <PersonalProjectsGrid />
      <CourseProjectsGrid />
    </SectionContainer>
  );
}
