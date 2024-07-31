import { Routes, Route } from 'react-router-dom'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Error from './components/error/Error'
import Register from './components/register/Register'
import Catalog from './components/catalog/Catalog'
import PostDog from './components/post/PostDog'
import Details from './components/details/Details'


function App() {

  return (
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
          <Route path='/catalog/:catalogId/details' element={<Details />} />
        </Routes>

      </main>
      <Footer />
    </>
  )
}

export default App
