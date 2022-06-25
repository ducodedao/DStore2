import React, { Fragment, useEffect, useState } from 'react'
import './ResetPassword.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Loader from '../Loader/Loader'
import Title from '../Title/Title'
import LockIcon from '@mui/icons-material/Lock'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { clearErrors, resetPassword } from '../../redux/actions/userAction'
import { useParams, useNavigate } from 'react-router-dom'

const ResetPassword = () => {
    let { token } = useParams()
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const alert = useAlert()

    const { error, success, loading } = useSelector(
        (state) => state.forgotPassword,
    )

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const resetPasswordSubmit = (e) => {
        e.preventDefault()

        const myForm = new FormData()

        myForm.set('password', password)
        myForm.set('confirmPassword', confirmPassword)

        dispatch(resetPassword(token, myForm))
    }

    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }

        if (success) {
            alert.success('Password Reset Successfully')

            navigate('/login')
        }
    }, [dispatch, error, alert, navigate, success])

    return (
        <Fragment>
            <Header />
            <Fragment>
                {loading ? (
                    <Loader />
                ) : (
                    <Fragment>
                        <Title title='Reset Password' />

                        <div className='resetPasswordContainer'>
                            <div className='resetPasswordBox'>
                                <h2 className='resetPasswordHeading'>
                                    Reset Password
                                </h2>

                                <form
                                    className='resetPasswordForm'
                                    onSubmit={resetPasswordSubmit}
                                >
                                    <div>
                                        <LockOpenIcon />
                                        <input
                                            type='password'
                                            placeholder='New Password'
                                            required
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
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
                                        value='Update'
                                        className='resetPasswordBtn'
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

export default ResetPassword
