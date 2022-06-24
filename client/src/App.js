import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WebFont from 'webfontloader'
import Home from './pages/Home/Home'
import ProductDetails from './pages/ProductDetails/ProductDetails'

const App = () => {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Roboto', 'Chilanka', 'Droid Sans', 'Droid Serif'],
            },
        })
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product/:id' element={<ProductDetails />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
