import { Routes, Route } from 'react-router-dom'
// import axios from 'axios'


import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Error from './components/error/Error'
import Register from './components/register/Register'
import Catalog from './components/catalog/Catalog'

function App() {

  // const apiCall = () => {
  //   axios.get('http://localhost:5050').then(() => {
  //     console.log('works apiCall');
  //   })
  // }
  

  return (
    <>
      <Header />
      <main>
      {/* <button onClick={apiCall}>TEST</button> */}
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/*' element={<Error />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/catalog' element={<Catalog />}/>
        </Routes>

      </main>
      <Footer />
    </>
  )
}

export default App
