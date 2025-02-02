import { VariantProps } from "class-variance-authority";
import { ComponentProps, ReactNode } from "react";
import { tv } from "tailwind-variants";
const variantsButton = tv({
  base: "font-bold text-2xl  font-open-sans px-5 py-3 rounded-md cursor-pointer flex inline items-center",
  variants: {
    color: {
      primary: "bg-radiant-horizontal text-white",
      secondary: "border text-white",
      tertiary: "bg-primary text-white",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

type VariantsButton = VariantProps<typeof variantsButton>;

function Root({
  children,
  color,
  className,
  ...props
}: ComponentProps<"button"> & VariantsButton) {
  return (
    <button
      className={variantsButton({
        color,
        className,
      })}
      {...props}
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
