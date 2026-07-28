// @ts-nocheck
'use client'

const EMPRESAS = [
  { name: "Tienda Plaza Moreno", logo: "/empresas/tiendaplazamoreno.png" },
  { name: "Retificaciones Navoni", logo: "/empresas/retificacionesnavoni.webp" },
  { name: "Silva Maquinarias", logo: "/empresas/silvamaquinarias.webp" },
  { name: "OEM Computación", logo: "/empresas/oemcomputacion.webp" },
  { name: "Musto Repuestos", logo: "/empresas/mustorepuestos.webp", rounded: true },
  { name: "Elásticos Los Mendocinos", logo: "/empresas/elasticoslosmendocinos.webp" },
];

export default function TrustBadges() {
  return (
    <section
      className="px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "var(--color-bg)", paddingTop: "4rem", paddingBottom: "4rem" }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <span
          className="text-xs font-medium tracking-[0.2em] uppercase block mb-8"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Empresas que ya confían en nosotros
        </span>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-10 px-4 sm:px-0">
          {EMPRESAS.map((empresa) => (
            <div
              key={empresa.name}
              className="flex flex-col items-center justify-center gap-2"
            >
              <img src={empresa.logo} alt={empresa.name} className={`h-20 w-auto object-contain ${empresa.rounded ? "rounded-full" : ""}`} />
              <span className="text-xs" style={{ color: "var(--color-text-secondary)" }}>
                {empresa.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
