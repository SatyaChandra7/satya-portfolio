export interface Project {
  id: string;
  title: string;
  category: 'Full-Stack' | 'AI & ML' | 'Mobile & Web';
  subtitle: string;
  description: string;
  fullCaseStudy: {
    problemStatement: string;
    architectureOverview: string;
    keyFeatures: string[];
    technicalAchievements: string[];
    metrics?: { label: string; value: string }[];
  };
  tags: string[];
  techStack: string[];
  image: string;
  logo?: string;
  videoUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. "Advanced", "Proficient", "Expert"
    icon?: string;
    highlight?: boolean;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  description: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  image?: string;
  credentialUrl?: string;
  skillsLearned: string[];
}

export interface MediaItem {
  id: string;
  title: string;
  category: 'Graphic Design' | 'Photography' | 'Video Edits';
  thumbnail: string;
  highResUrl?: string;
  videoUrl?: string;
  description: string;
  tags: string[];
}
