
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Trophy, Home, Award, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = ({ onOpenAuth }: { onOpenAuth: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-4 px-6 md:px-10 fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">
              Quiz<span className="text-secondary">Battle</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="flex items-center space-x-1 font-medium hover:text-primary transition-colors">
              <Home size={18} />
              <span>Home</span>
            </a>
            <a href="#how-to-play" className="flex items-center space-x-1 font-medium hover:text-primary transition-colors">
              <HelpCircle size={18} />
              <span>How to Play</span>
            </a>
            <a href="#rewards" className="flex items-center space-x-1 font-medium hover:text-primary transition-colors">
              <Award size={18} />
              <span>Rewards</span>
            </a>
            <a href="#leaderboard" className="flex items-center space-x-1 font-medium hover:text-primary transition-colors">
              <Trophy size={18} />
              <span>Leaderboard</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" onClick={onOpenAuth}>Login</Button>
            <Button onClick={onOpenAuth}>Sign Up</Button>
          </div>
          
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "md:hidden bg-white absolute left-0 right-0 top-16 transition-all duration-300 shadow-md",
        isOpen ? "max-h-96 py-4" : "max-h-0 overflow-hidden py-0"
      )}>
        <div className="container mx-auto flex flex-col items-center space-y-4 px-6">
          <a href="#" className="w-full py-2 flex items-center space-x-2 border-b border-gray-100">
            <Home size={18} />
            <span>Home</span>
          </a>
          <a href="#how-to-play" className="w-full py-2 flex items-center space-x-2 border-b border-gray-100">
            <HelpCircle size={18} />
            <span>How to Play</span>
          </a>
          <a href="#rewards" className="w-full py-2 flex items-center space-x-2 border-b border-gray-100">
            <Award size={18} />
            <span>Rewards</span>
          </a>
          <a href="#leaderboard" className="w-full py-2 flex items-center space-x-2 border-b border-gray-100">
            <Trophy size={18} />
            <span>Leaderboard</span>
          </a>
          <div className="flex flex-col w-full space-y-2 pt-2">
            <Button variant="outline" onClick={onOpenAuth} className="w-full">Login</Button>
            <Button onClick={onOpenAuth} className="w-full">Sign Up</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
