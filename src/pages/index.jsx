import React from "react"
import Layout from "../components/Layout"
import LinkList from "../components/LinkList"
import SEO from "../components/SEO"

function IndexPage() {
  const title = "Home"

  return (
    <Layout title={title}>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title={title}
      />

      <LinkList />
    </Layout>
  )
}

export default IndexPage
