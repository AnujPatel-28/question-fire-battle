
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Quiz<span className="text-primary">Battle</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Test your knowledge, compete with friends, and win exciting prizes in our multiplayer quiz platform.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#how-to-play" className="text-gray-400 hover:text-primary transition-colors">How to Play</a></li>
              <li><a href="#rewards" className="text-gray-400 hover:text-primary transition-colors">Rewards</a></li>
              <li><a href="#leaderboard" className="text-gray-400 hover:text-primary transition-colors">Leaderboard</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Help & Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Support Center</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400 mb-2">Have questions or feedback?</p>
            <a href="mailto:info@quizbattle.com" className="text-primary hover:underline">
              info@quizbattle.com
            </a>
            <p className="text-gray-400 mt-4">
              Download our app:
            </p>
            <div className="flex space-x-3 mt-2">
              <a href="#" className="bg-white text-gray-900 px-3 py-2 rounded text-xs font-medium hover:bg-gray-200 transition-colors">
                App Store
              </a>
              <a href="#" className="bg-white text-gray-900 px-3 py-2 rounded text-xs font-medium hover:bg-gray-200 transition-colors">
                Google Play
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} QuizBattle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
