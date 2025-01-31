"use client";
import Image from "next/image";
import { Button } from "./button";
import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import { useState } from "react";

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
        <Button.Root color="secundary" onClick={handleCLickSingInButton}>
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
