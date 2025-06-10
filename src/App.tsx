import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import LiveDemo from './components/LiveDemo';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      <ParticleBackground />
      <Header />
      <Hero />
      <HowItWorks />
      <UseCases />
      <LiveDemo />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;