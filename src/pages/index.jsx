import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
// import DarkModeToggle2 from '../components/DarkModeToggle2'
// import DarkModeToggle3 from '../components/DarkModeToggle3'
import catAndHumanIllustration from '../images/cat-and-human-illustration.svg'

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
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
        <div>
          <svg
            className="w-8 h-8 stroke-current stroke-2 md:w-10 md:h-10"
            viewBox="0 0 24 24"
          >
            <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
          <svg
            className="w-8 h-8 stroke-current stroke-2 md:w-10 md:h-10"
            viewBox="0 0 24 24"
          >
            <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          {/* <DarkModeToggle2 />
          <DarkModeToggle3 /> */}
          
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
