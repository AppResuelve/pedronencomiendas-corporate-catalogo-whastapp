// @ts-nocheck
"use client";
import { AlertCircle, PackageCheck, ShieldCheck } from "lucide-react";

const PUNTOS = [
  {
    icon: AlertCircle,
    title: "El problema de siempre",
    text: "Un repuesto, un insumo o una pieza que no se consigue en Victoria. Esperar un envío común te frena la producción o la venta un día entero, a veces más.",
    accent: false,
  },
  {
    icon: PackageCheck,
    title: "La solución",
    text: "Salimos a las 10:30, llegamos a Rosario, hacemos el retiro y volvemos el mismo día a las 19. Tu envío no espera al día siguiente: llega hoy.",
    accent: true,
  },
  {
    icon: ShieldCheck,
    title: "Compromiso asegurado",
    text: "Trámites, paquetería y objetos de cualquier tamaño: desde un sobre hasta una caja de mercadería. Manejamos cada envío como si fuera nuestro.",
    accent: false,
  },
];

export default function ProblemSolution() {
  return (
    <section
      className="px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: "var(--color-surface)",
        paddingTop: "6rem",
        paddingBottom: "6rem",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 max-w-2xl mx-auto text-center">
          <span
            className="text-xs font-medium tracking-[0.2em] uppercase block mb-3"
            style={{ color: "var(--color-primary)" }}
          >
            Para comercios, talleres y particulares
          </span>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "var(--color-text-primary)",
            }}
          >
            No perdés el día por un repuesto que está a 160 km.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PUNTOS.map(({ icon: Icon, title, text, accent }) => (
            <div
              key={title}
              className="rounded-2xl p-6"
              style={{
                backgroundColor: accent
                  ? "var(--color-primary-light)"
                  : "var(--color-bg)",
                border: accent
                  ? "1px solid var(--color-primary)"
                  : "1px solid var(--color-border)",
              }}
            >
              <Icon
                className="w-6 h-6 mb-4"
                style={{
                  color: accent
                    ? "var(--color-primary)"
                    : "var(--color-text-secondary)",
                }}
              />
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "var(--color-text-primary)",
                  marginBottom: "0.6rem",
                }}
              >
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
