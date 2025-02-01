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

  const {} = useForm({
    resolver: zodResolver(formSingUpSchema),
  });
  return (
    <header className="flex justify-between items-center mt-8 h-28 w-full max-w-[80%] m-auto">
      <Image
        src="/logo/logo-linear-vertical.png"
        alt="logotipo da xp zone"
        width={98}
        height={115.2}
        className=" h-full w-auto object-contain cursor-pointer"
        quality={100}
        onClick={handleCLickInLogo}
      />
      <div className="space-x-9">
        <Button.Root color="secondary" onClick={handleCLickSingInButton}>
          {" "}
          Entrar
        </Button.Root>
        <Button.Root onClick={handleCLickAdvertiseButton}>
          Anunciar grátis
        </Button.Root>
        <Sheet
          open={openSheetSingIn}
          onOpenChange={handleCLickSingInButton}
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
        <Sheet
          open={openSheetAdvertise}
          onOpenChange={handleCLickAdvertiseButton}
          defaultOpen={true}
        >
          <SheetContent>
            <SheetHeader>
              <Image
                src="/logo/logo-linear-vertical.png"
                alt="logotipo da xp zone"
                width={110}
                height={120}
                className=" h-full w-auto object-contain cursor-pointer"
                quality={100}
              />
              <SheetTitle className="text-3xl font-bold">
                Já possui uma conta?
              </SheetTitle>
              <h3 className="text-xl font-normal text-white">
                Faça seu login e acesse o sistema
              </h3>

              <Button.Root color="tertiary" className="w-full">
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

              <Button.Root color="tertiary" className="w-full bg-second-white">
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
                Entrar com o Google
              </Button.Root>
              <h3 className="text-xl font-normal text-white">
                Ou inscreva-se com seu email
              </h3>

              <form></form>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
