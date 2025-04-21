"use client";

import React from 'react';

interface TeamScore {
  teamName: string;
  runs: number;
  wickets: number;
  overs: number;
}

interface ScorecardProps {
  match?: {
    team1: TeamScore;
    team2: TeamScore;
    status: string;
    live?: boolean;
  };
}

const defaultMatch = {
  team1: {
    teamName: "CSK",
    runs: 186,
    wickets: 4,
    overs: 20
  },
  team2: {
    teamName: "MI",
    runs: 172,
    wickets: 10,
    overs: 19.2
  },
  status: "Chennai Super Kings won by 14 runs",
  live: false
};

const Scorecard: React.FC<ScorecardProps> = ({ match = defaultMatch }) => {
  return (
    <div className="bg-gradient-to-r from-black to-[#800000] text-white py-2 px-4 w-full shadow-md">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-2 sm:mb-0">
            <div className="flex items-center">
              <span className="font-bold mr-2">{match.team1.teamName}</span>
              <span>{match.team1.runs}/{match.team1.wickets}</span>
              <span className="text-gray-300 text-sm ml-2">({match.team1.overs} ov)</span>
            </div>
            
            <div className="flex items-center">
              <span className="font-bold mr-2">{match.team2.teamName}</span>
              <span>{match.team2.runs}/{match.team2.wickets}</span>
              <span className="text-gray-300 text-sm ml-2">({match.team2.overs} ov)</span>
            </div>
          </div>
          
          <div className="flex items-center">
            {match.live ? (
              <span className="flex items-center">
                <span className="h-2 w-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                <span className="text-red-400 font-medium">LIVE</span>
              </span>
            ) : (
              <span className="text-gray-300 text-sm">{match.status}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scorecard; 