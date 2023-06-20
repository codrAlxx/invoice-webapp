import React from 'react'
import Footer from './components/Footer'
import GoogleLogin from './components/GoogleLogin'
import Spinner from './components/Spinner'
const App = () => {
  return (
    <div>
      <h1>Welcome to the Mern Invoice App</h1>
      <Footer />
      <GoogleLogin />

    </div>
  )
}

export default App