"use client";

import { useState, useEffect } from 'react';

export default function AboutSection() {
  const [activeMemory, setActiveMemory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [heartCount, setHeartCount] = useState(0);
  const [floatingHearts, setFloatingHearts] = useState<Array<{ id: number; left: number; duration: number }>>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsVisible(true);
  }, []);

  const memories = [
    {
      title: "Aankhein Teri Mastani",
      description: "Jadu Teri Nazar, Kabhi Blue, Kabhi Green To Kabhi Zeher",
      icon: "✨",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "Chubby Dubby",
      description: "Thodi si chubby, always bubbly, cheeks so squishy, vibes so lovely",
      icon: "🌟",
      gradient: "from-rose-500 to-pink-600"
    },
    {
  title: "Mushkurahat",
  description: "Ek muskaan jo bina wajah aa jaati h, Wahi din ko thoda behtar bana jati h",
  icon: "🫶",
  gradient: "from-pink-600 to-fuchsia-500"
},
{
  title: "Rosy Cosy",
  description: "Waqt ke saath aur bhi khil jaata hai yeh noor, Jab dil halka ho, toh chehra khud chamak jaata hai zaroor",
  icon: "🌷",
  gradient: "from-fuchsia-500 to-pink-500"
}
  ];

  const handleHeartClick = () => {
    setHeartCount(prev => prev + 1);
    const newHeart = {
      id: Date.now(),
      left: Math.random() * 70 + 15,
      duration: 2 + Math.random() * 1.5
    };
    setFloatingHearts(prev => [...prev, newHeart]);
    
    setTimeout(() => {
      setFloatingHearts(prev => prev.filter(h => h.id !== newHeart.id));
    }, 3500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMemory((prev) => (prev + 1) % memories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 relative overflow-hidden bg-gradient-to-b from-pink-100 via-rose-50 to-amber-50">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-5 sm:left-10 w-48 sm:w-64 h-48 sm:h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float"></div>
        <div className="absolute bottom-20 right-5 sm:right-10 w-56 sm:w-72 h-56 sm:h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float-delayed"></div>
      </div>

      {/* Floating Hearts from Clicks */}
      {floatingHearts.map((heart) => (
        <div
          key={heart.id}
          className="fixed text-2xl sm:text-3xl md:text-4xl pointer-events-none animate-floatUpHeart z-50"
          style={{
            left: `${heart.left}%`,
            bottom: '10%',
            animationDuration: `${heart.duration}s`
          }}
        >
          💖
        </div>
      ))}

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-10 sm:mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-3 sm:mb-4">
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700 rounded-full text-xs sm:text-sm font-medium font-inter border border-pink-200 shadow-sm">
              About Bhumi
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 font-playfair px-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-pink-700">
              Excellence in
            </span>
            <br />
            <span className="text-gray-900">Every Endeavor</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-inter leading-relaxed px-4">
            Recognizing outstanding qualities and professional excellence
          </p>
        </div>

        {/* Interactive Memory Cards Carousel */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden border border-pink-100">
              {/* Card Content */}
              <div className="p-6 sm:p-8 md:p-10 lg:p-12 min-h-[280px] sm:min-h-[320px] md:min-h-[350px] flex flex-col justify-center">
                {memories.map((memory, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-700 ${
                      activeMemory === index
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 absolute translate-x-full'
                    }`}
                  >
                    <div className="text-center space-y-4 sm:space-y-6">
                      <div className="text-5xl sm:text-6xl md:text-7xl mb-3 sm:mb-4 animate-bounce-slow inline-block">
                        {memory.icon}
                      </div>
                      <h3 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 font-playfair bg-gradient-to-r ${memory.gradient} bg-clip-text text-transparent px-4`}>
                        {memory.title}
                      </h3>
                      <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-inter max-w-2xl mx-auto px-4">
                        {memory.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 pb-6 sm:pb-8">
                {memories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveMemory(index)}
                    aria-label={`View slide ${index + 1}`}
                    className={`transition-all duration-300 rounded-full ${
                      activeMemory === index
                        ? 'w-6 sm:w-8 h-2.5 sm:h-3 bg-gradient-to-r from-pink-600 to-rose-600'
                        : 'w-2.5 sm:w-3 h-2.5 sm:h-3 bg-pink-200 hover:bg-pink-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Appreciation Letter */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <div className="bg-gradient-to-br from-white to-pink-50 rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl p-5 sm:p-8 md:p-10 border border-pink-100 relative overflow-hidden">
            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-pink-400 to-rose-400 opacity-10 rounded-bl-full"></div>
            
            <div className="relative">
              <div className="flex items-start gap-3 sm:gap-4 mb-5 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 font-playfair mb-1 sm:mb-2">
                    A Note of Appreciation
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-inter">With sincere admiration</p>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4 text-gray-700 font-inter leading-relaxed text-sm sm:text-base md:text-lg">
                <p>
                  Dearest Bhumi,
                </p>
                <p>
                  There are many things beautiful about February like Valentine, Mahashivratri, Shortest Month, naaahhh....., it&apos;s your Birthday that makes this month Special.
                </p>
                <p>
                  Nobody is there to talk to always but YOU!, and the vibe also matches have incremented since we met.
                </p>
                <p>
                You have this rare way of making normal moments feel meaningful, without even trying.
                </p>
                <p>
                  Tera online aana, tera jana, tera kaam k sath sath batiyana,
                </p>
                <p>
                  Teri hello, teri hii, teri cuteness, teri chai,
                </p>
                <p>Kamaal Haii!!</p>
                <p className="font-semibold text-pink-700">
                  Wishing you continued success and fulfillment in all your endeavors. Happy Birthday Bhumi! 🎂
                </p>
                <p className="text-right italic mt-4 sm:mt-6 text-sm sm:text-base">
                  With respect and appreciation,<br />
                  <span className="text-pink-600 font-semibold">Aapka Pyara Ammu!</span>
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* Interactive Heart Button */}
        <div className="text-center px-4">
          <div className="inline-block">
            <button
              onClick={handleHeartClick}
              className="group relative px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2 sm:gap-3 font-semibold text-sm sm:text-base md:text-lg font-inter whitespace-nowrap">
                <span className="text-xl sm:text-2xl md:text-3xl group-hover:animate-heartbeat">💝</span>
                <span className="hidden xs:inline">Send Appreciation</span>
                <span className="xs:hidden">Appreciate</span>
                <span className="text-xl sm:text-2xl md:text-3xl group-hover:animate-heartbeat">💝</span>
              </span>
            </button>
            {heartCount > 0 && (
              <div className="mt-3 sm:mt-4 text-pink-600 font-semibold font-inter animate-fadeIn text-sm sm:text-base">
                {heartCount} {heartCount === 1 ? 'appreciation' : 'appreciations'} sent! 💖
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatUpHeart {
          0% {
            transform: translateY(0) scale(1) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: translateY(-50vh) scale(1.3) rotate(180deg);
            opacity: 0.7;
          }
          100% {
            transform: translateY(-100vh) scale(0.5) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-15px) translateX(-10px);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.2);
          }
          50% {
            transform: scale(1);
          }
          75% {
            transform: scale(1.1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-floatUpHeart {
          animation: floatUpHeart forwards;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-heartbeat {
          animation: heartbeat 0.8s ease-in-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        @media (max-width: 640px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }

        /* Extra small breakpoint for very small phones */
        @media (min-width: 375px) {
          .xs\:inline {
            display: inline;
          }
          .xs\:hidden {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}