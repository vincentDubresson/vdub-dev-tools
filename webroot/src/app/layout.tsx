'use client';
import React, { useState } from 'react';
import './globals.scss';
import { Inter } from 'next/font/google';
import Navbar from '@/_components/Navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const handleThemeToggle = (theme: 'light' | 'dark') => {
    setTheme(theme);
  };

  return (
    <html lang="en">
      <body className={`${inter.className} ${theme}`}>
        <Navbar handleThemeToggle={handleThemeToggle} />
        {children}
      </body>
    </html>
  );
}
