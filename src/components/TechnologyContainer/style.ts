import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: ${(props) => props.theme.font.small};
`;

const Label = styled.div`
  background-color: ${(props) => props.theme.color.label};
  color: ${(props) => props.theme.color.text};
  border-radius: ${(props) => props.theme.border.radius};
  padding: 0.5rem;
  text-wrap: nowrap;
`;

export { Container, Label };
