import React, { Fragment } from 'react'
import './Contact.css'
import Button from '@mui/material/Button'

const Contact = () => {
    return (
        <Fragment>
            <div className='contactContainer'>
                <a className='mailBtn' href='tongodu95@gmail.com'>
                    <Button>Contact: tongodu95@gmail.com</Button>
                </a>
            </div>
        </Fragment>
    )
}

export default Contact
