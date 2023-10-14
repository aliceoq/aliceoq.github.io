import { Experience } from "../../utils/types";
import TechnologyContainer from "../TechnologyContainer/TechnologyContainer";
import {
  CardContainer,
  ContentContainer,
  Description,
  PeriodContainer,
  Title,
} from "./style";

interface Props {
  experience: Experience;
}

function ExperienceCard({ experience }: Props) {
  return (
    <a href={experience.companyUrl}>
      <CardContainer>
        <PeriodContainer>{experience.period}</PeriodContainer>
        <ContentContainer>
          <Title>
            {experience.position} @ {experience.company}
          </Title>
          <Description>{experience.description}</Description>
          <TechnologyContainer technologies={experience.technologies}/>
        </ContentContainer>
      </CardContainer>
    </a>
  );
}

export default ExperienceCard;
