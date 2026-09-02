'use client';

import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Experience', href: '#experience' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-ocean-950 text-white border-t border-sand-400/20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-sand-400/10">
          
          {/* Business Info Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full border border-sand-400/40 flex items-center justify-center bg-ocean-900 text-sand-400">
                <span className="font-serif text-lg font-bold">L</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-wide text-white leading-tight">
                  LARIOS
                </span>
                <span className="text-[9px] tracking-[0.25em] text-sand-300 font-medium uppercase leading-tight">
                  Beach Holidays Resort
                </span>
              </div>
            </div>

            <p className="text-gray-300 text-xs sm:text-sm font-light max-w-md leading-relaxed">
              A relaxed beachside resort near Baga Beach in Calangute, Goa. Offering comfortable rooms, outdoor swimming pool, sea views, and beachfront dining.
            </p>

            <div className="text-xs text-gray-400 space-y-1">
              <p>Calangute - Baga Rd, near La Calypso, Baga, Calangute, Goa 403516, India</p>
              <p>Phone: <a href="tel:+917030266663" className="text-sand-300 hover:underline">+91 70302 66663</a></p>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-6 flex flex-col md:items-end justify-start space-y-4">
            <h4 className="font-serif font-bold text-sand-300 text-sm uppercase tracking-wider">
              Quick Navigation
            </h4>
            <nav className="flex flex-wrap gap-x-6 gap-y-3 justify-start md:justify-end">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs text-gray-300 hover:text-sand-300 transition-colors font-medium tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {currentYear} Larios Beach Holidays Resort. All rights reserved.</p>
          <p className="text-gray-400">Baga Beach, Calangute, Goa</p>
        </div>

      </div>
    </footer>
  );
}
