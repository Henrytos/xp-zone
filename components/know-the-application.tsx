import Image from "next/image";
import { Title } from "./title";
import { Text } from "./text";
import { Button } from "./button";

export function KnowTheApplicationSection() {
  return (
    <>
      <section className=" grid grid-cols-10 place-items-center w-full mt-20 max-w-[80%] z-50  m-auto">
        <Image
          src="/images/characters/character-kratos.png"
          alt="character-kratos"
          quality={100}
          width={674}
          height={1028}
          className="col-span-4 object-cover z-50 "
        />

        <div className="col-span-6  flex flex-col justify-center gap-12 items-start z-50 ">
          <Title color="gradient" font="orbitron" size="h2">
            Conheça a XP Zone
          </Title>
          <Text color="purple" size="2xl">
            Aqui você encontra jogadores da sua cidade em uma <br />
            comunidade segura{" "}
            <span className="font-bold">
              para você trocar, comprar ou <br />
              vender seus artigos gamers
            </span>
            , além disso, você terá a<br />
            possibilidade de se conectar com amigos e montar a <br />
            suaprópria comunidade.
          </Text>
          <div className="space-y-8">
            <Text
              className="flex items-center justify-start gap-6"
              size="2xl"
              color="purple"
            >
              <Image
                src="/check-icon.png"
                alt="logo check"
                width={24}
                height={24}
                quality={100}
              />
              Compre jogos novos e usados;
            </Text>
            <Text
              className="flex items-center justify-start gap-6"
              size="2xl"
              color="purple"
            >
              <Image
                src="/check-icon.png"
                alt="logo check"
                width={24}
                height={24}
                quality={100}
              />
              Troque seus jogos por outros;{" "}
            </Text>
            <Text
              className="flex items-center justify-start gap-6"
              size="2xl"
              color="purple"
            >
              <Image
                src="/check-icon.png"
                alt="logo check"
                width={24}
                height={24}
                quality={100}
              />
              Venda seus artigos gamers;
            </Text>
            <Text
              className="flex items-center justify-start gap-6"
              size="2xl"
              color="purple"
            >
              <Image
                src="/check-icon.png"
                alt="logo check"
                width={24}
                height={24}
                quality={100}
              />
              Ganhe XP a cada interação.
            </Text>
          </div>
          <Button.Root>Anunciar grátis</Button.Root>
        </div>
      </section>
    </>
  );
}
