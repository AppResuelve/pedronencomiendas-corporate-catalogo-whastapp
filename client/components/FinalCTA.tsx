// @ts-nocheck
'use client'
import { ArrowRight } from "lucide-react";

export default function FinalCTA({ onOpenModal }) {
  return (
    <section
      className="px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "var(--color-surface)", paddingTop: "6rem", paddingBottom: "6rem" }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "var(--color-text-primary)",
            marginBottom: "1rem",
          }}
        >
          ¿Lo necesitás hoy? <span style={{ color: "var(--color-primary)" }}>Escribinos.</span>
        </h2>
        <p
          className="mb-8"
          style={{ color: "var(--color-text-secondary)", lineHeight: 1.7, fontSize: "0.95rem" }}
        >
          Contanos qué tenés que enviar y coordinamos el retiro en Victoria o
          en Rosario. Sin vueltas, por WhatsApp.
        </p>
        <button
          onClick={onOpenModal}
          className="inline-flex items-center justify-center gap-2 font-medium text-sm transition-all duration-300 hover:-translate-y-0.5"
          style={{
            padding: "1rem 2.5rem",
            borderRadius: "2rem",
            backgroundColor: "var(--color-primary)",
            color: "var(--color-text-on-primary)",
            boxShadow: "0 8px 30px rgba(250,140,16,0.25)",
          }}
        >
          Pedir mi envío por WhatsApp
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
