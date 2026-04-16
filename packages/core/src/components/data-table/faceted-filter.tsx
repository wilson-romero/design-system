"use client"

import * as React from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { CheckIcon, PlusCircle } from "lucide-react"
import { type LucideIcon } from "lucide-react"
import { cn } from "../../lib/utils"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "../ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover"
import { Separator } from "../ui/separator"

export interface FacetedFilterOption {
  label: string
  value: string
  icon?: LucideIcon
}

export interface FacetedFilterConfig {
  type: "faceted"
  paramKey: string
  columnId: string
  title: string
  options: FacetedFilterOption[]
}

interface DataTableFacetedFilterProps {
  config: FacetedFilterConfig
}

export function DataTableFacetedFilter({ config }: DataTableFacetedFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const { paramKey, title, options } = config

  // Get selected values from URL params (comma-separated)
  const paramValue = searchParams.get(paramKey)
  const selectedValues = new Set(
    paramValue ? paramValue.split(",").filter(Boolean) : []
  )

  const updateFilter = (newValues: Set<string>) => {
    const params = new URLSearchParams(searchParams.toString())

    if (newValues.size === 0) {
      params.delete(paramKey)
    } else {
      params.set(paramKey, Array.from(newValues).join(","))
    }

    // Reset to page 1 when filter changes
    params.set("page", "1")
    router.replace(`?${params.toString()}`)
  }

  const handleSelect = (value: string) => {
    const newValues = new Set(selectedValues)
    if (newValues.has(value)) {
      newValues.delete(value)
    } else {
      newValues.add(value)
    }
    updateFilter(newValues)
  }

  const handleClear = () => {
    updateFilter(new Set())
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 border-dashed">
          <PlusCircle className="size-4" />
          {title}
          {selectedValues.size > 0 && (
            <>
              <Separator orientation="vertical" className="mx-2 h-4" />
              <Badge
                variant="secondary"
                className="rounded-sm px-1 font-normal lg:hidden"
              >
                {selectedValues.size}
              </Badge>
              <div className="hidden space-x-1 lg:flex">
                {selectedValues.size > 2 ? (
                  <Badge
                    variant="secondary"
                    className="rounded-sm px-1 font-normal"
                  >
                    {selectedValues.size} selected
                  </Badge>
                ) : (
                  options
                    .filter((option) => selectedValues.has(option.value))
                    .map((option) => (
                      <Badge
                        variant="secondary"
                        key={option.value}
                        className="rounded-sm px-1 font-normal"
                      >
                        {option.label}
                      </Badge>
                    ))
                )}
              </div>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-50 p-0" align="start">
        <Command>
          <CommandInput placeholder={title} />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => {
                const isSelected = selectedValues.has(option.value)
                return (
                  <CommandItem
                    key={option.value}
                    onSelect={() => handleSelect(option.value)}
                  >
                    <div
                      className={cn(
                        "mr-2 flex size-4 items-center justify-center rounded-sm border border-primary",
                        isSelected
                          ? "bg-primary text-primary-foreground"
                          : "opacity-50 [&_svg]:invisible"
                      )}
                    >
                      <CheckIcon className="size-4" />
                    </div>
                    {option.icon && (
                      <option.icon className="mr-2 size-4 text-muted-foreground" />
                    )}
                    <span>{option.label}</span>
                  </CommandItem>
                )
              })}
            </CommandGroup>
            {selectedValues.size > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    onSelect={handleClear}
                    className="justify-center text-center"
                  >
                    Clear filters
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
