import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import './DropZone.css'
// import UploadIcon from '../../images/upload.svg'
// import 'bootstrap/dist/css/bootstrap.min.css';

const DropZone = () => {
  const fileInputRef = useRef()
  const modalImageRef = useRef()
  const modalRef = useRef()
  const progressRef = useRef()
  const uploadRef = useRef()
  const uploadModalRef = useRef()
  const [selectedFiles, setSelectedFiles] = useState([])
  const [validFiles, setValidFiles] = useState([])
  const [unsupportedFiles, setUnsupportedFiles] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    let filteredArr = selectedFiles.reduce((acc, current) => {
      const x = acc.find((item) => item.name === current.name)
      if (!x) {
        return acc.concat([current])
      } else {
        return acc
      }
    }, [])
    setValidFiles([...filteredArr])
  }, [selectedFiles])

  // const preventDefault = (e) => {
  //   e.preventDefault()
  //   // e.stopPropagation();
  // }

  const dragOver = (e) => {
    e.preventDefault()
  }

  const dragEnter = (e) => {
    e.preventDefault()
  }

  const dragLeave = (e) => {
    e.preventDefault()
  }

  const fileDrop = (e) => {
    e.preventDefault()
    const files = e.dataTransfer.files
    if (files.length) {
      handleFiles(files)
    }
  }

  const filesSelected = () => {
    if (fileInputRef.current.files.length) {
      handleFiles(fileInputRef.current.files)
    }
  }

  const fileInputClicked = () => {
    fileInputRef.current.click()
  }

  const handleFiles = (files) => {
    for (let i = 0; i < files.length; i++) {
      if (validateFile(files[i])) {
        setSelectedFiles((prevArray) => [...prevArray, files[i]])
      } else {
        files[i]['invalid'] = true
        setSelectedFiles((prevArray) => [...prevArray, files[i]])
        setErrorMessage('File type not permitted')
        setUnsupportedFiles((prevArray) => [...prevArray, files[i]])
      }
    }
  }

  const validateFile = (file) => {
    const validTypes = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/gif',
      'image/x-icon',
      'image/*',
    ]
    if (validTypes.indexOf(file.type) === -1) {
      return false
    }

    return true
  }

  const fileSize = (size) => {
    if (size === 0) {
      return '0 Bytes'
    }
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    const i = Math.floor(Math.log(size) / Math.log(k))
    return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const fileType = (fileName) => {
    return (
      fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) ||
      fileName
    )
  }

  const removeFile = (name) => {
    const index = validFiles.findIndex((e) => e.name === name)
    const index2 = selectedFiles.findIndex((e) => e.name === name)
    const index3 = unsupportedFiles.findIndex((e) => e.name === name)
    validFiles.splice(index, 1)
    selectedFiles.splice(index2, 1)
    setValidFiles([...validFiles])
    setSelectedFiles([...selectedFiles])
    if (index3 !== -1) {
      unsupportedFiles.splice(index3, 1)
      setUnsupportedFiles([...unsupportedFiles])
    }
  }

  const openImageModal = (file) => {
    const reader = new FileReader()
    modalRef.current.style.display = 'block'
    reader.readAsDataURL(file)
    reader.onload = function (e) {
      modalImageRef.current.style.backgroundImage = `url(${e.target.result})`
    }
  }

  const closeModal = () => {
    modalRef.current.style.display = 'none'
    modalImageRef.current.style.backgroundImage = 'none'
  }


  const uploadFiles = async () => {
    uploadModalRef.current.style.display = 'block'
    uploadRef.current.innerHTML = 'File(s) Uploading...'

    for (let i = 0; i < validFiles.length; i++) {
      const formData = new FormData()
      const apiKey = process.env.GATSBY_IMGBB_API_KEY

      formData.append('image', validFiles[i])
      formData.append('key', apiKey)

      axios
        .post('https://api.imgbb.com/1/upload', formData, {
          onUploadProgress: (progressEvent) => {
            const uploadPercentage = Math.floor(
              (progressEvent.loaded / progressEvent.total) * 100
            )
            progressRef.current.innerHTML = `${uploadPercentage}%`
            progressRef.current.style.width = `${uploadPercentage}%`

            if (uploadPercentage === 100) {
              uploadRef.current.innerHTML = 'File(s) Uploaded'
              validFiles.length = 0
              setValidFiles([...validFiles])
              setSelectedFiles([...validFiles])
              setUnsupportedFiles([...validFiles])
            }
          },
        })
        .catch(() => {
          uploadRef.current.innerHTML = `<span class="error">Error Uploading File(s)</span>`
          progressRef.current.style.backgroundColor = 'red'
        })
        .catch((error) => {
          if (error.response) {
            // 當狀態碼不在 validateStatus 設定的範圍時進入
            // 有 data / status / headers 參數可用
            console.log(error.response.status)
          } else if (error.request) {
            // 發送請求，但沒有接到回應
            // error.request is an instance of XMLHttpRequest in the browser
            // and an instance of http.ClientRequest in node.js
            console.log(error.request)
          } else {
            // 在設定 request 時出錯會進入此
            console.log('Error', error.message)
          }
          console.log(error.config)
        })

      
    }
  }

  const closeUploadModal = () => {
    uploadModalRef.current.style.display = 'none'
  }


  return (
    <>
      <div className="dnd-zone">
        <div
          className="drop-container"
          onDragOver={dragOver}
          onDragEnter={dragEnter}
          onDragLeave={dragLeave}
          onDrop={fileDrop}
          onClick={fileInputClicked}
        >
          <div className="drop-message">
            <div className="upload-icon"></div>
            Drag & Drop files here or click to select file(s)
          </div>
          <label
            htmlFor="img-loader-input"
            className="flex flex-col items-center w-64 px-4 py-6 tracking-wide text-gray-100 uppercase bg-transparent border border-teal-500 rounded-lg shadow-lg cursor-pointer hover:bg-gray-200 hover:bg-opacity-10 hover:text-gray-200 "
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
            </svg>
            <span className="mt-2 text-base leading-normal">Select a file</span>
            <input
              ref={fileInputRef}
              className="file-input"
              accept="image/*"
              type="file"
              multiple
              onChange={filesSelected}
            />
          </label>
        </div>
      </div>
      <div className="upload-file-button">
        {unsupportedFiles.length === 0 && validFiles.length ? (
          <button className="file-upload-btn" onClick={() => uploadFiles()}>
            Upload Files
          </button>
        ) : (
          ''
        )}
        {unsupportedFiles.length ? (
          <p>Please remove all unsupported files.</p>
        ) : (
          ''
        )}
      </div>
      <div className="file-display-container">
        {validFiles.map((data, i) => (
          <div className="file-status-bar" key={i}>
            <div
              onClick={
                !data.invalid
                  ? () => openImageModal(data)
                  : () => removeFile(data.name)
              }
            >
              <div className="file-type-logo"></div>
              <div className="file-type">{fileType(data.name)}</div>
              <span className={`file-name ${data.invalid ? 'file-error' : ''}`}>
                {data.name}
              </span>
              <span className="file-size">({fileSize(data.size)})</span>{' '}
              {data.invalid && (
                <span className="file-error-message">({errorMessage})</span>
              )}
            </div>
            <div className="file-remove" onClick={() => removeFile(data.name)}>
              <svg
                className="closeIcon"
                height="10"
                width="10"
                fill="#ff0000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 47.971 47.971"
              >
                <path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 000-4.242 2.998 2.998 0 00-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 00-4.242 0 2.998 2.998 0 000 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 104.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 000-4.242L28.228 23.986z" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <div className="modal" ref={modalRef}>
        <div className="overlay"></div>
        <span className="close" onClick={() => closeModal()}>
          X
        </span>
        <div className="modal-image" ref={modalImageRef}></div>
      </div>

      <div className="upload-modal" ref={uploadModalRef}>
        <div className="overlay"></div>
        <div className="close" onClick={() => closeUploadModal()}>
          X
        </div>
        <div className="progress-container">
          <span ref={uploadRef}></span>
          <div className="progress">
            <div className="progress-bar" ref={progressRef}></div>
          </div>
        </div>
      </div>
    </>
  )
}
export default DropZone
