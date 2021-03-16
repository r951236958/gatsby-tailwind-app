import { createApi } from "unsplash-js"

export const unsplash = createApi({
  accessKey: process.env.GATSBY_UNSPLASH_ACCESS_KEY,
})
