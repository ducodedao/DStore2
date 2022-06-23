import React, { Fragment, useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Fragment>
            <div className='Navbar'>
                <span className='navLogo'>DUStore</span>
                <div className={`navItems ${isOpen && 'open'}`}>
                    <Link to='/'>Home</Link>
                    <Link to='/products'>Products</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
                <div className='navIcons'>
                    <Link to='/search'>
                        <SearchOutlinedIcon />
                    </Link>
                    <Link to='/favorite'>
                        <FavoriteBorderOutlinedIcon />
                    </Link>
                    <Link to='/cart'>
                        <ShoppingCartOutlinedIcon />
                    </Link>
                    <Link to='/login'>
                        <AccountCircleOutlinedIcon />
                    </Link>
                </div>
                <div
                    className={`navToggle ${isOpen && 'open'}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className='bar'></div>
                </div>
            </div>
        </Fragment>
    )
}

export default Header
