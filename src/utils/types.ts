export type Experience = {
  position: string;
  company: string;
  companyUrl: string;
  description: string;
  period: string;
  technologies: string[];
};

export type Project = {
  emoji: string;
  name: string;
  url?: string;
  repo?: string;
  description: string;
  technologies: string[];
  status: "Finished" | "Unfinished";
};

export const iconSizes = {
  small: { width: "16px", height: "16px" },
  medium: { width: "32px", height: "32px" },
  large: { width: "48px", height: "48px" },
};

export type Size = keyof typeof iconSizes;

export type IconProps = {
  size: Size;
};
