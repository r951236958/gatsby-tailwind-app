// import firebase from "gatsby-plugin-firebase"

// const googleProvider = new firebase.auth.GoogleAuthProvider()

// export const signInWithGoogle = () => {
//   firebase
//     .auth()
//     .signInWithPopup(googleProvider)
//     .then((res) => {
//       console.log(res.user)
//     })
//     .catch((error) => {
//       console.log(error.message)
//     })
// }

export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("user")
    ? JSON.parse(window.localStorage.getItem("user"))
    : {}

export const setUser = user =>
  isBrowser() && window.localStorage.setItem("user", JSON.stringify(user))

export const isLoggedIn = () => {
  const user = getUser()
  return !!user.email
}

export const logout = firebase => {
  return new Promise(resolve => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        setUser({})
        resolve()
        console.log("logged out")
      })
  })
}

export const handleSignedInUser = function(user) {
  document.getElementById('user-signed-in').style.display = 'block';
  document.getElementById('user-signed-out').style.display = 'none';
  document.getElementById('name').textContent = user.displayName;
  document.getElementById('email').textContent = user.email;
  document.getElementById('phone').textContent = user.phoneNumber;
  if (user.photoURL) {
    var photoURL = user.photoURL;
    // Append size to the photo URL for Google hosted images to avoid requesting
    // the image with its original resolution (using more bandwidth than needed)
    // when it is going to be presented in smaller size.
    if ((photoURL.indexOf('googleusercontent.com') != -1) ||
        (photoURL.indexOf('ggpht.com') != -1)) {
      photoURL = photoURL + '?sz=' +
          document.getElementById('photo').clientHeight;
    }
    document.getElementById('photo').src = photoURL;
    document.getElementById('photo').style.display = 'block';
  } else {
    document.getElementById('photo').style.display = 'none';
  }
}

export const handleSignedOutUser = function (firebase) {
  document.getElementById('user-signed-in').style.display = 'none'
  document.getElementById('user-signed-out').style.display = 'block'
  // ui.start('#firebaseui-container', getUiConfig())
  firebase.auth()
}

// Listen to change in auth state so it displays the correct UI for when
// the user is signed in or not.
// firebase.auth().onAuthStateChanged(function (user) {
// document.getElementById('loading').style.display = 'none'
// document.getElementById('loaded').style.display = 'block'
// user ? handleSignedInUser(user) : handleSignedOutUser()
// })
