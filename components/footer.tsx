import Image from "next/image";
import { Title } from "./title";
import { Text } from "./text";
import { ChevronDown } from "lucide-react";
import { Button } from "./button";

export function Footer() {
  return (
    <>
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
    </>
  );
}
