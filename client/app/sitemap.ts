// ═══════════════════════════════════════════════════════════════
// SITEMAP — Landing page (sin catálogo por ahora)
// ═══════════════════════════════════════════════════════════════
export default async function sitemap() {
  const base = 'https://pedronencomiendas.com.ar'

  return [
    { url: base, lastModified: new Date() },
  ]
}
