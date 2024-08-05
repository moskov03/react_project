import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'


import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Error from './components/error/Error'
import Register from './components/register/Register'
import Catalog from './components/catalog/Catalog'
import PostDog from './components/post/PostDog'
import Details from './components/details/Details'
import { AuthContext } from './contexts/authContext'



function App() {

  const [authState, setAuthState] = useState({})

  const changeAuthState = (state) => {

    localStorage.setItem('accessToken', state.accessToken)

    setAuthState(state)
  }

  const contextData = {
    userId: authState._id,
    email: authState.email,
    accessToken: authState.accessToken,
    isAuthenticated: !!authState.email,
    changeAuthState,
  }

  return (
    <AuthContext.Provider value={contextData}>
      <>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/*' element={<Error />} />
            <Route path='/register' element={<Register />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/postDog' element={<PostDog />} />
            <Route path='/catalog/:dogId/details' element={<Details />} />
          </Routes>

        </main>
        <Footer />
      </>
    </AuthContext.Provider>
  )
}

export default App
