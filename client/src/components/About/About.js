import React, { Fragment } from 'react'
import './About.css'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'

const About = () => {
    const visitInstagram = () => {
        window.location = 'https://www.instagram.com/tongodu'
    }

    return (
        <Fragment>
            <div className='aboutSection'>
                <div></div>
                <div className='aboutSectionGradient'></div>
                <div className='aboutSectionContainer'>
                    <Typography component='h1'>About Us</Typography>

                    <div>
                        <div>
                            <Avatar
                                style={{
                                    width: '10vmax',
                                    height: '10vmax',
                                    margin: '2vmax 0',
                                }}
                                src='https://res.cloudinary.com/dmkwcpecq/image/upload/v1656381359/DStore/avatars/g3njdvawpeguudbqce0f.jpg'
                                alt='Founder'
                            />
                            <Typography>Abhishek Singh</Typography>
                            <Button onClick={visitInstagram} color='primary'>
                                Visit Instagram
                            </Button>
                            <span>
                                This is a sample wesbite made by @meabhisingh.
                                Only with the purpose to teach MERN Stack on the
                                channel 6 Pack Programmer
                            </span>
                        </div>
                        <div className='aboutSectionContainer2'>
                            <Typography component='h2'>Our Brands</Typography>
                            <a
                                href='https://www.facebook.com/ToNgoDu.Official/'
                                target='blank'
                            >
                                <FacebookIcon className='youtubeSvgIcon' />
                            </a>
                            <a
                                href='https://www.instagram.com/tongodu'
                                target='blank'
                            >
                                <InstagramIcon className='instagramSvgIcon' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default About
