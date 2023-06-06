import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: '✰ Najwa Tahir ✰',
  description: 'Najwa Tahir Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
