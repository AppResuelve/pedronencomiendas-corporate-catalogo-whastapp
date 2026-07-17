// @ts-nocheck
"use client";
import { ArrowRight, Check } from "lucide-react";

export default function Pricing({ onOpenModal }) {
  return (
    <section
      id="precios"
      className="px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: "var(--color-surface)",
        paddingTop: "6rem",
        paddingBottom: "6rem",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: 700,
              color: "var(--color-text-primary)",
            }}
          >
            Dos precios base claros
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Rosario ciudad */}
          <div
            className="rounded-2xl p-8"
            style={{
              backgroundColor: "var(--color-bg)",
              border: "1px solid var(--color-border)",
            }}
          >
            <span
              className="text-xs font-medium tracking-wide uppercase"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Rosario ciudad / Victoria ciudad
            </span>
            <div className="flex items-baseline gap-2 mt-3 mb-6">
              <span
                className="text-sm"
                style={{ color: "var(--color-text-secondary)" }}
              >
                a partir de
              </span>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "2.75rem",
                  fontWeight: 700,
                  color: "var(--color-text-primary)",
                }}
              >
                $12.000
              </span>
              <span
                className="text-sm"
                style={{ color: "var(--color-text-secondary)" }}
              >
                por viaje
              </span>
            </div>
            <ul className="space-y-3">
              {[
                "Retiro y entrega en el día",
                "Cualquier tipo de objeto",
                "Trámites en general",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <Check
                    className="w-4 h-4 shrink-0"
                    style={{ color: "var(--color-primary)" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Alrededores de Rosario — modificador */}
          <div
            className="rounded-2xl p-8"
            style={{
              backgroundColor: "var(--color-primary-light)",
              border: "1px solid var(--color-primary)",
            }}
          >
            <span
              className="text-xs font-medium tracking-wide uppercase"
              style={{ color: "var(--color-primary)" }}
            >
              Alrededores de Rosario / Victoria
            </span>
            <div className="flex items-baseline gap-2 mt-3 mb-6">
              <span
                className="text-sm"
                style={{ color: "var(--color-text-secondary)" }}
              >
                a partir de
              </span>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "2.75rem",
                  fontWeight: 700,
                  color: "var(--color-text-primary)",
                }}
              >
                $20.000
              </span>
              <span
                className="text-sm"
                style={{ color: "var(--color-text-secondary)" }}
              >
                por viaje
              </span>
            </div>
            <ul className="space-y-3">
              {[
                "Mismo servicio, más distancia",
                "Ideal para plantas y depósitos fuera del centro",
                "Coordinamos el punto exacto por WhatsApp",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <Check
                    className="w-4 h-4 shrink-0"
                    style={{ color: "var(--color-primary)" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-10">
          <button
            onClick={onOpenModal}
            className="inline-flex items-center justify-center gap-2 font-medium text-sm transition-all duration-300 hover:-translate-y-0.5"
            style={{
              padding: "0.9rem 2.25rem",
              borderRadius: "2rem",
              backgroundColor: "var(--color-primary)",
              color: "var(--color-text-on-primary)",
            }}
          >
            Consultar mi envío
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
