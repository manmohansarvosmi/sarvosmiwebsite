import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import sarvosmiLogo from '../asset/sarvosmi.jpeg';
import logoRmscErx from '../asset/logo_rmscerx.png';

export const Navbar: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'ERX?',              href: '#why-erx-section' },
    { label: 'Questions',         href: '#questions-section' },
    { label: 'Why RMSC',          href: '#overview-section' },
    { label: 'Sarvosmi ERX™ RMSC', href: '#execution-section' },
    { label: 'The Approach',      href: '#concepts-section' },
    { label: 'Services',          href: '#objectives-section' },
    { label: 'Connect',           href: '#modules-mindmap-section' },
  ];

  return (
    <header
      id="main-sticky-navbar"
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 backdrop-blur-xl border-b border-slate-800/80 shadow-lg'
            : 'bg-gradient-to-r from-white/98 via-slate-50/98 to-blue-50/90 backdrop-blur-xl border-b border-slate-200/90 shadow-sm'
          : isDark
            ? 'bg-gradient-to-r from-slate-950/95 via-slate-900/95 to-slate-950/95 backdrop-blur-xl border-b border-white/[0.08]'
            : 'bg-gradient-to-r from-slate-50/95 via-white/95 to-indigo-50/60 backdrop-blur-xl border-b border-slate-200/80 shadow-xs'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[58px] sm:h-[64px] gap-4">

          {/* ── Brand Logo ─────────────────────────────────── */}
          <a href="#" id="brand-logo" className="flex items-center gap-2 shrink-0 group">
            <div className="h-12 flex items-center">
              <img
                src={sarvosmiLogo}
                alt="Sarvosmi Logo"
                className="h-10 sm:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </div>
          </a>

          {/* ── Center Nav Links ────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2.5">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className={`nav-link px-3 py-1.5 rounded-lg flex items-center transition-all duration-200 ${
                  item.label === 'Sarvosmi ERX™ RMSC'
                    ? 'opacity-95 hover:opacity-100 hover:bg-slate-100 dark:hover:bg-white/[0.05]'
                    : `text-[13px] xl:text-[14px] font-bold font-grotesk tracking-tight ${
                        isDark
                          ? 'text-white hover:text-emerald-400 hover:bg-white/[0.05]'
                          : 'text-slate-950 hover:text-emerald-600 hover:bg-slate-100'
                      }`
                }`}
              >
                {item.label === 'Sarvosmi ERX™ RMSC' ? (
                  <img
                    src={logoRmscErx}
                    alt="Sarvosmi ERX™ RMSC"
                    className={`h-[18px] xl:h-5 w-auto object-contain inline-block ${isDark ? 'brightness-0 invert' : 'mix-blend-multiply'}`}
                  />
                ) : (
                  item.label
                )}
              </a>
            ))}
          </nav>

          {/* ── Right Actions ───────────────────────────────── */}
          <div className="flex items-center gap-2 shrink-0">

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              id="theme-toggle-btn"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className={`p-2 rounded-lg border transition-all duration-200 ${
                isDark
                  ? 'bg-slate-900 border-slate-700/60 text-amber-400 hover:bg-slate-800'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-emerald-600'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile Hamburger */}
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border lg:hidden transition-all duration-200 ${
                isDark
                  ? 'bg-slate-900 border-slate-700/60 text-slate-300'
                  : 'bg-slate-50 border-slate-200 text-slate-600'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* ── Mobile Drawer ──────────────────────────────────── */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`py-3 pb-5 space-y-0.5 border-t ${isDark ? 'border-slate-200' : 'border-slate-100'}`}>
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-bold font-grotesk transition-all ${
                  isDark
                    ? 'text-white hover:bg-slate-800 hover:text-emerald-400'
                    : 'text-slate-950 hover:bg-slate-100 hover:text-emerald-600'
                }`}
              >
                {item.label}
                <ChevronRight className="w-4 h-4 opacity-40" />
              </a>
            ))}
            <div className="pt-3 px-3">
              <a
                href="#features-benefits-section"
                className="btn-primary w-full text-center justify-center text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
