import { Experience, Project } from "./types";

export const PastExperience: Experience[] = [
  {
    position: "Frontend Developer",
    company: "VTEX Lab",
    companyUrl: "https://vtex.com/",
    description:
      "Development of the Developers Portal, the documentation portal for VTEX technology users.",
    period: "OCT 2022 - Present",
    technologies: ["React", "NextJs", "Netlify", "Typescript"],
  },
  {
    position: "Fullstack Intern",
    company: "LACETI",
    companyUrl: "https://br.linkedin.com/company/lacetiufpe",
    description: "Desenvolvimento de sistema IoT de monitoramento.",
    period: "OCT 2021 - OCT 2022",
    technologies: [
      "React",
      "GraphQL",
      "Typescript",
      "styled-components",
      "NodeJS",
    ],
  },
];

export const Projects: Project[] = [
  {
    name: "Vozes da Loirinha",
    url: "https://huggingface.co/spaces/aliceoq/vozes-da-loirinha",
    repo: "https://github.com/aliceoq/Mangio-RVC-Fork",
    description: "",
    technologies: ["Python", "Gradio", "demucs", "RVC", "HuggingFace"],
    status: "Finished",
  },
  {
    name: "Tetriste",
    url: "https://aliceoq.github.io/tetriste/index.html",
    repo: "https://github.com/aliceoq/tetriste",
    description: "Tetris blabla",
    technologies: ["Javascript", "CSS"],
    status: "Finished",
  },
  {
    name: "Hora de chorar",
    url: "https://aliceoq.github.io/hora-de-chorar/",
    repo: "https://github.com/aliceoq/hora-de-chorar",
    description: "",
    technologies: ["React", "Javascript", "CSS"],
    status: "Unfinished"
  }
];
