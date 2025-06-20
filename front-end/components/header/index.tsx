"use client";
import Image from "next/image";
import { Button } from "../button";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { SheetFormSingIn } from "./sheet-form-sing-in";
import { SheetFormSingUp } from "./sheet-form-sing-up";
import { useSingInOpen } from "@/app/_providers/sing-in-open-provider";
import { useAuthUser } from "@/app/_providers/auth-user-provider";
import { SearchGameForm } from "../search-game-form";
import { Text } from "../text";
import { Bell, Heart } from "lucide-react";

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [openSheetAdvertise, setOpenSheetAdvertise] = useState<boolean>(false);
  const { isAuthenticated, user } = useAuthUser();
  console.log("isAuthenticated", isAuthenticated);
  console.log("user", user);

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
  const isPageGaming = pathname === "/games";

  // TODO: Implement logic to check if there are new reactions and notifications
  const hasNewReactions = false;
  const hasNewNotifications = true;
  return (
    <header className="flex justify-between items-center mt-8 h-28 w-full max-w-[80%] m-auto z-50">
      <Image
        src="/logo/logo-linear-vertical.png"
        alt="logotipo da xp zone"
        width={98}
        height={112.2}
        className="h-full w-auto object-contain cursor-pointer "
        quality={100}
        onClick={handleCLickInLogo}
      />
      {/* search game input */}
      {isPageGaming && <SearchGameForm />}

      {/* profile actions */}
      {isAuthenticated && user && (
        <div className="flex items-center gap-9">
          {/* icon heart */}
          <span className="p-2.5 border-2 border-neutrals rounded-full relative">
            <Heart className="text-neutrals fill-neutrals w-7 h-7" />
            {hasNewReactions && (
              <span className="absolute top-3 right-2 bg-radiant-horizontal w-2 h-2 rounded-full" />
            )}
          </span>

          {/* icon notification */}
          <span className="p-2.5 border-2 border-neutrals rounded-full relative">
            <Bell className="text-neutrals fill-neutrals w-7 h-7" />
            {hasNewNotifications && (
              <span className="absolute top-3 right-3 bg-radiant-horizontal w-2 h-2 rounded-full" />
            )}
          </span>

          <div className="flex items-center gap-4">
            <Text className="text-neutrals">{user.name}</Text>

            <div className="p-0.5 bg-radiant-horizontal rounded-full w-auto h-auto">
              <Image
                src={user.avatarUrl}
                alt={user.name}
                width={80}
                height={80}
                quality={100}
                className="rounded-full w-20 h-20"
              />
            </div>
          </div>
        </div>
      )}

      {/* buttons actions authenticates  */}
      {!isAuthenticated && (
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
          <SheetFormSingIn
            open={isOpen}
            onOpenChange={handleCLickSingInButton}
          />

          {/* sheet  advertise*/}
          <SheetFormSingUp
            open={openSheetAdvertise}
            onOpenChange={handleCLickAdvertiseButton}
          />
        </div>
      )}
    </header>
  );
}
