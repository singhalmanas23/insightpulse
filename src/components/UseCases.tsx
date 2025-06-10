import React, { useEffect, useState } from 'react';
import { TrendingUp, DollarSign, Globe, ArrowRight, Sparkles } from 'lucide-react';

const UseCases = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('use-cases');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const useCases = [
    {
      icon: TrendingUp,
      title: "Marketing Reports",
      description: "Track campaign performance, ad ROI, and customer acquisition costs across all channels.",
      gradient: "from-pink-500 to-red-500",
      bgGlow: "bg-pink-500/10",
      features: ["Campaign ROI", "Attribution Analysis", "Customer Journey"],
      stats: { value: "23%", label: "ROI Increase" }
    },
    {
      icon: DollarSign,
      title: "Sales Forecasting",
      description: "Predict future revenue with confidence using advanced AI algorithms and historical data patterns.",
      gradient: "from-green-500 to-emerald-500",
      bgGlow: "bg-green-500/10",
      features: ["Revenue Prediction", "Trend Analysis", "Seasonal Patterns"],
      stats: { value: "94%", label: "Accuracy Rate" }
    },
    {
      icon: Globe,
      title: "Website Analytics",
      description: "Understand your users' behavior without crunching numbers. Get actionable insights instantly.",
      gradient: "from-blue-500 to-cyan-500",
      bgGlow: "bg-blue-500/10",
      features: ["User Behavior", "Conversion Funnels", "Traffic Sources"],
      stats: { value: "2.5x", label: "Faster Insights" }
    }
  ];

  return (
    <section id="use-cases" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/3 to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-green-500/20 via-transparent to-transparent animate-pulse"></div>
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-green-400/10 via-transparent to-transparent animate-pulse" style={{ animationDelay: '3s' }}></div>
      
      {/* Floating elements */}
      <div className="absolute top-40 right-16 w-20 h-20 border border-green-500/20 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-32 left-20 w-16 h-16 border border-green-400/30 rotate-45 animate-pulse"></div>
      <div className="absolute top-1/2 left-8 w-8 h-8 bg-green-500/10 rounded-full animate-bounce"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-green-400 animate-pulse" />
            <span className="text-green-400 text-sm font-medium">Use Cases</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Transform Data Across
            <span className="block bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
              Every Business Function
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover how InsightPulse transforms data across different business functions with AI-powered analytics
          </p>
        </div>

        {/* Enhanced Use Cases Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <div
                key={index}
                className={`group relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Enhanced Card */}
                <div className={`${useCase.bgGlow} backdrop-blur-xl border border-gray-800 rounded-2xl p-8 h-full transition-all duration-500 hover:border-green-500/50 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 relative overflow-hidden cursor-pointer`}>
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-5`}></div>
                    <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent animate-pulse"></div>
                    <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-l from-transparent via-white/10 to-transparent animate-pulse"></div>
                  </div>

                  {/* Enhanced Icon with Multiple Effects */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center group-hover:bg-gray-700 transition-all duration-300 relative overflow-hidden">
                      <Icon className="h-8 w-8 text-green-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10" />
                      <div className="absolute inset-0 bg-green-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    
                    {/* Floating particles */}
                    <div className="absolute -top-2 -right-2 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300"></div>
                    <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-green-300 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute top-1/2 -right-1 w-1 h-1 bg-green-200 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" style={{ animationDelay: '1s' }}></div>
                  </div>

                  {/* Enhanced Content */}
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-green-300 transition-colors duration-300">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                    {useCase.description}
                  </p>

                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {useCase.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className={`text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded-full border border-gray-700 group-hover:border-green-500/30 group-hover:text-green-300 transition-all duration-300 ${isHovered ? 'animate-pulse' : ''}`}
                        style={{ animationDelay: `${featureIndex * 0.1}s` }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Stats display */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-center">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${useCase.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                        {useCase.stats.value}
                      </div>
                      <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {useCase.stats.label}
                      </div>
                    </div>
                    <div className="flex-1 ml-4">
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className={`h-full bg-gradient-to-r ${useCase.gradient} rounded-full transition-all duration-1000 ${isHovered ? 'w-3/4' : 'w-1/2'}`}></div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Mini Chart Visualization */}
                  <div className="space-y-2 mb-6">
                    {[75, 50, 85].map((width, chartIndex) => (
                      <div key={chartIndex} className="flex items-center gap-2">
                        <div className={`w-3 h-3 bg-gradient-to-r ${useCase.gradient} rounded-full ${isHovered ? 'animate-pulse' : ''}`} style={{ animationDelay: `${chartIndex * 0.2}s` }}></div>
                        <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${useCase.gradient} rounded-full transition-all duration-1000 ${isHovered ? 'opacity-80' : 'opacity-60'}`}
                            style={{ 
                              width: isHovered ? `${width}%` : `${width * 0.7}%`,
                              transitionDelay: `${chartIndex * 0.1}s`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced Learn More Link */}
                  <div className="flex items-center justify-between">
                    <button className="text-green-400 hover:text-green-300 font-medium text-sm transition-all duration-200 flex items-center gap-1 group-hover:gap-2">
                      Learn More 
                      <ArrowRight className="h-4 w-4 transition-all duration-200 group-hover:translate-x-1" />
                    </button>
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-300">
                      <ArrowRight className="h-4 w-4 text-green-400 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </div>
                  </div>

                  {/* Enhanced Hover Effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-green-300 group-hover:w-full transition-all duration-500"></div>
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-green-500/0 group-hover:border-t-green-500/20 transition-all duration-300"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Bottom Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.8s' }}>
          {[
            { value: "10k+", label: "Reports Generated", icon: "📊" },
            { value: "99.9%", label: "Accuracy Rate", icon: "🎯" },
            { value: "< 30s", label: "Processing Time", icon: "⚡" },
            { value: "500+", label: "Happy Customers", icon: "😊" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center group cursor-pointer transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                {stat.label}
              </div>
              <div className="w-full h-0.5 bg-gray-800 rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-green-500 rounded-full w-0 group-hover:w-full transition-all duration-1000"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;