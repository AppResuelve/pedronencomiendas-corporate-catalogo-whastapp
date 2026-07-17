// @ts-nocheck
'use client'
import { ArrowRight, Clock } from "lucide-react";

export default function HeroSection({ onOpenModal }) {
  return (
    <section
      className="relative min-h-[92vh] flex items-center overflow-hidden"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      {/* Línea horizontal decorativa sutil, sugiere el trayecto */}
      <div
        className="absolute left-0 right-0"
        style={{
          top: "18%",
          height: "1px",
          background:
            "linear-gradient(to right, transparent, var(--color-border) 20%, var(--color-border) 80%, transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative w-full px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-4 h-4" style={{ color: "var(--color-primary)" }} />
            <span
              className="text-xs font-medium tracking-[0.25em] uppercase"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Victoria (E.R.) — Rosario (S.F.) · va y vuelve en el día
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.75rem, 7vw, 5.5rem)",
              fontWeight: 700,
              lineHeight: 0.98,
              letterSpacing: "-0.02em",
              color: "var(--color-text-primary)",
              marginBottom: "1.5rem",
            }}
          >
            Lo que te falta hoy,{" "}
            <span style={{ color: "var(--color-primary)" }}>hoy llega.</span>
          </h1>

          <p
            style={{
              color: "var(--color-text-secondary)",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              maxWidth: "34rem",
              marginBottom: "2.5rem",
              fontWeight: 300,
            }}
          >
            ¿Se te paró la producción por un repuesto que solo se consigue en
            Rosario? Pedrón Encomiendas hace el viaje todos los días: sale de
            Victoria a las 10:30 y vuelve a las 19, con tu envío arriba.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onOpenModal}
              className="inline-flex items-center justify-center gap-2 font-medium text-sm transition-all duration-300 hover:-translate-y-0.5"
              style={{
                padding: "0.9rem 2.25rem",
                borderRadius: "2rem",
                backgroundColor: "var(--color-primary)",
                color: "#0A0A0A",
                boxShadow: "0 8px 30px rgba(250,140,16,0.25)",
              }}
            >
              Pedir mi envío por WhatsApp
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#precios"
              className="inline-flex items-center justify-center gap-2 font-medium text-sm transition-all duration-300 hover:-translate-y-0.5"
              style={{
                padding: "0.9rem 2.25rem",
                borderRadius: "2rem",
                border: "1px solid var(--color-border)",
                color: "var(--color-text-primary)",
              }}
            >
              Ver precios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
