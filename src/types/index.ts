export interface Project {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl?: string; // Cinematic hover playback
  youtubeId?: string; // YouTube iframe embed
  problem: string;
  result: string;
  roi: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  longDescription?: string;
  architectureDetails?: string;
  features?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  estimatedTimeline: string;
}

export interface Milestone {
  id: string;
  step: string;
  title: string;
  description: string;
}
