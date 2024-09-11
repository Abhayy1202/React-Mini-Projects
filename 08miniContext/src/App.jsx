import React from 'react'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import UserContextProvider from './Context/UserContextProvider.jsx'

function App() {

  return (
    <UserContextProvider>
     <h1>context api handling</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
