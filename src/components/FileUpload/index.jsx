import React, { useState } from 'react'
import Uploader from './file-upload.component'

const FileUpload = () => {
  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: [],
  })

  const updateUploadedFiles = (files) =>
    setNewUserInfo({ ...newUserInfo, profileImages: files })

  const handleSubmit = (event) => {
    event.preventDefault()
    //logic to create a new user...
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <Uploader
            accept="image/*"
            label="Profile Image(s)"
            multiple
            updateFilesCb={updateUploadedFiles}
          />
          <button className="px-4 py-2 text-gray-200 bg-green-500 border border-white rounded-md hover:text-gray-100 hover:bg-green-600" type="submit">Create New User</button>
        </form>
      </div>
    </>
  )
}

export default FileUpload
