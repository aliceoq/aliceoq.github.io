import { Project } from "../../utils/types";
import { GithubSimple, OpenLink } from "../Icons/Icon";
import TechnologyContainer from "../TechnologyContainer/TechnologyContainer";
import {
  CardContainer,
  Description,
  Title,
  ContentContainer,
  Links,
  Icon,
} from "./style";

interface Props {
  project: Project;
}

function ProjectCard({ project }: Props) {
  return (
    <CardContainer>
      <Icon>{project.emoji}</Icon>
      <ContentContainer>
        <Title>{project.name} {project.status === "Finished" ? "✅" : "🚧"}</Title>
        <Description>{project.description}</Description>
        <Links>
          <a href={project.url ?? ""}>
            <OpenLink size="small" />
          </a>
          <a href={project.repo ?? ""}>
            <GithubSimple size="small" />
          </a>
        </Links>
        <TechnologyContainer technologies={project.technologies} />
      </ContentContainer>
    </CardContainer>
  );
}

export default ProjectCard;
