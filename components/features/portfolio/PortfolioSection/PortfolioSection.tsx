import { PortfolioIntro } from '../PortfolioIntro/PortfolioIntro';
import { PersonalProjectsGrid } from '../PersonalProjectsGrid/PersonalProjectsGrid';
import { CourseProjectsGrid } from '../CourseProjectsGrid/CourseProjectsGrid';
import { Text } from '@chakra-ui/react';
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
