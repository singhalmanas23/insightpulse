import React from 'react';
import { ArrowRight, Settings } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-20 lg:py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-500/5 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Container */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Glassmorphism Card */}
          <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-3xl p-12 lg:p-16 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-transparent to-green-400/20"></div>
              <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-green-400/20 to-transparent"></div>
              <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-green-400/20 to-transparent"></div>
              <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/20 to-transparent"></div>
              <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/20 to-transparent"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-8 right-8 w-4 h-4 bg-green-400 rounded-full blur-sm opacity-60 animate-pulse"></div>
            <div className="absolute bottom-8 left-8 w-3 h-3 bg-green-300 rounded-full blur-sm opacity-40 animate-bounce"></div>
            <div className="absolute top-1/2 left-4 w-2 h-2 bg-green-500 rounded-full blur-sm opacity-50 animate-ping"></div>

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                Ready to unlock insights
                <br />
                <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                  from your data?
                </span>
              </h2>

              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                Join thousands of businesses that have transformed their data into actionable insights. 
                Start your journey with InsightPulse today.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button className="bg-green-500 hover:bg-green-400 text-black font-semibold px-10 py-5 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/30 flex items-center gap-3 group text-lg relative overflow-hidden">
                  {/* Button Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 flex items-center gap-3">
                    <span>Start for Free</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </button>

                <button className="border-2 border-gray-600 hover:border-green-400 text-white font-semibold px-10 py-5 rounded-xl transition-all duration-300 hover:bg-green-500/10 flex items-center gap-3 group text-lg">
                  <Settings className="h-5 w-5 group-hover:rotate-45 transition-transform duration-300" />
                  <span>Explore Integrations</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Setup in under 2 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-400">15min</div>
              <div className="text-gray-400 text-sm">Average setup time</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-400">95%</div>
              <div className="text-gray-400 text-sm">Time saved on reports</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-400">24/7</div>
              <div className="text-gray-400 text-sm">AI-powered insights</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-400">500+</div>
              <div className="text-gray-400 text-sm">Happy customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;