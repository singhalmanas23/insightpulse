import React, { useEffect, useState } from 'react';
import { Upload, Play, TrendingUp, BarChart, PieChart, Sparkles } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [chartAnimation, setChartAnimation] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => setChartAnimation(true), 1000);
  }, []);

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Enhanced Background gradient with animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 via-transparent to-transparent animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/3 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-green-500/20 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 border border-green-400/30 rotate-45 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-green-500/10 rounded-full animate-bounce"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
                <Sparkles className="h-4 w-4 text-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-medium">AI-Powered Analytics</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className={`text-white block transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                Spending hours on
              </span>
              <span className={`bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent block transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ animationDelay: '0.2s' }}>
                reports?
              </span>
              <span className={`text-white block transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ animationDelay: '0.4s' }}>
                Let AI do the thinking.
              </span>
            </h1>
            
            <p className={`text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ animationDelay: '0.6s' }}>
              Upload your data and get instant dashboards and insights. Transform CSV files, Google Analytics, 
              and SQL exports into beautiful visualizations and smart summaries.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ animationDelay: '0.8s' }}>
              <button className="bg-green-500 hover:bg-green-400 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-green-500/25 flex items-center justify-center gap-2 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center gap-2">
                  <Upload className="h-5 w-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  <span>Upload Your Data → Get Insights</span>
                </div>
              </button>
              <button className="border border-gray-600 hover:border-green-400 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group hover:bg-green-500/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center gap-2">
                  <Play className="h-5 w-5 group-hover:scale-110 transition-all duration-300" />
                  <span>Watch Demo</span>
                </div>
              </button>
            </div>

            {/* Trust indicators */}
            <div className={`mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-gray-400 text-sm transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span>Setup in 2 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span>500+ happy customers</span>
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Dashboard Mockup */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ animationDelay: '0.5s' }}>
            {/* Main Dashboard Container */}
            <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
              {/* Animated background grid */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-transparent to-green-400/20"></div>
                <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-green-400/20 to-transparent animate-pulse"></div>
                <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-green-400/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/20 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
              </div>

              {/* Upload Section with enhanced animation */}
              <div className="mb-6 relative z-10">
                <div className="border-2 border-dashed border-gray-600 hover:border-green-400 rounded-lg p-8 text-center transition-all duration-300 bg-gray-800/50 group cursor-pointer">
                  <Upload className="h-12 w-12 text-green-400 mx-auto mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  <p className="text-gray-300 text-sm group-hover:text-green-300 transition-colors duration-300">Drop your CSV file here</p>
                  <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </div>
              </div>

              {/* Enhanced Dashboard Preview */}
              <div className="space-y-4 relative z-10">
                <div className="grid grid-cols-2 gap-4">
                  {/* Animated Bar Chart */}
                  <div className="bg-gray-800/80 rounded-lg p-4 border border-gray-700 group hover:border-green-500/50 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-3">
                      <BarChart className="h-4 w-4 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-xs text-gray-400 group-hover:text-green-300 transition-colors duration-300">Revenue Trend</span>
                    </div>
                    <div className="flex items-end gap-1 h-16">
                      {[40, 65, 45, 80, 70, 90].map((height, index) => (
                        <div
                          key={index}
                          className={`bg-green-500 rounded-t transition-all duration-1000 ${chartAnimation ? 'opacity-80' : 'opacity-0'}`}
                          style={{ 
                            height: chartAnimation ? `${height}%` : '0%',
                            animationDelay: `${index * 0.2}s`,
                            width: '12px'
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Animated Pie Chart */}
                  <div className="bg-gray-800/80 rounded-lg p-4 border border-gray-700 group hover:border-green-500/50 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-3">
                      <PieChart className="h-4 w-4 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-xs text-gray-400 group-hover:text-green-300 transition-colors duration-300">Traffic Sources</span>
                    </div>
                    <div className="relative w-16 h-16 mx-auto">
                      <div className={`absolute inset-0 rounded-full border-4 border-green-500 transition-all duration-1000 ${chartAnimation ? 'opacity-80 scale-100' : 'opacity-0 scale-50'}`}></div>
                      <div className={`absolute inset-2 rounded-full border-2 border-green-300 transition-all duration-1000 ${chartAnimation ? 'opacity-60 scale-100' : 'opacity-0 scale-75'}`} style={{ animationDelay: '0.5s' }}></div>
                      <div className={`absolute inset-4 rounded-full bg-green-400/20 transition-all duration-1000 ${chartAnimation ? 'opacity-40 scale-100' : 'opacity-0 scale-50'}`} style={{ animationDelay: '1s' }}></div>
                    </div>
                  </div>
                </div>

                {/* Enhanced AI Insights */}
                <div className="bg-gray-800/80 rounded-lg p-4 border border-gray-700 group hover:border-green-500/50 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="h-4 w-4 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-xs text-gray-400 group-hover:text-green-300 transition-colors duration-300">AI Insights</span>
                  </div>
                  <div className="space-y-2 text-xs text-gray-300">
                    {[
                      'Revenue increased 23% vs last month',
                      'Peak traffic on Tuesdays at 2 PM',
                      'Mobile conversion rate: 4.2%'
                    ].map((insight, index) => (
                      <div
                        key={index}
                        className={`flex items-center gap-2 transition-all duration-700 ${chartAnimation ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                        style={{ animationDelay: `${1.5 + index * 0.3}s` }}
                      >
                        <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: `${index * 0.5}s` }}></div>
                        <span className="group-hover:text-green-200 transition-colors duration-300">{insight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full blur-sm opacity-60 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-300 rounded-full blur-sm opacity-40 animate-pulse"></div>
            <div className="absolute top-1/2 -right-2 w-4 h-4 bg-green-500 rounded-full blur-sm opacity-50 animate-ping"></div>
            <div className="absolute bottom-1/3 -left-2 w-3 h-3 bg-green-200 rounded-full blur-sm opacity-30 animate-bounce" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;