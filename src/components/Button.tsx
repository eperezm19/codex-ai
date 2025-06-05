import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, className, ...props }, ref) => {
    const Comp: any = asChild ? Slot : 'button'
      return (
        <Comp
          ref={ref}
          className={clsx(
            'inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors',
            'bg-[var(--color-primary)] text-[var(--color-on-primary)] hover:bg-[var(--color-primary-hover)] disabled:opacity-50',
            'rounded-[var(--radius-md)]',
            className,
          )}
          {...props}
        />
      )
  },
)
Button.displayName = 'Button'
