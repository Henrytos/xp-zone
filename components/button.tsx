import { ComponentProps, ReactNode } from "react";
import { Button as ButtonUi } from "./ui/button";
import { tv } from "tailwind-variants";

const variantsButton = tv({
  base: "",
  variants: {
    color: {
      primary: "",
      secundary: "",
    },
  },
  defaultVariants: {
    color: "secundary",
  },
});

interface RootProps extends ComponentProps<"button"> {
  color?: "primary" | "secundary";
}
function Root({ children, color, className }: RootProps) {
  return (
    <ButtonUi className={variantsButton({ color, className })}>
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
