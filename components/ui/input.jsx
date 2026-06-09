import { cn } from "@/lib/utils";

export function Input({ className, ...props }) {
  return (
    <input
      className={cn("h-9 min-w-0 rounded-[8px] border border-[#cbe8ee] bg-white px-3 text-xs font-bold text-[#06324a] outline-none placeholder:text-[#7b97a5] focus:border-[#078f98]", className)}
      {...props}
    />
  );
}
