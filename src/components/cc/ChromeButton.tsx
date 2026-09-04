import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 font-mono text-[11px] tracking-[0.22em] uppercase transition-all duration-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        brand: "bg-brand text-brand-foreground hover:bg-brand-deep",
        outline: "border border-border text-foreground hover:border-brand hover:text-brand",
        light:
          "border border-chrome/60 bg-chrome text-chrome-foreground hover:bg-transparent hover:text-chrome",
        ghost: "text-muted-foreground hover:text-foreground",
      },
      size: {
        default: "px-7 py-4",
        sm: "px-5 py-3",
        lg: "px-9 py-5",
      },
    },
    defaultVariants: { variant: "brand", size: "default" },
  },
);

type Props = ComponentProps<"a"> & VariantProps<typeof buttonVariants>;

export function BrandLink({ className, variant, size, ...props }: Props) {
  return <a className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export function BrandButton({
  className,
  variant,
  size,
  ...props
}: ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { buttonVariants };
