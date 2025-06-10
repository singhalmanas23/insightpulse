import React, { useState, useEffect } from 'react';
import { Upload, FileText, BarChart3, TrendingUp, Zap, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';

const LiveDemo = () => {
  const [isDemoActive, setIsDemoActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [chartData, setChartData] = useState([30, 50, 40, 70, 60, 85, 75]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('demo');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isDemoActive) {
      // Animate chart data
      const interval = setInterval(() => {
        setChartData(prev => prev.map(val => Math.max(20, Math.min(90, val + (Math.random() - 0.5) * 20))));
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isDemoActive]);

  const startDemo = () => {
    setIsDemoActive(true);
    setCurrentStep(0);
    
    // Animate through steps with enhanced timing
    setTimeout(() => setCurrentStep(1), 1200);
    setTimeout(() => setCurrentStep(2), 3000);
    setTimeout(() => setCurrentStep(3), 5000);
  };

  const resetDemo = () => {
    setIsDemoActive(false);
    setCurrentStep(0);
    setChartData([30, 50, 40, 70, 60, 85, 75]);
  };

  return (
    <section id="demo" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/3 to-transparent"></div>
      <div className="absolute top-0 left-1/5 w-px h-full bg-gradient-to-b from-green-500/20 via-transparent to-transparent animate-pulse"></div>
      <div className="absolute top-0 right-1/5 w-px h-full bg-gradient-to-b from-green-400/10 via-transparent to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Floating elements */}
      <div className="absolute top-32 right-24 w-16 h-16 border border-green-500/20 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 border border-green-400/30 rotate-45 animate-pulse"></div>
      <div className="absolute top-2/3 right-8 w-6 h-6 bg-green-500/10 rounded-full animate-bounce"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-green-400 animate-pulse" />
            <span className="text-green-400 text-sm font-medium">Live Demo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            See It In Action
            <span className="block bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
              Real-Time Magic
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Watch how InsightPulse transforms your data in real-time with AI-powered analytics
          </p>
        </div>

        {/* Enhanced Demo Container */}
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.3s' }}>
          <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-3xl overflow-hidden shadow-2xl relative">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-transparent to-green-400/20"></div>
              <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-green-400/20 to-transparent animate-pulse"></div>
              <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/20 to-transparent animate-pulse"></div>
            </div>

            {/* Enhanced Demo Header */}
            <div className="bg-gray-800/80 px-6 py-4 border-b border-gray-700 flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
                <span className="text-gray-400 text-sm">InsightPulse Dashboard</span>
                {isDemoActive && (
                  <div className="flex items-center gap-2 ml-4">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-xs">Processing...</span>
                  </div>
                )}
              </div>
              <button
                onClick={isDemoActive ? resetDemo : startDemo}
                className="bg-green-500 hover:bg-green-400 text-black font-semibold px-4 py-2 rounded-lg transition-all duration-200 text-sm flex items-center gap-2 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center gap-2">
                  <Zap className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                  {isDemoActive ? 'Reset Demo' : 'Start Demo'}
                </div>
              </button>
            </div>

            {/* Enhanced Demo Content */}
            <div className="p-8 min-h-[500px] relative z-10">
              {!isDemoActive ? (
                // Enhanced Initial State
                <div className="text-center py-20">
                  <div className="border-2 border-dashed border-gray-600 rounded-2xl p-16 hover:border-green-400 transition-all duration-300 cursor-pointer group relative overflow-hidden" onClick={startDemo}>
                    <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <Upload className="h-20 w-20 text-gray-500 group-hover:text-green-400 mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                      <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-green-300 transition-colors duration-300">
                        Upload CSV or Connect Data Source
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-6">
                        Click to see the magic happen in real-time
                      </p>
                      <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <CheckCircle className="h-4 w-4" />
                          CSV Files
                        </span>
                        <span className="flex items-center gap-1">
                          <CheckCircle className="h-4 w-4" />
                          Google Analytics
                        </span>
                        <span className="flex items-center gap-1">
                          <CheckCircle className="h-4 w-4" />
                          SQL Exports
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Enhanced Demo Animation
                <div className="space-y-8">
                  {/* Step 1: Enhanced File Upload */}
                  {currentStep >= 0 && (
                    <div className={`transition-all duration-700 ${currentStep >= 1 ? 'opacity-100 scale-100' : 'opacity-80 scale-95'}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                          <FileText className="h-4 w-4 text-black" />
                        </div>
                        <span className="text-green-400 font-semibold">sales_data.csv uploaded successfully</span>
                        <div className="flex items-center gap-1 ml-auto">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                      {currentStep >= 1 && (
                        <div className="bg-gray-800/60 rounded-lg p-4 animate-fade-in border border-green-500/20">
                          <div className="flex items-center justify-between mb-3">
                            <div className="text-sm text-gray-400">Processing 1,247 rows of data...</div>
                            <div className="text-xs text-green-400 font-medium">98% Complete</div>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                            <div className="bg-gradient-to-r from-green-500 to-green-400 h-3 rounded-full animate-pulse transition-all duration-2000" style={{ width: '98%' }}></div>
                          </div>
                          <div className="mt-3 text-xs text-gray-500">
                            Detected: Revenue, Date, Customer ID, Product Category, Region
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Step 2: Enhanced AI Analysis */}
                  {currentStep >= 1 && (
                    <div className={`transition-all duration-700 ${currentStep >= 2 ? 'opacity-100 scale-100' : 'opacity-80 scale-95'}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-spin">
                          <TrendingUp className="h-4 w-4 text-black" />
                        </div>
                        <span className="text-green-400 font-semibold">AI analyzing patterns and trends...</span>
                        <div className="ml-auto text-xs text-green-300 animate-pulse">Neural networks active</div>
                      </div>
                      {currentStep >= 2 && (
                        <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
                          <div className="bg-gray-800/60 rounded-lg p-6 border border-green-500/20 group hover:border-green-500/40 transition-all duration-300">
                            <div className="flex items-center justify-between mb-4">
                              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Revenue Trends</div>
                              <div className="text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded-full">Live</div>
                            </div>
                            <div className="flex items-end gap-1 h-24 mb-4">
                              {chartData.map((height, index) => (
                                <div
                                  key={index}
                                  className="bg-gradient-to-t from-green-500 to-green-400 rounded-t flex-1 transition-all duration-1000 hover:from-green-400 hover:to-green-300"
                                  style={{ 
                                    height: `${height}%`,
                                    animationDelay: `${index * 0.1}s`
                                  }}
                                ></div>
                              ))}
                            </div>
                            <div className="text-xs text-gray-500">
                              Trend: ↗️ +23.4% vs last period
                            </div>
                          </div>
                          <div className="bg-gray-800/60 rounded-lg p-6 border border-green-500/20 group hover:border-green-500/40 transition-all duration-300">
                            <div className="text-sm text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">Key Performance Metrics</div>
                            <div className="space-y-3">
                              {[
                                { label: 'Total Revenue', value: '$124,650', change: '+23.4%', positive: true },
                                { label: 'Growth Rate', value: '23.4%', change: '+5.2%', positive: true },
                                { label: 'Conversion Rate', value: '4.2%', change: '+0.8%', positive: true },
                                { label: 'Customer LTV', value: '$2,340', change: '+12.1%', positive: true }
                              ].map((metric, index) => (
                                <div key={index} className="flex justify-between items-center text-sm">
                                  <span className="text-gray-300">{metric.label}</span>
                                  <div className="flex items-center gap-2">
                                    <span className="text-green-400 font-semibold">{metric.value}</span>
                                    <span className={`text-xs px-1 py-0.5 rounded ${metric.positive ? 'text-green-300 bg-green-500/10' : 'text-red-300 bg-red-500/10'}`}>
                                      {metric.change}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Step 3: Enhanced Final Insights */}
                  {currentStep >= 2 && (
                    <div className={`transition-all duration-700 ${currentStep >= 3 ? 'opacity-100 scale-100' : 'opacity-80 scale-95'}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <BarChart3 className="h-4 w-4 text-black" />
                        </div>
                        <span className="text-green-400 font-semibold">AI insights generated successfully</span>
                        <div className="ml-auto flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-400" />
                          <span className="text-xs text-green-300">Complete</span>
                        </div>
                      </div>
                      {currentStep >= 3 && (
                        <div className="bg-gray-800/60 rounded-lg p-8 animate-fade-in border border-green-500/20 relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/5 rounded-full blur-xl"></div>
                          <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                              <Sparkles className="h-6 w-6 text-green-400 animate-pulse" />
                              <h4 className="text-xl font-semibold text-white">AI-Generated Executive Summary</h4>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div className="space-y-4">
                                <h5 className="text-sm font-medium text-green-300 mb-3">📈 Key Findings</h5>
                                {[
                                  'Revenue increased 23% vs last month, driven by mobile conversions and premium product sales',
                                  'Peak sales occur on Tuesdays at 2 PM - consider scheduling campaigns during this window',
                                  'Customer acquisition cost decreased by 15% through organic channels and referral programs'
                                ].map((insight, index) => (
                                  <div
                                    key={index}
                                    className={`flex items-start gap-3 transition-all duration-700 ${currentStep >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                                    style={{ animationDelay: `${1.5 + index * 0.3}s` }}
                                  >
                                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0 animate-pulse" style={{ animationDelay: `${index * 0.5}s` }}></div>
                                    <span className="text-sm text-gray-300 leading-relaxed">{insight}</span>
                                  </div>
                                ))}
                              </div>
                              <div className="space-y-4">
                                <h5 className="text-sm font-medium text-green-300 mb-3">🎯 Recommendations</h5>
                                {[
                                  'Focus marketing budget on mobile-first campaigns to capitalize on conversion trends',
                                  'Expand inventory for "Electronics" category - projected 40% growth in Q4',
                                  'Implement retargeting campaigns for cart abandoners (potential $15K monthly revenue)'
                                ].map((recommendation, index) => (
                                  <div
                                    key={index}
                                    className={`flex items-start gap-3 transition-all duration-700 ${currentStep >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                                    style={{ animationDelay: `${2 + index * 0.3}s` }}
                                  >
                                    <div className="w-2 h-2 bg-green-300 rounded-full mt-2 flex-shrink-0 animate-pulse" style={{ animationDelay: `${index * 0.5 + 1}s` }}></div>
                                    <span className="text-sm text-gray-300 leading-relaxed">{recommendation}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Enhanced Bottom CTA */}
          <div className="text-center mt-12">
            <button className="bg-green-500 hover:bg-green-400 text-black font-semibold px-10 py-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-green-500/25 flex items-center justify-center gap-3 mx-auto group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex items-center gap-3">
                <Upload className="h-5 w-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                <span>Try It With Your Data</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </button>
            <p className="text-gray-400 text-sm mt-4">
              No signup required • Process up to 1000 rows free • Results in under 30 seconds
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;