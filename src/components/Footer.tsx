import React from 'react';
import { BarChart3, Mail, Twitter, Linkedin, Github, ArrowUp, Zap, Shield, Clock, Users } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-950 border-t border-gray-800/50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-green-500/20 via-transparent to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-green-400/10 via-transparent to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/10 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <BarChart3 className="h-8 w-8 text-green-400" />
                  <div className="absolute inset-0 bg-green-400 blur-lg opacity-30 animate-pulse"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
                  InsightPulse
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Transform your raw data into actionable insights with AI-powered analytics. 
                Make data-driven decisions faster than ever before.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { icon: Twitter, href: '#', delay: '0s' },
                  { icon: Linkedin, href: '#', delay: '0.1s' },
                  { icon: Github, href: '#', delay: '0.2s' },
                  { icon: Mail, href: '#', delay: '0.3s' }
                ].map(({ icon: Icon, href, delay }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/25 group"
                    style={{ animationDelay: delay }}
                  >
                    <Icon className="h-5 w-5 text-gray-400 group-hover:text-green-400 transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Product Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white relative">
                Product
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-green-500 rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {[
                  'Features',
                  'Integrations',
                  'API Documentation',
                  'Pricing',
                  'Enterprise',
                  'Changelog'
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-green-400 transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-green-400 transition-colors duration-200"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white relative">
                Resources
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-green-500 rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {[
                  'Documentation',
                  'Tutorials',
                  'Blog',
                  'Case Studies',
                  'Help Center',
                  'Community'
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-green-400 transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-green-400 transition-colors duration-200"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white relative">
                Company
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-green-500 rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {[
                  'About Us',
                  'Careers',
                  'Press Kit',
                  'Contact',
                  'Privacy Policy',
                  'Terms of Service'
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-green-400 transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-green-400 transition-colors duration-200"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Trust Indicators Section */}
        <div className="py-12 border-t border-gray-800/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'SOC 2 Compliant', desc: 'Enterprise security' },
              { icon: Clock, title: '99.9% Uptime', desc: 'Reliable service' },
              { icon: Users, title: '10k+ Users', desc: 'Trusted globally' },
              { icon: Zap, title: 'Real-time Processing', desc: 'Instant insights' }
            ].map(({ icon: Icon, title, desc }, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-gray-700 transition-all duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-sm font-semibold text-white mb-1 group-hover:text-green-300 transition-colors duration-300">
                  {title}
                </div>
                <div className="text-xs text-gray-400">
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © 2025 InsightPulse. All rights reserved. Built with ❤️ for data-driven teams.
          </div>
          
          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="bg-gray-800 hover:bg-gray-700 text-green-400 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/25 group"
          >
            <ArrowUp className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-green-400 rounded-full blur-sm opacity-40 animate-bounce"></div>
      <div className="absolute bottom-32 left-16 w-3 h-3 bg-green-300 rounded-full blur-sm opacity-30 animate-pulse"></div>
      <div className="absolute top-1/2 right-8 w-2 h-2 bg-green-500 rounded-full blur-sm opacity-50 animate-ping"></div>
    </footer>
  );
};

export default Footer;