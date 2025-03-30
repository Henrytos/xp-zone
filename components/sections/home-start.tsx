import { CarrouselVideoGamesPlatforms } from "../carrousel-video-game-platforms";
import { Header } from "../header";
import { SearchGameForm } from "../search-game-form";
import { Title } from "../title";

export function HomeStart() {
  return (
    <>
      <div className="w-full h-screen bg-home-start bg-shadow-left bg-shadow-bottom">
        <section className="w-full h-full z-10 absolute ">
          <Header />
          <div className="mt-20 max-w-[80%] mx-auto flex flex-col gap-20">
            <div className="w-1/2">
              <Title font="orbitron"> {">>"} Compre</Title>
              <Title color="gradient" font="orbitron">
                Os melhores artigos gamers na sua cidade!
              </Title>
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
    </>
  );
}
