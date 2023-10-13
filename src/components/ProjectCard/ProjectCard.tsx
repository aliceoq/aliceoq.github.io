import { Project } from "../../utils/types";
import placeholder from './../../assets/placeholder.png';

interface Props {
  project: Project;
}

function ProjectCard({ project }: Props) {
  return (
    <div>
      <img alt="Project" src={placeholder} style={{"maxWidth": "100%"}}/>
      <div>
        {project.name}
      </div>
      <div>{project.description}</div>
      <div>git</div>
      <div>url</div>
      {/* <Technologies technologies={experience.technologies}/> */}
    </div>
  );
}

export default ProjectCard;
