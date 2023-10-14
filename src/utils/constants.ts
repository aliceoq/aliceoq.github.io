import { Experience, Project } from "./types";

export const PastExperience: Experience[] = [
  {
    position: "Frontend Developer",
    company: "VTEX Lab",
    companyUrl: "https://vtex.com/",
    description:
      "Development of the Developers Portal, the documentation portal for VTEX technology users.",
    period: "OCT 2022 — Present",
    technologies: ["React", "Next.js", "Netlify", "Typescript"],
  },
  {
    position: "Fullstack Intern",
    company: "LACETI",
    companyUrl: "https://br.linkedin.com/company/lacetiufpe",
    description: "Desenvolvimento de sistema IoT de monitoramento.",
    period: "OCT 2021 — OCT 2022",
    technologies: [
      "React",
      "GraphQL",
      "Typescript",
      "styled-components",
      "NodeJS",
    ],
  },
  {
    position: 'Researcher',
    company: 'CIn/Motorola Project',
    companyUrl: 'https://www.linkedin.com/company/cinmotorola',
    description: 'Development of a controlled natural language for creating and maintaining robotic tests. Systematic Literature Review accepted for publication in Euromicro SEAA 2022.',
    period: "MAR 2020 — SEP 2021",
    technologies: [
      'Java',
      'Grammatical Framework',
      'JUnit'
    ]
  }
];

export const Projects: Project[] = [
  {
    emoji: "🎤",
    name: "Vozes da Loirinha",
    url: "https://huggingface.co/spaces/aliceoq/vozes-da-loirinha",
    repo: "https://github.com/aliceoq/Mangio-RVC-Fork",
    description: "Projeto que torna possível utilizar modelos RVC com uma interface simples, além de possibilitar a inserção de áudios através de vídeos do Youtube, gravações e arquivos, fornecendo a opção de separar vocais e acompanhamento antes da conversão de voz.",
    technologies: ["Python", "Gradio", "demucs", "RVC", "HuggingFace"],
    status: "Finished",
  },
  {
    emoji: "🧱",
    name: "Tetriste",
    url: "https://aliceoq.github.io/tetriste/index.html",
    repo: "https://github.com/aliceoq/tetriste",
    description: "Tetris blabla",
    technologies: ["Javascript", "CSS"],
    status: "Finished",
  },
  {
    emoji: "📅",
    name: "Hora de chorar",
    url: "https://aliceoq.github.io/hora-de-chorar/",
    repo: "https://github.com/aliceoq/hora-de-chorar",
    description: "",
    technologies: ["React", "Javascript", "CSS"],
    status: "Unfinished"
  }
];
