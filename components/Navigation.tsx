'use client';
import Link from 'next/link';
import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="font-serif text-2xl text-forest">
            Kimberly Nguyen
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-forest transition-colors">
              Home
            </Link>
            <Link href="/weddings" className="text-foreground hover:text-forest transition-colors">
              Weddings
            </Link>
            <Link href="/about" className="text-foreground hover:text-forest transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-foreground hover:text-forest transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block h-0.5 w-6 bg-foreground transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
              <span className={`block h-0.5 w-6 bg-foreground transition-all my-1 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-foreground transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 pt-2">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-foreground hover:text-forest transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/weddings" 
                className="text-foreground hover:text-forest transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Weddings
              </Link>
              <Link 
                href="/about" 
                className="text-foreground hover:text-forest transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-foreground hover:text-forest transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;