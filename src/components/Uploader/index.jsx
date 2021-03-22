import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import React from 'react'
require('dotenv').config()

// const apiKey = process.env.REACT_APP_IMGBB_API_KEY
// const apiURL = 'https://api.imgbb.com/1/upload?key=' + apiKey

const Uploader = () => {
    const getUploadParams = ({ meta }) => {
      return { url: 'https://httpbin.org/post' }
      // return { url: apiURL }
    }

    // called every time a file's `status` changes
    const handleChangeStatus = ({ meta, file }, status) => {
      console.log(status, meta, file)
    }

    // receives array of files that are done uploading when submit button is clicked
    const handleSubmit = (files, allFiles) => {
      console.log(files.map((f) => f.meta))
      allFiles.forEach((f) => f.remove())
    }

    return (
      <Dropzone
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        onSubmit={handleSubmit}
        accept="image/*,audio/*,video/*"
      />
    )
}

export default Uploader
