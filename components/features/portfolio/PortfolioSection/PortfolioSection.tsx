import { SectionContainer } from "../../../shared/SectionContainer/SectionContainer";
import { PortfolioIntro } from "../PortfolioIntro/PortfolioIntro";
import { PersonalProjectsGrid } from "../PersonalProjectsGrid/PersonalProjectsGrid";

export function PortfolioSection() {
  return (
    <SectionContainer>
      <PortfolioIntro />
      <PersonalProjectsGrid />
    </SectionContainer>
  );
}
