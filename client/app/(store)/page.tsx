// @ts-nocheck
import type { Metadata } from 'next'
import HomeClient from './home-client'

export const metadata: Metadata = {
  title: 'Pedrón Encomiendas — Victoria a Rosario, el mismo día',
  description: 'Viajes diarios Victoria – Rosario. Retiro y entrega de trámites, paquetería y objetos el mismo día. Coordiná tu envío por WhatsApp.',
  openGraph: {
    title: 'Pedrón Encomiendas',
    description: 'Victoria a Rosario, el mismo día. Trámites y paquetería con retiro y entrega.',
    url: 'https://pedronencomiendas.com.ar',
    siteName: 'Pedrón Encomiendas',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'es_AR',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Pedrón Encomiendas',
            description: 'Viajes diarios Victoria – Rosario. Trámites y paquetería con retiro y entrega el mismo día.',
            telephone: '+5493436611247',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Victoria',
              addressRegion: 'Entre Ríos',
              addressCountry: 'AR',
            },
            url: 'https://pedronencomiendas.com.ar',
          }),
        }}
      />
      <HomeClient />
    </>
  )
}
