'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3">
        After graduating in <span className="font-medium">Energy Systems Engineering</span>, I decided to follow my
        passion for programming and became a <span className="font-medium">frontend developer</span>. I enjoy the
        problem-solving side of coding and love the moment when a solution finally works. My main stacks are{' '}
        <span className="font-medium underline"> React, JavaScript, and TypeScript</span>. Lately, I’ve been exploring{' '}
        <span className="font-medium underline">Web3 development</span>, building decentralized applications and gaining
        hands-on experience through hackathons and community projects.
      </p>

      <p>
        <span className="italic">Outside of coding</span>, I enjoy video games, movies, books, and
        <span className="font-medium">learning new things</span> — especially in{' '}
        <span className="font-medium">psychology</span>.
      </p>
    </motion.section>
  );
}
