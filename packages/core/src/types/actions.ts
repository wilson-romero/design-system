/**
 * Server Action Types
 *
 * Centralized type definitions for Server Actions.
 * Provides consistent return types across all server-side actions.
 */

/**
 * State returned by Server Actions (for useActionState)
 *
 * @template T - The data type returned on success
 *
 * @example
 * ```ts
 * async function loginAction(
 *   prevState: ServerActionState<null>,
 *   formData: FormData
 * ): Promise<ServerActionState<null>> {
 *   // ... validation and logic
 *   return { success: true }
 * }
 * ```
 */
export type ServerActionState<T = null> = {
  success: boolean
  message?: string
  errors?: Record<string, string[]>
  data?: T
} | null

/**
 * Result of Entity Sheet actions (inline CRUD operations)
 *
 * Includes field values for form persistence on validation errors.
 *
 * @template T - The entity data type
 */
export type EntityActionResult<T = unknown> = {
  success: boolean
  data?: T
  formErrors?: Record<string, string[]>
  serverError?: string
  fieldValues?: Record<string, unknown>
}
