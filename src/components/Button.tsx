import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, className, ...props }, ref) => {
    const Comp: any = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={clsx(
          "inline-flex items-center justify-center px-4 py-2 text-button-small font-medium transition-colors",
          "bg-brand-foreground-1-rest text-neutral-fg-1-rest hover:bg-brand-foreground-1-pressed disabled:opacity-50",
          "rounded-md text-white",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
