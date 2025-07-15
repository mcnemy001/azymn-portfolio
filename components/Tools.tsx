import React from 'react';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import { tools } from '@/data';

export const Tools = () => {
  return (
    <section id="tools" className="">
      <div className="mt-20 mb-20">
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>
      
      <h1 className="heading">
        The tools and tech I<span className="text-cyan-500"> work with</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10 mt-20">
        <div className="h-[25vh] md:h-[15rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards items={tools} direction="right" speed="slow" />
        </div>
      </div>
    </section>
  );
};
