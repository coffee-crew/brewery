import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Logo } from '../../components/logo/PageLogo'
import { Button } from '~/components/button/Button'
import { SurveyModal } from '~/components/survey/SurveyModal'

// TODO: Wth is this?
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Brewery | Home',
}

const Home = () => {
  return (
    <main>
      <header className="flex w-full justify-between">
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
          <SurveyModal
            title={'What do you think of this website?'}
            description="Please give your opinion on a scale of 0 to 10"
            min={{
              label: 'It hurts my eyes!',
              number: 0,
            }}
            max={{
              label: 'Most beautiful site ever!',
              number: 10,
            }}
            step={1}
          />
        </div>
      </section>
    </main>
  )
}

export default Home
