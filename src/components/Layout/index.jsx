import Prism from 'prismjs'
import React, { useEffect } from 'react'
import Footer from '../Footer'
import Footer3 from '../Footer3'
import Scroll from '../Scroll'
// import Title from '../Title'
// import TopBar from '../TopBar'
import Header from '../Header'
import ViewPort from '../ViewPort'
import DarkModeToggle from '../DarkModeToggle'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

const Layout = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <>
      <div className="text-gray-900 bg-gray-100 dark:bg-gray-900 dark:text-white">
        <ViewPort />
        <Scroll showBelow={250} />
        <Header siteTitle={site.siteMetadata.title} />
        <DarkModeToggle />
        <div className="w-full">
          <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
            <div className="max-w-screen-lg px-4 pt-0 pb-6 mx-auto mt-10">
              {children}
            </div>
          </main>
          {/* </DrawerLeft> */}
          <Footer />
          <Footer3 />
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
