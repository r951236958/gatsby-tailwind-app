import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import FileUpload3 from '../components/FileUpload3'
import FileUpload from '../components/FileUpload'

const UploadPage = () => {
  const title = 'Upload Page'

  return (
    <Layout title={title}>
      <SEO title={title} />
      <div className="min-h-screen">
        <div className="my-4"><FileUpload /></div>
        <FileUpload3 />
      </div>
    </Layout>
  )
}

export default UploadPage
