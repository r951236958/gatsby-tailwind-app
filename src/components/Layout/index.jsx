import { graphql, useStaticQuery } from "gatsby"
import Prism from "prismjs"
import PropTypes from "prop-types"
import React, { useEffect } from "react"
import Footer from "../Footer"
import Footer3 from "../Footer3"
// import Header from '../Header'
// import Navbar from '../Navbar'
import Scroll from "../Scroll"
import Title from "../Title"
import TopBar from "../TopBar"
import ViewPort from "../ViewPort"

const Layout = ({ children, title }) => {
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
      <div className="text-gray-900 bg-white dark:bg-gray-900 dark:text-white">
        <ViewPort />
        <Scroll showBelow={250} />
        <TopBar siteTitle={site.siteMetadata.title} />

        <main>
          <div className="w-full max-w-4xl p-4 mx-auto md:p-6">
            <div className="max-w-screen-lg px-4 pt-0 pb-6">
              <Title>{title}</Title>
              {children}
            </div>
          </div>
          {/* </DrawerLeft> */}
          <Footer />
          <Footer3 />
        </main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
