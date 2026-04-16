'use client'

import * as React from 'react'
import Link from 'next/link'
import { LogOut, Menu, MoreHorizontal, User, X } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../ui/breadcrumb'
import { Button } from '../ui/button'
import { cn } from '../../lib/utils'

export interface BreadcrumbItemConfig {
  label: string
  href?: string
}

export interface ModuleHeaderProps {
  /** URL for the home breadcrumb link */
  homeUrl: string
  /** URL for the mobile logo link */
  logoUrl: string
  /** Breadcrumb items after "Home" */
  breadcrumbs: BreadcrumbItemConfig[]
  /** User information */
  user: {
    email: string
    fullName: string
  }
  /** Whether mobile sidebar is open */
  isMobileOpen: boolean
  /** Callback when sidebar toggle is clicked */
  onToggleSidebar: () => void
  /** Server action for logout (form action) */
  logoutAction: () => void
  /** Logo component to render in mobile view */
  logo: React.ReactNode
  /** Additional class names */
  className?: string
}

export function ModuleHeader({
  homeUrl,
  logoUrl,
  breadcrumbs,
  user,
  isMobileOpen,
  onToggleSidebar,
  logoutAction,
  logo,
  className,
}: ModuleHeaderProps) {
  return (
    <header
      className={cn(
        'sticky top-0 z-50 flex h-16 w-full items-center border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60',
        className
      )}
    >
      <div className="flex w-full items-center justify-between px-4 lg:px-6">
        {/* Left side: Toggle + Breadcrumb (desktop) */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleSidebar}
            aria-label="Toggle Sidebar"
            className="h-10 w-10"
          >
            {isMobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>

          {/* Breadcrumb (desktop only) */}
          <div className="hidden lg:block">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href={homeUrl}>Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {breadcrumbs.map((item) => (
                  <React.Fragment key={item.label}>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      {item.href ? (
                        <BreadcrumbLink asChild>
                          <Link href={item.href}>{item.label}</Link>
                        </BreadcrumbLink>
                      ) : (
                        <BreadcrumbPage>{item.label}</BreadcrumbPage>
                      )}
                    </BreadcrumbItem>
                  </React.Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Center: Logo (mobile only) */}
        <Link
          href={logoUrl}
          className="absolute left-1/2 -translate-x-1/2 lg:hidden"
        >
          {logo}
        </Link>

        {/* Right side: Desktop buttons (hidden on mobile) */}
        <div className="hidden lg:flex items-center gap-3">
          {/* User Info */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted">
              <User className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium leading-none">
                {user.fullName}
              </span>
              <span className="text-xs font-normal text-muted-foreground">
                {user.email}
              </span>
            </div>
          </div>
          {/* Logout */}
          <form action={logoutAction}>
            <Button
              variant="ghost"
              size="icon"
              type="submit"
              aria-label="Logout"
              className="h-10 w-10"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </form>
        </div>

        {/* Right side: Mobile menu (shown on mobile only) */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <MoreHorizontal className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            {/* User Info */}
            <DropdownMenuLabel className="font-normal">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted">
                  <User className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {user.fullName}
                  </p>
                  <p className="text-xs font-normal leading-none text-muted-foreground">
                    {user.email}
                  </p>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {/* Logout */}
            <DropdownMenuItem asChild className="cursor-pointer">
              <form action={logoutAction} className="w-full">
                <button
                  type="submit"
                  className="flex w-full items-center font-medium"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
