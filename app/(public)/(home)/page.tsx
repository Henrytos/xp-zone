"use client";
import { Button } from "@/components/button";
import { HomeStart } from "@/components/sections/home-start";
import { Text } from "@/components/text";
import { Title } from "@/components/title";
import { Form, FormField, FormItem } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";

const selectCitySchema = z.object({
  city: z
    .enum(["São Paulo", "Rio de Janeiro", "Santa catarina"])
    .default("São Paulo"),
});
type SelectCitySchema = z.infer<typeof selectCitySchema>;

export default function HomePage() {
  const form = useForm<SelectCitySchema>({
    resolver: zodResolver(selectCitySchema),
    mode: "onChange",
  });

  const handleSubmitSearchGameForm = (data: SelectCitySchema) => {
    console.log(data);
  };

  return (
    <main className="min-h-screen h-auto w-full bg-primary flex flex-col items-center">
      <HomeStart />
      <section className="relative z-0">
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
        <span className="w-full min-h-screen bg-home-second absolute top-0  translate-y-1/2 ">
          <div className="bg-shadow-bottom"></div>
          <div className="bg-shadow-top"></div>
        </span>
        <section className=" grid grid-cols-10 place-items-center w-full mt-20 max-w-[100%] min-h-screen z-50 m-auto">
          <div className="col-span-5 pl-[20%] space-y-16 z-50">
            <Title color="gradient" font="orbitron" size="h2">
              Ganhe XP e cresça <br /> na comunidade
            </Title>
            <Text size="2xl" color="purple">
              <span className="font-bold">A cada troca, compra ou venda</span>,
              você acumula XP e com eles você é rankeado na sua cidade
              tornando-se um membro mais confiável para toda a comunidade e
              recebendo benefícios exclusivos.
            </Text>

            <div className="bg-[#2B0B5D] w-full flex flex-col gap-4 py-14 px-24 rounded-lg">
              <div className="flex items-center justify-center gap-1">
                <Title color="gradient" size="h2">
                  Você ganhou{" "}
                </Title>
                <Title color="white" size="h2">
                  100 XP!
                </Title>
              </div>
              <div className="w-full h-3 rounded-full relative bg-secondary-white ">
                <span className="w-2/3 bg-radiant-linear h-3 absolute rounded-l-full ">
                  <motion.span
                    animate={{
                      x: ["50%", "52%", "51%", "50%"],
                      y: ["-20px", "-22px", "-18px", "-20px"],
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                    className="absolute right-0 top-0 "
                  >
                    <Image
                      width={85}
                      height={56}
                      className="object-contain w-full h-full  "
                      src="/images/effects/fire.png"
                      alt="fire effects"
                    />
                  </motion.span>
                </span>
              </div>
            </div>
          </div>
          <Image
            width={980}
            height={980}
            className="col-span-5  w-full h-auto object-cover z-50"
            alt="character-miles-morales"
            src="/images/characters/character-miles-morales.png"
          />
        </section>
      </section>
      <section className="w-[80%] m-auto flex flex-col gap-24 justify-center items-center">
        <Title color="gradient" size="h2">
          Como funciona
        </Title>
        <div className="w-full grid grid-cols-5 gap-16">
          <div className="space-y-10 flex flex-col justify-center items-center">
            <div className="w-48 h-48 rounded-full bg-secondary flex justify-center items-center">
              <Image
                width={62}
                height={62}
                alt="icone de busca"
                src="/images/icons/search-icon.png"
                className="object-contain"
              />
            </div>
            <Text color="white" size="2xl" className="text-center">
              Pesquise o artigo que deseja
            </Text>
          </div>
          <div className="space-y-10 flex flex-col justify-center items-center">
            <div className="w-48 h-48 rounded-full bg-secondary flex justify-center items-center">
              <Image
                width={62}
                height={62}
                alt="icone de busca"
                src="/images/icons/list-icon.png"
                className="object-contain"
              />
            </div>
            <Text color="white" size="2xl" className="text-center">
              Filtre por comprar ou trocar
            </Text>
          </div>
          <div className="space-y-10 flex flex-col justify-center items-center">
            <div className="w-48 h-48 rounded-full bg-secondary flex justify-center items-center">
              <Image
                width={62}
                height={62}
                alt="icone de busca"
                src="/images/icons/control-icon.png"
                className="object-contain"
              />
            </div>
            <Text color="white" size="2xl" className="text-center">
              Escolha como pagar ou o item de troca
            </Text>
          </div>
          <div className="space-y-10 flex flex-col justify-center items-center">
            <div className="w-48 h-48 rounded-full bg-secondary flex justify-center items-center">
              <Image
                width={62}
                height={62}
                alt="icone de busca"
                src="/images/icons/pin-icon.png"
                className="object-contain"
              />
            </div>
            <Text color="white" size="2xl" className="text-center">
              Combine a troca ou o tipo de entrega
            </Text>
          </div>
          <div className="space-y-10 flex flex-col justify-center items-center">
            <div className="w-48 h-48 rounded-full bg-secondary flex justify-center items-center">
              <Image
                width={62}
                height={62}
                alt="icone de busca"
                src="/images/icons/fire-icon.png"
                className="object-contain"
              />
            </div>
            <Text color="white" size="2xl" className="text-center">
              Finalize a negociação e ganhe XP
            </Text>
          </div>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmitSearchGameForm)}>
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="w-64 p-2 text-white border-2 rounded">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="text-2xl font-medium">
                      <SelectValue placeholder="Filtre sua cidade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem
                        value="São Paulo"
                        className="text-2xl text-black"
                      >
                        São Paulo
                      </SelectItem>
                      <SelectItem
                        value="Rio de Janeiro"
                        className="text-2xl text-black"
                      >
                        Rio de Janeiro
                      </SelectItem>
                      <SelectItem
                        value="Santa catarina"
                        className="text-2xl text-black"
                      >
                        Santa catarina
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </section>

      <div className="relative z-0">
        <section className="w-[80%] m-auto min-h-screen pb-20  flex flex-col items-center z-50 ">
          <div className="flex flex-col items-center w-full z-50">
            <Title
              color="gradient"
              size="h2"
              className="translate-y-20 text-center z-50"
            >
              Faça novos amigos
            </Title>
            <Title color="gradient" className="text-[225px] text-center z-50">
              GAMERS
            </Title>
          </div>

          <div className="grid grid-cols-4  gap-x-3 gap-y-6 w-full relative z-50">
            <motion.span
              animate={{
                translateY: ["50%", "48%", "50%"],
                translateX: ["-50%"],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeOut",
              }}
              className="absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2 z-50"
            >
              <Image
                width={303}
                height={327}
                className="object-contain z-50 "
                src="/images/characters/character-control.png"
                alt="character control"
                quality={100}
              />
            </motion.span>
            <Image
              width={280}
              height={270}
              className="w-full h-auto object-contain"
              src="/images/persons/person-1.png"
              alt="photo person one"
              quality={100}
            />
            <Image
              width={280}
              height={270}
              className="w-full h-auto object-contain"
              src="/images/persons/person-2.png"
              alt="photo person one"
              quality={100}
            />
            <Image
              width={280}
              height={270}
              className="w-full h-auto object-contain"
              src="/images/persons/person-3.png"
              alt="photo person one"
              quality={100}
            />
            <Image
              width={280}
              height={270}
              className="w-full h-auto object-contain"
              src="/images/persons/person-4.png"
              alt="photo person one"
              quality={100}
            />
            <Image
              width={280}
              height={270}
              className="w-full h-auto object-contain"
              src="/images/persons/person-5.png"
              alt="photo person one"
              quality={100}
            />
            <Image
              width={280}
              height={270}
              className="w-full h-auto object-contain"
              src="/images/persons/person-6.png"
              alt="photo person one"
              quality={100}
            />
            <Image
              width={280}
              height={270}
              className="w-full h-auto object-contain"
              src="/images/persons/person-2.png"
              alt="photo person one"
              quality={100}
            />
            <Image
              width={280}
              height={270}
              className="w-full h-auto object-contain"
              src="/images/persons/person-3.png"
              alt="photo person one"
              quality={100}
            />
            <motion.span
              animate={{
                translateY: ["-50%", "-48%", "-50%"],
                translateX: ["50%"],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeOut",
              }}
              className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2"
            >
              <Image
                width={303}
                height={327}
                className="object-contain  "
                src="/images/characters/character-chat.png"
                alt="character control"
                quality={100}
              />
            </motion.span>
          </div>

          <Button.Root className=" col-start-2 m-auto mt-20 z-50">
            Entrar para a comunidade XP Zone
          </Button.Root>
        </section>

        <span className="w-full min-h-screen bg-home-three absolute top-0  translate-y-2/3 ">
          <div className="bg-shadow-bottom"></div>
          <div className="bg-shadow-top"></div>
        </span>

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
                , com eles é possível comprar seus jogos favoritos na sua cidade
                e receber no conforto da sua casa.
                <br />
                <br />
                Aproveite e compre também nas lojas da XP Zone os melhores
                artigos gamers.
              </Text>
              <Button.Root>Comprar agora</Button.Root>
            </div>
          </div>
        </section>
      </div>

      <footer className="w-full px-[10%]  m-auto py-7 border-t-[5px] border-[#2B0B5D] ">
        <div className="grid grid-cols-11 gap-4  ">
          <div className="col-span-3">
            <Title color="gradient" size="h2">
              Um lugar para jogadores
            </Title>
            <span className="flex gap-5 items-center mt-12">
              <Image
                src="/images/icons/brasil-icon.png"
                alt="icon brazil"
                width={36}
                height={36}
                quality={100}
              />
              <Text color="purple" size="2xl">
                Português do Brasil
              </Text>
              <ChevronDown width={36} height={36} className="text-[#BFB4D0]" />
            </span>
            <div className="flex gap-4 items-center mt-10">
              <Image
                src="/images/icons/yt-icon.png"
                alt="icon youtube"
                width={44.15}
                height={31}
                quality={100}
                className="text-white"
              />

              <Image
                src="/images/icons/insta-icon.png"
                alt="icon instagram"
                width={33.33}
                height={33.33}
                quality={100}
                className="text-white"
              />

              <Image
                src="/images/icons/face-icon.png"
                alt="icon facebook"
                width={30}
                height={30}
                quality={100}
                className="text-white"
              />
              <Image
                src="/images/icons/link-icon.png"
                alt="icon facebook"
                width={30}
                height={30}
                quality={100}
                className="text-white"
              />
            </div>
          </div>
          <div className="col-span-2 space-y-5">
            <Title size="h3" color="white" weight="bold">
              Empresa
            </Title>
            <Text color="white" size="2xl">
              Sobre
            </Text>
            <Text color="white" size="2xl">
              Empregos
            </Text>
            <Text color="white" size="2xl">
              Marca
            </Text>
            <Text color="white" size="2xl">
              Sala de imprensa
            </Text>
          </div>
          <div className="col-span-2 space-y-5">
            <Title size="h3" color="white" weight="bold">
              Recursos
            </Title>
            <Text color="white" size="2xl">
              Suporte
            </Text>
            <Text color="white" size="2xl">
              Segurança
            </Text>
            <Text color="white" size="2xl">
              Blog
            </Text>
            <Text color="white" size="2xl">
              Comunidade{" "}
            </Text>
          </div>
          <div className="col-span-2 space-y-5">
            <Title size="h3" color="white" weight="bold">
              Política
            </Title>
            <Text color="white" size="2xl">
              Termos
            </Text>
            <Text color="white" size="2xl">
              Privacidade
            </Text>
            <Text color="white" size="2xl">
              Cookies
            </Text>
            <Text color="white" size="2xl">
              Moderação{" "}
            </Text>
          </div>
          <div className="col-span-2 space-y-5">
            <Title size="h3" color="white" weight="bold">
              Aplicativo
            </Title>
            <Text color="white" size="2xl">
              Baixe para Android
            </Text>
            <Text color="white" size="2xl">
              Baixe para iOS
            </Text>
          </div>
        </div>
        <div className=" w-full h-3 rounded-full bg-radiant-linear my-14"></div>
        <div className="flex justify-between items-center">
          <Image
            src="/logo/logo-linear-horizontal.png"
            alt="logotipo da xp zone"
            width={92}
            height={108}
            className=" h-full w-auto object-contain cursor-pointer mb-9"
            quality={100}
          />
          <Text size="2xl">
            Desenvolvido por <span className="font-bold">Tamires Nunes</span> e{" "}
            <span className="font-bold">Henry Franz</span>
          </Text>
          <Button.Root>Anunciar grátis</Button.Root>
        </div>
      </footer>
    </main>
  );
}
