import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { cva, type VariantProps } from "../lib/cva";

const buttonStyles = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-foreground-1-rest text-neutral-fg-1-rest hover:bg-brand-foreground-1-pressed text-white",
        secondary:
          "bg-neutral-bg-2-rest text-neutral-foreground-1 hover:bg-neutral-bg-2-pressed border border-neutral-stroke-1-rest",
        gshop: "bg-green-600 text-white hover:bg-green-700",
      },
      size: {
        tiny: "px-2 py-1 text-xs",
        small: "px-3 py-1.5 text-button-small",
        medium: "px-4 py-2 text-button-medium",
        large: "px-6 py-3 text-button-large",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { asChild = false, variant, size, className, ...props },
    ref,
  ) => {
    const Comp: any = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={clsx(buttonStyles({ variant, size, className }))}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
