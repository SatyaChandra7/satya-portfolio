import { SkillCategory } from '@/types';

export const skillsData: SkillCategory[] = [
  {
    title: 'Web Development',
    iconName: 'Code',
    description: 'HTML, CSS & JavaScript',
    skills: [
      { name: 'HTML', level: 'Expert', highlight: true },
      { name: 'CSS', level: 'Expert', highlight: true },
      { name: 'JavaScript', level: 'Advanced', highlight: true }
    ]
  },
  {
    title: 'Programming Language',
    iconName: 'Brain',
    description: 'Core Software Development',
    skills: [
      { name: 'Python', level: 'Advanced', highlight: true }
    ]
  },
  {
    title: 'Graphic Designing',
    iconName: 'Palette',
    description: 'Visual Editing & Asset Creation',
    skills: [
      { name: 'Photoshop', level: 'Advanced', highlight: true }
    ]
  },
  {
    title: 'Editing',
    iconName: 'Palette',
    description: 'Video Post-Production & Motion',
    skills: [
      { name: 'Premier Pro', level: 'Advanced', highlight: true }
    ]
  }
];
