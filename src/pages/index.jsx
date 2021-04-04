import React from 'react'
import Layout from '../components/Layout'
// import LinkList from '../components/LinkList'
import SEO from '../components/SEO'
import catAndHumanIllustration from '../images/cat-and-human-illustration.svg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCheck } from '@fortawesome/free-solid-svg-icons'

function Index() {
  const title = 'Home'
  const HELLO = JSON.stringify(process.env.NODE_ENV)

  console.log('process.env.NODE_ENV:', HELLO)

  return (
    <Layout title={title}>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title={title}
      />

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
      <div className="flex flex-row items-center justify-center w-full p-2 my-4 space-x-4">
        <button className="inline-flex items-center px-4 py-2 text-gray-100 bg-blue-500 rounded-md">
          <span className="w-6 h-6 mr-2 text-gray-100 material-icons">
            home
          </span>
          Button
        </button>
        <i className="far fa-heart" />
        <i className="material-icons">home</i>
        <span className="material-icons">light_mode</span>
      </div>
    </Layout>
  )
}

export default Index
