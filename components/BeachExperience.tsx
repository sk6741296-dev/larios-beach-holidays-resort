'use client';

import React from 'react';
import { Compass, Footprints, Moon, SunMedium } from 'lucide-react';

export default function BeachExperience() {
  return (
    <section className="py-24 bg-ocean-950 text-white relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#d4a373_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sand-400 font-medium text-xs tracking-widest uppercase block mb-3">
            The Baga Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Steps Away from Baga Shoreline
          </h2>
          <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed">
            Immerse yourself in the golden sands, soothing waves, and vibrant coastal atmosphere that make Baga Beach one of Goa&apos;s most cherished holiday destinations.
          </p>
        </div>

        {/* 3-Card Visual Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="group rounded-2xl overflow-hidden bg-ocean-900 border border-sand-400/20 shadow-xl flex flex-col">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src="/images/beach-day.jpg"
                alt="Baga Beach Daytime Panorama"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-transparent to-transparent opacity-80" />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center space-x-1 text-xs font-semibold px-3 py-1 rounded-full bg-sand-400/90 text-ocean-950">
                  <SunMedium className="w-3.5 h-3.5" />
                  <span>Daytime Sun & Sand</span>
                </span>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Morning Beach Walks
              </h3>
              <p className="text-gray-300 text-sm font-light leading-relaxed">
                Step onto the soft sands right outside the resort for peaceful morning walks, sunbathing, and watching ocean waves.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group rounded-2xl overflow-hidden bg-ocean-900 border border-sand-400/20 shadow-xl flex flex-col">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src="/images/beach-sunset.jpg"
                alt="Baga Beach Lounge & Heart Arch"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-transparent to-transparent opacity-80" />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center space-x-1 text-xs font-semibold px-3 py-1 rounded-full bg-sand-400/90 text-ocean-950">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Lively Surroundings</span>
                </span>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Vibrant Local Atmosphere
              </h3>
              <p className="text-gray-300 text-sm font-light leading-relaxed">
                Enjoy quick access to Baga Road, nearby cafes, local markets, and North Goa&apos;s renowned coastal sights.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group rounded-2xl overflow-hidden bg-ocean-900 border border-sand-400/20 shadow-xl flex flex-col">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src="/images/beach-vibes.jpg"
                alt="Baga Beach Evening Seating"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-transparent to-transparent opacity-80" />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center space-x-1 text-xs font-semibold px-3 py-1 rounded-full bg-sand-400/90 text-ocean-950">
                  <Moon className="w-3.5 h-3.5" />
                  <span>Starlit Coastal Evenings</span>
                </span>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Evening Sea Breeze
              </h3>
              <p className="text-gray-300 text-sm font-light leading-relaxed">
                Unwind under the open evening sky with beach lounge seating, ocean sounds, and refreshing seaside ambiance.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
