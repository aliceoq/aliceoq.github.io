import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  background: ${(props) => props.theme.color.background};
  color: ${(props) => props.theme.color.text};
  font-family: 'Inter Light';
  justify-content: center;
  height: 100vh;

  @media (max-width: 1300px) {
    height: max-content;
  }

  overflow: visible;
`;

const ThemeButton = styled.div`
  position: fixed;
  top: 1rem;
  right: 2rem;
  cursor: pointer;
`;

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 5rem;
  margin: 0% 10%;
  width: 100%;
  justify-content: center;

  @media (max-width: 1300px) {
    flex-direction: column;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10rem 0 10rem 0;

  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 5rem 0 5rem 0;
  }
`;

const Name = styled.h1`
  font-size: ${(props) => props.theme.font.bigger};
  font-family: "Inter Bold";
  color: ${(props) => props.theme.color.title};
  margin: 0;
`;

const Position = styled.h2`
  margin: 0;
  font-family: "Inter Thin";
  font-size: ${(props) => props.theme.font.default};
  color: ${(props) => props.theme.color.highlight};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10rem 0 10rem 0;
  gap: 4rem;
  max-height: calc(100vh - 20rem);
  max-width: 640px;

  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1300px) {
    padding: 5rem 0 5rem 0;
    overflow: visible;
    max-height: unset;
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 24px;
`;

const IconButton = styled.div`
  cursor: pointer;
  display: flex;
  gap: 10px;
  align-items: center;
  transition: transform 0.3s ease;
  width: max-content;
  font-family: 'Inter Medium';
  font-size: ${(props) => props.theme.font.small};

  &:hover {
    transform: translateX(10px);
    color: ${(props) => props.theme.color.highlight};
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SectionTitle = styled.h3`
  font-family: "Inter Medium";
  font-size: ${(props) => props.theme.font.default};
  color: ${(props) => props.theme.color.highlight};
  margin: 0 0 1rem 0;
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const About = styled.div`
  line-height: 1.3rem;
  font-size: ${(props) => props.theme.font.small};
`

export {
  AppContainer,
  ThemeButton,
  Body,
  TitleContainer,
  ContentContainer,
  Name,
  Position,
  Socials,
  Section,
  SectionTitle,
  SectionContent,
  IconButton,
  About,
};
