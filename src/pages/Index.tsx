
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowToPlay from '@/components/HowToPlay';
import Rewards from '@/components/Rewards';
import Leaderboard from '@/components/Leaderboard';
import AuthModal from '@/components/AuthModal';
import Footer from '@/components/Footer';

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleOpenAuth = () => {
    setIsAuthModalOpen(true);
  };

  const handleCloseAuth = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onOpenAuth={handleOpenAuth} />
      <main className="flex-grow">
        <Hero onOpenAuth={handleOpenAuth} />
        <HowToPlay />
        <Rewards />
        <Leaderboard />
      </main>
      <Footer />
      <AuthModal isOpen={isAuthModalOpen} onClose={handleCloseAuth} />
    </div>
  );
};

export default Index;
