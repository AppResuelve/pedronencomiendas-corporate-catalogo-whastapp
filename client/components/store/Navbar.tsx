// @ts-nocheck
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/#ruta", label: "Rutas y horarios" },
  { href: "/#precios", label: "Precios" },
];

const WHATSAPP_FALLBACK_LINK =
  "https://wa.me/5493436611247?text=" +
  encodeURIComponent("Hola! Quiero consultar por un envío Victoria - Rosario.");

export function Navbar({ heroMode = false, onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = usePathname();
  const closeTimer = useRef(null);

  const isTransparent = heroMode && !scrolled;
  const isActive = (path) => location === path;

  useEffect(() => {
    if (!heroMode) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [heroMode]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const handleCtaClick = () => {
    if (onOpenModal) {
      onOpenModal();
    } else {
      window.open(WHATSAPP_FALLBACK_LINK, "_blank", "noopener,noreferrer");
    }
  };

  const bgStyle = {
    backgroundColor: isTransparent ? "transparent" : "var(--color-surface)",
    borderBottom: isTransparent
      ? "1px solid rgba(255, 255, 255, 0)"
      : "1px solid var(--color-border)",
  };

  return (
    <>
      {/* Degradé sutil cuando está en top, para legibilidad del logo sobre el hero */}
      {isTransparent && (
        <div
          className="fixed top-0 left-0 right-0 z-40 pointer-events-none"
          style={{
            height: "128px",
            background: "linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)",
          }}
          aria-hidden="true"
        />
      )}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={bgStyle}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo + marca */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <img
                src="/logotipo.png"
                alt="Pedrón Encomiendas"
                className="h-14 w-auto object-contain"
              />
              <span className="hidden sm:flex flex-col leading-tight">
                {/* lg+: una sola línea */}
                <div className="hidden lg:flex items-end gap-2">
                  <span
                    className="hidden lg:inline"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      fontSize: "1.15rem",
                      color: "var(--color-text-primary)",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.2,
                    }}
                  >
                    Pedrón
                  </span>
                  <span
                    className="block text-sm uppercase tracking-[0.15em]"
                    style={{
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.3,
                    }}
                  >
                    Encomiendas
                  </span>
                </div>
                {/* md: dos líneas */}
                <span className="hidden md:inline lg:hidden">
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: "var(--color-text-primary)",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.2,
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
                </span>
              </span>
            </Link>

            {/* Links desktop */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative inline-flex items-center px-4 py-2 text-sm font-medium transition-colors duration-300"
                  style={{
                    color: isActive(item.href)
                      ? "var(--color-primary)"
                      : "var(--color-text-secondary)",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCtaClick}
                className="hidden sm:inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  padding: "0.55rem 1.25rem",
                  borderRadius: "2rem",
                  backgroundColor: "var(--color-primary)",
                  color: "var(--color-text-on-primary)",
                }}
              >
                <MessageCircle className="w-4 h-4" />
                Pedir envío
              </button>

              <button
                onClick={() => setIsOpen(true)}
                className="md:hidden p-2 rounded-lg transition-colors"
                style={{ color: "var(--color-text-primary)" }}
                aria-label="Abrir menú"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* ── SIDEBAR MÓVIL ── */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ backgroundColor: "var(--color-backdrop)" }}
        aria-hidden="true"
      />

      <aside
        className="fixed top-0 right-0 h-full w-72 z-50 md:hidden flex flex-col transition-transform duration-300 ease-in-out"
        style={{
          backgroundColor: "var(--color-surface)",
          borderLeft: "1px solid var(--color-border)",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <div
          className="flex items-center justify-between px-5 py-4"
          style={{ borderBottom: "1px solid var(--color-border)" }}
        >
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.05rem",
              fontWeight: 700,
              color: "var(--color-text-primary)",
            }}
          >
            Pedrón Encomiendas
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-lg"
            style={{ color: "var(--color-text-secondary)" }}
            aria-label="Cerrar menú"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <ul className="space-y-1">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                  style={{
                    color: isActive(item.href)
                      ? "var(--color-primary)"
                      : "var(--color-text-secondary)",
                    backgroundColor: isActive(item.href)
                      ? "var(--color-primary-light)"
                      : "transparent",
                  }}
                >
                  <span
                    className="w-1 h-1 rounded-full shrink-0"
                    style={{
                      backgroundColor: isActive(item.href)
                        ? "var(--color-primary)"
                        : "var(--color-border)",
                    }}
                  />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div
          className="px-4 pb-8 pt-4"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <button
            onClick={handleCtaClick}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-full font-medium text-sm transition-colors"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-text-on-primary)",
            }}
          >
            <MessageCircle className="w-4 h-4" />
            Pedir envío por WhatsApp
          </button>
        </div>
      </aside>
    </>
  );
}
