import React, { useState } from 'react'
import Uploader from './file-upload.component'
import axios from 'axios'

const FileUpload = () => {
  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: [],
  })

  const updateUploadedFiles = (files) => {
    setNewUserInfo({ ...newUserInfo, profileImages: files })
  }

  const onFileChange = (e) => {
    setNewUserInfo(e.target.files[0])
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const apiKey = process.env.GATSBY_IMGBB_API_KEY

    //logic to create a new user...
    const formData = new FormData()
    formData.append('key', apiKey)

    formData.append('profileImg', newUserInfo)
    // axios.post('https://api.imgbb.com/1/upload', formData, {}).then((res) => {
    axios.post('https://httpbin.org/post', formData, {}).then((res) => {
      console.log(res)
    })
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <Uploader
            accept="image/*"
            label="Profile Image(s)"
            multiple
            onChange={onFileChange}
            updateFilesCb={updateUploadedFiles}
          />
          <button
            className="px-4 py-2 text-gray-200 bg-green-500 border border-white rounded-md hover:text-gray-100 hover:bg-green-600"
            type="submit"
          >
            Create New User
          </button>
        </form>
      </div>
    </>
  )
}

export default FileUpload
