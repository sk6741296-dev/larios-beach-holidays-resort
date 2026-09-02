'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Rooms from '@/components/Rooms';
import Amenities from '@/components/Amenities';
import BeachExperience from '@/components/BeachExperience';
import Dining from '@/components/Dining';
import Gallery from '@/components/Gallery';
import GuestExperiences from '@/components/GuestExperiences';
import Location from '@/components/Location';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import BookingModal from '@/components/BookingModal';

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<string>('Sea-View Balcony Room');

  const handleOpenBooking = (roomTitle?: string) => {
    if (roomTitle) {
      setSelectedRoom(roomTitle);
    }
    setBookingModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-resort-bg text-resort-dark font-sans overflow-x-hidden selection:bg-sand-400 selection:text-white">
      <Header />
      <Hero onOpenBooking={() => handleOpenBooking('Sea-View Balcony Room')} />
      <About />
      <Rooms onOpenBooking={handleOpenBooking} />
      <Amenities />
      <BeachExperience />
      <Dining />
      <Gallery />
      <GuestExperiences />
      <Location />
      <Contact />
      <Footer />
      <FloatingWhatsApp />

      {/* Interactive Booking Reservation Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        selectedRoom={selectedRoom}
      />
    </main>
  );
}
