// ─────────────────────────────────────────────────────────────────────────
// Helper central para armar el link de WhatsApp con el mensaje precargado.
// Reemplazá WHATSAPP_NUMBER por el número real en formato internacional
// (54 9 + característica + número, sin 0 ni 15).
// Ej: 3436-611247 (Victoria, E.R.) → "5493436611247"
// ─────────────────────────────────────────────────────────────────────────

import { siteData } from '@/data/siteData'

export const WHATSAPP_NUMBER = "5493436611247"; // ← verificar/ajustar

export type Destino = "rosario" | "victoria";

const p = siteData.pricing;

export const ZONA_PRECIO: Record<Destino, Record<string, { label: string; precio: number }>> = {
  rosario: {
    ciudad: { label: p.ciudad.label.split(' / ')[0], precio: p.ciudad.precio },
    alrededores: { label: p.alrededores.label.split(' / ')[0], precio: p.alrededores.precio },
  },
  victoria: {
    ciudad: { label: p.ciudad.label.split(' / ')[1], precio: p.ciudad.precio },
    alrededores: { label: p.alrededores.label.split(' / ')[1], precio: p.alrededores.precio },
  },
};

export const ZONA_LABEL: Record<Destino, string> = {
  rosario: "¿Dónde hay que entregar en Rosario?",
  victoria: "¿Dónde hay que entregar en Victoria?",
};

/**
 * Arma el texto del mensaje a partir de los datos del formulario.
 */
export function buildWhatsAppMessage(data: {
  nombre?: string;
  tipoEnvio?: string;
  destino?: Destino;
  zona?: string;
  detalle?: string;
}) {
  const { nombre, tipoEnvio, destino = "rosario", zona, detalle } = data;
  const zonas = ZONA_PRECIO[destino];
  const zonaInfo = zonas[zona ?? "ciudad"] ?? zonas.ciudad;

  const ruta = destino === "rosario" ? "Victoria - Rosario" : "Rosario - Victoria";

  const lineas = [
    `Hola! Soy ${nombre || "—"}.`,
    `Quiero consultar por un envío ${ruta}.`,
    `Tipo de objeto: ${tipoEnvio || "—"}`,
    `Zona de entrega: ${zonaInfo.label} (a partir de $${zonaInfo.precio.toLocaleString("es-AR")})`,
  ];

  if (detalle) lineas.push(`Detalle: ${detalle}`);

  return lineas.join("\n");
}

export function buildWhatsAppLink(data: {
  nombre?: string;
  tipoEnvio?: string;
  destino?: Destino;
  zona?: string;
  detalle?: string;
}) {
  const text = encodeURIComponent(buildWhatsAppMessage(data));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
