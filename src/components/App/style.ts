import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  background: ${(props) => props.theme.color.background};
  color: ${(props) => props.theme.color.text};
  justify-content: center;
`;

const Header = styled.div`
  position: fixed;
  top: 1rem;
  right: 2rem;
`;

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 5rem;

  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10rem 0 10rem 0;

  @media (max-width: 1080px) {
    padding: 0;
  }
`;

const Name = styled.div`
  font-size: ${(props) => props.theme.font.bigger};
  color: ${(props) => props.theme.color.title};
`;

const ContentContainer = styled.div`
  max-height: calc(100vh - 20rem);
  overflow-y: auto;
  overflow-x: hidden;
  padding: 10rem 0 10rem 0;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1080px) {
    padding: 5rem 0 5rem 0;
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 24px;
`

export { AppContainer, Header, Body, TitleContainer, ContentContainer, Name, Socials };
