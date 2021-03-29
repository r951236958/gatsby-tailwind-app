import React from 'react'
import Layout from '../components/Layout'
import LinkList from '../components/LinkList'
import SEO from '../components/SEO'
import Toggle from 'components/Toggle'
import Toggle2 from 'components/Toggle2'
// import ThemeToggle from "../components/ThemeToggle"
// import SwitchDarkMode from "../components/SwitchDarkMode"
import { linkList } from '../config'
import catAndHumanIllustration from '../images/cat-and-human-illustration.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


function IndexPage() {
  const title = 'Home'
 const HELLO = JSON.stringify(process.env.NODE_ENV)

 console.log('process.env.NODE_ENV:', HELLO)
  return (
    <Layout title={title}>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title={title}
      />
      <Toggle name="toggle" icon={<FontAwesomeIcon icon={faCheck} />} />
      <Toggle2 name="toggle2" />
      <div className="mx-auto my-4">
        {linkList.map((items) => (
          <LinkList key={items.id} items={items} />
        ))}
      </div>
      <section className="text-center">
        <img
          alt="Cat and human sitting on a couch"
          className="block w-1/2 mx-auto mb-8"
          src={catAndHumanIllustration}
        />

        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
          Hey there! Welcome to your first Gatsby site.
        </h2>

        <p className="leading-loose">
          This is a barebones starter for Gatsby styled using{` `}
          <a
            className="font-bold text-blue-500 no-underline"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind CSS
          </a>
          , a utility-first CSS framework.
        </p>
      </section>
      <div>
        <button className="px-4 py-2 text-gray-100 bg-blue-500 rounded-md">
          <span className="w-6 h-6 text-gray-100 material-icons">home</span>
          Button
        </button>
        <i className="far fa-heart">heart</i>
        <i className="material-icons">home</i>
        <span className="material-icons">light_mode</span>
      </div>
    </Layout>
  )
}

export default IndexPage
