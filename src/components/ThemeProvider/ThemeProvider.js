'use client';

import React from 'react';
import Cookie from 'js-cookie';

import {
  LIGHT_TOKENS,
  DARK_TOKENS,
  THEME_COOKIE_NAME,
} from '@/constants';

export const ThemeContext = React.createContext();

function ThemeProvider({ initialTheme, children }) {
  const [theme, setTheme] = React.useState(initialTheme);

  function switchTheme() {
    const nextTheme = theme === 'light' ? 'dark' : 'light';

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
