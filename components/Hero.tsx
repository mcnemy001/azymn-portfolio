import { MagicButton } from './ui/MagicButton';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { FaWandMagicSparkles } from 'react-icons/fa6';

export const Hero = () => {
  return (
    <div className="pb-20 pt-36" id="about">
      <div>
        {/* Spotlight */}
        <Spotlight
          className="-top-40 -left-10 md:left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Background Pattern Overlay */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>

      {/* Text Content */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[80vw] md:max-w-2xl lg:max-w-[60vw] flex-col items-center justify-center">
          <h2 className="text-center uppercase tracking-widest text-xs text-blue-100">
            ELEVATING IDEAS THROUGH INTERFACE DESIGN
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Bringing Bold Visions to Pixel-Perfect Life"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            I design and build interfaces that not only look good, but feel
            right to use. Focused on clarity, speed, and great user experiences
            — one pixel at a time.
          </p>

          <div className="flex justify-center mt-6">
            <a href="#about">
              <MagicButton
                title="See What I’ve Built"
                icon={<FaWandMagicSparkles />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
