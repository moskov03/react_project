import { Routes, Route } from 'react-router-dom'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Error from './components/error/Error'
import Register from './components/register/Register'

function App() {
  return (
    <>
      <Header />
      <main>
      
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/*' element={<Error />}/>
          <Route path='/register' element={<Register />}/>
        </Routes>

      </main>
      <Footer />
    </>
  )
}

export default App
