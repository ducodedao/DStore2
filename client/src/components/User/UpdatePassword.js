import React, { Fragment, useEffect, useState } from 'react'
import './UpdatePassword.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Loader from '../Loader/Loader'
import Title from '../Title/Title'
import VpnKeyIcon from '@mui/icons-material/VpnKey'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import LockIcon from '@mui/icons-material/Lock'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { useNavigate } from 'react-router-dom'
import { clearErrors, updatePassword } from '../../redux/actions/userAction'
import { UPDATE_PASSWORD_RESET } from '../../redux/constants/userConstant'

const UpdatePassword = () => {
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const alert = useAlert()

    const { error, isUpdated, loading } = useSelector((state) => state.profile)

    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const updatePasswordSubmit = (e) => {
        e.preventDefault()

        const myForm = new FormData()

        myForm.set('oldPassword', oldPassword)
        myForm.set('newPassword', newPassword)
        myForm.set('confirmPassword', confirmPassword)

        dispatch(updatePassword(myForm))
    }

    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }

        if (isUpdated) {
            alert.success('Password Updated Successfully')

            navigate('/account')

            dispatch({
                type: UPDATE_PASSWORD_RESET,
            })
        }
    }, [dispatch, error, alert, navigate, isUpdated])

    return (
        <Fragment>
            <Header />
            <Fragment>
                {loading ? (
                    <Loader />
                ) : (
                    <Fragment>
                        <Title title='Update Password' />

                        <div className='updatePasswordContainer'>
                            <div className='updatePasswordBox'>
                                <h2 className='updatePasswordHeading'>
                                    Update Password
                                </h2>

                                <form
                                    className='updatePasswordForm'
                                    onSubmit={updatePasswordSubmit}
                                >
                                    <div className='loginPassword'>
                                        <VpnKeyIcon />
                                        <input
                                            type='password'
                                            placeholder='Old Password'
                                            required
                                            value={oldPassword}
                                            onChange={(e) =>
                                                setOldPassword(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className='loginPassword'>
                                        <LockOpenIcon />
                                        <input
                                            type='password'
                                            placeholder='New Password'
                                            required
                                            value={newPassword}
                                            onChange={(e) =>
                                                setNewPassword(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className='loginPassword'>
                                        <LockIcon />
                                        <input
                                            type='password'
                                            placeholder='Confirm Password'
                                            required
                                            value={confirmPassword}
                                            onChange={(e) =>
                                                setConfirmPassword(
                                                    e.target.value,
                                                )
                                            }
                                        />
                                    </div>
                                    <input
                                        type='submit'
                                        value='Change'
                                        className='updatePasswordBtn'
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

export default UpdatePassword
