'use client';

import React from 'react';
import { Wind, Coffee, Eye, Utensils, Phone, CalendarCheck } from 'lucide-react';

interface RoomsProps {
  onOpenBooking?: (roomTitle?: string) => void;
}

export default function Rooms({ onOpenBooking }: RoomsProps) {
  const rooms = [
    {
      title: 'Sea-View Balcony Room',
      subtitle: 'Upgraded Coastal Accommodation',
      description: 'Spacious air-conditioned room featuring a private balcony overlooking the ocean horizon of Baga Beach. Perfect for enjoying sea breezes and sunset views.',
      image: '/images/room-seaview.jpg',
      highlights: ['Private Balcony', 'Sea View', 'Air Conditioned', 'Room Service'],
    },
    {
      title: 'Tropical Suite with Balcony',
      subtitle: 'Relaxed & Elegant Stay',
      description: 'Elegantly furnished room designed with warm coastal decor, comfortable canopy bed, and outdoor seating area for a soothing holiday retreat.',
      image: '/images/room-suite.jpg',
      highlights: ['Tropical Decor', 'Private Balcony', 'Air Conditioned', 'Pool View'],
    },
    {
      title: 'Comfort Canopy Room',
      subtitle: 'Restful Resort Living',
      description: 'Thoughtfully appointed bedroom featuring plush bedding, tasteful furnishings, and easy access to resort amenities and the swimming pool.',
      image: '/images/room-canopy.jpg',
      highlights: ['Four-Poster Bed', 'Balcony Access', 'En-Suite Bathroom', 'Daily Housekeeping'],
    },
  ];

  const roomAmenities = [
    { icon: Wind, label: 'Air-Conditioned Comfort' },
    { icon: Eye, label: 'Select Sea Views' },
    { icon: Utensils, label: 'In-Room Dining Service' },
    { icon: Coffee, label: 'Breakfast Available' },
  ];

  return (
    <section id="rooms" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sand-500 font-medium text-xs tracking-widest uppercase block mb-3">
            Accommodation & Stay
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ocean-900 leading-tight mb-4">
            Comfortable & Relaxing Rooms
          </h2>
          <p className="text-gray-600 text-base sm:text-lg font-light leading-relaxed">
            Designed for ease and tranquility, our rooms provide a restful refuge after a day of beach activities and exploring Goa.
          </p>
        </div>

        {/* Rooms Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {rooms.map((room, idx) => (
            <div
              key={idx}
              className="bg-resort-bg rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-ocean-950/80 backdrop-blur-md text-sand-300 text-xs px-3 py-1 rounded-full font-medium border border-sand-400/30">
                  {room.subtitle}
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-ocean-900 mb-2">
                    {room.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
                    {room.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {room.highlights.map((item, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-sand-100 text-ocean-900 border border-sand-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Booking CTA Buttons on Room Cards */}
                <div className="pt-4 border-t border-gray-200/60 flex items-center gap-3">
                  <button
                    onClick={() => onOpenBooking && onOpenBooking(room.title)}
                    className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-3 rounded-full bg-sand-400 hover:bg-sand-300 text-ocean-950 font-bold text-xs transition-all shadow-sm cursor-pointer"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    <span>Book Room</span>
                  </button>
                  <a
                    href="tel:+917030266663"
                    className="inline-flex items-center justify-center p-3 rounded-full bg-ocean-900 hover:bg-ocean-800 text-white transition-colors"
                    title="Call Front Desk for Booking"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bathroom Highlight Feature */}
        <div className="mt-16 bg-ocean-950 rounded-2xl overflow-hidden shadow-2xl text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
              <span className="text-sand-400 font-medium text-xs tracking-widest uppercase">
                Modern Facilities
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Clean, Well-Maintained Bathrooms & Amenities
              </h3>
              <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed">
                Every accommodation at Larios Beach Holidays Resort features clean, hygienic en-suite bathrooms equipped with hot shower facilities and modern fixtures to ensure a comfortable stay.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {roomAmenities.map((amenity, index) => {
                  const IconComp = amenity.icon;
                  return (
                    <div key={index} className="flex items-center space-x-2 text-sand-200 text-xs font-medium">
                      <IconComp className="w-4 h-4 text-sand-400 shrink-0" />
                      <span>{amenity.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="lg:col-span-5 aspect-[4/3] lg:aspect-square relative">
              <img
                src="/images/room-bath.jpg"
                alt="En-Suite Luxury Bathroom at Larios Resort"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
