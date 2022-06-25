import React, { Fragment, useEffect } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined'
import ProductCard from '../../components/Product/ProductCard'
import Title from '../../components/Title/Title'
import { useSelector, useDispatch } from 'react-redux'
import { clearErrors, getProduct } from '../../redux/actions/productAction'
import Loader from '../../components/Loader/Loader'
import { useAlert } from 'react-alert'

const Home = () => {
    const alert = useAlert()
    const dispatch = useDispatch()
    const { loading, error, products } = useSelector((state) => state.products)

    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
        dispatch(getProduct())
    }, [dispatch, error, alert])

    return (
        <Fragment>
            <Header />
            <Fragment>
                {loading ? (
                    <Loader />
                ) : (
                    <Fragment>
                        <Title title='DUStore' />

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
                            {products &&
                                products.map((product) => (
                                    <ProductCard
                                        key={product._id}
                                        product={product}
                                    />
                                ))}
                        </div>
                    </Fragment>
                )}
            </Fragment>
            <Footer />
        </Fragment>
    )
}

export default Home
