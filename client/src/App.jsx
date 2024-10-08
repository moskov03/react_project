import { Routes, Route } from 'react-router-dom'
import { AuthContextProvider } from './contexts/authContext'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Error from './components/error/Error'
import Register from './components/register/Register'
import Catalog from './components/catalog/Catalog'
import PostDog from './components/post/PostDog'
import Details from './components/details/Details'
import Logout from './components/logout/Logout'
import EditPost from './components/details/Edit'
import RouteGuard from './components/common/routeAuthAccess'
import Search from './components/search/Search'



function App() {


  return (
    <AuthContextProvider>
      <>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Search />} />
            <Route path='/login' element={<Login />} />
            <Route path='/*' element={<Error />} />
            <Route path='/register' element={<Register />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/postDog' element={<RouteGuard><PostDog /></RouteGuard>} />
            <Route path='/catalog/:dogId/details' element={<Details />} />
            <Route path='/logout' element={<RouteGuard><Logout/></RouteGuard>}/>
            <Route path='/dogs/:dogId/edit' element={<RouteGuard><EditPost/></RouteGuard>}/>
          </Routes>
        </main>
        <Footer />
      </>
    </AuthContextProvider>
  )
}

export default App
