export interface MediaItem {
  type: 'image' | 'video';
  url: string;
  caption?: string;
}

export interface ExtendedProjectData {
  longDescription?: string;
  media?: MediaItem[];
  technologies?: string[];
  features?: string[];
  achievements?: string[];
  links?: {
    github?: string;
    demo?: string;
    website?: string;
  };
}

export interface ExtendedGithubProject {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  // Extended fields
  extendedData?: ExtendedProjectData;
}

export interface ExtendedExternalProject {
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
  // Extended fields
  longDescription?: string;
  media?: MediaItem[];
  technologies?: string[];
  features?: string[];
  achievements?: string[];
  links?: {
    github?: string;
    demo?: string;
    website?: string;
  };
}