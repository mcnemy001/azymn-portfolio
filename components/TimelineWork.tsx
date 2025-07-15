import React from 'react';
import { Timeline } from '@/components/ui/Timeline';

export function TimelineDemo() {
  const data = [
    {
      title: 'Oct 2024 – December 2024',
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            <strong>Freelance Web Developer</strong> at LEAD English Online –
            Bandung. Designed and developed landing pages and online course
            sales pages using WordPress, WooCommerce, and Xendit. Focused on
            responsive layouts and seamless user experience for language
            learners.
          </p>
        </div>
      ),
    },
    {
      title: 'Jan 2025 – July 2025',
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            <strong>Web Developer (Fulltime)</strong> at LEAD English Online
            – Bandung. Customized UI and functionality using HTML, CSS,
            JavaScript, and plugin integrations. Managed hosting, performance
            optimization, and tech troubleshooting.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Built an online TOEFL/TOEIC/IELTS exam system using LearnDash,
            extended with PHP & JS, tailored for BPI School’s Language Lab.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip" id='timeline'>
      <div className="mt-20 mb-20">
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      <h1 className="heading">
        Highlights from my{' '}
        <span className="text-cyan-500">development journey</span>
      </h1>
      <Timeline data={data} />
    </div>
  );
}
