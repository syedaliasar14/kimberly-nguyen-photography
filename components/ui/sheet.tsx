'use client';

import React from 'react';

interface SheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export function Sheet({ open, onOpenChange, children }: SheetProps) {
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />
      {/* Sheet Content */}
      <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-96 bg-background shadow-lg">
        {children}
      </div>
    </>
  );
}

interface SheetContentProps {
  children: React.ReactNode;
  onClose?: () => void;
}

export function SheetContent({ children, onClose }: SheetContentProps) {
  return (
    <div className="flex flex-col h-full">
      {children}
    </div>
  );
}

interface SheetHeaderProps {
  children: React.ReactNode;
}

export function SheetHeader({ children }: SheetHeaderProps) {
  return (
    <div className="flex items-center justify-between p-6 border-b">
      {children}
    </div>
  );
}

interface SheetTitleProps {
  children: React.ReactNode;
}

export function SheetTitle({ children }: SheetTitleProps) {
  return (
    <h2 className="font-serif text-2xl text-forest">
      {children}
    </h2>
  );
}

interface SheetTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
}

export function SheetTrigger({ children }: SheetTriggerProps) {
  return <>{children}</>;
}
