import React, { Fragment, useEffect, useState } from 'react'
import './UpdateProfile.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Loader from '../Loader/Loader'
import Title from '../Title/Title'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import FaceIcon from '@mui/icons-material/Face'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { useNavigate } from 'react-router-dom'
import {
    clearErrors,
    loadUser,
    updateProfile,
} from '../../redux/actions/userAction'
import { UPDATE_PROFILE_RESET } from '../../redux/constants/userConstant'

const UpdateProfile = () => {
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const alert = useAlert()

    const { user } = useSelector((state) => state.user)
    const { error, isUpdated, loading } = useSelector((state) => state.profile)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [avatar, setAvatar] = useState()
    const [avatarPreview, setAvatarPreview] = useState('/Profile.png')

    const updateProfileSubmit = (e) => {
        e.preventDefault()

        const myForm = new FormData()

        myForm.set('name', name)
        myForm.set('email', email)
        myForm.set('avatar', avatar)
        dispatch(updateProfile(myForm))
    }

    const updateProfileDataChange = (e) => {
        const reader = new FileReader()

        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatarPreview(reader.result)
                setAvatar(reader.result)
            }
        }

        reader.readAsDataURL(e.target.files[0])
    }

    useEffect(() => {
        if (user) {
            setName(user.name)
            setEmail(user.email)
            setAvatarPreview(user.avatar.url)
        }

        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }

        if (isUpdated) {
            alert.success('Profile Updated Successfully')
            dispatch(loadUser())

            navigate('/account')

            dispatch({
                type: UPDATE_PROFILE_RESET,
            })
        }
    }, [dispatch, error, alert, navigate, user, isUpdated])

    return (
        <Fragment>
            <Header />
            <Fragment>
                {loading ? (
                    <Loader />
                ) : (
                    <Fragment>
                        <Title title='Update Profile' />

                        <div className='updateProfileContainer'>
                            <div className='updateProfileBox'>
                                <h2 className='updateProfileHeading'>
                                    Update Profile
                                </h2>

                                <form
                                    className='updateProfileForm'
                                    encType='multipart/form-data'
                                    onSubmit={updateProfileSubmit}
                                >
                                    <div className='updateProfileName'>
                                        <FaceIcon />
                                        <input
                                            type='text'
                                            placeholder='Name'
                                            required
                                            name='name'
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className='updateProfileEmail'>
                                        <MailOutlineIcon />
                                        <input
                                            type='email'
                                            placeholder='Email'
                                            required
                                            name='email'
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div id='updateProfileImage'>
                                        <img
                                            src={avatarPreview}
                                            alt='Avatar Preview'
                                        />
                                        <input
                                            type='file'
                                            name='avatar'
                                            accept='image/*'
                                            onChange={updateProfileDataChange}
                                        />
                                    </div>
                                    <input
                                        type='submit'
                                        value='Update'
                                        className='updateProfileBtn'
                                    />
                                </form>
                            </div>
                        </div>
                    </Fragment>
                )}
            </Fragment>
            <Footer />
        </Fragment>
    )
}

export default UpdateProfile
