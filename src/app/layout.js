import { LanguageProvider } from './context/languageContext';
import { Inter } from 'next/font/google'
import './globals.css'
import './main.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tales from the Wildlands',
  description: 'A Deckbuilding game',
}

const Layout = ({ children }) => {
  return (
    <html lang="es">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}

export default Layout;