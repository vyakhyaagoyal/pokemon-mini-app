import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "../../../lib/utils"

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  value?: number
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value = 0, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
    value={value}  // pass it down explicitly if needed
  >
    <ProgressPrimitive.Indicator
      className="h-full bg-primary transition-transform duration-500 ease-in-out origin-left rounded-full"
      style={{ transform: `scaleX(${value / 100})` }}
    />
  </ProgressPrimitive.Root>
))

Progress.displayName = "Progress"

export { Progress }
