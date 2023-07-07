import Image from 'next/image'
// "use client"
import { Inter } from 'next/font/google'
import { Logo } from '../../components/logo/PageLogo';
import { Button } from '~/components/button/Button';
import { Popup } from '../../components/rate-pop-up/RatePopUp'
// import react, { useClient } from 'react-components';

// TODO: Wth is this?
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Brewery | Home'
}

const Home = () => {
  // useClient();
  return (
    <main>
      <header className="flex justify-between w-full">
        <Logo />
        <nav>
          <ul className="flex gap-4">
            <li>NavItem</li>
            <li>NavItem</li>
            <li>NavItem</li>
            <li>NavItem</li>
            <li>NavItem</li>
          </ul>
        </nav>
      </header>

      <section className="flex min-h-screen flex-col">
        <div className="grid grid-cols-2">
          <div>
            First column
            <button>Create your first poll</button>
          </div>
          <div>
            Second column
            <button>Go to the about page</button>
          </div>
        </div>

        <div>
          <Button type="primary" label="Create your first poll" />
        </div>
      </section>
      <div>
        <Popup />
      </div>
    </main>
  )
}

export default Home
