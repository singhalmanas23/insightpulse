import React, { useEffect, useState } from 'react';
import { UploadCloud as CloudUpload, Brain, LayoutDashboard, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('how-it-works');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: CloudUpload,
      title: "Upload Your Data",
      description: "Drag and drop CSV, connect GA, or paste SQL queries. Our system supports multiple data formats.",
      delay: "0s",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "AI Analyzes Patterns",
      description: "Our advanced AI engine detects trends, anomalies, correlations, and generates forecasts automatically.",
      delay: "0.3s",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: LayoutDashboard,
      title: "Insights + Charts Instantly",
      description: "Get beautiful visualizations and actionable text reports tailored specifically to your business needs.",
      delay: "0.6s",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/3 to-transparent"></div>
      <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-green-500/20 via-transparent to-transparent animate-pulse"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-green-400/10 via-transparent to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-32 right-20 w-16 h-16 border border-green-500/20 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-40 left-16 w-12 h-12 border border-green-400/30 rotate-45 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
            <Brain className="h-4 w-4 text-green-400 animate-pulse" />
            <span className="text-green-400 text-sm font-medium">How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Three Simple Steps to
            <span className="block bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
              Data Enlightenment
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transform your raw data into actionable insights with our AI-powered analytics platform
          </p>
        </div>

        {/* Enhanced Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-green-500/50 via-green-400/30 to-green-500/50 transform -translate-y-1/2 z-0">
            <div className="absolute left-1/4 top-1/2 w-2 h-2 bg-green-500 rounded-full transform -translate-y-1/2 animate-pulse"></div>
            <div className="absolute right-1/4 top-1/2 w-2 h-2 bg-green-400 rounded-full transform -translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`group relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ animationDelay: step.delay }}
              >
                {/* Enhanced Card */}
                <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 h-full transition-all duration-500 hover:border-green-500/50 hover:bg-gray-900/80 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 relative overflow-hidden">
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5`}></div>
                    <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
                    <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                  </div>

                  {/* Animated Step Number */}
                  <div className="absolute -top-4 left-8 bg-green-500 text-black font-bold w-8 h-8 rounded-full flex items-center justify-center text-sm group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    {index + 1}
                  </div>

                  {/* Enhanced Icon with Multiple Glow Effects */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center group-hover:bg-gray-700 transition-all duration-300 relative overflow-hidden">
                      <Icon className="h-8 w-8 text-green-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10" />
                      <div className="absolute inset-0 bg-green-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    
                    {/* Floating particles around icon */}
                    <div className="absolute -top-2 -right-2 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300"></div>
                    <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-green-300 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" style={{ animationDelay: '0.5s' }}></div>
                  </div>

                  {/* Enhanced Content */}
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-green-300 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {step.description}
                  </p>

                  {/* Animated progress indicator */}
                  <div className="mt-6 flex items-center gap-2">
                    <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full w-0 group-hover:w-full transition-all duration-1000"></div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-green-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </div>

                  {/* Hover Animation Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-green-300 group-hover:w-full transition-all duration-500"></div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-green-500/0 group-hover:border-t-green-500/20 transition-all duration-300"></div>
                </div>

                {/* Enhanced Connection Arrow (Desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-12 z-20">
                    <div className="w-6 lg:w-12 h-0.5 bg-gradient-to-r from-green-500/50 to-green-400/30 transform -translate-y-1/2">
                      <div className="absolute right-0 top-1/2 w-0 h-0 border-l-[8px] border-l-green-500/50 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent transform -translate-y-1/2 animate-pulse"></div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '1s' }}>
          <button className="bg-green-500/10 hover:bg-green-500/20 border border-green-500 text-green-400 font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 hover:scale-105 group relative overflow-hidden">
            <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex items-center gap-2">
              <span>See It In Action</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;