import { CarrouselGame } from "@/components/carrousel-game";
import { FilterGames } from "@/components/filter-games";
import { Header } from "@/components/header";

export default function GamesPage() {
  return (
    <>
      <main className="min-h-screen h-auto w-full bg-primary flex flex-col items-center">
        <section className="w-full bg-game-start min-h-screen ">
          <div className="z-50 absolute top-0 w-full ">
            <Header />
            <FilterGames />
            <CarrouselGame />
          </div>

          <div className="bg-shadow-bottom"></div>
          <div className="bg-shadow-right"></div>
          <div className="bg-shadow-left"></div>
          <div className="bg-shadow-top"></div>
        </section>
      </main>
    </>
  );
}
