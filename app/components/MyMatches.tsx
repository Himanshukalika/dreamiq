"use client";

import React from 'react';
import Link from 'next/link';

interface Match {
  id: string;
  team1: {
    code: string;
    name: string;
    logo?: string;
  };
  team2: {
    code: string;
    name: string;
    logo?: string;
  };
  startTime: string;
  timeLeft?: string;
  contests?: number;
  teamsJoined?: number;
}

interface MyMatchesProps {
  matches?: Match[];
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
    startTime: "7:30 PM",
    timeLeft: "51m : 36s",
    contests: 1,
    teamsJoined: 1
  },
  {
    id: "match2",
    team1: {
      code: "CSK",
      name: "Chennai Super Kings",
      logo: "/teams/csk.png"
    },
    team2: {
      code: "MI",
      name: "Mumbai Indians",
      logo: "/teams/mi.png"
    },
    startTime: "3:30 PM",
    timeLeft: "1d : 3h",
    contests: 2,
    teamsJoined: 3
  }
];

const MyMatches: React.FC<MyMatchesProps> = ({ matches = defaultMatches }) => {
  return (
    <div className="bg-[#0D0D17] text-white rounded-lg p-4 max-w-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">My Matches</h2>
        <Link href="/all-matches" className="text-sm text-gray-400 flex items-center">
          View All 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>

      <div className="space-y-3">
        {matches.map((match) => (
          <div key={match.id} className="bg-[#1C1C2A] rounded-lg p-3">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center space-x-3">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-sm">
                    {match.team1.code}
                  </div>
                  <span className="text-xs mt-1">{match.team1.code}</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-sm">
                    {match.team2.code}
                  </div>
                  <span className="text-xs mt-1">{match.team2.code}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-red-500 font-semibold">{match.timeLeft}</div>
                <div className="text-xs text-gray-400">{match.startTime}</div>
              </div>
            </div>
            <div className="flex items-center text-xs text-gray-400">
              <span>{match.teamsJoined} Team</span>
              <span className="mx-2">•</span>
              <span>{match.contests} Contest</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyMatches; 