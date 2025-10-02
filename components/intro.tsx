'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { GoLinkExternal } from 'react-icons/go';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);

  return (
    <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1520763185298-1b434c919102?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
              alt="Portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Ayşenur</span>. I'm a{' '}
        <span className="font-bold">Frontend Developer</span>. I build modern interfaces with{' '}
        <span className="underline">JavaScript, React & TypeScript</span>, and I'm also exploring{' '}
        <span className="font-bold">Web3 development</span> to create decentralized user experiences.
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          href="https://linktr.ee/aysenuraydin7"
          className="group flex items-center gap-2 py-3 text-white transition bg-gray-900 rounded-full outline-none px-7 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
        >
          Reach to me here
          <BsArrowRight className="transition opacity-70 group-hover:translate-x-1" />
          <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill={'currentColor'} viewBox="0 0 24 24">
            <path d="M18.77 5.42 16.83 3.45 13.47 6.87 13.47 2 10.57 2 10.57 6.87 7.21 3.45 5.27 5.42 8.81 8.77 3.86 8.77 3.82 8.77 3.82 11.51 8.79 11.51 5.25 14.92 7.19 16.87 12 12.04 16.81 16.85 18.75 14.92 15.21 11.51 20.18 11.51 20.18 8.75 15.23 8.75 18.77 5.42z"></path>
            <path d="M10.59 15.46H13.49V22H10.59z"></path>
          </svg>
        </a>

        <a
          href="https://flowcv.com/resume/n0d7a5ot34"
          className="group flex items-center gap-2 py-3 transition bg-white rounded-full outline-none cursor-pointer px-7 focus:scale-110 hover:scale-110 active:scale-105 borderBlack dark:bg-white/10"
          download
        >
          View my CV{' '}
          <GoLinkExternal className="transition opacity-60 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>

        <a
          href="https://www.linkedin.com/in/aysenuraydin16/"
          target="_blank"
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/aysenur-aydin"
          target="_blank"
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <FaGithubSquare />
        </a>
        {/* <a
          href="https://linktr.ee/aysenuraydin7"
          target="_blank"
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill={'currentColor'} viewBox="0 0 24 24">
            <path d="M18.77 5.42 16.83 3.45 13.47 6.87 13.47 2 10.57 2 10.57 6.87 7.21 3.45 5.27 5.42 8.81 8.77 3.86 8.77 3.82 8.77 3.82 11.51 8.79 11.51 5.25 14.92 7.19 16.87 12 12.04 16.81 16.85 18.75 14.92 15.21 11.51 20.18 11.51 20.18 8.75 15.23 8.75 18.77 5.42z"></path>
            <path d="M10.59 15.46H13.49V22H10.59z"></path>
          </svg>
        </a> */}
      </motion.div>
    </section>
  );
}
