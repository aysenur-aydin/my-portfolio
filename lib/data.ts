import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
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
    title: 'Graduated bootcamp',
    location: 'Miami, FL',
    description:
      'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
    icon: React.createElement(LuGraduationCap),
    date: '2019',
  },
  {
    title: 'Front-End Developer',
    location: 'Orlando, FL',
    description:
      'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
    icon: React.createElement(CgWorkAlt),
    date: '2019 - 2021',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Houston, TX',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2021 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'PenDC Task',
    description:
      'I completed a task for a job interview that required me to code a login and dashboard page adhering to Figma design.',
    tags: [
      'React',
      'react-dom',
      'react-router-dom',
      'react-icons',
      'Bootstrap',
    ],
    imageUrl: dashboardPageImg,
  },
  {
    title: 'Color Scheme Generator',
    description:
      'This page allows users to create color schemes by selecting a starting color, and generates complementary, analogous, triadic, and other schemes.',
    tags: ['API', 'JavaScript', 'HTML', 'CSS'],
    imageUrl: colorSchemeGeneratorImg,
  },
  {
    title: 'Movie Watchlist',
    description:
      'I developed a web page that enables users to search for movies and TV series by name and add them to a watchlist. This project is a part of the Scrimba Front-End Developer course.',
    tags: ['API', 'JavaScript', 'HTML', 'CSS'],
    imageUrl: movieWatchlistImg,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'Redux',
  'GraphQL',
  'Apollo',
  'Express',
  'PostgreSQL',
  'Python',
  'Django',
  'Framer Motion',
] as const;
