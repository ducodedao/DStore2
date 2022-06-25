import React, { Fragment, useState } from 'react'
import './Search.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Title from '../Title/Title'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    let navigate = useNavigate()

    const [keyword, setKeyword] = useState('')

    const searchSubmitHandler = (e) => {
        e.preventDefault()
        if (keyword.trim()) {
            navigate(`/products/${keyword}`)
        } else {
            navigate('/products')
        }
    }

    return (
        <Fragment>
            <Header />
            <Fragment>
                <Title title='Search -- DUStore' />

                <form className='searchBox' onSubmit={searchSubmitHandler}>
                    <input
                        type='text'
                        placeholder='Nhập để tìm kiếm...'
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    <input type='submit' value='Search' />
                </form>
            </Fragment>
            <Footer />
        </Fragment>
    )
}

export default Search
