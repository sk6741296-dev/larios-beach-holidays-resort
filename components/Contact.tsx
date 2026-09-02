'use client';

import React from 'react';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const phone = '+91 70302 66663';
  const rawPhone = '917030266663';
  const whatsappUrl = `https://wa.me/${rawPhone}?text=${encodeURIComponent(
    'Hello Larios Beach Holidays Resort, I would like to inquire about accommodation details.'
  )}`;

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-ocean-950 rounded-3xl overflow-hidden shadow-2xl text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Info Column */}
            <div className="lg:col-span-6 p-8 sm:p-14 space-y-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-sand-400/20">
              <div>
                <span className="text-sand-400 font-medium text-xs tracking-widest uppercase block mb-3">
                  Direct Inquiries
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
                  Get in Touch with Us
                </h2>
                <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed">
                  We are here to assist with your inquiries about stays, room availability, and resort amenities. Contact us directly via phone or WhatsApp.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-sand-400/20 text-sand-300 shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-white text-base">Resort Address</h4>
                    <p className="text-gray-300 text-xs sm:text-sm font-light mt-0.5 leading-relaxed">
                      Larios Beach Holidays Resort <br />
                      Calangute - Baga Rd, near La Calypso, Baga, Calangute, Goa 403516, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-sand-400/20 text-sand-300 shrink-0 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-white text-base">Phone Line</h4>
                    <p className="text-sand-300 font-semibold text-sm sm:text-base mt-0.5">
                      {phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-sand-400/20 text-sand-300 shrink-0 mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-white text-base">Front Desk Hours</h4>
                    <p className="text-gray-300 text-xs sm:text-sm font-light mt-0.5">
                      Front desk available for guest assistance & check-in
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-sand-400/20">
                <p className="text-xs text-gray-400">
                  Larios Beach Holidays Resort — Baga Beach, Calangute, Goa
                </p>
              </div>
            </div>

            {/* Right Action Column */}
            <div className="lg:col-span-6 p-8 sm:p-14 flex flex-col justify-center space-y-8 bg-ocean-900/60">
              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-white">
                  Connect Directly
                </h3>
                <p className="text-gray-300 text-sm font-light">
                  Choose your preferred method to contact our resort front desk team immediately.
                </p>
              </div>

              <div className="space-y-4">
                {/* Direct Call Button */}
                <a
                  href={`tel:${phone}`}
                  className="w-full flex items-center justify-center space-x-3 px-8 py-4 rounded-full bg-sand-400 hover:bg-sand-300 text-ocean-950 font-bold text-base transition-all shadow-xl hover:shadow-2xl"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Resort +91 70302 66663</span>
                </a>

                {/* WhatsApp Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-3 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base transition-all shadow-xl hover:shadow-2xl"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp (+91 70302 66663)</span>
                </a>
              </div>

              <div className="p-6 rounded-2xl bg-ocean-950/80 border border-sand-400/20 text-center">
                <p className="text-xs text-sand-300 leading-relaxed font-light">
                  For room availability, beachside dining inquiries, or directions, our friendly staff is ready to assist you.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
