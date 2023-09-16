import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { LuGraduationCap } from 'react-icons/lu';
import myPortfolio from '@/public/my-portfolio-project.png';
import dashboardPageImg from '@/public/pendc_dashboard.png';
import movieWatchlistImg from '@/public/movie-watchlist.png';
import colorSchemeGeneratorImg from '@/public/color-scheme-generator.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Design & Project Engineer',
    location: 'Bursa, Türkiye',
    companyName: 'Fabricon',
    description:
      'Utilized AutoCAD to design architectural projects, ensuring they met all relevant regulations and standards. Managed projects from start to finish, including overseeing the design, construction, and commissioning stages.',
    icon: React.createElement(CgWorkAlt),
    date: '2021-2022',
  },
  {
    title: '(BSc) Energy Systems Engineering',
    location: 'Yalova, Türkiye',
    companyName: 'Yalova University',
    description: ' GPA : 3,09/4 (Honours Degree)',
    icon: React.createElement(LuGraduationCap),
    date: '2021',
  },
  {
    title: 'Mechanical Engineering',
    location: 'Opole, Poland',
    companyName: 'Opole University of Technology',
    description: 'Erasmus+ Student Exchange Program',
    icon: React.createElement(LuGraduationCap),
    date: '2018-19',
  },
] as const;

export const projectsData = [
  {
    title: 'My Portfolio',
    description: 'I build my portfolio website.',
    tags: [
      'Next.js',
      'TypeScript',
      'React',
      'TailwindCss',
      'react-dom',
      'react-hot-toast',
      'react-icons',
      'react-email & resend',
      'clsx',
      'framer-motion',
      'context API',
    ],
    imageUrl: myPortfolio,
    projectUrl: 'https://aysenuraydin-portfolio.vercel.app/',
  },
  {
    title: 'PenDC Task',
    description:
      'I completed a task for PenDC that required me to code a login and dashboard page adhering to Figma design.',
    tags: [
      'React',
      'react-dom',
      'react-router-dom',
      'react-icons',
      'Bootstrap',
    ],
    imageUrl: dashboardPageImg,
    projectUrl: 'https://pendc-task-six.vercel.app/',
  },
  {
    title: 'Movie Watchlist',
    description:
      'I developed a web page that enables users to search for movies and TV series by name and add them to a watchlist. This project is a part of the Scrimba Front-End Developer course.',
    tags: ['API', 'JavaScript', 'HTML', 'CSS'],
    imageUrl: movieWatchlistImg,
    projectUrl: 'https://aysenur-aydin.github.io/Movie-Watchlist/',
  },
  {
    title: 'Color Scheme Generator',
    description:
      'This page allows users to create color schemes by selecting a starting color, and generates complementary, analogous, triadic, and other schemes.',
    tags: ['API', 'JavaScript', 'HTML', 'CSS'],
    imageUrl: colorSchemeGeneratorImg,
    projectUrl: 'https://aysenur-aydin.github.io/Color-Scheme-Generator/',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Tailwind',
  'Bootstrap',
  'Sass',
  'Git',
  'GitHub',
  'Vercel',
  'API',
  'UI/UX',
  'Figma',
  'Trello',
] as const;
