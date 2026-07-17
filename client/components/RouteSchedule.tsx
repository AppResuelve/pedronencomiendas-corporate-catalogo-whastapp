// @ts-nocheck
'use client'
import { Truck } from "lucide-react";

export default function RouteSchedule() {
  return (
    <section
      id="ruta"
      className="px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "var(--color-bg)", paddingTop: "6rem", paddingBottom: "6rem" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span
            className="text-xs font-medium tracking-[0.2em] uppercase block mb-3"
            style={{ color: "var(--color-primary)" }}
          >
            Todos los días hábiles
          </span>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: 700,
              color: "var(--color-text-primary)",
            }}
          >
            El mismo viaje, todos los días
          </h2>
        </div>

        {/* Barra de ruta */}
        <div className="relative max-w-3xl mx-auto" style={{ height: "120px" }}>
          {/* Línea base */}
          <div
            className="absolute left-0 right-0"
            style={{ top: "50%", height: "2px", backgroundColor: "var(--color-border)", transform: "translateY(-1px)" }}
            aria-hidden="true"
          />
          {/* Segmento activo naranja punteado */}
          <div
            className="absolute left-0 right-0"
            style={{
              top: "50%",
              height: "2px",
              transform: "translateY(-1px)",
              background:
                "repeating-linear-gradient(to right, var(--color-primary) 0 8px, transparent 8px 16px)",
            }}
            aria-hidden="true"
          />

          {/* Victoria — salida */}
          <div className="absolute left-0 flex flex-col items-center" style={{ top: "50%", transform: "translateY(-50%)" }}>
            <span
              className="mb-3"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.5rem", color: "var(--color-text-primary)", lineHeight: 1 }}
            >
              10:30
            </span>
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: "var(--color-primary)" }}
            />
            <span className="text-xs mt-2 whitespace-nowrap" style={{ color: "var(--color-text-secondary)" }}>
              Salida — Victoria
            </span>
          </div>

          {/* Camión en el medio */}
          <div
            className="absolute rounded-full p-3 z-10"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
            }}
          >
            <Truck className="w-5 h-5" style={{ color: "var(--color-primary)" }} />
          </div>

          {/* Rosario — vuelta */}
          <div className="absolute right-0 flex flex-col items-center" style={{ top: "50%", transform: "translateY(-50%)" }}>
            <span
              className="mb-3"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.5rem", color: "var(--color-text-primary)", lineHeight: 1 }}
            >
              19:00
            </span>
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: "var(--color-primary)" }}
            />
            <span className="text-xs mt-2 whitespace-nowrap" style={{ color: "var(--color-text-secondary)" }}>
              Vuelta a Victoria
            </span>
          </div>
        </div>

        <p
          className="text-center text-sm mt-10 max-w-md mx-auto"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Horarios aproximados, pueden variar por tránsito o clima. Tu envío
          viaja de ida y de vuelta el mismo día, siempre.
        </p>
      </div>
    </section>
  );
}
