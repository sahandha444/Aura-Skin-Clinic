"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties, type MouseEvent } from "react";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/gallery", label: "Gallery" },
];

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const pendingHref = useRef<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const savedOverflow = useRef<string | null>(null);
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  function restoreScroll() {
    if (savedOverflow.current !== null) {
      document.body.style.setProperty("overflow", savedOverflow.current);
      savedOverflow.current = null;
    }
  }

  function finishClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
    dialogRef.current?.close();
    restoreScroll();
    setOpen(false);
    setClosing(false);
    if (pendingHref.current) {
      const href = pendingHref.current;
      pendingHref.current = null;
      router.push(href);
    }
  }

  function closeMenu() {
    if (closeTimer.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finishClose();
      return;
    }
    setClosing(true);
    closeTimer.current = setTimeout(finishClose, 320);
  }

  function openMenu() {
    if (!dialogRef.current || dialogRef.current.open) return;
    savedOverflow.current = document.body.style.overflow;
    document.body.style.setProperty("overflow", "hidden");
    dialogRef.current.showModal();
    setOpen(true);
    setClosing(false);
  }

  function navigate(event: MouseEvent<HTMLAnchorElement>, href: string) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    pendingHref.current = href;
    closeMenu();
  }

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 801px)");
    function onResize() {
      if (!desktop.matches || !dialogRef.current?.open) return;
      dialogRef.current.close();
      if (closeTimer.current) clearTimeout(closeTimer.current);
      closeTimer.current = null;
      restoreScroll();
      setOpen(false);
      setClosing(false);
    }
    desktop.addEventListener("change", onResize);
    return () => {
      desktop.removeEventListener("change", onResize);
      if (closeTimer.current) clearTimeout(closeTimer.current);
      restoreScroll();
    };
  }, []);

  return (
    <>
    <nav className="desktop-navigation" aria-label="Main navigation">
      {navigationLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          aria-current={pathname === href ? "page" : undefined}
        >
          {label}
        </Link>
      ))}
    </nav>
    <button className="menu-toggle" type="button" onClick={openMenu} aria-label="Open navigation menu" aria-expanded={open} aria-controls="mobile-navigation">
      <span className="menu-bars" aria-hidden="true"><span /><span /><span /></span>
    </button>
    <dialog
      ref={dialogRef}
      id="mobile-navigation"
      className="mobile-menu"
      aria-label="Navigation"
      data-closing={closing}
      onCancel={event => { event.preventDefault(); closeMenu(); }}
    >
      <div className="mobile-menu-top">
        <button className="menu-toggle" type="button" onClick={closeMenu} aria-label="Close navigation menu" autoFocus>
          <span className="menu-bars" data-open="true" aria-hidden="true"><span /><span /><span /></span>
        </button>
      </div>
      <div className="mobile-menu-content">
        <nav className="mobile-navigation" aria-label="Mobile navigation">
          {navigationLinks.map(({ href, label }, index) => (
            <Link key={href} href={href} onClick={event => navigate(event, href)} aria-current={pathname === href ? "page" : undefined} style={{ "--link-order": index } as CSSProperties}>
              <span>{label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </dialog>
    </>
  );
}
