import type { JSX } from "react";
import { cn } from "@/lib/utils";

type ContainerSize = "content" | "wide";

interface ContainerProps {
  size?: ContainerSize;
  className?: string;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

export function Container({
  size = "wide",
  className,
  children,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-6 sm:px-8",
        size === "content" && "max-w-content",
        size === "wide" && "max-w-wide",
        className,
      )}
    >
      {children}
    </Tag>
  );
}