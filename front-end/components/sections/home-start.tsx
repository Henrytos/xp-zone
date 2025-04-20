import { CarrouselVideoGamesPlatforms } from '../carrousel-video-game-platforms';
import { Header } from '../header';
import { SearchGameForm } from '../search-game-form';
import { Text } from '../text';
import { Title } from '../title';

export function HomeStart() {
  return (
    <>
      <div className="w-full h-screen bg-home-start">
        <span className="w-full min-h-screen bg-home-three absolute top-0   ">
          <div className="bg-shadow-bottom"></div>
          <div className="bg-shadow-left"></div>
          <div className="bg-shadow-top"></div>
        </span>
        <section className="w-full h-full z-50 absolute ">
          <Header />
          <div className="mt-20 max-w-[80%] mx-auto space-y-20 z-50">
            <div className="z-50">
              <Title font="orbitron"> {'>>'} Compre</Title>
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
