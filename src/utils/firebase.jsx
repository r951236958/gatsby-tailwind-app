import React from 'react'
import * as admin from 'firebase-admin'

const serviceAccount = process.env.GATSBY_GOOGLE_APPLICATION_CREDENTIALS

const dbURL = process.env.GATSBY_FIREBASE_DATABASE_URL

export const defaultApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: dbURL,
})


// export const getUser = () => {
//     admin
//       .auth()
//       .getUser(uid)
//       .then((userRecord) => {
//         // See the UserRecord reference doc for the contents of userRecord.
//         console.log(`Successfully fetched user data: ${userRecord.toJSON()}`)
//       })
//       .catch((error) => {
//         console.log('Error fetching user data:', error)
//       })
// }