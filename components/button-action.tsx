"use client";

import { ComponentProps } from "react";
import { Button } from "./button";
import { useSingInOpen } from "@/app/_providers/sing-in-open-provider";

export function ButtonAction({
  children,
}: Pick<ComponentProps<"button">, "children">) {
  const { openSingIn } = useSingInOpen();

  return (
    <>
      <Button.Root onClick={openSingIn}>{children}</Button.Root>
    </>
  );
}
