"use client"

import * as React from "react"
import { ArrowRight, Dot } from 'lucide-react'
import { Button, ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ButtonCtaProps extends ButtonProps {
  children: React.ReactNode
}

const ButtonCta = React.forwardRef<HTMLButtonElement, ButtonCtaProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "group relative h-12 overflow-hidden rounded-full px-6 font-medium duration-500",
          className
        )}
        {...props}
      >
        <div className="relative inline-flex -translate-x-0 items-center transition group-hover:translate-x-6">
          <div className="absolute -translate-x-4 opacity-0 transition group-hover:-translate-x-8 group-hover:opacity-100">
            <ArrowRight className="size-5" />
          </div>
          <span className="pr-6 uppercase  leading-none">{children}</span>
          <div className="absolute right-0 translate-x-0 opacity-100 transition group-hover:translate-x-4 group-hover:opacity-0">
            <Dot className="size-5" strokeWidth={3} />
          </div>
        </div>
      </Button>
    )
  }
)
ButtonCta.displayName = "ButtonCta"

export { ButtonCta }

