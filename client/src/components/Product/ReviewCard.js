import React, { Fragment } from 'react'
import './ReviewCard.css'
import Profile from '../../assets/images/Profile.png'
import Rating from '@mui/material/Rating'
import StarIcon from '@mui/icons-material/Star'

const ReviewCard = ({ review }) => {
    return (
        <Fragment>
            <div className='reviewCard'>
                <img src={Profile} alt='User' />
                <p>{review.name}</p>
                <Rating
                    name='text-feedback'
                    value={review.ratings}
                    readOnly
                    precision={0.5}
                    emptyIcon={
                        <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize='inherit'
                        />
                    }
                />
                <span className='reviewCardComment'>{review.comment}</span>
            </div>
        </Fragment>
    )
}

export default ReviewCard
