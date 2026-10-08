import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: 'mb-bloods',
    title: 'MB Bloods - Emergency Blood Donation Platform',
    category: 'Full-Stack',
    subtitle: 'Emergency blood donation network & admin broadcast platform',
    description: 'Full-stack emergency blood donation application engineered with RegEx search, JWT-secured admin dispatch, and Google Sheets cloud data synchronization.',
    image: '/assets/project-bloods.jpg',
    logo: '/assets/mbbloods-logo.png',
    videoUrl: '/video-edits/mbbloods-ad.mp4',
    githubUrl: 'https://github.com/satyachandra722/mb-bloods',
    liveUrl: 'https://www.mbbloods.org/',
    featured: true,
    tags: ['Full-Stack', 'Social Impact', 'Real-Time Sync'],
    techStack: ['Node.js', 'Express.js', 'MongoDB Atlas', 'Tailwind CSS v4', 'Alpine.js', 'Google Sheets API', 'Vercel'],
    fullCaseStudy: {
      problemStatement: 'In critical medical emergencies, locating compatible blood donors rapidly within specific geographic locations remains a high-friction challenge. Traditional donor directories lack real-time donor availability filters and emergency alert mechanisms.',
      architectureOverview: 'Architected a lightweight Node.js/Express backend paired with MongoDB Atlas for donor profiles. Integrated Google Sheets API for bi-directional live cloud synchronization, enabling non-technical field admins to update donor rosters directly from mobile spreadsheets. Frontend uses Alpine.js micro-interactions with Tailwind CSS glassmorphism.',
      keyFeatures: [
        'RegEx-powered donor search engine filtering by blood group, district, and immediate availability.',
        'JWT-secured administrator portal featuring an emergency donor SMS/WhatsApp broadcast system.',
        'Automated real-time cloud data synchronization via Google Sheets API integration.',
        'Dark-mode glassmorphic UI optimized for sub-second mobile page loads.'
      ],
      technicalAchievements: [
        'Zero-downtime production deployment on Vercel Edge functions.',
        'Sub-second query response time for complex location + blood group queries.',
        'End-to-end data validation and rate-limited API handlers.'
      ],
      metrics: [
        { label: 'Search Latency', value: '< 150ms' },
        { label: 'Active Sync Rate', value: '100% Cloud Synced' },
        { label: 'Mobile Score', value: '98/100 Lighthouse' }
      ]
    }
  },
  {
    id: 'vertex-proserv',
    title: 'Vertex Proserv & Present - Asset Marketplace',
    category: 'Full-Stack',
    subtitle: 'Premium marketplace for real estate and commercial vehicle assets',
    description: 'Full-stack commercial asset marketplace built with an RBAC-protected FastAPI backend, AI price prediction, and interactive Chart.js analytics dashboard.',
    image: '/assets/project-vertex.jpg',
    githubUrl: 'https://github.com/satyachandra722/vertex-present',
    liveUrl: 'https://vertex-present.vercel.app',
    featured: true,
    tags: ['FastAPI', 'RBAC', 'AI Analytics', 'Marketplace'],
    techStack: ['FastAPI', 'Python', 'Chart.js', 'Tailwind CSS', 'Glassmorphism UI', 'REST API'],
    fullCaseStudy: {
      problemStatement: 'Commercial asset marketplaces often struggle with slow listing verification, transparent valuation, and multi-role permission management across buyers, sellers, and platform administrators.',
      architectureOverview: 'Built a high-performance Python FastAPI service with asynchronous request pipelines and JWT Role-Based Access Control (RBAC). Integrated a machine learning price estimation engine that evaluates property location, asset age, and market trends to output accurate valuation ranges. Implemented high-resolution media galleries and virtual tour ingestion.',
      keyFeatures: [
        'Role-Based Access Control (RBAC) supporting Admin, Verified Agent, and User scopes.',
        'Dual-methodology asset verification workflow ensuring listing authenticity.',
        'Real-time KPI dashboard powered by interactive Chart.js visualizations.',
        'AI-driven price estimation algorithm for real estate and commercial vehicles.'
      ],
      technicalAchievements: [
        'Asynchronous Python endpoints handling high-throughput listing queries.',
        'Interactive Chart.js integration for real-time market trends and sales telemetry.',
        'Custom glassmorphism UI components designed for high legibility and aesthetic elegance.'
      ],
      metrics: [
        { label: 'API Response', value: '< 80ms' },
        { label: 'Analytics Refresh', value: 'Real-Time' },
        { label: 'Security Standard', value: 'JWT + RBAC' }
      ]
    }
  },
  {
    id: 'stock-market-predictor',
    title: 'Stock Market Trend Prediction System',
    category: 'AI & ML',
    subtitle: 'Deep learning & machine learning benchmarked forecasting engine',
    description: 'Comprehensive research project comparing 11 algorithms (9 ML and 2 Deep Learning models) on 10 years of historical stock market datasets.',
    image: '/assets/project-stock.jpg',
    githubUrl: 'https://github.com/satyachandra722/stock-market-prediction',
    featured: true,
    tags: ['Machine Learning', 'Deep Learning', 'LSTM', 'Time Series'],
    techStack: ['Python', 'TensorFlow', 'Keras', 'Scikit-learn', 'Tkinter', 'Pandas', 'NumPy'],
    fullCaseStudy: {
      problemStatement: 'Predicting financial market trends is notorious for high noise and non-linear volatility. Traditional statistical models often lag during abrupt market shifts or overfit to noisy technical indicators.',
      architectureOverview: 'Engineered a desktop GUI application using Tkinter that ingests 10+ years of historical stock data. Built a pipeline comparing 9 classical ML algorithms (SVM, Random Forest, Gradient Boosting, XGBoost, Decision Trees, KNN, Logistic Regression, Naive Bayes, AdaBoost) and 2 Deep Learning architectures (LSTM, ANN). Evaluated dual methodology: continuous price forecasting (RMSE/MAE) and binary directional classification (Accuracy/F-Score).',
      keyFeatures: [
        '11-Algorithm benchmarking suite running on historical market data feeds.',
        'Dual methodology engine: continuous price regression and trend direction classification.',
        'Identified Long Short-Term Memory (LSTM) network as top-performer with highest F-Score.',
        'Interactive desktop dashboard displaying real-time model accuracy comparisons and loss curves.'
      ],
      technicalAchievements: [
        'Implemented feature engineering pipeline with Moving Averages, RSI, and MACD indicators.',
        'Achieved superior trend prediction accuracy using stacked LSTM hidden layers.',
        'Modular architecture allowing seamless integration of live Yahoo Finance API streams.'
      ],
      metrics: [
        { label: 'Historical Data', value: '10 Years' },
        { label: 'Models Compared', value: '11 Algorithms' },
        { label: 'Top Model', value: 'LSTM (Best F-Score)' }
      ]
    }
  }
];
