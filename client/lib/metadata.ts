const BASE_URL = process.env.NEXT_PUBLIC_STORE_URL || 'https://pedronencomiendas.com.ar'

export const baseMetadata = {
  title: {
    default: 'Pedrón Encomiendas — Victoria a Rosario, el mismo día',
    template: `%s — Pedrón Encomiendas`,
  },
  description: 'Viajes diarios Victoria – Rosario. Retiro y entrega de trámites, paquetería y objetos el mismo día. Coordiná tu envío por WhatsApp.',
  icons: [{ url: '/favicon.png' }],
  openGraph: {
    siteName: 'Pedrón Encomiendas',
    title: 'Pedrón Encomiendas',
    description: 'Victoria a Rosario, el mismo día. Trámites y paquetería con retiro y entrega.',
    url: BASE_URL,
    images: [`${BASE_URL}/og-image.jpg`],
    locale: 'es_AR',
    type: 'website',
  },
}
