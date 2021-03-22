import React from "react"
import Layout from "../components/Layout"
import PasswordGenerator from "../components/PasswordGenerator"
import SEO from "../components/SEO"

const TestPage = () => {
  const title = "Test Page"

  return (
    <Layout titile={title}>
      <SEO title={title} />
      <PasswordGenerator />
    </Layout>
  )
}

export default TestPage
