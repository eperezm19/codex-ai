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
          'inline-flex items-center justify-center rounded px-4 py-2 text-sm font-medium transition-colors',
          'bg-black text-white hover:bg-gray-800 disabled:opacity-50',
          className,
        )}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'
