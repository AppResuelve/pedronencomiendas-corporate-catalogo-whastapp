// ─────────────────────────────────────────────────────────────────────────
// Helper central para armar el link de WhatsApp con el mensaje precargado.
// Reemplazá WHATSAPP_NUMBER por el número real en formato internacional
// (54 9 + característica + número, sin 0 ni 15).
// Ej: 3436-611247 (Victoria, E.R.) → "5493436611247"
// ─────────────────────────────────────────────────────────────────────────

export const WHATSAPP_NUMBER = "5493436611247"; // ← verificar/ajustar

export const ZONA_PRECIO: Record<string, { label: string; precio: number }> = {
  rosario: { label: "Rosario ciudad", precio: 12000 },
  alrededores: { label: "Alrededores de Rosario", precio: 20000 },
};

/**
 * Arma el texto del mensaje a partir de los datos del formulario.
 */
export function buildWhatsAppMessage(data: {
  nombre?: string;
  tipoEnvio?: string;
  zona?: string;
  detalle?: string;
}) {
  const { nombre, tipoEnvio, zona, detalle } = data;
  const zonaInfo = ZONA_PRECIO[zona ?? "rosario"] ?? ZONA_PRECIO.rosario;

  const lineas = [
    `Hola! Soy ${nombre || "—"}.`,
    `Quiero consultar por un envío Victoria - Rosario.`,
    `Tipo de objeto: ${tipoEnvio || "—"}`,
    `Zona de entrega: ${zonaInfo.label} (aprox. $${zonaInfo.precio.toLocaleString("es-AR")})`,
  ];

  if (detalle) lineas.push(`Detalle: ${detalle}`);

  return lineas.join("\n");
}

export function buildWhatsAppLink(data: {
  nombre?: string;
  tipoEnvio?: string;
  zona?: string;
  detalle?: string;
}) {
  const text = encodeURIComponent(buildWhatsAppMessage(data));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
