import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Logo } from '../../components/logo/PageLogo';
import { Button } from '~/components/button/Button';
import { Survey } from '~/components/survey/Survey';

// TODO: Wth is this?
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Brewery | Home'
}

const Home = () => {
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
        <div>
          <div>
            <Survey title="What do you think of this website?" lowest="It hurts my eyes!" highest="Most beautiful site ever!" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
