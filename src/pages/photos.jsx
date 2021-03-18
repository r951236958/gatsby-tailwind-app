import React from "react"
import Layout from '../components/Layout'
import SEO from "../components/SEO"
import SearchApp from "../SearchApp/app"


const Photos = () => {
  const title = "Unsplash API Example"

  return (
    <Layout title={title}>
      <SEO title={title} />
      <SearchApp />
    </Layout>
  )
}

export default Photos
