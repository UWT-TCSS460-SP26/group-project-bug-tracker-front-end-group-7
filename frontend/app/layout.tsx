import type { Metadata } from 'next';
import './globals.css';
import Providers from '../components/providers';
import { auth } from '../lib/auth';

export const metadata: Metadata = {
  title: 'Bug Tracker',
  description: 'Public bug report form for the TCSS 460 API project.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
}
