import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "./context/ThemeContext"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Modern Portfolio with View Transitions",
  description: "A modern portfolio showcasing Next.js View Transitions",
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} antialiased font-(family-name:--font-geist-sans) text-light-200 
        mx-auto bg-gradient-to-b from-gray-900 to-black min-h-screen 
        transition-colors duration-300 ease-in-out overflow-x-hidden`}
      >
        <ThemeProvider>
          <div className="container w-[80%] max-w-none mx-auto">
            {children}
          </div>

          {/* Decorative elements */}
          <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
