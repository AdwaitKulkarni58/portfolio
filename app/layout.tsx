import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Adwait Kulkarni',
  description: 'Passionate full-stack developer specializing in modern technologies. Building innovative solutions and creating exceptional user experiences.',
  keywords: 'Adwait Kulkarni, Full Stack Developer, React.js, Node.js, JavaScript, AWS, Java, Python, Software Engineer, Web Developer',
  authors: [{ name: 'Adwait Kulkarni' }],
  creator: 'Adwait Kulkarni',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adwait-kulkarni.netlify.app',
    title: 'Adwait Kulkarni - Full Stack Developer',
    description: 'Passionate full-stack developer creating innovative end-to-end solutions',
    siteName: 'Adwait Kulkarni Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adwait Kulkarni - Full Stack Developer',
    description: 'Passionate full-stack developer creating innovative end-to-end solutions',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-dark-900">
          <Header />
          <main className="relative">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
