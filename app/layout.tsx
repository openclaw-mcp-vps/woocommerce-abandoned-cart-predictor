import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CartSense — Predict Cart Abandonment Before It Happens',
  description: 'Integrates with WooCommerce to predict cart abandonment in real-time and trigger automated recovery campaigns via email and SMS.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d0ab80d9-9b92-4260-8ab1-852102b3657c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
