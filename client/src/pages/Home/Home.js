import React, { Fragment } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined'
import ProductCard from './ProductCard'

const Home = () => {
    const product = {
        name: 'Product',
        images: [
            {
                url: 'https://bachlongmobile.com/media/catalog/product/cache/1/image/040ec09b1e35df139433887a97daa66f/i/p/iphone-13-pro-max-blue-600x600_2_1_2.jpeg',
            },
        ],
        price: '$3000',
        _id: 'bjkfy8',
    }

    return (
        <Fragment>
            <Header />
            <Fragment>
                <div className='banner'>
                    <p>Welcome to DUStore</p>
                    <h1>FIND AMAZING PRODUCTS BELOW</h1>

                    <a href='#container'>
                        <button>
                            Scroll <MouseOutlinedIcon />
                        </button>
                    </a>
                </div>

                <h2 className='homeHeading'>Featured Products</h2>

                <div className='container' id='container'>
                    <ProductCard product={product} />
                </div>
            </Fragment>
            <Footer />
        </Fragment>
    )
}

export default Home
