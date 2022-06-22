import { SectionContainer } from "../../../shared/SectionContainer/SectionContainer";
import { AboutIntro } from "../AboutIntro/AboutIntro";
import { AboutFrontendToolbox } from "../AboutFrontendToolbox/AboutFrontendToolbox";
import { AboutOtherTools } from "../AboutOtherTools/AboutOtherTools";
import { AboutActionButtons } from "../AboutActionButtons/AboutActionButtons";

export function AboutSection() {
  return (
    <>
      <SectionContainer>
        <AboutIntro />
      </SectionContainer>
      <SectionContainer>
        <AboutFrontendToolbox />
        <AboutOtherTools />
        <AboutActionButtons />
      </SectionContainer>
    </>
  );
}
