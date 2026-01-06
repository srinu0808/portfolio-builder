export interface PortfolioData {
  name: string;
  role: string;
  email: string;
  location: string;
  headline: string;
  about: string;
  skills: string[];
  projects: Project[];
  education: Education[];
  experience: Experience[];
  socialLinks: SocialLinks;
  theme: string;
  customCSS?: string;
  fullHTML?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  year: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
}

export interface FormData {
  name: string;
  role: string;
  email: string;
  location: string;
  skills: string;
  projects: { title: string; description: string; technologies: string; link: string }[];
  education: { institution: string; degree: string; year: string }[];
  experience: { company: string; role: string; duration: string; description: string }[];
  github: string;
  linkedin: string;
  twitter: string;
  website: string;
  theme: string;
}

export const initialFormData: FormData = {
  name: "",
  role: "",
  email: "",
  location: "",
  skills: "",
  projects: [{ title: "", description: "", technologies: "", link: "" }],
  education: [{ institution: "", degree: "", year: "" }],
  experience: [{ company: "", role: "", duration: "", description: "" }],
  github: "",
  linkedin: "",
  twitter: "",
  website: "",
  theme: "rainbow",
};
