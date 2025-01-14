import "@/styles/globals.css"
import { Comfortaa } from 'next/font/google'
import { Metadata, Viewport } from "next"

const comfortaa = Comfortaa({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bichitras - Your Digital Guru",
  description: "Connect with Bichitras - Your Digital Solutions Partner",
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={comfortaa.className}>{children}</body>
    </html>
  )
}
