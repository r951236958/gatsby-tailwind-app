import React, { 
  useEffect, 
  useState, 
  useMemo, 
  // useCallback 
} from 'react'
import firebase from 'gatsby-plugin-firebase'
import { 
  // Link, 
  navigate 
} from 'gatsby'
import Layout from 'components/Layout'
import Table from 'components/Table2'
import SEO from 'components/SEO'
import { setUser, getUser, isLoggedIn, logout } from 'utils/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import axios from 'axios'
import styled from 'styled-components'
import FetchDemo from 'components/FetchDemo'
// import ImageModal from 'components/ImageModal'

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid rgba(209, 213, 219, 0.7);
    color: var(--text-main);
    background: var(--primary);

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid rgba(209, 213, 219, 0.7);
      border-right: 1px solid rgba(209, 213, 219, 0.7);

      :first-child {
        padding: 0.375rem;
        min-width: 50px;
        max-width: 100px;
      }

      :last-child {
        max-width: 250px;
        min-width: 200px;
        border-right: 0;
      }

      input {
        font-size: 1rem;
        padding: 0;
        margin: 0;
        border: 0;
      }
    }
  }

  .pagination {
    padding: 0.5rem;
  }
`

const UserInfo = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;

  .user-container {
    border: 1px solid #ccc;
    clear: both;
    margin: 0 auto 20px;
    max-width: 400px;
    padding: 10px;
    text-align: left;
  }

  #photo-container {
    border: 1px solid #ccc;
    float: left;
    height: 80px;
    margin-right: 10px;
    width: 80px;

    img#user-photo {
      height: 80px;
      margin: 0;
      width: 80px;
    }
  }
`

const url =
  'https://spreadsheets.google.com/feeds/list/' +
  process.env.GATSBY_GOOGLE_SPREADSHEET_ID +
  '/1/public/values?alt=json'

const DataPage = () => {
  const title = 'Firebase Database'
  const [jsonData, setJsonData] = useState([])
  const [data, setData] = useState([])

  const user = getUser()
  const { displayName, email, photoURL } = user
  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, 
        // redirectUrl
        ) {
        if (authResult.user) {
          setUser(authResult.user)
        }
        return true
      },
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInSuccessUrl: '/',
    // Terms of service url.
    tosUrl: 'https://www.google.com',
    // Privacy policy url.
    privacyPolicyUrl: 'https://www.google.com',
  }

  useEffect(async () => {
    const response = await axios.get(url)
    setData(response.data.feed.entry)
    // console.table(response.data.feed.entry)
  }, [])

  // const Images = ({values}) => {
  //   return (
  //     <>
  //       {values.map((gsx$img, gsx$name, gsx$note, i) => {
  //         return (
  //           <ImageModal
  //             key={i}
  //             url={gsx$img.$t}
  //             alt={gsx$name.$t}
  //             description={gsx$note.$t}
  //           />
  //         )
  //       })}
  //     </>
  //   )
  // }

  const columns = useMemo(() => [
    {
      Header: 'id',
      accessor: 'gsx$id.$t',
      minWidth: '50px',
      maxWidth: '100px',
      disableFilters: true,
    },
    {
      Header: 'name',
      accessor: 'gsx$name.$t',
    },
    {
      Header: 'Image',
      accessor: 'gsx$url.$t',
      disableFilters: true,
    },
    {
      Header: 'note',
      accessor: 'gsx$note.$t',
      minWidth: '200px',
      maxWidth: '250px',
      disableFilters: true,
    },
  ])

  const [skipPageReset, setSkipPageReset] = useState(false)

  const updateMyData = (rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page
    setSkipPageReset(true)
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          }
        }
        return row
      })
    )
  }

  const getData = () => {
    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        // console.log(response)
        return response.json()
      })
      .then(function (jsonData) {
        // console.table(jsonData.feed.entry)
        setJsonData(jsonData.feed.entry)
      })
  }

  useEffect(() => {
    setSkipPageReset(false)
    getData()
  }, [data])

  const resetData = () => setData(null)

  return (
    <Layout title={title}>
      <SEO title={title} />
      <div className="w-full">
        <UserInfo>
          {isLoggedIn() ? (
            <>
              <div className="user-container">
                <div id="photo-container">
                  <img src={photoURL} alt="user" id="user-photo" />
                </div>
                <div className="flex flex-col justify-center h-20 space-y-2">
                  <div className="text-md">{displayName}</div>
                  <div className="text-md">{email}</div>
                </div>
              </div>
              <button
                className="px-3 py-2 text-sm font-medium text-red-400 border border-red-500 rounded-md hover:border-red-600 hover:text-red-500"
                onClick={async (event) => {
                  event.preventDefault()
                  await logout(firebase).then(() => navigate(`/data`))
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <div className="text-2xl">You are not logged in</div>
              <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
              />
            </>
          )}
        </UserInfo>
      </div>
      <FetchDemo />
      {jsonData.length > 0 && (
        <Styles>
          <button onClick={resetData}>Reset Data</button>
          <Table
            columns={columns}
            data={data}
            updateMyData={updateMyData}
            skipPageReset={skipPageReset}
          />
        </Styles>
      )}
      <div>
        {isLoggedIn() && (
          <pre className="language-json">
            <code>{JSON.stringify(user, null, 2)}</code>
          </pre>
        )}
      </div>
    </Layout>
  )
}

export default DataPage
