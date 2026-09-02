'use client';

import React from 'react';
import { ArrowDown, MapPin, CalendarCheck } from 'lucide-react';

interface HeroProps {
  onOpenBooking?: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="Larios Beach Holidays Resort Swimming Pool"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-10000 ease-out"
        />
        {/* Cinematic Multi-layered Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-ocean-950/40 to-ocean-950/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-sand-400/20 backdrop-blur-md border border-sand-400/30 text-sand-200 text-xs sm:text-sm font-medium tracking-widest uppercase mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <MapPin className="w-3.5 h-3.5 text-sand-400" />
          <span>Baga Beach, Goa</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6 animate-in fade-in slide-in-from-bottom-6 duration-1000">
          Your Beachside Escape <br className="hidden sm:inline" />
          <span className="text-sand-300 italic font-normal">in Baga</span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-xl text-gray-200 font-light leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Unwind in comfort steps from the sands of Baga Beach. Enjoy relaxing poolside days, spacious rooms, and beachfront dining in the heart of North Goa.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-sand-400 hover:bg-sand-300 text-ocean-950 font-bold text-base transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 cursor-pointer"
          >
            <CalendarCheck className="w-5 h-5" />
            <span>Book Your Stay</span>
          </button>
          <a
            href="#rooms"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-medium text-base transition-all"
          >
            Explore the Resort
          </a>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-white/70 hover:text-white transition-colors">
        <a href="#about" aria-label="Scroll down to About section" className="flex flex-col items-center space-y-2 group">
          <span className="text-xs uppercase tracking-widest text-sand-200/80 font-medium">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-sand-400" />
        </a>
      </div>
    </section>
  );
}
