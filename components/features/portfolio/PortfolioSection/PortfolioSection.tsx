import { PortfolioIntro } from '../PortfolioIntro/PortfolioIntro';
import { PersonalProjectsGrid } from '../PersonalProjectsGrid/PersonalProjectsGrid';
import { CourseProjectsGrid } from '../CourseProjectsGrid/CourseProjectsGrid';
import { PortfolioWrapper } from '../PortfolioWrapper/PortfolioWrapper';

export function PortfolioSection() {
  return (
    <PortfolioWrapper>
      <PortfolioIntro />
      <PersonalProjectsGrid />
      <CourseProjectsGrid />
    </PortfolioWrapper>
  );
}
