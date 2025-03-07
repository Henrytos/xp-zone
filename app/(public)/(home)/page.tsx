import { CarrouselVideoGamesPlatforms } from "@/components/carrousel-video-game-platforms";
import { Header } from "@/components/header/index";
import { SearchGameForm } from "@/components/search-game-form";

import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  weight: ["400", "500", "600", "700"],
  variable: "--font-orbitron",
});
export default async function HomePage() {
  return (
    <main className="min-h-screen w-full">
      <div className="w-full h-screen bg-home-start bg-shadow-left bg-shadow-bottom">
        <section className="w-full h-full z-10 absolute ">
          <Header />
          <div className="mt-20 max-w-[80%] mx-auto flex flex-col gap-20">
            <div
              className={`${orbitron.className} w-1/2 text-white font-medium text-5xl/tight`}
            >
              <h1>
                <span className="text-transparent  bg-radiant-linear bg-clip-text">
                  {" "}
                  {">>"}{" "}
                </span>
                Compre
              </h1>
              <h1 className=" text-transparent inline-block bg-radiant-linear bg-clip-text">
                Os melhores artigos gamers na sua cidade!
              </h1>
            </div>

            <div className="w-[35%] text-[#BFB4D0] text-2xl font-semibold">
              Nunca foi tão fácil conseguir aquele jogo ou console tão sonhado
              com a XP Zone.
            </div>
            <SearchGameForm />
          </div>
          <CarrouselVideoGamesPlatforms />
        </section>
      </div>
    </main>
  );
}
