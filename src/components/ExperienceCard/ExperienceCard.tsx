import { Experience } from "../../utils/types";

interface Props {
  experience: Experience;
}

function ExperienceCard({ experience }: Props) {
  return (
    <div>
      <div>{experience.period}</div>
      <div>
        <div>
          {experience.position} @{" "}
          <a href={experience.companyUrl}>{experience.company}</a>
        </div>
        <div>{experience.description}</div>
        {/* <Technologies technologies={experience.technologies}/> */}
      </div>
    </div>
  );
}

export default ExperienceCard;
