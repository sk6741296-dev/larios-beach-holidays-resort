'use client';

import React, { useState } from 'react';
import { X, User, Phone, Mail, CheckCircle2, Building, Sparkles } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRoom?: string;
}

export default function BookingModal({ isOpen, onClose, selectedRoom = 'Sea-View Balcony Room' }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: '2 Guests',
    roomType: selectedRoom,
    specialRequests: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      checkIn: '',
      checkOut: '',
      guests: '2 Guests',
      roomType: 'Sea-View Balcony Room',
      specialRequests: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-ocean-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative max-w-2xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden my-8 border border-sand-300/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Banner */}
        <div className="bg-ocean-950 text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center space-x-2 text-sand-400 font-medium text-xs tracking-widest uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Reservation Request</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Book Your Stay in Baga
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm font-light mt-1">
            Larios Beach Holidays Resort — Baga Beach, Calangute, Goa
          </p>
        </div>

        {/* Content Form or Confirmation */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h4 className="font-serif text-2xl font-bold text-ocean-900">
                  Booking Request Received!
                </h4>
                <p className="text-gray-600 text-sm font-light max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="font-semibold text-ocean-950">{formData.name || 'Guest'}</strong>. Our front desk team at Larios Beach Holidays Resort will contact you shortly at <strong className="text-sand-500 font-semibold">{formData.phone || '+91 70302 66663'}</strong> to confirm your dates and reservation details.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-resort-bg border border-sand-200 text-xs text-gray-600 max-w-md mx-auto text-left space-y-1">
                <p><strong>Room Category:</strong> {formData.roomType}</p>
                <p><strong>Check-In:</strong> {formData.checkIn || 'To be confirmed'}</p>
                <p><strong>Check-Out:</strong> {formData.checkOut || 'To be confirmed'}</p>
                <p><strong>Guests:</strong> {formData.guests}</p>
              </div>

              <div>
                <button
                  onClick={handleReset}
                  className="px-8 py-3.5 rounded-full bg-ocean-900 hover:bg-ocean-800 text-white font-semibold text-sm transition-all shadow-md"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ocean-900 mb-1.5">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-sand-400 focus:border-transparent text-ocean-950"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ocean-900 mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-sand-400 focus:border-transparent text-ocean-950"
                    />
                  </div>
                </div>
              </div>

              {/* Email & Room Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ocean-900 mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-sand-400 focus:border-transparent text-ocean-950"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ocean-900 mb-1.5">
                    Room Preference
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      value={formData.roomType}
                      onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-sand-400 focus:border-transparent text-ocean-950 bg-white"
                    >
                      <option value="Sea-View Balcony Room">Sea-View Balcony Room</option>
                      <option value="Tropical Suite with Balcony">Tropical Suite with Balcony</option>
                      <option value="Comfort Canopy Room">Comfort Canopy Room</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Dates & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ocean-900 mb-1.5">
                    Check-In Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-sand-400 focus:border-transparent text-ocean-950"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ocean-900 mb-1.5">
                    Check-Out Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.checkOut}
                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-sand-400 focus:border-transparent text-ocean-950"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ocean-900 mb-1.5">
                    Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-sand-400 focus:border-transparent text-ocean-950 bg-white"
                  >
                    <option value="1 Guest">1 Guest</option>
                    <option value="2 Guests">2 Guests</option>
                    <option value="3 Guests">3 Guests</option>
                    <option value="4+ Family Stay">4+ Family Stay</option>
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ocean-900 mb-1.5">
                  Special Requests / Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Mention any arrival time preferences, extra beds, or balcony view requests..."
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-sand-400 focus:border-transparent text-ocean-950 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-sand-400 hover:bg-sand-300 text-ocean-950 font-bold text-base transition-all shadow-lg hover:shadow-xl"
                >
                  Submit Reservation Request
                </button>
              </div>

              <p className="text-center text-[11px] text-gray-500 font-light">
                Direct booking request sent to Larios Beach Holidays Resort front desk (+91 70302 66663).
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
