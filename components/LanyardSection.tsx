import React from 'react';
import { LanyardComponent } from './ui/Lanyard';

export const LanyardSection = () => {
  return (
    <section className="py-5">
      <h1 className="heading">
        My <span className="text-cyan-500">Lanyard</span>
      </h1>
      <LanyardComponent position={[0, 0, 20]} gravity={[0, -40, 0]} />
    </section>
  );
};
