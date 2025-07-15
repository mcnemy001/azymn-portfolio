import { GlowingEffectDemoSecond } from '@/components/BentoGlowing';
import { RecentProject } from '@/components/RecentProject';
import { FloatingNav } from '@/components/ui/FloatingNav';
import { navItems } from '@/data';
import { LampDemo } from '@/components/HeroLamp';
import { Footer } from '@/components/Footer';
import { AboutMe } from '@/components/AboutMe';
import { Tools } from '@/components/Tools';
import { TimelineDemo } from '@/components/TimelineWork';

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav className="" navItems={navItems} />
        <div className="-mx-5 sm:-mx-10 w-[calc(100%+40px)] sm:w-[calc(100%+80px)]">
          <LampDemo />
        </div>

        <AboutMe/>
        <GlowingEffectDemoSecond />
        <RecentProject />
        <Tools />
        {TimelineDemo()}
        <Footer />
      </div>
    </main>
  );
}
