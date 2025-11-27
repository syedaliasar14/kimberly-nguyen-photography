"use client";

import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";

export default function InstagramFeed() {
  useEffect(() => {
    // Load Behold script
    const script = document.createElement('script');
    script.src = 'https://w.behold.so/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-6xl text-primary mb-8">
          Follow the Journey
        </h2>
        <p className="text-muted-foreground mb-12 text-lg">
          [insert instagram]
        </p>

        {/* Behold Instagram Feed */}
        <div className="mb-12">
          <figure
            data-behold-id="YOUR_BEHOLD_ID_HERE"
            style={{ margin: 0 }}
          ></figure>
          {/* <figure
            data-behold-id="YOUR_BEHOLD_ID_HERE"
            data-behold-layout="grid"
            data-behold-columns="4"
            data-behold-rows="2"
            style={{ margin: 0 }}
          ></figure> */}
        </div>

        <Link
          href="https://www.instagram.com/keemkaptures/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-primary hover:text-accent transition-colors text-lg font-medium"
        >
          <span>@keemkaptures</span>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </Link>

        <Image
          src="/camera-line-art.svg"
          alt="Camera Line Art"
          width={800} height={800}
          className="w-56 h-auto mx-auto mt-8 select-none pointer-events-none"
        />
      </div>
    </section>
  );
}
