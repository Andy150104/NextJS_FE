// src/components/Themes/ThemeSwitch.tsx
'use client';
import React from 'react';
import { useTheme } from '../../Provider/ThemeProvider';

export function ThemeSwitch() {
  const { ref, toggleSwitchTheme, isDarkMode } = useTheme();

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      onClick={toggleSwitchTheme}
      className="p-2 rounded border"
    >
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  );
}
