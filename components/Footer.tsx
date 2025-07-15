'use client';

import React from 'react';
import { MagicButton } from './ui/MagicButton';
import { FaLocationArrow, FaArrowUp, FaDownload } from 'react-icons/fa';
import { socialMedia } from '@/data';
import { LanyardComponent } from './ui/Lanyard';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="w-full px-6 pt-10 pb-10 md:pt-10 md:pb-10 bg-transparent relative"
      id="contact"
    >
      <div className="mt-20 mb-20">
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* CTA Section */}
          <div className="flex flex-col items-start space-y-4">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                Let&apos;s build something{' '}
                <span className="text-cyan-500">great</span> together.
              </h2>

              <p className="text-base text-white/70 max-w-lg leading-relaxed">
                Whether you have an idea or just want to say hi, feel free to
                reach out — I&apos;m open to meaningful collaboration and interesting
                side-projects.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
              <a href="mailto:aziyusman18@gmail.com">
                <MagicButton
                  title="Say Hello"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
              <a href="/Aziyusman-CV.pdf" download>
                <MagicButton
                  title="Download CV"
                  icon={<FaDownload />}
                  position="right"
                />
              </a>
            </div>

            {/* Quick Contact Info */}
            <div className="space-y-2 pt-4">
              <div className="flex items-center gap-2 text-white/60">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm">Open to new opportunities</span>
              </div>
              <div className="text-sm text-white/50">
                Based in Bandung, Indonesia 🇮🇩
              </div>
            </div>
          </div>

          {/* Lanyard + Social Media Section */}
          <div className="flex flex-col items-center lg:items-end space-y-6">
            <div
              className="w-full max-w-md backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
              style={{
                background: 'rgb(4,7,29)',
                backgroundColor:
                  'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
              }}
            >
              <div className="w-full aspect-square rounded-xl overflow-hidden mb-4">
                <LanyardComponent position={[0, 0, 20]} gravity={[0, -40, 0]} />
              </div>

              {/* Social Media Links */}
              <div className="flex items-center justify-center gap-3">
                {socialMedia.map(info => (
                  <a
                    key={info.id}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-200 bg-white/5 hover:bg-cyan-400/10 hover:scale-105 group"
                  >
                    <img
                      src={info.img}
                      alt={`${info.id} icon`}
                      className="w-4 h-4 group-hover:scale-110 transition-transform duration-200"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-20 mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-white/60">
              &copy; {new Date().getFullYear()} Aziyusman. All rights reserved.
            </p>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 text-sm text-white/60 hover:text-white transition-all duration-200 hover:bg-white/5 rounded-lg border border-transparent hover:border-white/10"
          >
            <span>Back to top</span>
            <FaArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </footer>
  );
};