
import React from 'react';
import { Award, Gift, Medal, Star, Zap } from 'lucide-react';

const Rewards = () => {
  return (
    <section id="rewards" className="py-20 bg-gradient-to-b from-white to-purple-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-4">
            <Gift className="inline-block mr-1 h-4 w-4" /> WIN REAL PRIZES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Rewards & Prizes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Test your knowledge, climb the leaderboard, and win exciting cash rewards every month!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="card-highlight quiz-card bg-gradient-to-br from-[#FFD700]/10 to-[#FFA500]/10 border-yellow-200 transform hover:scale-105 transition-all">
            <div className="absolute right-4 top-4">
              <Medal className="h-12 w-12 text-yellow-500/50" />
            </div>
            <div className="flex flex-col items-center py-8">
              <div className="bg-yellow-100 rounded-full p-3 mb-6">
                <Trophy className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">1st Place</h3>
              <div className="text-3xl font-bold mb-4 text-primary">₹1000</div>
              <p className="text-gray-600 text-center">Top scorer on the monthly leaderboard wins the grand prize!</p>
            </div>
          </div>
          
          <div className="quiz-card bg-gradient-to-br from-gray-100 to-gray-50 border-gray-200 transform hover:scale-105 transition-all">
            <div className="absolute right-4 top-4">
              <Medal className="h-12 w-12 text-gray-400/50" />
            </div>
            <div className="flex flex-col items-center py-8">
              <div className="bg-gray-100 rounded-full p-3 mb-6">
                <Award className="h-8 w-8 text-gray-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">2nd Place</h3>
              <div className="text-3xl font-bold mb-4 text-primary">₹500</div>
              <p className="text-gray-600 text-center">Runner-up on the monthly leaderboard wins this prize!</p>
            </div>
          </div>
          
          <div className="quiz-card bg-gradient-to-br from-orange-100 to-orange-50 border-orange-200 transform hover:scale-105 transition-all">
            <div className="absolute right-4 top-4">
              <Medal className="h-12 w-12 text-orange-500/50" />
            </div>
            <div className="flex flex-col items-center py-8">
              <div className="bg-orange-100 rounded-full p-3 mb-6">
                <Star className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">3rd Place</h3>
              <div className="text-3xl font-bold mb-4 text-primary">₹250</div>
              <p className="text-gray-600 text-center">Third place on the monthly leaderboard earns this reward!</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 border border-primary/10">
          <h3 className="text-2xl font-bold mb-6 text-center">Other Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-primary/10 rounded-full p-3 mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Daily Challenges</h4>
              <p className="text-gray-600">Special topics and bonus rewards every day</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-primary/10 rounded-full p-3 mb-4">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Score Multipliers</h4>
              <p className="text-gray-600">Earn boosters for consecutive wins</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-primary/10 rounded-full p-3 mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Achievements</h4>
              <p className="text-gray-600">Unlock badges and special titles</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-primary/10 rounded-full p-3 mb-4">
                <Gift className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Surprise Rewards</h4>
              <p className="text-gray-600">Random prize drops during gameplay</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rewards;

const Trophy = (props: React.SVGProps<SVGSVGElement> & { className?: string }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
      <path d="M4 22h16"></path>
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
    </svg>
  );
};
