"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface NavbarProps {
  currentLanguage?: string;
  onLanguageChange?: (language: string) => void;
}

interface Match {
  id: string;
  team1: {
    code: string;
    name: string;
    logo: string;
  };
  team2: {
    code: string;
    name: string;
    logo: string;
  };
  startTime: string;
}

const defaultMatches: Match[] = [
  {
    id: "match1",
    team1: {
      code: "KKR",
      name: "Kolkata Knight Riders",
      logo: "/teams/kkr.png"
    },
    team2: {
      code: "GT",
      name: "Gujarat Titans",
      logo: "/teams/gt.png"
    },
    startTime: "7:30 PM"
  }
];

// Add base64 SVGs for team logos as fallbacks
const teamLogos = {
  // KKR logo as base64 image data, resembling the shield logo with gold and purple colors
  KKR: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAgMTIwIj48cGF0aCBmaWxsPSIjNTEyNjdkIiBkPSJNNjAsMTBMNSwzMHY2MGw1NSwyMGw1NS0yMFYzMEw2MCwxMHoiLz48cGF0aCBmaWxsPSIjZmZjYzAwIiBkPSJNNjAsMjVsLTQwLDE1djQwbDQwLDE1bDQwLTE1VjQwTDYwLDI1eiIvPjxwYXRoIGZpbGw9IiM1MTI2N2QiIGQ9Ik0yNyw1MmgxMnY1SDI3di01eiBNNDUsNDVoMTJ2MjJINDVWNDV6IE02NCw0MHYzMmgxMlY0MEg2NHogTTgyLDUzaDEydjVIODJ2LTV6Ii8+PHBhdGggZmlsbD0iIzUxMjY3ZCIgZD0iTTI1LDcwbDUsMTBsMTAsMTBsMjAsNWwyMC01bDEwLTEwbDUtMTBsLTUtNWgtNjBMMjUsNzB6Ii8+PC9zdmc+`,
  GT: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjMWQyYzRlIiByeD0iMTYiLz48cGF0aCBmaWxsPSIjY2E5ZTY3IiBkPSJNMTMuNSA5LjVoNXYxM2gtNXoiLz48cGF0aCBmaWxsPSIjY2E5ZTY3IiBkPSJNOSAxNC41aDEzdjVIOXoiLz48L3N2Zz4=`,
  CSK: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjZjlkMTAwIiByeD0iMTYiLz48cGF0aCBmaWxsPSIjMDAwIiBkPSJNMTAgMTJsLTEgOS42TDIwIDEyaC00bDcgOS42TDEzIDEyeiIvPjwvc3ZnPg==`,
  MI: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjMDA0YmE1IiByeD0iMTYiLz48cGF0aCBmaWxsPSIjZ29sZCIgZD0iTTkgMTJoNnYySDl6TTkgMThoNnYySDl6TTE3IDEyaDZ2MmgtNnpNMTcgMThoNnYyaC02eiIvPjwvc3ZnPg==`
};

// Create a URL for KKR logo
const kkkLogoUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/1200px-Kolkata_Knight_Riders_Logo.svg.png";

// Create a URL for GT logo
const gtLogoUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Gujarat_Titans_Logo.svg/1200px-Gujarat_Titans_Logo.svg.png";

const Navbar: React.FC<NavbarProps> = ({ 
  currentLanguage = "English", 
  onLanguageChange = () => {} 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const languages = ["English", "Hindi", "Tamil", "Telugu", "Malayalam"];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguageDropdown = () => setIsLanguageDropdownOpen(!isLanguageDropdownOpen);

  // Function to get team logo, with fallback to SVG
  const getTeamLogo = (teamCode: string) => {
    if (teamCode === "KKR") {
      return kkkLogoUrl;
    }
    if (teamCode === "GT") {
      return gtLogoUrl;
    }
    return teamLogos[teamCode as keyof typeof teamLogos] || '';
  };

  return (
    <nav className="bg-gradient-to-r from-black to-[#800000] text-white py-4 sm:py-6 px-2 sm:px-4 w-full m-0 top-0 left-0 right-0 shadow-lg">
      <div className="container mx-auto max-w-7xl">
        {/* Top Row - Logo and Language Selector */}
        <div className="flex justify-between items-center h-10 sm:h-12 mb-3 sm:mb-4">
          {/* Menu button (mobile) */}
          <button 
            className="md:hidden text-white" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl sm:text-2xl font-bold ml-1 sm:ml-2">DREAMIQ</span>
            </Link>
          </div>

          {/* Language selector */}
          <div className="relative z-20">
            <button 
              className="flex items-center px-3 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm rounded-md bg-[#400d0d] hover:bg-[#560f0f]"
              onClick={toggleLanguageDropdown}
            >
              {currentLanguage}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform ${isLanguageDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Language dropdown */}
            {isLanguageDropdownOpen && (
              <div className="absolute right-0 mt-1 sm:mt-2 w-40 sm:w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                <div className="py-1">
                  {languages.map((language) => (
                    <button
                      key={language}
                      className={`${
                        currentLanguage === language ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                      } block px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm w-full text-left hover:bg-gray-100`}
                      onClick={() => {
                        onLanguageChange(language);
                        setIsLanguageDropdownOpen(false);
                      }}
                    >
                      {language}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Row - Live Matches */}
        <div className="max-w-full">
          <div className="mb-2 ml-3 sm:ml-4">
            <h2 className="text-sm sm:text-base font-semibold flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
              Live Matches
            </h2>
          </div>
          
          <div className="flex justify-center">
            <div className="flex overflow-x-auto space-x-3 pb-2 scrollbar-hide w-full px-2 sm:px-4">
              {defaultMatches.map((match) => (
                <div key={match.id} className="bg-[#101028] rounded-lg overflow-hidden min-w-[280px] sm:min-w-[320px] max-w-md mx-auto flex-shrink-0">
                  {/* Match teams */}
                  <div className="px-4 sm:px-5 pt-3 pb-2">
                    <div className="mb-2">
                      {/* Teams */}
                      <div className="w-full">
                        {/* Team 1 */}
                        <div className="flex items-center mb-3">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 overflow-hidden flex items-center justify-center mr-3 sm:mr-4">
                            <img 
                              src={getTeamLogo(match.team1.code)} 
                              alt={match.team1.code}
                              width={40}
                              height={40}
                              className="w-full h-full object-contain sm:w-[48px] sm:h-[48px]"
                            />
                          </div>
                          <span className="text-sm sm:text-base text-gray-300 truncate">{match.team1.name}</span>
                        </div>
                        
                        {/* Team 2 */}
                        <div className="flex items-center">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 overflow-hidden flex items-center justify-center mr-3 sm:mr-4">
                            <img 
                              src={getTeamLogo(match.team2.code)} 
                              alt={match.team2.code}
                              width={40}
                              height={40}
                              className="w-full h-full object-contain sm:w-[48px] sm:h-[48px]"
                            />
                          </div>
                          <span className="text-sm sm:text-base text-gray-300 truncate">{match.team2.name}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-xs sm:text-sm text-gray-400 text-right mt-2">
                      {match.startTime}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-3 p-3 sm:p-4 bg-[#2c1139] rounded-md absolute z-30 w-[90%] left-[5%] shadow-xl">
          <ul className="space-y-2">
            <li><Link href="/" className="block p-2 hover:bg-[#3d1b4c] rounded text-sm">Home</Link></li>
            <li><Link href="/about" className="block p-2 hover:bg-[#3d1b4c] rounded text-sm">About</Link></li>
            <li><Link href="/contact" className="block p-2 hover:bg-[#3d1b4c] rounded text-sm">Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 