"use client";
import Image from "next/image";
import { Button } from "../button";
import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSingUpSchema = z
  .object({
    email: z.string().email("email invali"),
    password: z.string().min(6).max(20),
    repeatPassword: z.string().min(6).max(20),
  })
  .refine((fields) => {
    if (fields.password != fields.repeatPassword) {
      return false;
    }

    return true;
  });

export function Header() {
  const router = useRouter();
  const [openSheetSingIn, setOpenSheetSingIn] = useState<boolean>(false);
  const [openSheetAdvertise, setOpenSheetAdvertise] = useState<boolean>(false);
  const handleCLickInLogo = () => {
    router.push("/");
  };
  const handleCLickSingInButton = () => {
    setOpenSheetSingIn((currentState) => !currentState);
  };
  const handleCLickAdvertiseButton = () => {
    setOpenSheetAdvertise((currentState) => !currentState);
  };

  const { } = useForm({
    resolver: zodResolver(formSingUpSchema),
  });
  return (
    <header className="flex justify-between items-center mt-8 h-28 w-full max-w-[80%] m-auto">
      <Image
        src="/logo/logo-linear-vertical.png"
        alt="logotipo da xp zone"
        width={98}
        height={115.2}
        className=" h-full w-auto object-contain cursor-pointer mb-9"
        quality={100}
        onClick={handleCLickInLogo}
      />
      <div className="space-x-9">

        {/* button sing in */}
        <Button.Root color="secondary" onClick={handleCLickSingInButton}>
          {" "}
          Entrar
        </Button.Root>

        {/* button advertise */}
        <Button.Root color="primary" onClick={handleCLickAdvertiseButton}>
          Anunciar grátis
        </Button.Root>


        {/* sheet  sing in*/}

        <Sheet
          open={openSheetSingIn}
          onOpenChange={handleCLickSingInButton}
          defaultOpen={true}
        >
          <SheetContent >
            <Image
              src="/logo/logo-linear-vertical.png"
              alt="logotipo da xp zone"
              width={110}
              height={120}
              className="w-28 h-32 mx-auto  object-contain cursor-pointer mb-9"
              quality={100}
            />

            <SheetTitle className="text-3xl font-bold text-center mb-5">
              Já possui uma conta?
            </SheetTitle>
            <h3 className="text-xl font-normal text-white text-center mb-9">
              Faça seu login e acesse o sistema
            </h3>

            <Button.Root color="tertiary" className="w-full mb-5">
              <Button.Icon>
                <Image
                  src="/logo/gogle-icon.png"
                  alt="logotipo da xp zone"
                  width={30}
                  height={30}
                  className=" h-full w-auto object-contain cursor-pointer inline mr-2"
                  quality={100}
                />
              </Button.Icon>
              Entrar com o Google
            </Button.Root>

            <Button.Root className="bg-secondary-white w-full mb-9">
              <Button.Icon>
                <Image
                  src="/logo/facebook-icon.png"
                  alt="logotipo da xp zone"
                  width={30}
                  height={30}
                  className=" h-full w-auto object-contain cursor-pointer inline mr-2"
                  quality={100}
                />
              </Button.Icon>
              Entrar com o facebook
            </Button.Root>

            <h3 className="text-xl font-normal text-white text-center mb-9">
              Ou inscreva-se com seu email
            </h3>

            <form className="grid grid-cols-2 ">
              <div className="col-span-2 space-y-2">
                <label htmlFor="" className="text-white text-sm font-normal">
                  Digite seu email
                </label>
                <input type="email" className="w-full px-3 py-[12.5px] text-white/80 placeholder-white/40 bg-primary border-primary-foreground border-[3px] rounded-md placeholder-white text-xl focus:outline-none" placeholder="Digite seu email" />
              </div>

              <div className="col-span-2 grid grid-cols-2 gap-3 mb-5">
                <div className="col-span-1 space-y-2">
                  <label htmlFor="" className="text-white text-sm font-normal">
                    Digite seu email
                  </label>
                  <input type="email" className="w-full px-3 py-[12.5px] text-white/80 placeholder-white/40 bg-primary border-primary-foreground border-[3px] rounded-md placeholder-white text-xl focus:outline-none" placeholder="Digite seu email" />
                </div>
                <div className="col-span-1 space-y-2">
                  <label htmlFor="" className="text-white text-sm font-normal">
                    Digite seu email
                  </label>
                  <input type="email" className="w-full px-3 py-[12.5px] text-white/80 placeholder-white/40 bg-primary border-primary-foreground border-[3px] rounded-md placeholder-white text-xl focus:outline-none" placeholder="Digite seu email" />
                </div>
              </div>

              <div className=" col-span-2 flex justify-between items-center mb-5">
                <div className="flex gap-1.5" >
                  <input type="checkbox" name="" id="" className="appearance-none p-0 m-0 w-7 h-7  rounded-lg bg-gradient-to-r from-[#fe9652] to-[#e54a64] relative before:w-[24px] before:h-[24px] before:bg-secondary before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-lg scale-90" />
                  <label htmlFor="" className="font-light text-sm text-white py-auto translate-y-1" >Lembrar minha senha</label>
                </div>

                <span className="font-light text-sm text-secondary-white cursor-pointer hover:underline transition-all ">
                  esqueci minha senha
                </span>
              </div>

              <div className="w-full col-span-2 grid grid-cols-2 gap-5">
                <Button.Root color="secondary" className="col-span-1">
                  Acessar
                </Button.Root>
                <Button.Root color="primary" className="col-span-1">
                  Criar conta
                </Button.Root>
              </div>
            </form>

          </SheetContent>
        </Sheet>

        {/* sheet  advertise*/}
        <Sheet
          open={openSheetAdvertise}
          onOpenChange={handleCLickAdvertiseButton}
          defaultOpen={true}
        >
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>


      </div>
    </header>
  );
}
