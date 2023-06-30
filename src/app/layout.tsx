import { Footer } from '~/components/footer/Footer';
import './globals.css'

export const metadata = {
  title: 'Brewery',
  description: 'Create your first poll',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="max-w-4xl mx-auto min-h-screen">
        {children}
        <Footer />
      </body>
    </html>
  )
}
