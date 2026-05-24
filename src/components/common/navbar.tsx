"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/products" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact" },
];

function UserIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 21a8 8 0 10-16 0"
      />
      <circle cx="12" cy="8" r="3.25" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 4h2l2.2 10.5A2 2 0 009.15 16h7.7a2 2 0 001.95-1.55L20 8H6.2"
      />
      <circle cx="10" cy="20" r="1.4" />
      <circle cx="17" cy="20" r="1.4" />
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname() || "/";

  return (
    <header className="border-b border-black/10 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-serif  text-3xl font-black uppercase tracking-tight text-black sm:text-4xl"
        >
          Pure Provenance
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-10 md:flex"
        >
          {navigationItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            const base = "text-[15px] font-medium transition-colors";
            const normal = "text-black/70 hover:text-black";
            const active =
              "underline decoration-black underline-offset-4 text-black";

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`${base} ${isActive ? active : normal}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4 text-black">
          <button
            type="button"
            aria-label="Account"
            className="transition-opacity hover:opacity-70"
          >
            <UserIcon />
          </button>
          <button
            type="button"
            aria-label="Cart"
            className="transition-opacity hover:opacity-70"
          >
            <CartIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
