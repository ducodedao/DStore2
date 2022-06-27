import React, { useEffect, useState } from 'react'
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
import UpdatePassword from './components/User/UpdatePassword'
import ForgotPassword from './components/User/ForgotPassword'
import ResetPassword from './components/User/ResetPassword'
import Cart from './pages/Cart/Cart'
import Shipping from './components/Cart/Shipping'
import ConfirmOrder from './components/Cart/ConfirmOrder'
import axios from 'axios'
import Payment from './components/Cart/Payment'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import OrderSuccess from './components/Cart/OrderSuccess'

const App = () => {
    const { isAuthenticated, user } = useSelector((state) => state.user)

    const [stripeApiKey, setStripeApiKey] = useState('')

    async function getStripeApiKey() {
        const { data } = await axios.get('/api/v1/stripeapikey')

        setStripeApiKey(data.stripeApiKey)
    }

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Roboto', 'Chilanka', 'Droid Sans', 'Droid Serif'],
            },
        })

        store.dispatch(loadUser())

        getStripeApiKey()
    }, [])

    return (
        <BrowserRouter>
            {isAuthenticated && <UserOptions user={user} />}

            {stripeApiKey && (
                <Elements stripe={loadStripe(stripeApiKey)}>
                    <Routes>
                        <Route
                            element={
                                <ProtectedRoute
                                    isAuthenticated={isAuthenticated}
                                />
                            }
                        >
                            <Route
                                path='/process/payment'
                                element={<Payment />}
                            />
                        </Route>
                    </Routes>
                </Elements>
            )}

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
                    <Route
                        path='/password/update'
                        element={<UpdatePassword />}
                    />
                </Route>

                <Route path='/password/forgot' element={<ForgotPassword />} />
                <Route
                    path='/password/reset/:token'
                    element={<ResetPassword />}
                />
                <Route path='/cart' element={<Cart />} />

                <Route
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated} />
                    }
                >
                    <Route path='/shipping' element={<Shipping />} />
                    <Route path='/order/confirm' element={<ConfirmOrder />} />
                    <Route path='/success' element={<OrderSuccess />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
