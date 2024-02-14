'use client';

import React from 'react';
import Cookie from 'js-cookie';

import {
  LIGHT_TOKENS,
  DARK_TOKENS,
  THEME_COOKIE_NAME,
  type AllowedThemes,
} from '@/constants';

export type ThemeContextType = {
  theme: AllowedThemes;
  switchTheme: () => void;
};

export const ThemeContext =
  React.createContext<ThemeContextType | null>(null);

type ThemeProviderProps = {
  initialTheme: AllowedThemes;
  children: React.ReactNode;
};

function ThemeProvider({
  initialTheme,
  children,
}: ThemeProviderProps) {
  const [theme, setTheme] = React.useState(initialTheme);

  function switchTheme() {
    const nextTheme: AllowedThemes =
      theme === 'light' ? 'dark' : 'light';

    setTheme(nextTheme);

    Cookie.set(THEME_COOKIE_NAME, nextTheme, {
      expires: 1000,
    });

    const root = document.documentElement;
    const tokens = nextTheme === 'light' ? LIGHT_TOKENS : DARK_TOKENS;

    root.setAttribute('data-color-theme', nextTheme);

    Object.entries(tokens).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        switchTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
