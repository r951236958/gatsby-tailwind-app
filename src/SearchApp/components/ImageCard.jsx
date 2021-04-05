import React from 'react'

const ImageCard = ({ image }) => {
  const { urls, description, likes } = image
  return (
    <>
      <div id="image-column-card" className="hover column">
        <figure className="relative">
          <img
            src={urls.regular}
            alt={description}
            className="w-full h-auto rounded shadow-full"
            style={{
              height: 'auto',
              marginBottom: '0.5vw',
            }}
          />
          <div className="absolute top-0 flex items-center w-full h-full transition bg-black bg-opacity-0 rounded group-hover:bg-opacity-60 group-hover:opacity-100 justify-evenly">
            <button className="text-white transition transform translate-y-3 opacity-0 hover:scale-110 group-hover:translate-y-0 group-hover:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="currentColor"
                className="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
            </button>
            <button className="text-white transition transform translate-y-3 opacity-0 hover:scale-110 group-hover:translate-y-0 group-hover:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                height={30}
                fill="currentColor"
                className="bi bi-download"
                viewBox="0 0 16 16"
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
              </svg>
            </button>
            <button className="text-white transition transform translate-y-3 opacity-0 hover:scale-110 group-hover:translate-y-0 group-hover:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="currentColor"
                className="bi bi-three-dots"
                viewBox="0 0 16 16"
              >
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
            </button>
          </div>
          <div className="px-2 py-2 text-white bg-black bg-opacity-50 rounded likes">
            <i className="mr-1 text-xl font-bold far fa-heart"></i>
            {<span className="text-xl">{likes}</span> || (
              <span className="text-xl">0</span>
            )}
          </div>
        </figure>
      </div>
    </>
  )
}

export default ImageCard
