import Image from "next/image";
import { Title } from "./title";
import { Text } from "./text";
import { Button } from "./button";

export function CardZoneSection() {
  return (
    <>
      <section className="w-[80%] min-h-screen m-auto grid grid-cols-10 content-center items-center gap-20 z-50">
        <div className="col-span-4 z-50">
          <Image
            src="/images/card-sample.png"
            alt="card to character"
            width={507}
            height={694}
            quality={100}
            className="  w-full  object-contain z-50"
          />
        </div>
        <div className=" col-span-6 flex flex-col gap-16 z-50">
          <div>
            <Title color="white" size="h2">
              Card Zone
            </Title>
            <Title color="gradient" size="h2">
              Presentei uma amigo
            </Title>
          </div>

          <div className="space-y-10">
            <Text color="purple" size="2xl">
              Você pode comprar{" "}
              <span className="font-bold">
                Cards Zones para presentear seus amigos
              </span>
              , com eles é possível comprar seus jogos favoritos na sua cidade e
              receber no conforto da sua casa.
              <br />
              <br />
              Aproveite e compre também nas lojas da XP Zone os melhores artigos
              gamers.
            </Text>
            <Button.Root>Comprar agora</Button.Root>
          </div>
        </div>
      </section>
    </>
  );
}
