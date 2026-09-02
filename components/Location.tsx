'use client';

import React from 'react';
import { MapPin, Phone, Navigation } from 'lucide-react';

export default function Location() {
  const mapDirectionsUrl =
    'https://www.google.com/maps/search/?api=1&query=Larios+Beach+Holidays+Resort+Baga+Goa&query_place_id=ChIJHVyNNBzqvzsRe5e1cRg6FH4';

  return (
    <section id="location" className="py-24 bg-resort-bg relative border-t border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-sand-500 font-medium text-xs tracking-widest uppercase block mb-3">
                Resort Location
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ocean-900 leading-tight mb-4">
                Find Us in Baga, Goa
              </h2>
              <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed">
                Conveniently situated on Calangute - Baga Road near La Calypso, giving guests easy access to both quiet beach relaxation and the lively heart of North Goa.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-white border border-gray-100 shadow-sm flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-sand-100 text-sand-500 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-ocean-900 text-sm mb-1">
                    Exact Address
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm font-light leading-relaxed">
                    Calangute - Baga Rd, near La Calypso, Baga, Calangute, Goa 403516, India
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white border border-gray-100 shadow-sm flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-sand-100 text-sand-500 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-ocean-900 text-sm mb-1">
                    Direct Phone Line
                  </h4>
                  <a
                    href="tel:+917030266663"
                    className="text-sand-500 hover:text-ocean-900 font-semibold text-sm transition-colors"
                  >
                    +91 70302 66663
                  </a>
                </div>
              </div>
            </div>

            <div>
              <a
                href={mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-ocean-900 hover:bg-ocean-800 text-white font-semibold text-sm transition-all shadow-lg hover:shadow-xl"
              >
                <Navigation className="w-4 h-4 text-sand-400" />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Embed Visual */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 aspect-[16/10] bg-gray-100">
              <iframe
                title="Larios Beach Holidays Resort Google Map"
                src="https://maps.google.com/maps?q=15.5602094,73.7509447&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-[0.9]"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
