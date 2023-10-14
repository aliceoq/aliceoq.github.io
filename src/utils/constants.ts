import { Experience, Project } from "./types";

export const PastExperience: Experience[] = [
  {
    position: "Frontend Developer",
    company: "VTEX Lab",
    companyUrl: "https://vtex.com/",
    description:
      "Engaged in a professional training program in collaboration with Brazilian universities, contributing to the development of digital products at VTEX. Currently focused on enhancing the Developers Portal documentation platform and the Help Center support portal.",
    period: "OCT 2022 — Present",
    technologies: ["React", "Next.js", "Netlify", "Typescript"],
  },
  {
    position: "Fullstack Intern",
    company: "LACETI",
    companyUrl: "https://br.linkedin.com/company/lacetiufpe",
    description:
      "Development of an IoT factory monitoring system, focusing on creating a simple and comprehensive interface to assist employees. It involves presenting real-time data and checking historical records.",
    period: "OCT 2021 — OCT 2022",
    technologies: [
      "React",
      "GraphQL",
      "Typescript",
      "styled-components",
      "NodeJS",
      "AWS",
    ],
  },
  {
    position: "Researcher",
    company: "CIn/Motorola Project",
    companyUrl: "https://www.linkedin.com/company/cinmotorola",
    description:
      "Development of a controlled natural language for creating and maintaining robotic tests. Systematic Literature Review accepted for publication in Euromicro SEAA 2022.",
    period: "MAR 2020 — SEP 2021",
    technologies: ["Java", "Grammatical Framework", "JUnit"],
  },
];

export const Projects: Project[] = [
  {
    emoji: "🎤",
    name: "Vozes da Loirinha",
    url: "https://huggingface.co/spaces/aliceoq/vozes-da-loirinha",
    repo: "https://github.com/aliceoq/Mangio-RVC-Fork",
    description:
      "Project that makes it possible to use RVC models through a user-friendly interface, allowing the insertion of audio from YouTube videos, recordings, and files. It provides the option to separate vocals and accompaniment before voice conversion.",
    technologies: ["Python", "Gradio", "demucs", "RVC", "HuggingFace"],
    status: "Finished",
  },
  {
    emoji: "🧱",
    name: "Tetriste",
    url: "https://aliceoq.github.io/tetriste/index.html",
    repo: "https://github.com/aliceoq/tetriste",
    description:
      "In this project, a simple Tetris game was created using only JavaScript and HTML/CSS. It features functionalities such as score counting, various piece shapes, and increasing speed based on score increments.",
    technologies: ["Javascript", "CSS"],
    status: "Finished",
  },
  {
    emoji: "📅",
    name: "Hora de chorar",
    url: "https://aliceoq.github.io/hora-de-chorar/",
    repo: "https://github.com/aliceoq/hora-de-chorar",
    description:
      "Project for organizing class schedules to check for schedule conflicts and find the best combination of classes. Currently, it is not yet completed.",
    technologies: ["React", "Javascript", "CSS"],
    status: "Unfinished",
  },
];
