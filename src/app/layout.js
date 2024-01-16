import React from 'react';
import { Work_Sans, Spline_Sans_Mono } from 'next/font/google';
import { cookies } from 'next/headers';
import clsx from 'clsx';

import {
  BLOG_DESCRIPTION,
  BLOG_TITLE,
  LIGHT_TOKENS,
  DARK_TOKENS,
  DEFAULT_THEME,
  THEME_COOKIE_NAME,
} from '@/constants';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RespectMotionPreferences from '@/components/RespectMotionPreferences';
import ThemeProvider from '@/components/ThemeProvider';
import './styles.css';

const mainFont = Work_Sans({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family',
});
const monoFont = Spline_Sans_Mono({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family-mono',
});

export const metadata = {
  title: {
    template: `%s • ${BLOG_TITLE}`,
    default: BLOG_TITLE,
  },
  description: BLOG_DESCRIPTION,
};

function RootLayout({ children }) {
  // TODO: Dynamic theme depending on user preference
  const savedTheme = cookies().get(THEME_COOKIE_NAME);
  const theme = savedTheme?.value || DEFAULT_THEME;

  return (
    <RespectMotionPreferences>
      <ThemeProvider initialTheme={theme}>
        <html
          lang="en"
          className={clsx(mainFont.variable, monoFont.variable)}
          data-color-theme={theme}
          style={theme === 'light' ? LIGHT_TOKENS : DARK_TOKENS}
        >
          <body>
            <Header />
            <main>{children}</main>
            <Footer />
          </body>
        </html>
      </ThemeProvider>
    </RespectMotionPreferences>
  );
}

export default RootLayout;
