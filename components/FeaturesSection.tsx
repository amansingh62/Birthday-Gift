"use client";

import { useState, useEffect } from 'react';

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState('beauty');
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Stagger card animations
    // eslint-disable-next-line react-hooks/immutability
    beautyFeatures.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards(prev => [...prev, index]);
      }, index * 150);
    });
  }, []);

  const beautyFeatures = [
    {
      title: "Happy",
      description: "A smile that lights up the room and warms every heart it touches",
      icon: "😊",
      gradient: "from-pink-400 to-rose-400"
    },
    {
      title: "Birthday",
      description: "Eyes that tell stories of kindness, intelligence, and endless dreams",
      icon: "✨",
      gradient: "from-rose-400 to-pink-500"
    },
    {
      title: "Meri",
      description: "An elegance and poise that makes every moment feel special",
      icon: "🌸",
      gradient: "from-pink-500 to-fuchsia-400"
    },
    {
      title: "Pyaari",
      description: "A beauty that comes from within, radiating positivity and warmth",
      icon: "💫",
      gradient: "from-fuchsia-400 to-rose-500"
    },
    {
      title: "Bhumu",
      description: "A personal style that reflects confidence and authenticity",
      icon: "👑",
      gradient: "from-rose-500 to-pink-400"
    },
    {
      title: "Sweetie",
      description: "An irresistible charm that draws people in and makes them feel valued",
      icon: "💝",
      gradient: "from-pink-400 to-rose-400"
    }
  ];

  const memories = [
    {
      title: "First Meeting Magic",
      date: "A Day to Remember",
      description: "The moment we met, there was an instant connection - your warmth and genuine nature made it feel like we'd known each other forever.",
      emoji: "🌟",
      color: "pink"
    },
    {
      title: "Laughter & Joy",
      date: "Countless Moments",
      description: "All those times your infectious laugh filled the air, turning ordinary moments into extraordinary memories we'll cherish forever.",
      emoji: "😄",
      color: "rose"
    },
    {
      title: "Adventures Together",
      date: "Unforgettable Times",
      description: "From spontaneous outings to planned celebrations, every adventure with you becomes a treasured story in our hearts.",
      emoji: "🎉",
      color: "fuchsia"
    },
    {
      title: "Words of Wisdom",
      date: "Guiding Light",
      description: "Your thoughtful advice and genuine perspective have helped shape better decisions and brighter paths forward.",
      emoji: "💭",
      color: "pink"
    },
    {
      title: "Acts of Kindness",
      date: "Everyday Grace",
      description: "The small gestures and big hearts - your kindness has touched lives in ways you may never fully realize.",
      emoji: "💖",
      color: "rose"
    },
    {
      title: "Shared Dreams",
      date: "Looking Forward",
      description: "The exciting conversations about the future, supporting each other's dreams, and building beautiful plans together.",
      emoji: "🌈",
      color: "fuchsia"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* You can replace this with an actual image URL */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-rose-50 to-fuchsia-100"></div>
        {/* Overlay pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ec4899' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/80"></div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-10 sm:mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-3 sm:mb-4">
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/80 backdrop-blur-sm text-pink-700 rounded-full text-xs sm:text-sm font-medium font-inter border border-pink-200 shadow-lg">
              What Makes You Special
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 font-playfair px-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-fuchsia-600">
              Beauty & Memories
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-inter leading-relaxed px-4">
            Celebrating the qualities that make you unforgettable and the moments we treasure
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex bg-white/90 backdrop-blur-md rounded-full p-1.5 sm:p-2 shadow-xl border border-pink-200">
            <button
              onClick={() => setActiveTab('beauty')}
              className={`px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold font-inter text-sm sm:text-base transition-all duration-300 ${
                activeTab === 'beauty'
                  ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg scale-105'
                  : 'text-gray-600 hover:text-pink-600'
              }`}
            >
              <span className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-base sm:text-lg">✨</span>
                <span className="hidden xs:inline">Your Beauty</span>
                <span className="xs:hidden">Beauty</span>
              </span>
            </button>
            <button
              onClick={() => setActiveTab('memories')}
              className={`px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold font-inter text-sm sm:text-base transition-all duration-300 ${
                activeTab === 'memories'
                  ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg scale-105'
                  : 'text-gray-600 hover:text-pink-600'
              }`}
            >
              <span className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-base sm:text-lg">💝</span>
                <span className="hidden xs:inline">Our Memories</span>
                <span className="xs:hidden">Memories</span>
              </span>
            </button>
          </div>
        </div>

        {/* Beauty Features Grid */}
        {activeTab === 'beauty' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            {beautyFeatures.map((feature, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${
                  visibleCards.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl border border-pink-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl sm:rounded-3xl`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className={`text-xl sm:text-2xl font-bold mb-2 sm:mb-3 font-playfair bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-inter">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative corner element */}
                  <div className={`absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br ${feature.gradient} opacity-5 rounded-bl-full`}></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Memories Timeline */}
        {activeTab === 'memories' && (
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {memories.map((memory, index) => (
                <div
                  key={index}
                  className={`group relative transition-all duration-700 delay-${index * 100}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 ${
                    index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}>
                    {/* Icon Circle */}
                    <div className="flex-shrink-0 self-start sm:self-center">
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-${memory.color}-400 to-${memory.color}-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-2xl sm:text-3xl md:text-4xl">{memory.emoji}</span>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1">
                      <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl border border-pink-100 hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02]">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4 gap-2">
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 font-playfair">
                            {memory.title}
                          </h3>
                          <span className={`inline-block px-3 py-1 bg-gradient-to-r from-${memory.color}-100 to-${memory.color}-200 text-${memory.color}-700 rounded-full text-xs sm:text-sm font-medium font-inter self-start`}>
                            {memory.date}
                          </span>
                        </div>
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-inter">
                          {memory.description}
                        </p>

                        {/* Decorative element */}
                        <div className={`mt-4 sm:mt-6 h-1 w-16 sm:w-20 bg-gradient-to-r from-${memory.color}-400 to-${memory.color}-600 rounded-full`}></div>
                      </div>
                    </div>
                  </div>

                  {/* Connecting line for desktop */}
                  {index < memories.length - 1 && (
                    <div className="hidden sm:block absolute left-10 md:left-12 top-20 md:top-24 w-0.5 h-8 md:h-12 bg-gradient-to-b from-pink-300 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA Section */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center">
          <div className="inline-block bg-white/90 backdrop-blur-md rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl border border-pink-200 max-w-3xl">
            <div className="text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-6">🌟</div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 font-playfair text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
              Every Moment with You is a Gift
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 font-inter leading-relaxed px-2 sm:px-4">
              Your beauty, inside and out, creates memories that last a lifetime. Here&apos;s to many more beautiful moments together! 💖
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -20px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(20px, 10px) scale(1.05);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        /* Responsive breakpoint for extra small devices */
        @media (min-width: 375px) {
          .xs\:inline {
            display: inline;
          }
          .xs\:hidden {
            display: none;
          }
        }

        /* Smooth transitions for all interactive elements */
        * {
          -webkit-tap-highlight-color: transparent;
        }

        /* Custom scrollbar for the section */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #fce7f3;
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #ec4899, #f43f5e);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #db2777, #e11d48);
        }
      `}</style>
    </section>
  );
}