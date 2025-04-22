"use client";

import React from 'react';

interface MatchProps {
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
  date: string;
  time: string;
  bgColor: string;
}

const UpcomingMatches: React.FC = () => {
  const matches: MatchProps[] = [
    {
      id: "match1",
      team1: {
        code: "LSG",
        name: "Lucknow Super Giants",
        logo: "/teams/lsg.svg"
      },
      team2: {
        code: "DC",
        name: "Delhi Capitals",
        logo: "/teams/dc.svg"
      },
      date: "Today",
      time: "7:30 PM",
      bgColor: "#ecf7f0"
    },
    {
      id: "match2",
      team1: {
        code: "SRH",
        name: "Sunrisers Hyderabad",
        logo: "/teams/srh.svg"
      },
      team2: {
        code: "MI",
        name: "Mumbai Indians",
        logo: "/teams/mi.svg"
      },
      date: "Tomorrow",
      time: "7:30 PM",
      bgColor: "#fff6f3"
    },
    {
      id: "match3",
      team1: {
        code: "RCB",
        name: "Royal Challengers Bangalore",
        logo: "/teams/lsg.svg"
      },
      team2: {
        code: "KKR",
        name: "Kolkata Knight Riders",
        logo: "/teams/dc.svg"
      },
      date: "24 Apr",
      time: "7:30 PM",
      bgColor: "#f3f8ff"
    }
  ];

  // Fallback logos
  const teamLogoFallback = (teamCode: string) => {
    const logos: {[key: string]: string} = {
      LSG: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjMDBhZGU1IiByeD0iNCIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik04IDhIMTJ2MTZIOHpNMTQgOGg0djE2aC00ek0yMCA4aDR2MTZoLTR6Ii8+PC9zdmc+",
      DC: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiMwMDVkYTAiLz48cGF0aCBmaWxsPSIjZTAzYTNlIiBkPSJNOCAxMkgxOHYySDh6TTggMTRIMjR2NEg4ek04IDE4SDE4djJIOHoiLz48L3N2Zz4=",
      SRH: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiNmZjgwMDAiLz48cGF0aCBmaWxsPSIjYzMwMDAwIiBkPSJNMTIgOEgxNkwyMCAxNkgxMkw4IDI0SDI0TDIwIDE2TDI0IDhaIi8+PC9zdmc+",
      MI: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjMDA0YmE5IiByeD0iNCIvPjxwYXRoIGZpbGw9ImdvbGQiIGQ9Ik04IDEySDE4djJIOHpNOCAxNkgxOHYySDh6TDE2IDEySDI2djJIMTZ6TDE2IDE2SDI2djJIMTZ6Ii8+PC9zdmc+",
      RCB: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiNjNzAwMDAiLz48cGF0aCBmaWxsPSIjZmZjYzAwIiBkPSJNOCAxMkgyNHY4SDhaIi8+PC9zdmc+",
      KKR: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiM1NzJjODQiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNOCAxMkgxMnY4SDh6TTE0IDEyaDF2OGgtMXpNMTYgMTJoMnY4aC0yek0yMCAxMmg0djhoLTR6Ii8+PC9zdmc+"
    };
    
    return logos[teamCode] || '';
  };

  const getTeamLogo = (team: {code: string, logo: string}) => {
    // Try to use the provided logo path, fallback to base64 if needed
    return team.logo || teamLogoFallback(team.code);
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="overflow-x-auto pb-4">
        <div className="flex space-x-4 min-w-max">
          {matches.map((match) => (
            <div 
              key={match.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden w-64 p-2"
            >
              <div className="flex">
                <div 
                  className="rounded-xl p-3 w-4/5"
                  style={{ backgroundColor: match.bgColor }}
                >
                  <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                      {/* Team 1 */}
                      <div className="flex items-center">
                        <div className="w-5 h-5 mr-2 flex-shrink-0">
                          <img 
                            src={getTeamLogo(match.team1)} 
                            alt={match.team1.code}
                            className="w-full h-full object-contain" 
                          />
                        </div>
                        <span className="text-[#1a2942] font-bold text-lg">{match.team1.code}</span>
                      </div>
                      
                      {/* Team 2 */}
                      <div className="flex items-center">
                        <div className="w-5 h-5 mr-2 flex-shrink-0">
                          <img 
                            src={getTeamLogo(match.team2)} 
                            alt={match.team2.code}
                            className="w-full h-full object-contain" 
                          />
                        </div>
                        <span className="text-[#1a2942] font-bold text-lg">{match.team2.code}</span>
                      </div>
                    </div>

                    <div className="text-gray-600 text-xs mt-2">
                      {match.date}, {match.time}
                    </div>
                  </div>
                </div>
                <div className="w-1/5"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingMatches; 