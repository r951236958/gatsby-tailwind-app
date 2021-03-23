import React from "react"
import Layout from "../components/Layout"
import PwdApp from '../PwdApp/App'
// import PasswordGenerator from "../components/PasswordGenerator"
import SEO from "../components/SEO"

const TestPage = () => {
  const title = "Test Page"

  return (
    <Layout titile={title}>
      <SEO title={title} />
      <PwdApp />
    </Layout>
  )
}

export default TestPage
