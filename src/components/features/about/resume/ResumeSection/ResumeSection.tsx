import { SectionContainer } from '../../../../shared/SectionContainer/SectionContainer';
import { ResumeHeader } from '../ResumeHeader/ResumeHeader';
import { WorkExperience } from '../WorkExperience/WorkExperience';
import { EducationAndTraining } from '../EducationAndTraining/EducationAndTraining';
import { Courses } from '../Courses/Courses';
import { Projects } from '../Projects/Projects';
import { DeveloperToolbox } from '../DeveloperToolbox/DeveloperToolbox';
import { LanguageSkills } from '../LanguageSkills/LanguageSkills';
import { CommunicationSkills } from '../CommunicationSkills/CommunicationSkills';
import { OrganizationalSkills } from '../OrganizationalSkills/OrganizationalSkills';
import { Presentations } from '../Presentations/Presentations';
import { References } from '../References/References';

export function ResumeSection() {
  return (
    <SectionContainer>
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
    </SectionContainer>
  );
}
