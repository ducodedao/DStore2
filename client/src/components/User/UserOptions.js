import React, { Fragment, useState } from 'react'
import './UserOptions.css'
import Backdrop from '@mui/material/Backdrop'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonIcon from '@mui/icons-material/Person'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import ListAltIcon from '@mui/icons-material/ListAlt'
import { useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/userAction'

const UserOptions = ({ user }) => {
    let navigate = useNavigate()
    const alert = useAlert()
    const dispatch = useDispatch()

    const [open, setOpen] = useState(false)

    const options = [
        { icon: <ListAltIcon />, name: 'Orders', func: orders },
        { icon: <PersonIcon />, name: 'Profile', func: account },
        { icon: <ExitToAppIcon />, name: 'Logout', func: logoutUser },
    ]

    if (user.role === 'admin') {
        options.unshift({
            icon: <DashboardIcon />,
            name: 'Dashboard',
            func: dashboard,
        })
    }

    function dashboard() {
        navigate('/admin/dashboard')
    }

    function orders() {
        navigate('/orders')
    }

    function account() {
        navigate('/account')
    }

    function logoutUser() {
        dispatch(logout())
        alert.success('Logout Successfully')
    }

    return (
        <Fragment>
            <Backdrop open={open} style={{ zIndex: '10' }} />
            <SpeedDial
                ariaLabel='SpeedDial tooltip example'
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                direction='down'
                className='speedDial'
                icon={
                    <img
                        className='speedDialIcon'
                        src={user.avatar.url ? user.avatar.url : '/Profile.png'}
                        alt='Profile'
                    />
                }
            >
                {options.map((item) => (
                    <SpeedDialAction
                        key={item.name}
                        icon={item.icon}
                        tooltipTitle={item.name}
                        onClick={item.func}
                        tooltipOpen={window.innerWidth <= 600 ? true : false}
                    />
                ))}
            </SpeedDial>
        </Fragment>
    )
}

export default UserOptions
