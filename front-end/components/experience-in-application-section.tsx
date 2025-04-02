'use client';
import Image from 'next/image';
import { Text } from './text';
import { Title } from './title';
import { motion } from 'framer-motion';

export function ExperienceInApplicationSection() {
  return (
    <>
      <section className=" grid grid-cols-10 place-items-center w-full mt-20 max-w-[100%] min-h-screen z-50 m-auto">
        <div className="col-span-5 pl-[20%] space-y-16 z-50">
          <Title color="gradient" font="orbitron" size="h2">
            Ganhe XP e cresça <br /> na comunidade
          </Title>
          <Text size="2xl" color="purple">
            <span className="font-bold">A cada troca, compra ou venda</span>,
            você acumula XP e com eles você é rankeado na sua cidade tornando-se
            um membro mais confiável para toda a comunidade e recebendo
            benefícios exclusivos.
          </Text>

          <div className="bg-[#2B0B5D] w-full flex flex-col gap-4 py-14 px-24 rounded-lg">
            <div className="flex items-center justify-center gap-1">
              <Title color="gradient" size="h2">
                Você ganhou{' '}
              </Title>
              <Title color="white" size="h2">
                100 XP!
              </Title>
            </div>
            <div className="w-full h-3 rounded-full relative bg-secondary-white ">
              <span className="w-2/3 bg-radiant-linear h-3 absolute rounded-l-full ">
                <motion.span
                  animate={{
                    x: ['50%', '52%', '51%', '50%'],
                    y: ['-20px', '-22px', '-18px', '-20px'],
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut',
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
    </>
  );
}
