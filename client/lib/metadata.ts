const BASE_URL = process.env.NEXT_PUBLIC_STORE_URL || 'https://pedronencomiendas.com.ar'

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, '').trim()
}

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

export function productMetadata(product: any) {
  const desc = stripHtml(product?.description || '').substring(0, 155)
  return {
    title: product?.name,
    description: desc,
    alternates: { canonical: `${BASE_URL}/productos/${product?.slug}` },
    openGraph: {
      title: product?.name,
      description: desc,
      images: product?.images?.[0] ? [product.images[0]] : undefined,
      url: `${BASE_URL}/productos/${product?.slug}`,
    },
  }
}
