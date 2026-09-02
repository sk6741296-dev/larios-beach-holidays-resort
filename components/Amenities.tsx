'use client';

import React from 'react';
import { Waves, Utensils, Car, Sun, Coffee, ConciergeBell } from 'lucide-react';

export default function Amenities() {
  const amenitiesList = [
    {
      icon: Waves,
      title: 'Outdoor Swimming Pool',
      description: 'A clean, well-maintained swimming pool with surrounding sun loungers for refreshing dips and daytime relaxation.',
    },
    {
      icon: Sun,
      title: 'Beach Proximity',
      description: 'Located right next to Baga Beach, allowing guests to step from the resort straight onto the sandy shore.',
    },
    {
      icon: Utensils,
      title: 'Beachfront Resto & Bar',
      description: 'Enjoy delicious food, refreshing drinks, and beachside seating with covered terrace dining options.',
    },
    {
      icon: Coffee,
      title: 'Breakfast Service',
      description: 'Start your morning with fresh breakfast offerings served convenient to your daily holiday schedule.',
    },
    {
      icon: Car,
      title: 'On-Site Parking',
      description: 'Hassle-free parking facilities available on property for guests traveling by car or rental vehicle.',
    },
    {
      icon: ConciergeBell,
      title: 'Room Service',
      description: 'In-room dining and guest room service available for added convenience throughout your stay.',
    },
  ];

  return (
    <section id="experience" className="py-24 bg-resort-bg relative border-t border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sand-500 font-medium text-xs tracking-widest uppercase block mb-3">
            Resort Facilities
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ocean-900 leading-tight mb-4">
            Everything for a Relaxed Stay
          </h2>
          <p className="text-gray-600 text-base sm:text-lg font-light leading-relaxed">
            Essential comforts and hospitality amenities tailored to give you a stress-free beachfront holiday in Goa.
          </p>
        </div>

        {/* Feature Grid with Large Pool Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-8">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/10] group">
              <img
                src="/images/pool.jpg"
                alt="Outdoor Swimming Pool at Larios Beach Resort"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-widest text-sand-300 font-medium">Outdoor Oasis</span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold">Refreshing Pool Area</h3>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {amenitiesList.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-lg bg-sand-100 text-sand-500 flex items-center justify-center mb-4">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-ocean-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
