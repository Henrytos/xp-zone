import { ComponentProps, ReactNode } from "react";
import { tv } from "tailwind-variants";
const variantsButton = tv({
  base: "font-bold text-2xl font-open-sans px-5 py-3 rounded cursor-pointer",
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
    <button
      className={variantsButton({
        color,
        className,
      })}
    >
      {children}
    </button>
  );
}

function Icon({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export const Button = {
  Icon,
  Root,
};
