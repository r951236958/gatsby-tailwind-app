import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ImageList from '../components/ImageList'

function ACNH() {
const title = '動森'
  return (
    <Layout title={title}>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title={title}
      />

      <ImageList />
    </Layout>
  )
}

export default ACNH
