
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Clock, Users } from 'lucide-react';

const Hero = ({ onOpenAuth }: { onOpenAuth: () => void }) => {
  return (
    <div className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-purple-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <div className="animate-slide-in">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                💪 Test Your Knowledge, Win Real Prizes
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Battle Your Way to the <span className="gradient-text">Top</span> in Quiz Competitions
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Join multiplayer quiz battles, answer exam-style questions, and compete for cash prizes in our real-time competition platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="text-lg py-6 px-8 bg-primary hover:bg-primary-600 text-white font-medium rounded-md shadow-lg hover:shadow-xl transition-all hover:translate-y-[-2px] flex items-center gap-2 group">
                  Play Now
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" onClick={onOpenAuth} className="text-lg py-6 px-8">
                  Sign Up Free
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="flex flex-col items-center p-4 rounded-lg bg-white shadow-sm">
                <Users className="text-primary mb-2" />
                <p className="font-semibold">10 Players</p>
                <p className="text-sm text-gray-500 text-center">Per Battle</p>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-white shadow-sm">
                <Brain className="text-primary mb-2" />
                <p className="font-semibold">5 Rounds</p>
                <p className="text-sm text-gray-500 text-center">Per Game</p>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-white shadow-sm">
                <Clock className="text-primary mb-2" />
                <p className="font-semibold">Real-Time</p>
                <p className="text-sm text-gray-500 text-center">Competition</p>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="absolute w-72 h-72 bg-primary/20 rounded-full animate-pulse-glow"></div>
            <div className="w-full max-w-md aspect-square bg-gradient-primary rounded-2xl shadow-2xl overflow-hidden relative animate-float">
              <div className="absolute inset-2 bg-white/90 rounded-xl flex flex-col p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-lg font-bold">Quiz Battle</div>
                  <div className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                    LIVE
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col space-y-4">
                  <div className="quiz-card flex flex-col">
                    <span className="text-xs text-gray-500 mb-2">NEET - Biology</span>
                    <span className="font-medium">Which organ is responsible for detoxifying harmful substances in the blood?</span>
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      <div className="border border-primary rounded-md px-4 py-2 text-sm text-center hover:bg-primary hover:text-white transition-colors cursor-pointer">Liver</div>
                      <div className="border border-gray-200 rounded-md px-4 py-2 text-sm text-center hover:bg-gray-100 transition-colors cursor-pointer">Kidney</div>
                      <div className="border border-gray-200 rounded-md px-4 py-2 text-sm text-center hover:bg-gray-100 transition-colors cursor-pointer">Spleen</div>
                      <div className="border border-gray-200 rounded-md px-4 py-2 text-sm text-center hover:bg-gray-100 transition-colors cursor-pointer">Pancreas</div>
                    </div>
                    <div className="mt-4 flex justify-between items-center text-xs">
                      <span className="text-primary font-semibold">Round 2/5</span>
                      <span>Time: 00:15</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
