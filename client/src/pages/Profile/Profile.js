import React, { Fragment, useEffect } from 'react'
import './Profile.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Loader from '../../components/Loader/Loader'
import Title from '../../components/Title/Title'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Profile = () => {
    let navigate = useNavigate()

    const { user, loading, isAuthenticated } = useSelector(
        (state) => state.user,
    )

    useEffect(() => {
        if (isAuthenticated === false) {
            navigate('/login')
        }
    }, [navigate, isAuthenticated])

    return (
        <Fragment>
            <Header />
            <Fragment>
                {loading ? (
                    <Loader />
                ) : (
                    <Fragment>
                        <Title title={`${user.name}'s Profile`} />

                        <div className='profileContainer'>
                            <div>
                                <h1>My Profile</h1>
                                <img src={user.avatar.url} alt={user.name} />
                                <Link to='/me/update'>Edit Profile</Link>
                            </div>
                            <div>
                                <div>
                                    <h4>Full Name</h4>
                                    <p>{user.name}</p>
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <p>{user.email}</p>
                                </div>
                                <div>
                                    <h4>Joined On</h4>
                                    <p>
                                        {String(user.createdAt).substr(0, 10)}
                                    </p>
                                </div>

                                <div>
                                    <Link to='/orders'>My Orders</Link>
                                    <Link to='/password/update'>
                                        Change Password
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                )}
            </Fragment>
            <Footer />
        </Fragment>
    )
}

export default Profile
