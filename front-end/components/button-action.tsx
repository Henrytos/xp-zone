"use client";

import { ComponentProps } from "react";
import { Button } from "./button";
import { useSingInOpen } from "@/app/_providers/sing-in-open-provider";

interface ButtonActionProps
  extends Pick<ComponentProps<"button">, "children">,
    Pick<ComponentProps<"button">, "className"> {}

export function ButtonAction({ children, className }: ButtonActionProps) {
  const { openSingIn } = useSingInOpen();

  return (
    <>
      <Button.Root onClick={openSingIn} className={className}>
        {children}
      </Button.Root>
    </>
  );
}
