import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WebFont from 'webfontloader'
import Home from './pages/Home/Home'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Products from './pages/Products/Products'
import Search from './components/Product/Search'
import LoginSignUp from './pages/LoginSignUp/LoginSignUp'
import store from './redux/store'
import { loadUser } from './redux/actions/userAction'
import { useSelector } from 'react-redux'
import UserOptions from './components/User/UserOptions'
import Profile from './pages/Profile/Profile'
import ProtectedRoute from './components/Route/ProtectedRoute'
import UpdateProfile from './components/User/UpdateProfile'

const App = () => {
    const { isAuthenticated, user } = useSelector((state) => state.user)

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Roboto', 'Chilanka', 'Droid Sans', 'Droid Serif'],
            },
        })

        store.dispatch(loadUser())
    }, [])

    return (
        <BrowserRouter>
            {isAuthenticated && <UserOptions user={user} />}

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product/:id' element={<ProductDetails />} />
                <Route path='/products' element={<Products />} />
                <Route path='/products/:keyword' element={<Products />} />
                <Route path='/search' element={<Search />} />
                <Route path='/login' element={<LoginSignUp />} />

                <Route
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated} />
                    }
                >
                    <Route path='/account' element={<Profile />} />
                    <Route path='/me/update' element={<UpdateProfile />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
