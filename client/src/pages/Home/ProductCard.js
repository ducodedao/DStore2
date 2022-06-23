import React, { Fragment } from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating'
import StarIcon from '@mui/icons-material/Star'

const ProductCard = ({ product }) => {
    return (
        <Fragment>
            <Link className='productCard' to={`/product/${product._id}`}>
                <img src={product.images[0].url} alt={product.name} />
                <p>{product.name}</p>
                <div>
                    <Rating
                        name='text-feedback'
                        value={0}
                        readOnly
                        precision={0.5}
                        emptyIcon={
                            <StarIcon
                                style={{ opacity: 0.55 }}
                                fontSize='inherit'
                            />
                        }
                    />
                    <span className='productCardSpan'>
                        ({product.numOfReviews} Reviews)
                    </span>
                </div>
                <span>{`${product.price}`}</span>
            </Link>
        </Fragment>
    )
}

export default ProductCard
