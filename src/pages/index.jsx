import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
// import DarkModeToggle2 from '../components/DarkModeToggle2'
// import DarkModeToggle3 from '../components/DarkModeToggle3'
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg"

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
        
      </section>
    </Layout>
  )
}

export default IndexPage
