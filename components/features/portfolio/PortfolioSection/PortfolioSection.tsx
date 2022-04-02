import { PortfolioIntro } from '../PortfolioIntro/PortfolioIntro';
import { ProjectGrid } from '../ProjectsGrid/ProjectGrid';

export function PortfolioSection() {
  return (
    <section>
      <PortfolioIntro />
      <ProjectGrid />
    </section>
  );
}
