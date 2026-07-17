// @ts-nocheck
"use client";
import Link from "next/link";
import { MapPin, Clock, MessageCircle } from "lucide-react";

const NAV_COLUMNS = [
  {
    title: "Sitio",
    links: [
      { label: "Inicio", href: "/" },
      { label: "Rutas y horarios", href: "/#ruta" },
      { label: "Precios", href: "/#precios" },
    ],
  },
];

const WHATSAPP_LINK =
  "https://wa.me/5493436611247?text=" +
  encodeURIComponent("Hola! Quiero consultar por un envío Victoria - Rosario.");

function FooterColTitle({ children }) {
  return (
    <h4
      className="text-xs font-medium tracking-[0.2em] uppercase mb-4"
      style={{ color: "var(--color-primary)" }}
    >
      {children}
    </h4>
  );
}

function ContactItem({ icon: Icon, href, children }) {
  const inner = (
    <>
      <span
        className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
        style={{
          backgroundColor: "var(--color-icon-bg)",
          color: "var(--color-primary)",
        }}
      >
        <Icon className="w-3.5 h-3.5" />
      </span>
      <span
        className="text-sm leading-snug"
        style={{ color: "var(--color-text-muted)" }}
      >
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        className="flex items-start gap-3 transition-colors"
      >
        {inner}
      </a>
    );
  }
  return <div className="flex items-start gap-3">{inner}</div>;
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "var(--color-bg)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: marca + tagline */}
          <div className="lg:col-span-2">
            <div className="flex items-start gap-3">
              <img
                src="/logotipo.png"
                alt="Pedrón Encomiendas"
                className="h-20 w-auto object-contain shrink-0"
              />
              <div>
                <span
                  className="block"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "1.3rem",
                    color: "var(--color-text-primary)",
                    lineHeight: 1.15,
                  }}
                >
                  Pedrón
                </span>
                <span
                  className="block text-xs uppercase tracking-[0.15em]"
                  style={{
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.3,
                  }}
                >
                  Encomiendas
                </span>
                <p
                  className="text-sm leading-relaxed mt-3 max-w-xs"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Viajes diarios Victoria – Rosario. Trámites y paquetería con
                  retiro y entrega el mismo día.
                </p>
              </div>
            </div>
          </div>

          {/* Col 2: navegación */}
          {NAV_COLUMNS.map((column) => (
            <div key={column.title}>
              <FooterColTitle>{column.title}</FooterColTitle>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-200"
                  style={{ color: "var(--color-text-muted)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Col 3: contacto + horario */}
          <div className="space-y-5">
            <FooterColTitle>Contacto</FooterColTitle>
            <ContactItem icon={MessageCircle} href={WHATSAPP_LINK}>
              3436-611247
            </ContactItem>
            <ContactItem icon={MapPin}>
              Victoria, Entre Ríos — Rosario, Santa Fe
            </ContactItem>
            <ContactItem icon={Clock}>
              Lunes a viernes · 9:30 a 19:30
            </ContactItem>
          </div>
        </div>

        <div
          className="pt-6"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <p
            className="text-xs text-center"
            style={{ color: "var(--color-text-faint)" }}
          >
            © {currentYear} Pedrón Encomiendas. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
