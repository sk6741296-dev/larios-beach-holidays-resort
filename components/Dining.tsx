'use client';

import React from 'react';
import { UtensilsCrossed, Wine, Flame, Sparkles } from 'lucide-react';

export default function Dining() {
  return (
    <section id="dining" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Heading Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-sand-500 font-medium text-xs tracking-widest uppercase block">
              Culinary & Cocktails
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ocean-900 leading-tight">
              Beachfront Dining <br />
              <span className="text-sand-400 italic font-normal">at Cafe Laval</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg font-light leading-relaxed">
              Experience beachfront dining at <strong className="font-medium text-ocean-950">Cafe Laval Bar & Resto</strong>. Situated directly adjacent to the resort, offering delicious meals, refreshing drinks, and scenic outdoor seating right by the Baga shore.
            </p>
            <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed">
              Whether relaxing under the covered terrace during sunny daytime hours or enjoying magical fairy light seating in the evening, Cafe Laval provides a memorable Goan dining ambiance.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-sand-100 text-sand-500 flex items-center justify-center">
                  <UtensilsCrossed className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-ocean-900 uppercase">Covered Terrace</span>
                  <span className="text-xs text-gray-500 font-light">Shaded Dining Area</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-sand-100 text-sand-500 flex items-center justify-center">
                  <Wine className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-ocean-900 uppercase">Beach Bar</span>
                  <span className="text-xs text-gray-500 font-light">Drinks & Spirits</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
              <img
                src="/images/dining-day.jpg"
                alt="Cafe Laval Beachfront Restaurant at Larios Resort"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-widest text-sand-300 font-medium">Baga Beachfront</span>
                <h3 className="font-serif text-2xl font-bold">Cafe Laval Bar & Resto</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Night & Ambience Gallery Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[16/10] group">
            <img
              src="/images/dining-night.jpg"
              alt="Cafe Laval Illuminated Night Resto"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/80 via-ocean-950/20 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <span className="text-xs font-medium text-sand-300 uppercase tracking-widest">Evening Dining</span>
              <h4 className="font-serif text-xl font-bold">Illuminated Beach Front Resto</h4>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[16/10] group">
            <img
              src="/images/dining-ambience.jpg"
              alt="Magical Beach Fairy Lights Lounge"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/80 via-ocean-950/20 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <span className="text-xs font-medium text-sand-300 uppercase tracking-widest">Coastal Atmosphere</span>
              <h4 className="font-serif text-xl font-bold">Fairy Lights & Beach Lounging</h4>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
