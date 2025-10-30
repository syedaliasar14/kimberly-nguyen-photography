'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle } from '@/components/ui/sheet';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/weddings', label: 'Weddings' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/blog', label: 'Blog' },
] as const;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/20 backdrop-blur-sm">
      <div className="w-full mx-auto p-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <button onClick={() => setIsMenuOpen(true)} className="p-2 group" aria-label="Toggle menu">
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className="block h-0.5 w-6 bg-secondary transition-all group-hover:bg-accent" />
              <span className="block h-0.5 w-6 bg-secondary transition-all my-1 group-hover:bg-accent" />
              <span className="block h-0.5 w-6 bg-secondary transition-all group-hover:bg-accent" />
            </div>
          </button>
        </div>
      </div>

      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle></SheetTitle>
          </SheetHeader>
          <div className="flex flex-col p-6 px-12 gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg hover:text-accent transition-colors font-jost tracking-widest"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <SheetFooter>
            <p className="text-muted-foreground text-xs text-center">
              © {new Date().getFullYear()} Kimberly Nguyen Photography.
              <br />
              All rights reserved.
            </p>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </nav>
  );
};
