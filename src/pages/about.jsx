import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import dogIllustration from '../images/dog-illustration.svg'

function AboutPage() {
  const title = 'About'
  
  return (
    <Layout title={title}>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title={title}
      />

      <section className="flex flex-col items-center md:flex-row">
        <div className="md:w-2/3 md:mr-8">
          <blockquote className="pl-4 font-serif leading-loose text-justify border-l-4 border-gray-300">
            The point is... to live one&apos;s life in the full complexity of
            what one is, which is something much darker, more contradictory,
            more of a maelstrom of impulses and passions, of cruelty, ecstacy,
            and madness, than is apparent to the civilized being who glides on
            the surface and fits smoothly into the world.
          </blockquote>

          <cite className="block mt-4 text-xs font-bold text-right uppercase">
            – Thomas Nagel
          </cite>
        </div>

        <figure className="w-2/3 md:w-1/3">
          <img alt="A dog relaxing" src={dogIllustration} />
        </figure>
      </section>
    </Layout>
  )
}

export default AboutPage
