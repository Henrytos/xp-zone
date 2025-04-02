"use client";
import Image from "next/image";
import { Button } from "../button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SheetFormSingIn } from "./sheet-form-sing-in";
import { SheetFormSingUp } from "./sheet-form-sing-up";
import { useSingInOpen } from "@/app/_providers/sing-in-open-provider";

export function Header() {
  const router = useRouter();
  const [openSheetAdvertise, setOpenSheetAdvertise] = useState<boolean>(false);

  const handleCLickInLogo = () => {
    router.push("/");
  };

  const { isOpen, closeSingIn, openSingIn } = useSingInOpen();

  const handleCLickSingInButton = () => {
    if (isOpen) {
      closeSingIn();
    } else {
      openSingIn();
    }
  };

  const handleCLickAdvertiseButton = () => {
    setOpenSheetAdvertise((currentState) => !currentState);
  };

  return (
    <header className="flex justify-between items-center mt-8 h-28 w-full max-w-[80%] m-auto z-50">
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
        <SheetFormSingIn open={isOpen} onOpenChange={handleCLickSingInButton} />

        {/* sheet  advertise*/}
        <SheetFormSingUp
          open={openSheetAdvertise}
          onOpenChange={handleCLickAdvertiseButton}
        />
      </div>
    </header>
  );
}
