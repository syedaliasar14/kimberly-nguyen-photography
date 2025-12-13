'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/weddings', label: 'Weddings' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when at top of page
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else {
        // Show header when scrolling up, hide when scrolling down
        setIsVisible(lastScrollY > currentScrollY);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  if (pathname.startsWith('/studio')) { return null; }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-stone-900 backdrop-blur-sm transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="w-full mx-auto py-2 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <button onClick={() => setIsMenuOpen(true)} className="group" aria-label="Toggle menu">
            <MenuIcon className="w-6 h-6 text-white hover:text-accent transition-colors" />
          </button>
          <Link href="/contact" className="btn border-1 bg-white py-1 px-6 text-sm text-primary border-white hover:bg-transparent hover:text-white hover:border-white">
            Get in Touch
          </Link>
        </div>
      </div>

      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetContent side="left">
          <SheetHeader className='pt-10 pb-0'>
            <SheetTitle>
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <Image src="/black-logo.svg" alt="Kimberly Nguyen Photography" width={50} height={50} className="mx-8 w-14" />
              </Link>
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col p-6 px-12 gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg hover:text-secondary transition-colors font-sans tracking-widest"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <SheetFooter>
            <p className="text-muted-foreground text-xs text-center font-sans">
              © {new Date().getFullYear()} Kimberly Nguyen Photography, LLC.
              <br />
              All rights reserved.
            </p>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </nav>
  );
};