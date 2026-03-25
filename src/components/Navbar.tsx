'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/sermons', label: 'Sermons' },
  { href: '/ministries', label: 'Ministries' },
  { href: '/events', label: 'Events' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
      <>
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'border-b border-white/10 bg-black/40 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl'
                    : 'bg-transparent'
            }`}
        >
          <nav
              className={`container-shell flex items-center justify-between transition-all duration-300 ${
                  scrolled ? 'py-3' : 'py-5'
              }`}
          >
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f0d77a]/30 bg-white/5">
                <span className="font-display text-sm text-[#f0d77a]">R</span>
              </div>

              <div className="leading-tight">
                <p className="font-display text-lg text-white">Royalway</p>
                <p className="text-[10px] uppercase tracking-[0.28em] text-white/45">
                  Christian Centre
                </p>
              </div>
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => {
                const active = isActive(link.href);

                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`group relative text-sm font-medium transition ${
                            active ? 'text-white' : 'text-white/75 hover:text-white'
                        }`}
                    >
                      {link.label}

                      <span
                          className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-[#f0d77a] to-[#d4af37] transition-all duration-300 ${
                              active ? 'w-full' : 'w-0 group-hover:w-full'
                          }`}
                      />
                    </Link>
                );
              })}
            </div>

            <div className="hidden md:block">
              <Link href="/give" className="gold-button button-lift text-sm">
                Give
              </Link>
            </div>

            <button
                type="button"
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
            >
            <span
                className={`absolute h-[2px] w-5 bg-white transition-all duration-300 ${
                    open ? 'rotate-45' : '-translate-y-1.5'
                }`}
            />
              <span
                  className={`absolute h-[2px] w-5 bg-white transition-all duration-300 ${
                      open ? 'opacity-0' : 'opacity-100'
                  }`}
              />
              <span
                  className={`absolute h-[2px] w-5 bg-white transition-all duration-300 ${
                      open ? '-rotate-45' : 'translate-y-1.5'
                  }`}
              />
            </button>
          </nav>
        </header>

        <div
            className={`fixed inset-0 z-40 bg-black/55 backdrop-blur-sm transition-all duration-300 md:hidden ${
                open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
            }`}
            onClick={() => setOpen(false)}
        />

        <aside
            className={`fixed right-0 top-0 z-50 h-full w-[86%] max-w-sm border-l border-white/10 bg-[#0f0911]/95 px-6 pb-8 pt-24 backdrop-blur-2xl transition-transform duration-300 md:hidden ${
                open ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                  <Link
                      key={link.href}
                      href={link.href}
                      className={`rounded-2xl border px-4 py-4 text-sm font-medium transition ${
                          active
                              ? 'border-[#f0d77a]/30 bg-[#f0d77a]/10 text-white'
                              : 'border-white/10 bg-white/5 text-white/80 hover:bg-white/10'
                      }`}
                  >
                    {link.label}
                  </Link>
              );
            })}

            <Link href="/give" className="gold-button mt-4 justify-center">
              Give
            </Link>
          </div>
        </aside>
      </>
  );
}