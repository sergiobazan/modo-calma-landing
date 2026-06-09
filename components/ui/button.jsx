import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[10px] text-sm font-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#078f98]/40 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-b from-[#078f98] to-[#047984] text-white shadow-[0_10px_22px_rgba(0,141,151,.22)] hover:brightness-105",
        outline: "border border-[#078f98] bg-white text-[#047984] hover:bg-[#effdff]",
        ghost: "text-[#06324a] hover:bg-[#e9faff]",
      },
      size: {
        default: "h-10 px-5 text-xs",
        lg: "h-11 px-6 text-sm",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export function Button({ className, variant, size, ...props }) {
  return <button className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export function buttonVariantsForLink({ className, variant, size }) {
  return cn(buttonVariants({ variant, size, className }));
}
