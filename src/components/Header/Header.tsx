'use client';

import React from 'react';
import clsx from 'clsx';
import { Rss, Sun, Moon } from 'react-feather';

import Logo from '@/components/Logo';
import VisuallyHidden from '@/components/VisuallyHidden';
import {
  ThemeContext,
  type ThemeContextType,
} from '../ThemeProvider';

import styles from './Header.module.css';

type HeaderProps = React.ComponentProps<'header'> & {};

function Header({ className, ...delegated }: HeaderProps) {
  const { theme, switchTheme } = React.useContext(
    ThemeContext
  ) as ThemeContextType;

  const ThemeIconComponent = theme === 'dark' ? Moon : Sun;

  return (
    <header
      className={clsx(styles.wrapper, className)}
      {...delegated}
    >
      <Logo />

      <div className={styles.actions}>
        <a href="/rss.xml" className={styles.action}>
          <Rss
            size="1.5rem"
            style={{
              // Optical alignment
              transform: 'translate(2px, -2px)',
            }}
          />
          <VisuallyHidden>View RSS feed</VisuallyHidden>
        </a>
        <button className={styles.action} onClick={switchTheme}>
          <ThemeIconComponent size="1.5rem" />
          <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
        </button>
      </div>
    </header>
  );
}

export default Header;
