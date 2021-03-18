import axios from "axios"
const accessKEY = process.env.GATSBY_UNSPLASH_ACCESS_KEY

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${accessKEY}`,
  },
})
