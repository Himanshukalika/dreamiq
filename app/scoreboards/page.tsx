import React from 'react';
import Scorecard from '../components/Scorecard';
import LiveScorecard from '../components/LiveScorecard';

// Sample match data
const completedMatch = {
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

const liveMatch = {
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

export default function ScoreboardsPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 mt-4">Scorecard Examples</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Standard Scorecard</h2>
        <div className="border border-gray-300 rounded-md overflow-hidden">
          <Scorecard match={completedMatch} />
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Live Scorecard</h2>
        <div className="border border-gray-300 rounded-md overflow-hidden">
          <LiveScorecard match={liveMatch} />
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Live Scorecard (With Wicket)</h2>
        <div className="border border-gray-300 rounded-md overflow-hidden">
          <LiveScorecard 
            match={{
              ...liveMatch,
              lastBall: "W"
            }} 
          />
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Live Scorecard (With Six)</h2>
        <div className="border border-gray-300 rounded-md overflow-hidden">
          <LiveScorecard 
            match={{
              ...liveMatch,
              lastBall: "6"
            }} 
          />
        </div>
      </div>
    </div>
  );
} 