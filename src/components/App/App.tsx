import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "../../themes";
import { useState } from "react";
import {
  AppContainer,
  Body,
  ContentContainer,
  ThemeButton,
  IconButton,
  Name,
  Position,
  Section,
  SectionTitle,
  Socials,
  TitleContainer,
  SectionContent,
} from "./style";
import { PastExperience, Projects } from "../../utils/constants";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import ProjectCard from "../ProjectCard/ProjectCard";
import { Github, RightArrow, Linkedin, Moon, Sun } from "../Icons/Icon";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const handlePdfLinkClick = () => {
    window.open('resume.pdf', '_blank', 'noopener noreferrer');
  };

  return (
    <ThemeProvider theme={isDarkTheme ? DarkTheme : LightTheme}>
      <AppContainer>
        <ThemeButton onClick={() => setIsDarkTheme(!isDarkTheme)}>
          {isDarkTheme ? <Sun size="medium" /> : <Moon size="medium" />}
        </ThemeButton>
        <Body>
          <TitleContainer>
            <div>
              <Name>Alice Oliveira</Name>
              <Position>Frontend Developer @ VTEX Lab</Position>
            </div>
            <Socials>
              <a href="https://github.com/aliceoq/"><Github size="medium" /></a>
              <a href="https://www.linkedin.com/in/alice-oliveira-brito/"><Linkedin size="medium" /></a>
            </Socials>
          </TitleContainer>
          <ContentContainer>
            <Section>
              <SectionTitle>About</SectionTitle>
              <div>MUITAS COISAS BLABSLABSLBALSBALBS</div>
            </Section>
            <Section>
              <SectionTitle>Experience</SectionTitle>
              <SectionContent>
                {PastExperience.map((experience, id) => (
                  <ExperienceCard experience={experience} key={id} />
                ))}
              </SectionContent>
              <IconButton onClick={handlePdfLinkClick}>
                <RightArrow size="small" />
                <div>Full resume</div>
              </IconButton>
            </Section>
            <Section>
              <SectionTitle>Projects</SectionTitle>
              {Projects.map((project, id) => (
                <ProjectCard project={project} key={id} />
              ))}
            </Section>
          </ContentContainer>
        </Body>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
