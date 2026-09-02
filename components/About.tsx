'use client';

import React from 'react';
import { Waves, Sun, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-resort-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Editorial Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 text-sand-500 font-medium text-xs tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Welcome to Larios</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ocean-900 leading-tight">
              A Serene Coastal Retreat <br />
              <span className="text-sand-400 italic font-normal">at Baga Beach</span>
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-light">
              Nestled near the vibrant sands of Baga Beach in Calangute, <strong className="font-medium text-ocean-950">Larios Beach Holidays Resort</strong> offers the ideal blend of coastal calm and lively Goan hospitality. Whether you are looking to lounge beside our refreshing outdoor pool, take short walks to the beach, or savor delicious dining on the shore, our property promises a memorable stay.
            </p>

            <p className="text-gray-600 text-base leading-relaxed font-light">
              Our comfortable guest rooms feature thoughtful touches, private balconies, and select sea views designed for complete rest and relaxation. Surrounded by the iconic sights and tropical spirit of North Goa, Larios is your personal sanctuary by the sea.
            </p>

            {/* Subtle Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-sand-200/60">
              <div>
                <span className="block font-serif text-2xl font-bold text-ocean-900">Prime</span>
                <span className="text-xs text-resort-muted uppercase tracking-wider">Baga Location</span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold text-ocean-900">Outdoor</span>
                <span className="text-xs text-resort-muted uppercase tracking-wider">Swimming Pool</span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold text-ocean-900">Beachfront</span>
                <span className="text-xs text-resort-muted uppercase tracking-wider">Resto & Bar</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image Feature */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] group">
                <img
                  src="/images/lounge.jpg"
                  alt="Larios Beach Holidays Resort Luxury Lounge"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-ocean-950/80 backdrop-blur-md border border-white/10 text-white">
                  <p className="font-serif text-lg font-medium text-sand-200">Crafted for Comfort</p>
                  <p className="text-xs text-gray-300 font-light mt-1">Relaxed tropical interiors and welcoming beach resort atmosphere.</p>
                </div>
              </div>

              {/* Decorative Accent Card */}
              <div className="absolute -bottom-6 -left-6 hidden sm:block p-4 rounded-xl bg-sand-100 border border-sand-300 shadow-xl text-ocean-900 max-w-[220px]">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-sand-400 text-ocean-950">
                    <Waves className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-sand-500">Goa Vibes</span>
                    <span className="text-xs font-medium text-ocean-950">Steps to Baga Beach</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
