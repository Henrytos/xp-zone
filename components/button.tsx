import { ComponentProps, ReactNode } from "react";
import { Button as ButtonUi } from "./ui/button";
import { tv } from "tailwind-variants";

const variantsButton = tv({
  base: "font-bold text-title font-open-sans px-5 rounded cursor-pointer",
  variants: {
    color: {
      primary: "bg-radient-horizontal text-white",
      secundary: "border text-white",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

interface RootProps extends ComponentProps<"button"> {
  color?: "primary" | "secundary";
}
function Root({ children, color, className }: RootProps) {
  return (
    <ButtonUi
      className={variantsButton({
        color,
        className,
      })}
    >
      {children}
    </ButtonUi>
  );
}

function Icon({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export const Button = {
  Icon,
  Root,
};
