import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import FileUpload3 from '../components/FileUpload3'
import FileUpload from '../components/FileUpload'
import DropZone from '../components/DropZone'

const UploadPage = () => {
  const title = 'Upload Page'

  return (
    <Layout title={title}>
      <SEO title={title} />
      <div className="flex flex-col min-h-screen space-y-4">
        <div className="my-4">
          <FileUpload />
        </div>
        <div className="flex items-center w-full">
          <FileUpload3 />
        </div>
        <div className="flex items-center my-4">
          <DropZone />
        </div>
      </div>
    </Layout>
  )
}

export default UploadPage
