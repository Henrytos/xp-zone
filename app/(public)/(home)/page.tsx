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
      <section className="w-[80%]  m-auto flex flex-col gap-24 justify-center items-center">
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
      <section className="w-[80%] min-h-screen pb-20 m-auto  flex flex-col items-center ">
        <div className="flex flex-col items-center w-full ">
          <Title
            color="gradient"
            size="h2"
            className="translate-y-20 text-center"
          >
            Faça novos amigos
          </Title>
          <Title color="gradient" className="text-[225px] text-center">
            GAMERS
          </Title>
        </div>

        <div className="grid grid-cols-4  gap-x-3 gap-y-6 w-full relative ">
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
            className="absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2"
          >
            <Image
              width={303}
              height={327}
              className="object-contain "
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

        <Button.Root className=" col-start-2 m-auto mt-20">
          Entrar para a comunidade XP Zone
        </Button.Root>
      </section>
    </main>
  );
}
