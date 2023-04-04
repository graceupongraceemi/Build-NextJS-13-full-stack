'use client';

import { ThemeProvider } from 'next-themes';
import { FC, ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

interface ProvidersProps {}

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='system'>
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  );
};
export default Providers;
