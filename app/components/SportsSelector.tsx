"use client";

import React, { useState, useRef, useEffect } from 'react';

const SportsSelector: React.FC = () => {
  const [selectedSport, setSelectedSport] = useState('cricket');
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const sportOptions = [
    {
      id: 'cricket',
      name: 'Cricket',
      icon: '🏏',
    },
    {
      id: 'football',
      name: 'Football',
      icon: '⚽',
    },
    {
      id: 'basketball',
      name: 'Basketball',
      icon: '🏀',
    },
    {
      id: 'baseball',
      name: 'Baseball',
      icon: '⚾',
    },
    {
      id: 'hockey',
      name: 'Hockey',
      icon: '🏑',
    },
    {
      id: 'tennis',
      name: 'Tennis',
      icon: '🎾',
    },
    {
      id: 'golf',
      name: 'Golf',
      icon: '⛳',
    },
  ];

  // Handle mouse down event for drag scrolling
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    
    // Prevent default behavior
    e.preventDefault();
  };

  // Handle touch start event for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  // Handle mouse move event
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
    
    // Prevent default behavior
    e.preventDefault();
  };

  // Handle touch move event
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
    
    // Prevent default behavior
    e.preventDefault();
  };

  // Handle mouse up/leave events
  const handleDragEnd = () => {
    setIsDragging(false);
  };

  // Apply cursor styles based on dragging state
  useEffect(() => {
    if (!scrollRef.current) return;
    
    const scrollContainer = scrollRef.current;
    if (isDragging) {
      document.body.style.cursor = 'grabbing';
      scrollContainer.style.cursor = 'grabbing';
      scrollContainer.style.userSelect = 'none';
    } else {
      document.body.style.removeProperty('cursor');
      scrollContainer.style.cursor = 'grab';
      scrollContainer.style.removeProperty('user-select');
    }
    
    return () => {
      document.body.style.removeProperty('cursor');
    };
  }, [isDragging]);

  return (
    <div className="bg-white w-full shadow-sm border-b border-gray-200">
      <div 
        className="max-w-7xl mx-auto overflow-x-auto scrollbar-hide"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <div className="flex items-center py-1 px-2 min-w-max">
          {sportOptions.map((sport) => (
            <button
              key={sport.id}
              onClick={() => setSelectedSport(sport.id)}
              className={`flex items-center px-3 py-1.5 mr-4 ${
                selectedSport === sport.id 
                  ? 'border-b-2 border-[#c31432] text-[#c31432] font-medium' 
                  : 'text-gray-600'
              }`}
            >
              <span className="mr-1.5">{sport.icon}</span>
              <span className="text-sm">{sport.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportsSelector; 