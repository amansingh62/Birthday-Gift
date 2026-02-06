"use client";

import { useState } from 'react';

export default function BirthdayLanding() {
  const [activeNav, setActiveNav] = useState('home');
  const [celebrating, setCelebrating] = useState(false);
  const [fireworks, setFireworks] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number; duration: number; rotation: number; color: string }>>([]);
  const [showWishes, setShowWishes] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

const wishes = [
  "थारो आज रो दिन घणो खास होवे, हँसी अर खुशीयां सूं भर्यो रहजे",
  "नवो साल थाने घणी तरक्की, सुकून अर सारा सपणा पुरा करावै",
  "आज थाने जो मळै, ऊं थाने हमेशा याद रहजे",
  "थारो दिल घणो सुथरो है, अर दुनिया ने थां सूं हजीं घणो प्यार मळे",
  "थाने देखां तो लागै कि जिंदगी हजीं घणी सुंदर है"
];


  const handleCelebrate = () => {
    setCelebrating(true);
    setShowWishes(true);
    
    // Generate fireworks
    const newFireworks = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 1 + Math.random() * 2
    }));
    setFireworks(newFireworks);

    // Generate confetti
    const newConfetti = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 3,
      rotation: Math.random() * 360,
      color: ['#ec4899', '#f43f5e', '#fb7185', '#fda4af'][Math.floor(Math.random() * 4)]
    }));
    setConfetti(newConfetti);

    setTimeout(() => {
      setCelebrating(false);
      setFireworks([]);
      setConfetti([]);
      setShowWishes(false);
    }, 6000);
  };

  const handleNavClick = (item: string) => {
    setActiveNav(item.toLowerCase());
    setMobileMenuOpen(false);
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-amber-50 relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-40 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute top-40 -right-40 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-rose-300 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-delayed"></div>
        <div className="absolute -bottom-32 left-1/2 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-amber-200 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-slow"></div>
      </div>

      {/* Fireworks */}
      {celebrating && fireworks.map((fw) => (
        <div
          key={fw.id}
          className="absolute animate-firework"
          style={{
            left: `${fw.left}%`,
            top: '100%',
            animationDelay: `${fw.delay}s`,
            animationDuration: `${fw.duration}s`
          }}
        >
          <div className="relative">
            <div className="w-2 h-2 bg-pink-500 rounded-full shadow-lg shadow-pink-500"></div>
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute top-0 left-0 w-8 md:w-12 h-1 bg-gradient-to-r from-pink-400 via-rose-400 to-transparent animate-spark"
                style={{
                  transform: `rotate(${i * 45}deg)`,
                  transformOrigin: 'left center'
                }}
              ></div>
            ))}
          </div>
        </div>
      ))}

      {/* Confetti */}
      {celebrating && confetti.map((c) => (
        <div
          key={c.id}
          className="absolute top-0 w-2 h-2 md:w-3 md:h-3 animate-confetti"
          style={{
            left: `${c.left}%`,
            backgroundColor: c.color,
            animationDelay: `${c.delay}s`,
            animationDuration: `${c.duration}s`,
            transform: `rotate(${c.rotation}deg)`
          }}
        ></div>
      ))}

      {/* Birthday Wishes Popup */}
      {showWishes && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fadeIn p-4">
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 max-w-md w-full mx-4 shadow-2xl animate-scaleIn">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent font-playfair">
              Chokho Bhumi
            </h3>
            <div className="space-y-3 md:space-y-4 max-h-[60vh] overflow-y-auto">
              {wishes.map((wish, i) => (
                <div
                  key={i}
                  className="p-3 md:p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg md:rounded-xl border border-pink-200 animate-slideIn"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <p className="text-sm md:text-base text-gray-700 font-inter">{wish}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowWishes(false)}
              className="mt-4 md:mt-6 w-full px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold rounded-lg md:rounded-xl hover:shadow-lg transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-pink-100 shadow-sm animate-slideDown">
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
              className="text-xl md:text-2xl font-bold group cursor-pointer"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600 font-playfair tracking-tight group-hover:scale-105 inline-block transition-transform">
                Bhumika Joshi
              </span>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {['Home', 'About', 'Features', 'Footer'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item);
                  }}
                  className={`relative px-3 lg:px-4 py-2 font-medium transition-all duration-300 font-inter hover:scale-105 text-sm lg:text-base ${
                    activeNav === item.toLowerCase()
                      ? 'text-pink-600'
                      : 'text-gray-600 hover:text-pink-500'
                  }`}
                >
                  {item}
                  {activeNav === item.toLowerCase() && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-600 to-rose-600 animate-expandWidth"></span>
                  )}
                </a>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <button className="hidden md:block px-4 lg:px-6 py-2 lg:py-2.5 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 font-inter animate-pulse-soft text-sm lg:text-base">
              6th Feb
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-pink-50 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 animate-slideIn">
              <div className="flex flex-col space-y-3">
                {['Home', 'About', 'Features', 'Footer'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item);
                    }}
                    className={`px-4 py-3 font-medium transition-all duration-300 font-inter rounded-lg text-left ${
                      activeNav === item.toLowerCase()
                        ? 'bg-gradient-to-r from-pink-100 to-rose-100 text-pink-600'
                        : 'text-gray-600 hover:bg-pink-50'
                    }`}
                  >
                    {item}
                  </a>
                ))}
                <button className="w-full px-4 py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all font-inter">
                  6th Feb
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fadeInLeft">
              <div className="inline-block animate-bounceIn">
                <span className="px-4 py-2 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700 rounded-full text-sm font-medium font-inter border border-pink-200 shadow-sm hover:shadow-md transition-shadow">
                  Celebrating Another Year
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight animate-fadeInUp">
                  <span className="text-gray-900 font-playfair">Happy Birthday</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-pink-700 font-playfair animate-gradient">
                    Bhumu Sweetie
                  </span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 max-w-lg leading-relaxed font-inter animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                  A celebration of the wonderful person you are and you Deserve a Soft Year and a Loud Celebration.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                <button 
                  onClick={handleCelebrate}
                  className="group px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 font-inter relative overflow-hidden"
                >
                  <span className="relative z-10">View Celebrations</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button className="px-8 py-4 bg-white text-pink-600 font-semibold rounded-xl border-2 border-pink-200 hover:border-pink-300 hover:shadow-lg hover:scale-105 transition-all duration-300 font-inter">
                   February 6th
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
                <div className="text-center lg:text-left group cursor-pointer">
                  <div className="text-3xl font-bold text-pink-600 font-playfair group-hover:scale-110 transition-transform">2026</div>
                  <div className="text-sm text-gray-500 mt-1 font-inter">Special Year</div>
                </div>
                <div className="text-center lg:text-left group cursor-pointer">
                  <div className="text-3xl font-bold text-rose-600 font-playfair group-hover:scale-110 transition-transform">365</div>
                  <div className="text-sm text-gray-500 mt-1 font-inter">Days Ahead</div>
                </div>
                <div className="text-center lg:text-left group cursor-pointer">
                  <div className="text-3xl font-bold text-pink-700 font-playfair group-hover:scale-110 transition-transform">∞</div>
                  <div className="text-sm text-gray-500 mt-1 font-inter">Possibilities</div>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative animate-fadeInRight">
              <div className="relative w-full max-w-lg mx-auto">
                {/* Background decorative elements */}
                <div className="absolute -top-6 -left-6 w-72 h-72 bg-gradient-to-br from-pink-300 to-rose-300 rounded-3xl opacity-40 blur-2xl animate-pulse-slow"></div>
                <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-gradient-to-br from-rose-300 to-pink-400 rounded-3xl opacity-40 blur-2xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
                
                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500 group">
                  <img 
                    src="./bhumiii.jpg"
                    alt="Celebration"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent"></div>
                </div>

                {/* Floating Cards */}
              <div className="absolute -left-4 md:-left-8 top-1/4 bg-white p-2 md:p-4 rounded-xl md:rounded-2xl shadow-xl backdrop-blur-sm border border-pink-100 hover:scale-110 transition-transform duration-300 animate-floatCard">
  <div className="flex items-center space-x-2 md:space-x-3">
    <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg md:rounded-xl flex items-center justify-center shadow-lg">
      <svg className="w-4 h-4 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    </div>
    <div>
      <div className="font-bold text-gray-800 font-inter text-xs md:text-base">Rajasthani</div>
      <div className="text-xs md:text-sm text-gray-500 font-inter">Jalebi</div>
    </div>
  </div>
</div>

<div className="absolute -right-4 md:-right-8 bottom-1/4 bg-white p-2 md:p-4 rounded-xl md:rounded-2xl shadow-xl backdrop-blur-sm border border-pink-100 hover:scale-110 transition-transform duration-300 animate-floatCard" style={{animationDelay: '0.5s'}}>
  <div className="flex items-center space-x-2 md:space-x-3">
    <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-lg md:rounded-xl flex items-center justify-center shadow-lg">
      <svg className="w-4 h-4 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
      </svg>
    </div>
    <div>
      <div className="font-bold text-gray-800 font-inter text-xs md:text-base">Loved</div>
      <div className="text-xs md:text-sm text-gray-500 font-inter">Always</div>
    </div>
  </div>
</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800&display=swap');

        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        
        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeInLeft {
          from {
            transform: translateX(-50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeInRight {
          from {
            transform: translateX(50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes bounceIn {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes floatCard {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-soft {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes expandWidth {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes firework {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-80vh);
            opacity: 0;
          }
        }

        @keyframes spark {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(3);
            opacity: 0;
          }
        }

        @keyframes confetti {
          0% {
            transform: translateY(-10vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) rotate(720deg);
            opacity: 0;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            transform: translateX(-20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slideDown {
          animation: slideDown 0.6s ease-out;
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
          animation-fill-mode: both;
        }

        .animate-bounceIn {
          animation: bounceIn 0.8s ease-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }

        .animate-floatCard {
          animation: floatCard 3s ease-in-out infinite;
        }

        .animate-pulse-soft {
          animation: pulse-soft 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-expandWidth {
          animation: expandWidth 0.3s ease-out;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-firework {
          animation: firework forwards;
        }

        .animate-spark {
          animation: spark 0.6s ease-out forwards;
        }

        .animate-confetti {
          animation: confetti forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out;
        }

        .animate-slideIn {
          animation: slideIn 0.5s ease-out;
          animation-fill-mode: both;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}