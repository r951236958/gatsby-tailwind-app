import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PwdGen from '../components/PwdGen'
// import App from '../PwdApp/App'
      
const PasswordGeneratorPage = () => {
    const title = 'Password Generator'

    return (
      <Layout title={title}>
        <SEO
          keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
          title={title}
        />
        <PwdGen />
      </Layout>
    )
}

export default PasswordGeneratorPage
