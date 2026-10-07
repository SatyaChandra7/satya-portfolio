import { EducationItem, CertificationItem } from '@/types';

export const educationData: EducationItem[] = [
  {
    degree: 'B.Tech in Artificial Intelligence & Machine Learning (AI&ML)',
    institution: 'Srinivasa Institute of Engineering and Technology',
    period: '2021 - 2025',
    grade: '65%',
    description: 'Specialized in AI/ML algorithms, Neural Networks, Deep Learning architectures, Data Structures, and Software Engineering principles.',
    highlights: [
      'Capstone Project: Stock Market Trend Prediction using ML & Deep Learning',
      'Hands-on experience in TensorFlow, Keras, and Full-Stack web projects',
      'Active leadership in technical workshops and creative media production'
    ]
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Sri Chaitanya Junior College, Amalapuram',
    period: '2019 - 2021',
    grade: '66%',
    description: 'Board of Intermediate Education, focusing on Mathematics, Physics, and Chemistry.',
    highlights: [
      'Strong foundational logic in Mathematics and Problem Solving',
      'Board Examination certified'
    ]
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Sri Balaji High School, Mummidivaram',
    period: '2018 - 2019',
    grade: '9.3 GPA',
    description: 'Board of Secondary Education, completed with high distinction.',
    highlights: [
      '9.3 GPA overall academic excellence',
      'Active participant in science exhibitions and school events'
    ]
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: 'cert-aws',
    title: 'AWS AI/ML Virtual Internship',
    issuer: 'Amazon Web Services (AWS)',
    image: '/certifications/Satya Chandra Bokka 259154.jpg',
    skillsLearned: ['AWS Machine Learning', 'SageMaker', 'Cloud AI Services', 'Model Deployment']
  },
  {
    id: 'cert-edx',
    title: 'Data Science & Machine Learning Capstone Project',
    issuer: 'edX',
    image: '/certifications/ds and ml capstone proj.jpg',
    skillsLearned: ['Python Data Analysis', 'Machine Learning Models', 'Data Visualization', 'Capstone Project']
  },
  {
    id: 'cert-forage',
    title: 'Solutions Architecture Job Simulation',
    issuer: 'Forage',
    image: '/certifications/Certificate.png',
    skillsLearned: ['Cloud System Architecture', 'Scalability Design', 'Enterprise Tech Stack']
  },
  {
    id: 'cert-great-learning',
    title: 'UI/UX Design Certification',
    issuer: 'Great Learning',
    image: '/certifications/ui ux certificate.jpg',
    skillsLearned: ['User Experience', 'Interface Wireframing', 'Visual Hierarchy', 'User Research']
  },
  {
    id: 'cert-ml-python',
    title: 'Machine Learning with Python',
    issuer: 'Professional Certification',
    image: '/certifications/ml with py.jpg',
    skillsLearned: ['Scikit-Learn', 'Supervised & Unsupervised Learning', 'Model Evaluation']
  },
  {
    id: 'cert-eduskills',
    title: 'Google Android Developer Certification',
    issuer: 'EduSkills / Google',
    skillsLearned: ['Android Application Basics', 'Mobile UI Components', 'Kotlin/Java Fundamentals']
  }
];
