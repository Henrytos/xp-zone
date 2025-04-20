import { Footer } from '@/components/footer';
import { GamersSection } from '@/components/gamers-section';
import { CardZoneSection } from '@/components/card-zone-section';
import { HomeStart } from '@/components/sections/home-start';
import { FunctionsApplicationSection } from '@/components/functions-application-section';
import { ExperienceInApplicationSection } from '@/components/experience-in-application-section';
import { KnowTheApplicationSection } from '@/components/know-the-application';

export default function HomePage() {
  return (
    <main className="min-h-screen h-auto w-full bg-primary flex flex-col items-center">
      <HomeStart />
      <section className="relative z-0">
        <KnowTheApplicationSection />
        <span className="w-full min-h-screen bg-home-second absolute top-0  translate-y-1/2 ">
          <div className="bg-shadow-bottom"></div>
          <div className="bg-shadow-top"></div>
        </span>
        <ExperienceInApplicationSection />
      </section>

      <FunctionsApplicationSection />
      <div className="relative z-0">
        <GamersSection />
        <span className="w-full min-h-screen bg-home-three absolute top-0  translate-y-2/3 ">
          <div className="bg-shadow-bottom"></div>
          <div className="bg-shadow-top"></div>
        </span>
        <CardZoneSection />
      </div>
      <Footer />
    </main>
  );
}
