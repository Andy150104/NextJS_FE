// src/AntdThemeProvider.tsx
'use client';
import React from 'react';
import { ConfigProvider, theme as antdTheme } from 'antd';
import { useTheme } from 'Nova/Provider/ThemeProvider';

export function AntdThemeProvider({ children }: { children: React.ReactNode }) {
  const { isDarkMode } = useTheme();

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode
          ? antdTheme.darkAlgorithm
          : antdTheme.defaultAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
}
