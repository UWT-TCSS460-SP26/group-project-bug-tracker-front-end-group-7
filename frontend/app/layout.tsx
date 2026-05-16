import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bug Tracker',
  description: 'Public bug report form for the TCSS 460 API project.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
