// @ts-nocheck
'use client'

const EMPRESAS = [
  { name: "Empresa 1" },
  { name: "Empresa 2" },
  { name: "Empresa 3" },
  { name: "Empresa 4" },
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
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {EMPRESAS.map((empresa) => (
            <div
              key={empresa.name}
              className="flex items-center justify-center h-10 w-32 rounded-md"
              style={{ border: "1px dashed var(--color-border)" }}
            >
              {/* TODO: reemplazar por <img src={empresa.logo} .../> */}
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
