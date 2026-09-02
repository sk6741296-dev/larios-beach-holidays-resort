'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Experience', href: '#experience' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-ocean-950/90 backdrop-blur-md shadow-lg py-4 border-b border-sand-400/20'
          : 'bg-gradient-to-b from-ocean-950/80 via-ocean-950/40 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Area */}
          <a href="#hero" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full border border-sand-400/40 flex items-center justify-center bg-ocean-900/50 text-sand-400 group-hover:border-sand-400 transition-colors">
              <span className="font-serif text-lg font-bold">L</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-white leading-tight">
                LARIOS
              </span>
              <span className="text-[10px] tracking-[0.25em] text-sand-300 font-medium uppercase leading-tight">
                Beach Holidays Resort
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-200 hover:text-sand-300 transition-colors tracking-wide relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-sand-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Primary Navigation Action - ONLY Phone Number */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:+917030266663"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-sand-400 text-ocean-950 hover:bg-sand-300 transition-all font-semibold text-sm shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>+91 70302 66663</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:text-sand-300 hover:bg-ocean-900/60 focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bg-ocean-950/95 backdrop-blur-lg border-b border-sand-400/20 shadow-2xl transition-all duration-300 animate-in slide-in-from-top">
          <div className="px-6 py-8 space-y-6">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-100 hover:text-sand-300 transition-colors tracking-wide border-b border-white/5 pb-2"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-sand-400/20">
              <a
                href="tel:+917030266663"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-sand-400 text-ocean-950 hover:bg-sand-300 font-semibold text-base shadow-md"
              >
                <Phone className="w-5 h-5" />
                <span>Call +91 70302 66663</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
