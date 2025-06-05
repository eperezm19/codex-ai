import clsx, { type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

type Variants = Record<string, Record<string, string>>;

interface CvaOptions<V extends Variants> {
  variants?: V;
  defaultVariants?: { [K in keyof V]?: keyof V[K] };
}

export type VariantProps<T extends (...args: any) => string> = T extends (
  options: infer O,
) => any
  ? O extends { className?: string }
    ? Omit<O, "className">
    : never
  : never;

export function cva<V extends Variants>(
  base?: string,
  options?: CvaOptions<V>,
) {
  return (
    props?: Partial<{ [K in keyof V]: keyof V[K] }> & { className?: string },
  ) => {
    const { variants = {} as V, defaultVariants } = options || {};
    const classNames: ClassValue[] = [base];

    for (const key in variants) {
      const val = props?.[key] ?? defaultVariants?.[key];
      if (val && variants[key][val]) {
        classNames.push(variants[key][val]);
      }
    }

    if (props?.className) classNames.push(props.className);
    return cn(...classNames);
  };
}
