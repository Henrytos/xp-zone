import { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv, type VariantProps } from 'tailwind-variants';

const text = tv({
  variants: {
    color: {
      purple: 'text-[#BFB4D0]',
      white: 'text-white',
    },
    size: {
      base: 'text-base',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    color: 'white',
    size: 'xl',
    weight: 'normal',
  },
});

type TextVariants = VariantProps<typeof text>;

interface TextProps
  extends TextVariants,
    Pick<ComponentProps<'p'>, 'className'> {
  children: ReactNode;
}

export function Text({ children, className, ...props }: TextProps) {
  return <p className={twMerge(text(props), className)}>{children}</p>;
}
