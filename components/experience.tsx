'use client';

import React, { useContext } from 'react';
import SectionHeading from './section-heading';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useTheme } from '@/context/theme-context';

export default function Experience() {
  const { ref } = useSectionInView('Experience');
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === 'light' ? '#f3f4f6' : 'rgba(255,255,255,0.05)',
                boxShadow: 'none',
                border: '1px solid rgba(0,0,0,0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight:
                  theme === 'light'
                    ? '0.4rem solid #9ca3af'
                    : '0.4rem solid rgba(255,255,255,0.5)',
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === 'light' ? 'white' : 'rgba(255,255,255,0.15)',
                fontSize: '1.5rem',
              }}
            >
              <h2 className="dark:text-gray-50/[0.9] font-semibold capitalize">
                {item.title}
              </h2>
              <div className="flex justify-between">
                {item.companyLink ? (
                  <a
                    href={item.companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="font-semibold capitalize !mt-0 text-blue-600 dark:text-blue-400 hover:underline">
                      {item.companyName}
                    </p>
                  </a>
                ) : (
                  <p className="font-semibold capitalize !mt-0">
                    {(item as any).companyName}
                  </p>
                )}

                <p className="font-normal !mt-0">{item.location}</p>
              </div>
              {item.detail && (
                <p className="!mt-1 !font-semibold !text-sm text-gray-700 dark:text-white/75">
                  {item.detail}
                </p>
              )}
              <p className="!mt-2 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
              {item.portfolioLink && (
                <a
                  href={item.portfolioLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block lg:inline-block text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Project Screenshots
                </a>
              )}
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
