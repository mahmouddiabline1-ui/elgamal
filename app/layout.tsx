import React from "react"
import type { Metadata } from 'next'
import { Cairo, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/i18n'
import './globals.css'

const cairo = Cairo({ subsets: ["arabic", "latin"], variable: '--font-cairo' });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: '--font-cormorant', weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: 'AL GAMAL | الجمل',
  description: 'AL GAMAL for real estate development, contracting and finishing in New Damietta.',
  icons: {
    icon: [
      {
        url: '/brand/al-gamal-icon-dark.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/brand/al-gamal-icon-light.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/brand/al-gamal-icon-dark.png',
        type: 'image/png',
      },
    ],
    apple: '/brand/al-gamal-icon-dark.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${cairo.variable} ${cormorant.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
