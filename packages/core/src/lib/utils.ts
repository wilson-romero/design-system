import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function to merge Tailwind CSS classes
 * Used by shadcn/ui components for conditional styling
 *
 * @param inputs - Array of class values to merge
 * @returns Merged class string with conflicts resolved
 *
 * @example
 * cn('px-2 py-1', 'px-4') // Returns: 'py-1 px-4'
 * cn('bg-red-500', condition && 'bg-blue-500') // Conditional classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Extract error message from unknown error type
 *
 * Safely handles different error types (Error, string, unknown)
 * and returns a user-friendly error message.
 *
 * @param error - The error to extract message from
 * @returns Extracted error message string
 */
export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message
  if (typeof error === "string") return error
  return "An unknown error occurred"
}
