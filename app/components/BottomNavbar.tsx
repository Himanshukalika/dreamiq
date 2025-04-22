"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BottomNavbar: React.FC = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 flex justify-between items-center shadow-lg z-10">
      {/* Home - Trophy Icon */}
      <Link href="/" className="flex flex-col items-center">
        <div className={`w-7 h-7 mb-1 ${isActive('/') ? 'text-red-600' : 'text-gray-500'}`}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 14.63 21 12.55 21 10V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
          </svg>
        </div>
        <span className={`text-xs ${isActive('/') ? 'text-red-600' : 'text-gray-500'}`}>Home</span>
      </Link>

      {/* My Matches - Calendar Icon */}
      <Link href="/matches" className="flex flex-col items-center">
        <div className={`w-7 h-7 mb-1 ${isActive('/matches') ? 'text-red-600' : 'text-gray-500'}`}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
          </svg>
        </div>
        <span className={`text-xs ${isActive('/matches') ? 'text-red-600' : 'text-gray-500'}`}>My Matches</span>
      </Link>

      {/* Analysis - Chart Icon */}
      <Link href="/analysis" className="flex flex-col items-center">
        <div className={`w-7 h-7 mb-1 ${isActive('/analysis') ? 'text-red-600' : 'text-gray-500'}`}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
          </svg>
        </div>
        <span className={`text-xs ${isActive('/analysis') ? 'text-red-600' : 'text-gray-500'}`}>Analysis</span>
      </Link>

      {/* Refer & Win - People Icon */}
      <Link href="/refer" className="flex flex-col items-center">
        <div className={`w-7 h-7 mb-1 ${isActive('/refer') ? 'text-red-600' : 'text-gray-500'}`}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
          </svg>
        </div>
        <span className={`text-xs ${isActive('/refer') ? 'text-red-600' : 'text-gray-500'}`}>Refer & Win</span>
      </Link>

      {/* Games - Controller Icon */}
      <Link href="/games" className="flex flex-col items-center">
        <div className={`w-7 h-7 mb-1 ${isActive('/games') ? 'text-red-600' : 'text-gray-500'}`}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
          </svg>
        </div>
        <span className={`text-xs ${isActive('/games') ? 'text-red-600' : 'text-gray-500'}`}>Games</span>
      </Link>
    </div>
  );
};

export default BottomNavbar; 