import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import App from '../TodoList/App'

const TodoPage = () => {
  const title = 'TodoMatic'

  return (
    <Layout title={title}>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title={title}
      />
      <App />
    </Layout>
  )
}

export default TodoPage
