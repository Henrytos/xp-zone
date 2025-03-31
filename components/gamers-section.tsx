"use client";
import { motion } from "framer-motion";
import { Title } from "./title";
import Image from "next/image";
import { Button } from "./button";

export function GamersSection() {
  return (
    <>
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
    </>
  );
}
