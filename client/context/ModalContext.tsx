// @ts-nocheck
'use client'
import { createContext, useContext, useState, useCallback } from "react"

const ModalContext = createContext({ openModal: () => {} })

export function ModalProvider({ children }) {
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = useCallback(() => setModalOpen(true), [])
  const closeModal = useCallback(() => setModalOpen(false), [])

  return (
    <ModalContext.Provider value={{ openModal, closeModal, modalOpen }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  return useContext(ModalContext)
}
