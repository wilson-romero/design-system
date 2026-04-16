'use client'

import { useState } from 'react'

interface UseEntitySheetConfig {
  entityName?: string
}

export interface UseEntitySheetReturn<T> {
  isOpen: boolean
  mode: 'create' | 'edit' | null
  data: T | null
  entityName?: string
  openCreate: () => void
  openEdit: (data: T) => void
  close: () => void
}

export function useEntitySheet<T>(
  config?: UseEntitySheetConfig
): UseEntitySheetReturn<T> {
  const [isOpen, setIsOpen] = useState(false)
  const [mode, setMode] = useState<'create' | 'edit' | null>(null)
  const [data, setData] = useState<T | null>(null)

  const openCreate = () => {
    setMode('create')
    setData(null)
    setIsOpen(true)
  }

  const openEdit = (editData: T) => {
    setMode('edit')
    setData(editData)
    setIsOpen(true)
  }

  const close = () => {
    setIsOpen(false)
    setTimeout(() => {
      setMode(null)
      setData(null)
    }, 200)
  }

  return {
    isOpen,
    mode,
    data,
    entityName: config?.entityName,
    openCreate,
    openEdit,
    close,
  }
}
