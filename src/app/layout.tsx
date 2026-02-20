import SmoothScrollProvider from '@/components/shared/SmoothScroll';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import I18nProvider from '@/components/shared/I18nProvider';
import { interTight } from '@/utils/font';
import { ReactNode, Suspense } from 'react';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={`${interTight.variable} antialiased`}>
        <I18nProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <Suspense fallback={<div>Loading...</div>}>
              <SmoothScrollProvider>{children}</SmoothScrollProvider>
            </Suspense>
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
