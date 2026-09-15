"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/content/site";
import { HeaderPlayer, ListenButton } from "./AudioPlayer";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => { setOpen(false); }, [pathname]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const navItems = nav.filter((item) => !item.hideInNav);

  return (
    <>
      <header className={`hdr ${scrolled ? "hdr--scrolled" : ""}`}>
        <div className="wrap hdr__inner">
          <Link href="/" className="brand" aria-label="The Rumble, home">
            The&nbsp;<b>Rumble</b>
          </Link>

          <nav className="nav">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={isActive(item.href) ? "active" : ""}
              >
                {item.label}
              </Link>
            ))}
            <ListenButton className="btn btn--primary nav__cta" />
          </nav>

          <Link href="/contact#mailing-list" className="navpill">
            <span className="navpill__join">Join&nbsp;</span>Mailing List
          </Link>

          <HeaderPlayer />

          <button
            className="burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </header>

      <div className={`mobilemenu ${open ? "open" : ""}`}>
        <Link href="/">Home</Link>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}
