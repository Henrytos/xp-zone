import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const title = tv({
  base: "font-medium",
  variants: {
    color: {
      gradient: "text-transparent inline-block bg-radiant-linear bg-clip-text",
      white: "text-white",
    },
    size: {
      h1: "text-5xl/tight",
      h2: "text-4xl",
      h3: "text-3xl",
      h4: "text-2xl",
    },
    font: {
      "open-sans": "font-open-sans",
      orbitron: "font-orbitron",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    color: "white",
    size: "h1",
    font: "open-sans",
    weight: "bold",
  },
});

type TitleVariants = VariantProps<typeof title>;

interface TitleProps
  extends TitleVariants,
    Pick<ComponentProps<"h1">, "className"> {
  children: ReactNode;
}

export function Title({ children, className, ...props }: TitleProps) {
  return (
    <>
      <h1 className={twMerge(title(props), className)}>{children}</h1>
    </>
  );
}
