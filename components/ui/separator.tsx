// components/ui/separator.tsx
import * as React from "react"
import { cn } from "@/lib/utils"

export interface SeparatorProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Orientation of the separator */
  orientation?: "horizontal" | "vertical"
  /** If true, the separator is purely decorative (no ARIA role) */
  decorative?: boolean
}

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  (
    { className, orientation = "horizontal", decorative = false, ...props },
    ref
  ) => {
    const isHorizontal = orientation === "horizontal"

    // Base styles
    const baseStyles = "bg-border"

    const horizontalStyles = cn(
      "h-[1px] w-full",
      baseStyles,
      className
    )

    const verticalStyles = cn(
      "h-full w-[1px]",
      baseStyles,
      className
    )

    // Only apply ARIA if not decorative
    if (decorative) {
      return (
        <div
          ref={ref}
          className={isHorizontal ? horizontalStyles : verticalStyles}
          {...props}
        />
      )
    }

    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={isHorizontal ? "horizontal" : "vertical"}
        className={isHorizontal ? horizontalStyles : verticalStyles}
        {...props}
      />
    )
  }
)

Separator.displayName = "Separator"

export { Separator }