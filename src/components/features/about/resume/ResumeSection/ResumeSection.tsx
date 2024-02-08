import { Accordion } from "@chakra-ui/react";
import { SectionContainer } from "../../../../shared/SectionContainer/SectionContainer";
import { ResumeHeader } from "../ResumeHeader/ResumeHeader";
import { WorkExperience } from "../WorkExperience/WorkExperience";
import { EducationAndTraining } from "../EducationAndTraining/EducationAndTraining";
import { Courses } from "../Courses/Courses";
import { Projects } from "../Projects/Projects";
import { DeveloperToolbox } from "../DeveloperToolbox/DeveloperToolbox";
import { LanguageSkills } from "../LanguageSkills/LanguageSkills";
import { CommunicationSkills } from "../CommunicationSkills/CommunicationSkills";
import { OrganizationalSkills } from "../OrganizationalSkills/OrganizationalSkills";
import { Presentations } from "../Presentations/Presentations";
import { References } from "../References/References";

export function ResumeSection() {
  return (
    <SectionContainer>
      <Accordion allowToggle defaultIndex={[0]} w="100%">
        <ResumeHeader />
        <WorkExperience />
        <EducationAndTraining />
        <Courses />
        <Projects />
        <DeveloperToolbox />
        <LanguageSkills />
        <CommunicationSkills />
        <OrganizationalSkills />
        <Presentations />
        <References />
      </Accordion>
    </SectionContainer>
  );
}
