'use client';

import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function Gallery() {
  const galleryImages = [
    { src: '/images/hero.jpg', title: 'Outdoor Swimming Pool & Reflection', category: 'Pool & Property' },
    { src: '/images/room-seaview.jpg', title: 'Sea-View Room with Ocean Balcony', category: 'Rooms' },
    { src: '/images/room-suite.jpg', title: 'Tropical Suite Bedroom with Balcony', category: 'Rooms' },
    { src: '/images/dining-day.jpg', title: 'Cafe Laval Beachfront Dining', category: 'Dining' },
    { src: '/images/pool.jpg', title: 'Resort Swimming Pool & Sun Deck', category: 'Pool & Property' },
    { src: '/images/lounge.jpg', title: 'Boho Resort Interior Lounge', category: 'Property' },
    { src: '/images/beach-day.jpg', title: 'Baga Beach Golden Shoreline', category: 'Beach' },
    { src: '/images/dining-night.jpg', title: 'Cafe Laval Resto at Night', category: 'Dining' },
    { src: '/images/reception.jpg', title: 'Resort Reception & Entrance', category: 'Property' },
    { src: '/images/room-bath.jpg', title: 'En-Suite Bathroom with Bathtub', category: 'Rooms' },
    { src: '/images/dining-ambience.jpg', title: 'Beachfront Night Fairy Light Seating', category: 'Dining' },
    { src: '/images/room-canopy.jpg', title: 'Comfort Canopy Bedroom', category: 'Rooms' },
  ];

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Keyboard navigation & Esc key support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, galleryImages.length]);

  return (
    <section id="gallery" className="py-24 bg-resort-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sand-500 font-medium text-xs tracking-widest uppercase block mb-3">
            Visual Showcase
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ocean-900 leading-tight mb-4">
            Resort Gallery
          </h2>
          <p className="text-gray-600 text-base sm:text-lg font-light leading-relaxed">
            Take a glance inside Larios Beach Holidays Resort, featuring our rooms, swimming pool, beachfront restaurant, and Baga surroundings.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxIndex(idx)}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group bg-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-ocean-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
                <div className="flex justify-end">
                  <div className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <span className="text-[11px] font-medium uppercase tracking-widest text-sand-300 block mb-1">
                    {img.category}
                  </span>
                  <h4 className="font-serif text-lg font-bold leading-tight">
                    {img.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-ocean-950/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Modal Container */}
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute -top-12 right-0 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Main Lightbox Image */}
            <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl bg-black flex items-center justify-center">
              <img
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].title}
                className="max-h-[75vh] w-auto max-w-full object-contain mx-auto"
              />

              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-ocean-950/70 text-white hover:bg-sand-400 hover:text-ocean-950 transition-colors shadow-lg"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-ocean-950/70 text-white hover:bg-sand-400 hover:text-ocean-950 transition-colors shadow-lg"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Caption */}
            <div className="w-full text-center mt-4 text-white">
              <p className="font-serif text-lg font-medium">{galleryImages[lightboxIndex].title}</p>
              <p className="text-xs text-sand-300 uppercase tracking-widest mt-1">
                Image {lightboxIndex + 1} of {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
