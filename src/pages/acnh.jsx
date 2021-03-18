import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import TableDemo from '../components/TableDemo'

function ACNH() {
const title = '動森'
  return (
    <Layout title={title}>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title={title}
      />

      <TableDemo />
    </Layout>
  )
}

export default ACNH
