
import React from 'react';
import { Check, Hourglass, Loader, Target, Trophy, Users } from 'lucide-react';

const HowToPlay = () => {
  const steps = [
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Join a Room",
      description: "Enter a quiz battle room with up to 10 other players competing in real-time."
    },
    {
      icon: <Loader className="w-12 h-12 text-primary" />,
      title: "5 Rounds, 5 Questions Each",
      description: "Face 25 questions across 5 rounds testing your knowledge on NEET, JEE, and other aptitude topics."
    },
    {
      icon: <Hourglass className="w-12 h-12 text-primary" />,
      title: "Answer Fast & Accurately",
      description: "Score points based on both speed and accuracy. The faster you answer correctly, the more points you earn!"
    },
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "Track Progress",
      description: "View real-time leaderboard updates after each round to see your ranking."
    },
    {
      icon: <Trophy className="w-12 h-12 text-primary" />,
      title: "Win Prizes",
      description: "Top performers get added to the monthly leaderboard and can win cash prizes like ₹1000."
    }
  ];

  return (
    <section id="how-to-play" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How To Play</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our quiz battle system is designed to be competitive, educational, and rewarding. Here's how it works:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 bg-primary/10 rounded-full">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-primary/10 -z-10"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 md:p-8">
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            <Check className="mr-2 text-primary" /> Tips for Winning
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Practice Makes Perfect</h4>
              <p className="text-gray-600">Play regularly to familiarize yourself with the question patterns and improve your response time.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Focus on Accuracy</h4>
              <p className="text-gray-600">It's better to take an extra second to ensure your answer is correct than to rush and lose points.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Stay Calm Under Pressure</h4>
              <p className="text-gray-600">Don't let the countdown timer or other players' progress distract you from focusing on the question.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToPlay;
