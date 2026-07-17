// @ts-nocheck
'use client'

import { Suspense } from "react"
import { usePathname } from "next/navigation"
import { Navbar } from "@/components/store/Navbar"
import { Footer } from "@/components/store/Footer"
import { ScrollToTop } from "@/components/ScrollToTop"
import { ModalProvider, useModal } from "@/context/ModalContext"
import WhatsAppModal from "@/components/WhatsAppModal"

function StoreInner({ children }) {
  const { openModal, closeModal, modalOpen } = useModal()
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Suspense fallback={<div className="h-16" />}>
          <Navbar heroMode={isHome} onOpenModal={openModal} />
        </Suspense>
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
      <WhatsAppModal open={modalOpen} onClose={closeModal} />
    </>
  )
}

export default function StoreLayout({ children }) {
  return (
    <ModalProvider>
      <StoreInner>{children}</StoreInner>
    </ModalProvider>
  )
}
