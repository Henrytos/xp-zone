import { ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const title = tv({
  base: " font-medium ",
  variants: {
    color: {
      gradient: "text-transparent inline-block bg-radiant-linear bg-clip-text",
      white: "text-white",
    },
    size: {
      h1: "text-5xl/tight",
    },
    font: {
      "open-sans": "font-open-sans",
      orbitron: "font-orbitron",
    },
  },
  defaultVariants: {
    color: "white",
    size: "h1",
    font: "open-sans",
  },
});

type TitleVariants = VariantProps<typeof title>;

interface TitleProps extends TitleVariants {
  children: ReactNode;
}

export function Title({ children, ...props }: TitleProps) {
  return (
    <>
      <h1 className={title(props)}>{children}</h1>
    </>
  );
}
