import React, { useEffect, useState } from 'react'
import { createApi } from 'unsplash-js'
import unsplash from '../APIs/unsplash'
import Footer from './components/Footer'
import Header from './components/Header'
import ImageList from './components/ImageList'
import NotFound from './components/NotFound'
import SearchBar from './components/SearchBar'
import Spinner from './components/Spinner'
import '../styles/components/searchapp.css'

const unsplashapi = createApi({
  accessKey: process.env.GATSBY_UNSPLASH_ACCESS_KEY,
  //...other fetch options
})

const PhotoComp = ({ photo }) => {
  const { user, urls, alt_description } = photo

  return (
    <div className="block">
      <div className="relative flex items-end">
        <img alt={alt_description} className="img" src={urls.regular} />
        <div className="absolute mb-2 ml-2">
          <a
            className="credit"
            target="_blank"
            rel="noreferrer"
            href={`https://unsplash.com/@${user.username}`}
          >
            {user.name}
          </a>
        </div>
      </div>
    </div>
  )
}

const Body = () => {
  const [data, setPhotosResponse] = useState(null)

  useEffect(() => {
    unsplashapi.search
      .getPhotos({ query: 'cat', orientation: 'landscape' })
      .then((result) => {
        setPhotosResponse(result)
      })
      .catch(() => {
        console.log('something went wrong!')
      })
  }, [])

  if (data === null) {
    return <div>Loading...</div>
  } else if (data.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
        <div>PS: Make sure to set your access token!</div>
      </div>
    )
  } else {
    return (
      <div className="feed">
        <div className="image-grid">
          {data.response.results.map((photo) => (
            <div className="image-item" key={`photo-comp-feed-${photo.id}`}>
              <PhotoComp photo={photo} />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const App = () => {
  const [photos, setPhotos] = useState([])
  const [visibility, setVisibility] = useState(true)
  const [spin, setSpin] = useState(true)

  const formSubmit = async (term) => {
    setSpin(false)
    setPhotos([])
    setVisibility(false)
    const response = await unsplash.get('/search/photos', {
      params: { query: term.trim(), per_page: 30 },
    })
    const photos = await response.data.results
    if (photos.length === 0) setVisibility('no')
    setSpin(true)
    setPhotos(photos)
  }

  useEffect(() => {
    setVisibility(false)
    const getPhotos = async () => {
      const response = await unsplash.get('/photos/random', {
        params: { count: 20 },
      })
      const photos = await response.data
      if (photos.length === 0) {
        setVisibility('no')
      }
      setPhotos(photos)
    }
    getPhotos()
  }, [])

  return (
    <>
      <Header />
      <SearchBar OnSubmit={formSubmit} visibility={spin} />
      {visibility === 'no' ? (
        <NotFound />
      ) : photos.length ? (
        <ImageList photos={photos} />
      ) : (
        <Spinner hidden={visibility} />
        // <SkeletonLoader hidden={visibility} />
      )}
      <Footer />
      <div className="h-1/5 overflow-auto my-4">
        <Body />
      </div>
    </>
  )
}

export default App
