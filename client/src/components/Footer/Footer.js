import React, { Fragment } from 'react'
import './Footer.css'
import Playstore from '../../assets/images/Playstore.png'
import Appstore from '../../assets/images/Appstore.png'

const Footer = () => {
    return (
        <Fragment>
            <footer id='footer'>
                <div className='leftFooter'>
                    <h4>DOWNLOAD OUR APP</h4>
                    <p>Download App for Android and IOS mobile phone</p>
                    <img src={Playstore} alt='Playstore' />
                    <img src={Appstore} alt='Appstore' />
                </div>

                <div className='midFooter'>
                    <h1>ECOMMERCE.</h1>
                    <p>High Quality is our first priority</p>
                    <p>Copyrights 2021 &copy; MeAbhiSingh</p>
                </div>

                <div className='rightFooter'>
                    <h4>Follow Us</h4>
                    <a href='https://www.facebook.com/ToNgoDu.Official/'>
                        Facebook
                    </a>
                    <a href='https://www.instagram.com/tongodu/'>Instagram</a>
                    <a href='https://www.tiktok.com/@tongodu95'>TikTok</a>
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer
