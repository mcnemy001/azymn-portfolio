import React from 'react';
import { projects } from '@/data';
import { PinContainer } from './ui/3d-pin';

export const RecentProject = () => {
  return (
    <div className="py-10">
      {/* Divider */}
      <div className="mt-20 mb-20">
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      <h1 className="heading" id="projects">
        Some highlights from my {''}
        <span className="text-cyan-500">latest projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, role }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={title.split(' ')[0]} href={title}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden rounded-xl bg-[#13162d]">
                  {/* <img src="/bg.png" alt="bg-img" /> */}
                  <img
                    src={img}
                    alt={title}
                    className="z-10 absolute w-full h-full object-cover"
                  />
                </div>
              </div>
              <h1 className="lg:text-2xl md:text-xl text-base line-clamp-1 font-bold">
                {title}
              </h1>
              <p className="text-sm font-light text-cyan-400 mt-2">{role}</p>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-white/60">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border-white/[0.2] rounded-full bg-slate-900 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <img src={icon} alt={title} className="p-2" />
                    </div>
                  ))}
                </div>
                {/* <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-cyan-500">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#06b6d4" />
                </div> */}
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};
