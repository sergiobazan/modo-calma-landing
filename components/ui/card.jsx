import { cn } from "@/lib/utils";

export function Card({ className, ...props }) {
  return <div className={cn("rounded-[14px] border border-[#cbe8ee] bg-white shadow-[0_14px_34px_rgba(12,70,88,.08)]", className)} {...props} />;
}

export function CardContent({ className, ...props }) {
  return <div className={cn("p-5", className)} {...props} />;
}
