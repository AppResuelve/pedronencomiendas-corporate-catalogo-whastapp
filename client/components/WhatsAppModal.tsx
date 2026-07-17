// @ts-nocheck
'use client'
import { useState, useEffect } from "react";
import { X, MessageCircle } from "lucide-react";
import { ZONA_PRECIO, ZONA_LABEL, buildWhatsAppLink, type Destino } from "@/lib/whatsapp";

export default function WhatsAppModal({ open, onClose }) {
  const [nombre, setNombre] = useState("");
  const [tipoEnvio, setTipoEnvio] = useState("");
  const [destino, setDestino] = useState<Destino>("rosario");
  const [zona, setZona] = useState("ciudad");
  const [detalle, setDetalle] = useState("");

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  const zonas = ZONA_PRECIO[destino];
  const zonaInfo = zonas[zona] ?? zonas.ciudad;

  const handleSubmit = (e) => {
    e.preventDefault();
    const link = buildWhatsAppLink({ nombre, tipoEnvio, destino, zona, detalle });
    window.open(link, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center px-4 pb-4 sm:pb-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="whatsapp-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "var(--color-backdrop)" }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Card */}
      <div
        className="relative w-full max-w-md rounded-2xl overflow-hidden"
        style={{ backgroundColor: "var(--color-surface)", border: "1px solid var(--color-border)" }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-5"
          style={{ borderBottom: "1px solid var(--color-border)" }}
        >
          <h3
            id="whatsapp-modal-title"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "var(--color-text-primary)",
            }}
          >
            Contanos qué necesitás enviar
          </h3>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="rounded-full p-1.5 transition-colors"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 py-6 space-y-5">
          <div>
            <label
              htmlFor="nombre"
              className="block text-xs font-medium tracking-wide uppercase mb-2"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Tu nombre
            </label>
            <input
              id="nombre"
              type="text"
              required
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ej: Marcos"
              className="w-full rounded-lg px-4 py-2.5 text-sm outline-none transition-colors"
              style={{
                backgroundColor: "var(--color-bg)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text-primary)",
              }}
            />
          </div>

          <div>
            <label
              htmlFor="tipoEnvio"
              className="block text-xs font-medium tracking-wide uppercase mb-2"
              style={{ color: "var(--color-text-secondary)" }}
            >
              ¿Qué necesitás mandar?
            </label>
            <input
              id="tipoEnvio"
              type="text"
              required
              value={tipoEnvio}
              onChange={(e) => setTipoEnvio(e.target.value)}
              placeholder="Ej: repuesto de auto, sobre, caja de mercadería"
              className="w-full rounded-lg px-4 py-2.5 text-sm outline-none transition-colors"
              style={{
                backgroundColor: "var(--color-bg)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text-primary)",
              }}
            />
          </div>

          {/* Toggle destino */}
          <div>
            <span
              className="block text-xs font-medium tracking-wide uppercase mb-2"
              style={{ color: "var(--color-text-secondary)" }}
            >
              ¿Hacia dónde es el envío?
            </span>
            <div className="grid grid-cols-2 gap-3">
              {(["rosario", "victoria"] as Destino[]).map((d) => (
                <button
                  type="button"
                  key={d}
                  onClick={() => { setDestino(d); setZona("ciudad"); }}
                  className="rounded-lg px-3 py-3 text-center transition-all"
                  style={{
                    border:
                      destino === d
                        ? "1.5px solid var(--color-primary)"
                        : "1px solid var(--color-border)",
                    backgroundColor:
                      destino === d ? "var(--color-primary-light)" : "var(--color-bg)",
                  }}
                >
                  <span
                    className="block text-sm font-medium"
                    style={{
                      color:
                        destino === d ? "var(--color-primary)" : "var(--color-text-primary)",
                    }}
                  >
                    {d === "rosario" ? "Rosario" : "Victoria"}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Zonas dinámicas según destino */}
          <div>
            <span
              className="block text-xs font-medium tracking-wide uppercase mb-2"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {ZONA_LABEL[destino]}
            </span>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(zonas).map(([key, info]) => (
                <button
                  type="button"
                  key={key}
                  onClick={() => setZona(key)}
                  className="rounded-lg px-3 py-3 text-left transition-all"
                  style={{
                    border:
                      zona === key
                        ? "1.5px solid var(--color-primary)"
                        : "1px solid var(--color-border)",
                    backgroundColor:
                      zona === key ? "var(--color-primary-light)" : "var(--color-bg)",
                  }}
                >
                  <span
                    className="block text-sm font-medium"
                    style={{
                      color:
                        zona === key ? "var(--color-primary)" : "var(--color-text-primary)",
                    }}
                  >
                    {info.label}
                  </span>
                  <span
                    className="block text-xs mt-0.5"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    a partir de ${info.precio.toLocaleString("es-AR")}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 font-medium text-sm py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-text-on-primary)",
            }}
          >
            <MessageCircle className="w-4 h-4" />
            Enviar consulta por WhatsApp
          </button>

          <p
            className="text-xs text-center"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Precio {zonaInfo.label.toLowerCase()}: a partir de ${zonaInfo.precio.toLocaleString("es-AR")}. Se confirma por WhatsApp según el objeto y el punto exacto.
          </p>
        </form>
      </div>
    </div>
  );
}
