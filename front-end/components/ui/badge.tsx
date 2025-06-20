import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "px-7 py-2 border-2 rounded-full  font-regular text-xl text-white cursor-pointer ",
  {
    variants: {
      variant: {
        default: "",
        active: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  if (variant == "active") {
    return (
      <div className="relative p-0.5 bg-radiant-horizontal rounded-full w-auto h-auto">
        <div
          className={cn(
            badgeVariants({ variant }),
            " bg-primary w-full h-full px-7 py-2 border-none"
          )}
          {...props}
        >
          <span className="text-transparent  bg-radiant-linear bg-clip-text ">
            {" "}
            {props.children}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
