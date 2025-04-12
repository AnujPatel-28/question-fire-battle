
import React, { useState } from 'react';
import { ChevronRight, Medal, TrendingUp, Trophy, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const Leaderboard = () => {
  const [tab, setTab] = useState<'monthly' | 'weekly' | 'daily'>('monthly');

  const monthlyData = [
    { rank: 1, name: "Priya Sharma", points: 5840, matches: 42 },
    { rank: 2, name: "Arjun Patel", points: 5720, matches: 38 },
    { rank: 3, name: "Ananya Singh", points: 5690, matches: 45 },
    { rank: 4, name: "Ravi Kumar", points: 5510, matches: 39 },
    { rank: 5, name: "Neha Gupta", points: 5340, matches: 41 },
  ];

  const weeklyData = [
    { rank: 1, name: "Ravi Kumar", points: 1840, matches: 12 },
    { rank: 2, name: "Ananya Singh", points: 1720, matches: 11 },
    { rank: 3, name: "Priya Sharma", points: 1690, matches: 13 },
    { rank: 4, name: "Arjun Patel", points: 1510, matches: 10 },
    { rank: 5, name: "Vikram Mehta", points: 1340, matches: 9 },
  ];

  const dailyData = [
    { rank: 1, name: "Ananya Singh", points: 540, matches: 5 },
    { rank: 2, name: "Vikram Mehta", points: 520, matches: 5 },
    { rank: 3, name: "Priya Sharma", points: 490, matches: 4 },
    { rank: 4, name: "Neha Gupta", points: 470, matches: 5 },
    { rank: 5, name: "Ravi Kumar", points: 450, matches: 4 },
  ];

  const currentData = 
    tab === 'monthly' ? monthlyData : 
    tab === 'weekly' ? weeklyData : dailyData;

  return (
    <section id="leaderboard" className="py-20 bg-white relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full"></div>
        <div className="absolute top-40 right-10 w-20 h-20 bg-secondary/10 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent/5 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            <Trophy className="inline-block mr-1 h-4 w-4" /> TOP PERFORMERS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Leaderboard</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Check out our top quiz warriors! Will you be next to join the leaderboard?
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg max-w-4xl mx-auto overflow-hidden border border-gray-100">
          <div className="flex border-b">
            <button 
              className={cn(
                "flex-1 py-4 text-center font-medium transition-all",
                tab === 'monthly' ? 'bg-primary text-white' : 'hover:bg-gray-50'
              )}
              onClick={() => setTab('monthly')}
            >
              Monthly
            </button>
            <button 
              className={cn(
                "flex-1 py-4 text-center font-medium transition-all",
                tab === 'weekly' ? 'bg-primary text-white' : 'hover:bg-gray-50'
              )}
              onClick={() => setTab('weekly')}
            >
              Weekly
            </button>
            <button 
              className={cn(
                "flex-1 py-4 text-center font-medium transition-all",
                tab === 'daily' ? 'bg-primary text-white' : 'hover:bg-gray-50'
              )}
              onClick={() => setTab('daily')}
            >
              Today
            </button>
          </div>
          
          <div className="py-4">
            {/* Table header */}
            <div className="grid grid-cols-12 px-6 py-3 text-sm font-medium text-gray-500 border-b">
              <div className="col-span-1">Rank</div>
              <div className="col-span-6">Player</div>
              <div className="col-span-3 text-right">Points</div>
              <div className="col-span-2 text-right">Matches</div>
            </div>
            
            {/* Table body */}
            {currentData.map((player) => (
              <div key={player.rank} className="grid grid-cols-12 px-6 py-4 hover:bg-gray-50 transition-colors border-b last:border-b-0">
                <div className="col-span-1 flex items-center">
                  {player.rank <= 3 ? (
                    <div className={cn(
                      "flex items-center justify-center w-8 h-8 rounded-full",
                      player.rank === 1 ? "bg-yellow-100 text-yellow-600" :
                      player.rank === 2 ? "bg-gray-100 text-gray-600" :
                      "bg-orange-100 text-orange-600"
                    )}>
                      <Medal size={16} />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-medium">
                      {player.rank}
                    </div>
                  )}
                </div>
                <div className="col-span-6 flex items-center font-medium">
                  {player.name}
                </div>
                <div className="col-span-3 text-right flex items-center justify-end text-primary font-bold">
                  {player.points} <TrendingUp size={16} className="ml-1" />
                </div>
                <div className="col-span-2 text-right flex items-center justify-end text-gray-600">
                  <Users size={14} className="mr-1" /> {player.matches}
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 p-4 flex justify-center">
            <Button variant="outline" className="flex items-center">
              View Full Leaderboard
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
