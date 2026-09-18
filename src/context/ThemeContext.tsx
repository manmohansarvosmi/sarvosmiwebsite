import React, { createContext, useContext, useState, useEffect } from 'react';

export type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  isDark: false,
  toggleTheme: () => {},
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Always default to dark. Use new storage key 'sarvosmi_theme_v2' to clear old preference.
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem('sarvosmi_theme_v3');
      if (saved === 'dark' || saved === 'light') return saved;
      // Clear old keys
      localStorage.removeItem('sarvosmi_theme');
      localStorage.removeItem('sarvosmi_theme_v2');
    } catch {
      // fallback
    }
    return 'light'; // Default: LIGHT THEME
  });

  useEffect(() => {
    try {
      localStorage.setItem('sarvosmi_theme_v3', theme);
    } catch {
      // ignore
    }

    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const isDark = theme === 'dark';

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
