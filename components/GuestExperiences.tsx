'use client';

import React from 'react';
import { Quote } from 'lucide-react';

export default function GuestExperiences() {
  const guestReviews = [
    {
      name: 'Aditya Dahihande',
      stay: 'Verified Guest',
      comment:
        'Had a wonderful stay at Larios Beach Holidays, Baga! The location is fantastic right by Baga Beach, with beautiful sea views and a great atmosphere. The rooms were comfortable and the staff were friendly and helpful. The beachfront restaurant and lively surroundings made the experience even better.',
    },
    {
      name: 'Aaftab Shaikh',
      stay: 'Verified Guest',
      comment:
        'The rooms were nice, clean, and comfortable, and the swimming pool area was also very well maintained. The front office staff were extremely cooperative and helpful throughout our stay.',
    },
    {
      name: 'Kishor Nagargoje',
      stay: 'Verified Guest',
      comment:
        'We had a wonderful stay at the resort. The ambience was beautiful, the rooms were clean and comfortable, and the staff was friendly and helpful. The food was delicious, and the overall service was excellent. We really enjoyed the peaceful atmosphere and the facilities provided.',
    },
    {
      name: 'Shivraj Patil',
      stay: 'Verified Guest',
      comment:
        'Had a wonderful stay at Larios Beach Holidays, Baga. The location is fantastic right by Baga Beach with beautiful sea views and a great atmosphere. Comfortable rooms and a truly memorable stay in Goa.',
    },
    {
      name: 'Sunil Nagargoje',
      stay: 'Verified Guest',
      comment:
        'We had a wonderful experience at the resort. Special thanks to the resort team for their warm hospitality, helpfulness, and excellent service. Everyone made us feel comfortable and welcome throughout our stay.',
    },
    {
      name: 'Bibhishan Mote',
      stay: 'Verified Guest',
      comment:
        'We had a wonderful stay at the resort. The location was beautiful, the rooms were clean and comfortable, and the staff were friendly and helpful throughout our visit. The food and overall ambience were excellent.',
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sand-500 font-medium text-xs tracking-widest uppercase block mb-3">
            Guest Testimonials
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ocean-900 leading-tight mb-4">
            Guest Experiences
          </h2>
          <p className="text-gray-600 text-base sm:text-lg font-light leading-relaxed">
            Read authentic impressions from guests who have stayed with us at Larios Beach Holidays Resort.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guestReviews.map((review, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-resort-bg border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-sand-100 text-sand-500 flex items-center justify-center mb-6">
                  <Quote className="w-5 h-5" />
                </div>
                <p className="text-gray-700 text-sm sm:text-base font-light leading-relaxed italic mb-6">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-ocean-900 text-base">
                    {review.name}
                  </h4>
                  <span className="text-xs text-sand-500 font-medium">{review.stay}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
