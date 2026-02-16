import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className,
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-[#c8c8c8]">
      <SliderPrimitive.Range className="absolute h-full bg-suxnix-text_secondary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block w-4 h-4 transition-colors rounded-full shadow bg-suxnix-text_secondary focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
    <SliderPrimitive.Thumb className="block w-4 h-4 transition-colors rounded-full shadow bg-suxnix-text_secondary focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
