import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  padding: 1.5rem 1rem;
  gap: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.color.backgroundHighlight};
  }

  border-radius: ${(props) => props.theme.border.radius};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1rem;
`;

const Title = styled.div`
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.color.highlight};
  }
`;

const Description = styled.div`
  line-height: 1.3rem;
  font-size: ${(props) => props.theme.font.small};
`;

const Links = styled.div`
  display: flex;
  gap: 24px;
`;

const Icon = styled.div`
  font-size: ${(props) => props.theme.font.bigger};
`;

export { CardContainer, ContentContainer, Title, Description, Links, Icon };
