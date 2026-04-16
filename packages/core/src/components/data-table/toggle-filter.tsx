"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Toggle } from "../ui/toggle"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../ui/tooltip"
import { type LucideIcon } from "lucide-react"

export interface ToggleFilterConfig {
  type: "toggle"
  paramKey: string
  label: string
  labelInactive?: string
  icon?: LucideIcon
  iconInactive?: LucideIcon
  defaultValue?: boolean
}

interface DataTableToggleFilterProps {
  config: ToggleFilterConfig
}

export function DataTableToggleFilter({ config }: DataTableToggleFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const {
    paramKey,
    label,
    labelInactive = "All",
    icon: Icon,
    iconInactive: IconInactive,
    defaultValue = true,
  } = config

  // Determine current state from URL params
  // If param is not present, use defaultValue
  // If param is 'false', it's inactive
  const paramValue = searchParams.get(paramKey)
  const isActive = paramValue === null ? defaultValue : paramValue !== "false"

  const handleToggle = (pressed: boolean) => {
    const params = new URLSearchParams(searchParams.toString())

    if (pressed === defaultValue) {
      // If returning to default, remove param from URL
      params.delete(paramKey)
    } else {
      // Set explicit value
      params.set(paramKey, String(pressed))
    }

    // Reset to page 1 when filter changes
    params.set("page", "1")
    router.replace(`?${params.toString()}`)
  }

  const ActiveIcon = Icon
  const InactiveIcon = IconInactive || Icon

  const currentLabel = isActive ? label : labelInactive

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Toggle
          variant="outline"
          size="sm"
          pressed={isActive}
          onPressedChange={handleToggle}
          aria-label={`Toggle ${label} filter`}
          className="h-8 gap-1 data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-primary data-[state=on]:*:[svg]:stroke-primary data-[state=off]:bg-transparent data-[state=off]:*:[svg]:fill-muted-foreground/50 data-[state=off]:*:[svg]:stroke-muted-foreground"
        >
          {isActive ? (
            ActiveIcon && <ActiveIcon className="size-4" />
          ) : (
            InactiveIcon && <InactiveIcon className="size-4" />
          )}
          <span className="hidden sm:inline">{currentLabel}</span>
        </Toggle>
      </TooltipTrigger>
      <TooltipContent>
        <p>{currentLabel}</p>
      </TooltipContent>
    </Tooltip>
  )
}
