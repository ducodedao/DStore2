import React, { Fragment } from 'react'
import './NotFound.css'
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import ErrorIcon from '@mui/icons-material/Error'

const NotFound = () => {
    return (
        <Fragment>
            <div className='PageNotFound'>
                <ErrorIcon />

                <Typography>Page Not Found </Typography>
                <Link to='/'>Home</Link>
            </div>
        </Fragment>
    )
}

export default NotFound
