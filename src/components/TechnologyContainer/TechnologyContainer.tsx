import { Container, Label } from "./style";

interface Props {
  technologies: string[];
}

function TechnologyContainer({ technologies }: Props) {
  return (
    <Container>
      {technologies.map((technology, id) => (<Label key={id}>{technology}</Label>))}
    </Container>
  );
}

export default TechnologyContainer;
