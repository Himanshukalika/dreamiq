"use client";

import React from 'react';

interface TeamScore {
  teamName: string;
  runs: number;
  wickets: number;
  overs: number;
}

interface LiveScorecardProps {
  match?: {
    team1: TeamScore;
    team2: TeamScore;
    status: string;
    currentBatsman?: string;
    currentBowler?: string;
    lastBall?: string;
  };
}

const defaultLiveMatch = {
  team1: {
    teamName: "RCB",
    runs: 124,
    wickets: 2,
    overs: 14.3
  },
  team2: {
    teamName: "KKR",
    runs: 0,
    wickets: 0,
    overs: 0
  },
  status: "RCB batting",
  currentBatsman: "Virat Kohli 76(42)",
  currentBowler: "Andre Russell 2-0-24-1",
  lastBall: "4"
};

const LiveScorecard: React.FC<LiveScorecardProps> = ({ match = defaultLiveMatch }) => {
  return (
    <div className="bg-gradient-to-r from-black to-[#800000] text-white py-2 px-4 w-full shadow-md">
      <div className="container mx-auto">
        <div className="flex flex-col">
          {/* Top row with teams and score */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-2 sm:mb-0">
              <div className="flex items-center">
                <span className="font-bold mr-2">{match.team1.teamName}</span>
                <span className="font-semibold">{match.team1.runs}/{match.team1.wickets}</span>
                <span className="text-gray-300 text-sm ml-2">({match.team1.overs} ov)</span>
              </div>
              
              <div className="flex items-center">
                <span className="font-bold mr-2">{match.team2.teamName}</span>
                <span>{match.team2.runs}/{match.team2.wickets}</span>
                <span className="text-gray-300 text-sm ml-2">({match.team2.overs} ov)</span>
              </div>
            </div>
            
            <div className="flex items-center">
              <span className="flex items-center">
                <span className="h-2 w-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                <span className="text-red-400 font-medium">LIVE</span>
              </span>
            </div>
          </div>
          
          {/* Bottom row with batsman/bowler info */}
          <div className="flex flex-col sm:flex-row justify-between text-sm text-gray-300">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
              <div>
                <span className="mr-1">🏏</span> {match.currentBatsman}
              </div>
              <div>
                <span className="mr-1">🎯</span> {match.currentBowler}
              </div>
            </div>
            
            <div className="flex items-center">
              <span>Last ball: </span>
              <span className={`ml-2 inline-flex items-center justify-center h-6 w-6 rounded-full ${
                match.lastBall === "4" ? "bg-blue-600" : 
                match.lastBall === "6" ? "bg-green-600" : 
                match.lastBall === "W" ? "bg-red-600" : "bg-gray-700"
              }`}>
                {match.lastBall}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveScorecard; 