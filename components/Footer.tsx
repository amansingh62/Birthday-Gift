"use client";

import { useState, useEffect } from "react";

export default function Footer() {
  const [currentYear] = useState(new Date().getFullYear());
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      href: "#",
    },
    {
      name: "Instagram",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      href: "#",
    },
    {
      name: "Twitter",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
      href: "#",
    },
    {
      name: "Email",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      href: "#",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Memories", href: "#memories" },
    { name: "Wishes", href: "#wishes" },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Marquee Section */}
      <div className="relative bg-gradient-to-r from-pink-600 via-rose-600 to-fuchsia-600 py-4 sm:py-6 overflow-hidden">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>

        <div className="relative overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-playfair mx-8 sm:mx-12 md:mx-16">
              Happy Birthday Bhumu
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white/80 font-playfair mx-8 sm:mx-12 md:mx-16">
              ✦
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-playfair mx-8 sm:mx-12 md:mx-16">
              Happy Birthday Bhumu
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white/80 font-playfair mx-8 sm:mx-12 md:mx-16">
              ✦
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-playfair mx-8 sm:mx-12 md:mx-16">
              Happy Birthday Bhumu
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white/80 font-playfair mx-8 sm:mx-12 md:mx-16">
              ✦
            </span>
          </div>
          <div className="inline-block animate-marquee">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-playfair mx-8 sm:mx-12 md:mx-16">
              Happy Birthday Bhumu
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white/80 font-playfair mx-8 sm:mx-12 md:mx-16">
              ✦
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-playfair mx-8 sm:mx-12 md:mx-16">
              Happy Birthday Bhumu
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white/80 font-playfair mx-8 sm:mx-12 md:mx-16">
              ✦
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-playfair mx-8 sm:mx-12 md:mx-16">
              Happy Birthday Bhumu
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white/80 font-playfair mx-8 sm:mx-12 md:mx-16">
              ✦
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer Content with Background Image */}
      <div className="relative">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Replace with actual image URL */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-900/95 via-rose-900/95 to-fuchsia-900/95"></div>
          {/* Pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
          ></div>
          {/* Gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>

        {/* Footer Content */}
        <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12 md:mb-16">
            {/* About Column */}
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-playfair text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-rose-200 mb-2 sm:mb-3">
                  Bhumi
                </h3>
                <div className="h-1 w-16 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full"></div>
              </div>
              <p className="text-pink-100 font-inter text-sm sm:text-base leading-relaxed">
                Celebrating a remarkable person whose presence brings joy,
                inspiration, and warmth to everyone fortunate enough to know
                her.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4 sm:space-y-6">
              <h4 className="text-lg sm:text-xl font-bold text-white font-inter">
                Quick Links
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-pink-200 hover:text-white transition-colors duration-300 font-inter text-sm sm:text-base flex items-center group"
                    >
                      <span className="w-0 group-hover:w-4 h-0.5 bg-pink-400 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Special Message */}
            <div className="space-y-4 sm:space-y-6">
              <h4 className="text-lg sm:text-xl font-bold text-white font-inter">
                Today&apos;s Special
              </h4>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-pink-300/20">
                <p className="text-pink-100 font-inter text-sm sm:text-base leading-relaxed italic">
                  &quot;May this birthday be the beginning of a year filled with
                  beautiful moments, wonderful opportunities, and endless
                  happiness.&quot;
                </p>
              </div>
            </div>

            {/* Connect */}
            <div className="space-y-4 sm:space-y-6">
              <h4 className="text-lg sm:text-xl font-bold text-white font-inter">
                Stay Connected
              </h4>
              <p className="text-pink-200 font-inter text-sm sm:text-base">
                Follow and connect to share more wonderful moments together.
              </p>
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-pink-300/20 flex items-center justify-center text-pink-200 hover:bg-white hover:text-pink-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-pink-400/50 to-transparent mb-8 sm:mb-10"></div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="text-pink-200 font-inter text-xs sm:text-sm text-center sm:text-left">
              <p>
                © {currentYear} Birthday Celebration. Crafted with love and
                admiration.
              </p>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-pink-200 font-inter text-xs sm:text-sm">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy
              </a>
              <span className="text-pink-400/50">•</span>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Terms
              </a>
              <span className="text-pink-400/50">•</span>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Decorative Element */}
          <div className="mt-8 sm:mt-10 text-center">
            <div className="inline-flex items-center gap-2 sm:gap-3 text-pink-300">
              <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-pink-400"></div>
              <span className="text-xl sm:text-2xl">✦</span>
              <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-pink-400"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }

        /* Pause marquee on hover */
        .animate-marquee:hover {
          animation-play-state: paused;
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

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </footer>
  );
}
