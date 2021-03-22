import React, { useState, useCallback } from 'react'
// import { StaticImage } from 'gatsby-plugin-image'
// import Dropzone from '../Dropzone'
import useFileHandlers from '../../hooks/useFileHandlers'
import Input from './InputFile'
// import BgImage from '../../images/EmptyBox.png'
import TemplateImage from './image-template'
import './FileUpload3.css'

const FileUpload3 = () => {
  const {
    files,
    // pending,
    // next,
    // uploading,
    uploaded,
    status,
    onSubmit,
    onChange,
  } = useFileHandlers()

  // const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const [selectedFile, setSelectedFile] = useState([])

  function onFileUpload(event) {
    event.preventDefault()

    // Create an instance of FileReader API
    let file_reader = new FileReader()
    // Get the actual file itself
    let file = event.target.files[0]
    file_reader.onload = () => {
      // After uploading the file
      // appending the file to our state array
      // set the object keys and values accordingly
      setSelectedFile([...selectedFile, { uploaded_file: file_reader.result }])
    }
    // reading the actual uploaded file
    file_reader.readAsDataURL(file)
  }

  return (
    <>
      <div className="uploadContainer focus:outline-none focus:ring-0">
        <form
          className="uploadForm"
          name="File upload"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={onSubmit}
        >
          {status === 'FILES_UPLOADED' && (
            <div className="success-container">
              <div>
                <h2>Congratulations!</h2>
                <small>You uploaded your files. Get some rest.</small>
              </div>
            </div>
          )}
          <div className="flex flex-col items-center justify-center w-full p-6 my-4 rounded-lg shadow-xl bg-darkBlue-700">
            {/* scroll area */}
            <section className="flex flex-col w-full h-full p-8 overflow-auto">
              <header className="flex flex-col items-center justify-center py-6 ">
                <p className="flex flex-wrap justify-center mb-3 ">
                  <span className="text-lg font-semibold text-gray-100">
                    File Upload
                  </span>
                </p>
                <Input onChange={onChange} />
              </header>
              <h1 className="pt-8 pb-3 font-semibold text-gray-100 sm:text-lg">
                To Upload
              </h1>
              <ul
                id="gallery"
                className="flex flex-wrap flex-1 p-4 -m-1 border-2 border-gray-400 border-dashed"
              >
                {files.map(({ file, src, id }, index) => (
                  <TemplateImage
                    key={`thumb${index}`}
                    alt={`upload preview ${uploaded[id]}`}
                    src={src}
                    filename={file.name}
                  />
                ))}
              </ul>

              <footer className="flex justify-end px-8 pt-4 pb-8">
                <button
                  id="button"
                  type="submit"
                  className="px-3 py-1 m-2 text-white bg-green-500 rounded-sm hover:text-gray-100 hover:bg-green-600 focus:shadow-outline focus:outline-none"
                >
                  Upload Now
                </button>
                <button
                  id="cancel"
                  className="px-3 py-1 m-2 text-gray-100 bg-gray-500 rounded-sm hover:bg-gray-400 focus:shadow-outline focus:outline-none"
                >
                  Cancel
                </button>
              </footer>
            </section>
          </div>
        </form>
      </div>
    </>
  )
}

export default FileUpload3
