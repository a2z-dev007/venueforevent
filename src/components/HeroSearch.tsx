"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Sparkles, Home as HomeIcon, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import PremiumLocationSelect from '@/components/ui/PremiumLocationSelect';
import PremiumSelect from '@/components/ui/PremiumSelect';
import PremiumDatePicker from '@/components/ui/PremiumDatePicker';
import { useVenueTypes, useEventTypes } from '@/hooks/useSearchBarData';

const GUEST_OPTIONS = [
  { value: '100', label: '0–100' },
  { value: '300', label: '100–300' },
  { value: '600', label: '300–600' },
  { value: '601', label: '600+' },
];

/** Thin glass skeleton shown while a dropdown is loading from the API */
function DropdownSkeleton({ label }: { label: string }) {
  return (
    <div className="flex flex-col px-4 py-2.5">
      <span className="text-[10px] uppercase tracking-widest text-white/50 font-black mb-1">{label}</span>
      <div className="h-4 w-24 rounded-full bg-white/20 animate-pulse" />
    </div>
  );
}

export default function HeroSearch() {
  const router = useRouter();

  // ── Local form state ────────────────────────────────────────────────────────
  const [location, setLocation] = useState<any>(null);
  const [venueType, setVenueType]  = useState<any>(null);
  const [eventType, setEventType]  = useState<any>(null);
  const [date, setDate]            = useState<Date | null>(null);
  const [guests, setGuests]        = useState<any>(null);

  // ── TanStack Query — cached for 1 hour, refetch-free ───────────────────────
  const {
    data: venueOptions = [],
    isLoading: venueLoading,
  } = useVenueTypes();

  const {
    data: eventOptions = [],
    isLoading: eventLoading,
  } = useEventTypes();
  
  // -- Dropdown management state to ensure only one is open at a time --
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (location?.value) {
      params.set('city', location.value.toString());
      if (location.label) params.set('cityName', location.label.toString());
    }
    if (venueType?.value) params.set('venue_type', venueType.value.toString());
    if (eventType?.value) params.set('event_type', eventType.value.toString());
    if (date) {
      params.set('date', date.toISOString().split('T')[0]);
    }
    if (guests?.value) params.set('guests', guests.value.toString());

    router.push(`/events/search${params.toString() ? '?' + params.toString() : ''}`);
  };

  return (
    <div className="relative w-full mx-auto z-40 mt-4" ref={searchContainerRef}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full"
      >
        <div
          className="glass-dark rounded-[32px] p-4 md:p-6 lg:p-8 relative z-10 w-full shadow-[0_40px_80px_rgba(0,0,0,0.6)] border border-white/20 backdrop-blur-2xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {/* Location */}
            <div className="flex items-center hover:bg-white/10 transition-colors group rounded-2xl border border-white/10 bg-white/5">
              <PremiumLocationSelect
                value={location}
                onChange={setLocation}
                className="w-full"
                containerClassName="px-4 py-2"
                variant="glass"
                menuIsOpen={activeMenu === 'location'}
                onMenuOpen={() => setActiveMenu('location')}
                onMenuClose={() => setActiveMenu(null)}
              />
            </div>

            {/* Event Type */}
            {eventLoading ? (
              <div className="flex items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-2">
                <DropdownSkeleton label="Event Type" />
              </div>
            ) : (
              <PremiumSelect
                label="Event Type"
                icon={<Sparkles className="w-5 h-5 text-champagne" />}
                options={eventOptions}
                value={eventType}
                onChange={setEventType}
                placeholder="Any Event"
                className="flex-1 transition-all group"
                containerClassName="px-4 py-2 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10"
                variant="glass"
                menuIsOpen={activeMenu === 'eventType'}
                onMenuOpen={() => setActiveMenu('eventType')}
                onMenuClose={() => setActiveMenu(null)}
              />
            )}

            {/* Guests */}
            <PremiumSelect
              label="Guests"
              icon={<Users className="w-5 h-5 text-champagne" />}
              options={GUEST_OPTIONS}
              value={guests}
              onChange={setGuests}
              placeholder="Guest Count"
              className="flex-1 transition-all group"
              containerClassName="px-4 py-2 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10"
              variant="glass"
              menuIsOpen={activeMenu === 'guests'}
              onMenuOpen={() => setActiveMenu('guests')}
              onMenuClose={() => setActiveMenu(null)}
            />

            {/* Search Button */}
            <div className="flex">
              <button
                onClick={handleSearch}
                className="btn-luxury w-full cursor-pointer flex items-center justify-center gap-3 rounded-2xl py-5 text-lg font-black tracking-widest text-white shadow-2xl uppercase transition-all hover:scale-[1.02]"
              >
                <Search className="h-5 w-5" strokeWidth={3} />
                Find Venue
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
