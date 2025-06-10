import React, { useState } from 'react';
import { BarChart3, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-gray-800/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <BarChart3 className="h-8 w-8 text-green-400" />
              <div className="absolute inset-0 bg-green-400 blur-lg opacity-30 animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
              InsightPulse
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
              How It Works
            </a>
            <a href="#use-cases" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
              Use Cases
            </a>
            <a href="#demo" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
              Demo
            </a>
            <button className="bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-2 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25">
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800/30">
            <div className="flex flex-col space-y-4">
              <a href="#how-it-works" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                How It Works
              </a>
              <a href="#use-cases" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                Use Cases
              </a>
              <a href="#demo" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                Demo
              </a>
              <button className="bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-2 rounded-lg transition-all duration-200 w-fit">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;