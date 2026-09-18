import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import sarvosmiLogo from '../asset/sarvosmi.png';
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
    { label: 'Why ERX',    href: '#why-erx-section' },
    { label: 'Questions',  href: '#questions-section' },
    { label: 'Overview',   href: '#overview-section' },
    { label: 'Execution',  href: '#execution-section' },
    { label: 'Concepts',   href: '#concepts-section' },
    { label: 'Objectives', href: '#objectives-section' },
    { label: 'Modules',    href: '#modules-mindmap-section' },
  ];

  return (
    <header
      id="main-sticky-navbar"
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'navbar-glass'
          : isDark
            ? 'bg-slate-950/90 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-white/90 backdrop-blur-xl border-b border-slate-200/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-[64px] gap-4">

          {/* ── Brand Logo ─────────────────────────────────── */}
          <a href="#" id="brand-logo" className="flex items-center gap-3 shrink-0 group">
            <div className="h-10 flex items-center">
              <img
                src={sarvosmiLogo}
                alt="Sarvosmi Logo"
                className="h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </div>
            
            <div className="hidden sm:flex items-center gap-1.5 pl-2 border-l border-slate-200 dark:border-slate-800">
              <span className="font-grotesk font-black text-sm text-emerald-600 dark:text-emerald-400 tracking-tight">
                ERX™
              </span>
              <span
                className="text-[9px] font-black tracking-widest uppercase px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20"
              >
                RMSC
              </span>
            </div>
          </a>

          {/* ── Center Nav Links ────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className={`nav-link px-3 py-1.5 rounded-md text-[13px] font-semibold font-grotesk transition-all duration-200 ${
                  isDark
                    ? 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                    : 'text-slate-500 hover:text-indigo-700 hover:bg-indigo-50/70'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* ── Right Actions ───────────────────────────────── */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Get Demo CTA */}
            <a
              href="#features-benefits-section"
              id="navbar-get-demo-btn"
              className="hidden sm:flex items-center gap-1.5 btn-demo text-xs rounded-md"
            >
              Get Demo
              <ChevronRight className="w-3.5 h-3.5" />
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              id="theme-toggle-btn"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className={`p-2 rounded-md border transition-all duration-200 ${
                isDark
                  ? 'bg-slate-900 border-slate-700/60 text-amber-400 hover:bg-slate-800'
                  : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-600'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile Hamburger */}
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md border lg:hidden transition-all duration-200 ${
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
                className={`flex items-center justify-between px-3 py-2.5 rounded-xs text-sm font-semibold font-grotesk transition-all ${
                  isDark
                    ? 'text-slate-400 hover:bg-slate-800 hover:text-white'
                    : 'text-slate-600 hover:bg-indigo-50 hover:text-indigo-700'
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
