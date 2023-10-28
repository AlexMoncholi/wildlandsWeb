import { Inter } from 'next/font/google'
import './globals.css'
import './main.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tales from the Wildlands',
  description: 'A Deckbuilding game',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
