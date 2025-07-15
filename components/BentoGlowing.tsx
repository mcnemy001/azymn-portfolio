"use client";

import { GlowingEffect } from "@/components/ui/GlowingEffect";
import {
  PiTreeStructure,
  PiCodeDuotone,
  PiPaintBrushDuotone,
  PiSparkleDuotone,
  PiStudentDuotone,
} from "react-icons/pi";

export function GlowingEffectDemoSecond() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<PiTreeStructure className="w-5 h-5 text-white/70" />}
        title="Building with clarity"
        description="Clean structure and thoughtful layout are always a priority."
      />

      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<PiCodeDuotone className="w-5 h-5 text-white/70" />}
        title="Code with purpose"
        description="Not everything needs to be fancy, but it should always be intentional."
      />

      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<PiPaintBrushDuotone className="w-5 h-5 text-white/70" />}
        title="Simplicity in design"
        description="I aim to build things that feel intuitive—no extra clicks, no clutter."
      />

      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<PiSparkleDuotone className="w-5 h-5 text-white/70" />}
        title="Curiosity-led workflow"
        description="Much of what I build starts as a ‘what if?’ — then turns into something real."
      />

      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<PiStudentDuotone className="w-5 h-5 text-white/70" />}
        title="Always learning"
        description="Exploring new libraries, patterns, or UI ideas is part of the weekly routine."
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl font-semibold text-balance text-black md:text-2xl dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm text-black md:text-base dark:text-neutral-400">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
