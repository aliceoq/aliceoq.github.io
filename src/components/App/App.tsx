import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "../../themes";
import { useState } from "react";
import { AppContainer, Body, ContentContainer, Header, Name, Socials, TitleContainer } from "./style";
import { PastExperience, Projects } from "../../utils/constants";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import ProjectCard from "../ProjectCard/ProjectCard";
import { Github, Linkedin, Moon, Sun } from "../Icons/Icon";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  return (
    <ThemeProvider theme={isDarkTheme ? DarkTheme : LightTheme}>
      <AppContainer>
        <Header onClick={() => setIsDarkTheme(!isDarkTheme)}>
          {isDarkTheme ? <Sun size="medium" /> : <Moon size="medium" />}
        </Header>
        <Body>
          <TitleContainer>
            <div>
              <Name>Alice Oliveira</Name>
              <div>Frontend Developer @ VTEX Lab</div>
            </div>
            <Socials>
              <Github size="medium" />
              <Linkedin size="medium" />
            </Socials>
          </TitleContainer>
          <ContentContainer>
            <div>
              <div>About</div>
              <div>MUITAS COISAS BLABSLABSLBALSBALBS</div>
            </div>
            <div>Experience</div>
            <div>Full resumé</div>
            {PastExperience.map((experience, id) => (
              <ExperienceCard experience={experience} key={id} />
            ))}
            <div>Projects</div>
            {Projects.map((project, id) => (
              <ProjectCard project={project} key={id} />
            ))}
          </ContentContainer>
        </Body>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
