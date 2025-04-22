import React from 'react';
import UpcomingMatches from "./components/UpcomingMatches";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <h2 className="text-lg font-semibold px-4 mb-6">Upcoming Matches</h2>
        <UpcomingMatches />
      </div>
    </div>
  );
}
