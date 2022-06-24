import React, { Fragment, useEffect } from 'react'
import './ProductDetails.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Title from '../../components/Title/Title'
import Loader from '../../components/Loader/Loader'
import Carousel from 'react-material-ui-carousel'
import { useSelector, useDispatch } from 'react-redux'
import {
    clearErrors,
    getProductDetails,
} from '../../redux/actions/productAction'
import { useParams } from 'react-router-dom'
import Rating from '@mui/material/Rating'
import StarIcon from '@mui/icons-material/Star'
import ReviewCard from '../../components/Product/ReviewCard'
import { useAlert } from 'react-alert'

const ProductDetails = () => {
    let { id } = useParams()
    const alert = useAlert()

    const dispatch = useDispatch()

    const { product, loading, error } = useSelector(
        (state) => state.productDetails,
    )

    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }

        dispatch(getProductDetails(id))
    }, [dispatch, id, error, alert])

    return (
        <Fragment>
            <Header />
            <Fragment>
                {loading ? (
                    <Loader />
                ) : (
                    <Fragment>
                        <Title title={`${product.name} -- DUStore`} />

                        <div className='ProductDetails'>
                            <div>
                                <Carousel>
                                    {product.images &&
                                        product.images.map((item, i) => (
                                            <img
                                                className='CarouselImage'
                                                key={i}
                                                src={item.url}
                                                alt={`${i} Slide`}
                                            />
                                        ))}
                                </Carousel>
                            </div>

                            <div>
                                <div className='detailsBlock-1'>
                                    <h2>{product.name}</h2>
                                    <p>Product # {product._id}</p>
                                </div>

                                <div className='detailsBlock-2'>
                                    <Rating
                                        name='text-feedback'
                                        value={product.ratings}
                                        readOnly
                                        precision={0.5}
                                        emptyIcon={
                                            <StarIcon
                                                style={{ opacity: 0.55 }}
                                                fontSize='inherit'
                                            />
                                        }
                                    />
                                    <span className='detailsBlock-2-span'>
                                        ({product.numOfReviews} Reviews)
                                    </span>
                                </div>

                                <div className='detailsBlock-3'>
                                    <h1>{`$${product.price}`}</h1>
                                    <div className='detailsBlock-3-1'>
                                        <div className='detailsBlock-3-1-1'>
                                            <button>-</button>
                                            <input
                                                readOnly
                                                type='number'
                                                value='1'
                                            />
                                            <button>+</button>
                                        </div>
                                        <button
                                            disabled={
                                                product.Stock < 1 ? true : false
                                            }
                                        >
                                            Add to Cart
                                        </button>
                                    </div>

                                    <p>
                                        Status:
                                        <b
                                            className={
                                                product.Stock < 1
                                                    ? 'redColor'
                                                    : 'greenColor'
                                            }
                                        >
                                            {product.Stock < 1
                                                ? 'OutOfStock'
                                                : 'InStock'}
                                        </b>
                                    </p>
                                </div>

                                <div className='detailsBlock-4'>
                                    Description : <p>{product.description}</p>
                                </div>

                                <button className='submitReview'>
                                    Submit Review
                                </button>
                            </div>
                        </div>

                        <h3 className='reviewsHeading'>REVIEWS</h3>

                        {product.reviews && product.reviews[0] ? (
                            <div className='reviews'>
                                {product.reviews &&
                                    product.reviews.map((review) => (
                                        <ReviewCard
                                            key={review._id}
                                            review={review}
                                        />
                                    ))}
                            </div>
                        ) : (
                            <p className='noReviews'>No Reviews Yet</p>
                        )}
                    </Fragment>
                )}
            </Fragment>
            <Footer />
        </Fragment>
    )
}

export default ProductDetails
