import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Exact navigation items from user screenshot
  const navItems = [
    { label: 'Questions', href: '#questions-section' },
    { label: 'Overview', href: '#why-erx-section' },
    { label: 'Concepts', href: '#' },
    { label: 'Objectives', href: '#' },
    { label: 'Features & benefits', href: '#' },
    { label: 'Modules', href: '#modules-mindmap-section' },
    { label: 'Approach', href: '#' },
    { label: 'Connect', href: '#' },
  ];

  return (
    <header
      id="main-sticky-navbar"
      className={`sticky top-0 z-50 w-full transition-all duration-300 backdrop-blur-xl border-b ${
        isDark
          ? 'bg-slate-950/90 border-slate-800 text-slate-100 shadow-slate-950/40'
          : 'bg-white/95 border-slate-200/90 text-slate-900 shadow-slate-900/5 shadow-xs'
      }`}
    >
      <div className="w-full px-4 sm:px-8">
        <div className="flex items-center justify-between h-16 gap-6">
          
          {/* Left Brand Logo */}
          <div className="flex items-center gap-4 shrink-0">
            <a href="#" className="flex items-center gap-1 font-sans">
              <span className="font-extrabold italic text-lg sm:text-xl text-red-600 tracking-tight">
                Sarvosmi
              </span>
              <span className="font-extrabold italic text-sm sm:text-base text-emerald-600 tracking-tight ml-0.5">
                ERX<sup className="text-[10px] font-bold">TM</sup>
              </span>
              <span className="font-extrabold uppercase text-xs sm:text-sm text-emerald-600 tracking-wider ml-1">
                RMSC
              </span>
            </a>
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-bold text-slate-900 dark:text-slate-100">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className={`transition-colors whitespace-nowrap ${
                  item.label === 'Overview'
                    ? 'text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                    : 'hover:text-red-600 dark:hover:text-emerald-400'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: Theme Toggle & Mobile Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              id="theme-toggle-btn"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className={`p-2 rounded-xl border transition-all ${
                isDark
                  ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl border lg:hidden transition-all ${
                isDark
                  ? 'bg-slate-900 border-slate-800 text-slate-300'
                  : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div
            className={`lg:hidden py-4 px-2 border-t mt-1 space-y-2 rounded-b-2xl transition-all ${
              isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-white'
            }`}
          >
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block p-3 rounded-xl text-sm font-bold ${
                  isDark ? 'hover:bg-slate-900 text-slate-200' : 'hover:bg-slate-100 text-slate-800'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
