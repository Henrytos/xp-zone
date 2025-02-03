import { CarrouselVideoGamesPlatforms } from "@/components/carrousel-video-game-platforms";
import { Header } from "@/components/header/";
export default function HomePage() {



  return (
    <main className="min-h-screen w-full bg-home-start  ">
      <section className="w-full h-full z-10 absolute ">
        <Header />
        <CarrouselVideoGamesPlatforms />
      </section>
    </main>
  );
}
