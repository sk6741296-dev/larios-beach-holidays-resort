'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/917030266663?text=${encodeURIComponent(
    'Hello Larios Beach Holidays Resort, I would like to inquire about accommodation details.'
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 ease-in-out text-xs font-bold tracking-wide">
        WhatsApp Us
      </span>
    </a>
  );
}
