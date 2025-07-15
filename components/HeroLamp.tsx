'use client';
import React from 'react';
import { motion } from 'framer-motion'; // Lebih umum menggunakan framer-motion
import { LampContainer } from '../components/ui/Lamp';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { MagicButton } from './ui/MagicButton';
import { FaWandMagicSparkles } from 'react-icons/fa6';

export function LampDemo() {
  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="relative z-10 flex flex-col items-center justify-center px-4"
      >
        <h2 className="uppercase tracking-widest text-xs text-blue-100 max-w-prose text-center">
          ELEVATING IDEAS THROUGH INTERFACE DESIGN
        </h2>


        <TextGenerateEffect
          className="text-center text-[40px] md:text-5xl lg:text-6xl"
          words="Bringing Bold Visions to Pixel-Perfect Life"
        />

        <p className="mt-4 md:tracking-wider text-sm md:text-lg lg:text-2xl max-w-prose text-center">
          I design and build interfaces that not only look good, but feel right
          to use. Focused on clarity, speed, and great user experiences — one
          pixel at a time.
        </p>

        <a href="#projects" className="mt-10">
          <MagicButton
            title="See What I’ve Built"
            icon={<FaWandMagicSparkles />}
            position="right"
          />
        </a>
      </motion.div>
    </LampContainer>
  );
}
