import { CarrouselVideoGamesPlatforms } from "../carrousel-video-game-platforms";
import { Header } from "../header";
import { SearchGameForm } from "../search-game-form";
import { Text } from "../text";
import { Title } from "../title";

export function HomeStart() {
  return (
    <>
      <div className="w-full h-screen bg-home-start bg-shadow-left bg-shadow-bottom">
        <section className="w-full h-full z-10 absolute ">
          <Header />
          <div className="mt-20 max-w-[80%] mx-auto space-y-20">
            <div>
              <Title font="orbitron"> {">>"} Compre</Title>
              <Title color="gradient" font="orbitron">
                Os melhores artigos gamers
                <br />
                na sua cidade!
              </Title>
            </div>

            <Text color="purple" size="2xl" weight="bold">
              Nunca foi tão fácil conseguir aquele jogo ou <br /> console tão
              sonhado com a XP Zone.
            </Text>
            <SearchGameForm />
          </div>
          <CarrouselVideoGamesPlatforms />
        </section>
      </div>
    </>
  );
}
