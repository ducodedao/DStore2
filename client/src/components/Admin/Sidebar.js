import React, { Fragment } from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import DashboardIcon from '@mui/icons-material/Dashboard'
import CategoryIcon from '@mui/icons-material/Category'
import ListAltIcon from '@mui/icons-material/ListAlt'
import PeopleIcon from '@mui/icons-material/People'
import RateReviewIcon from '@mui/icons-material/RateReview'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ImportExportIcon from '@mui/icons-material/ImportExport'
import ViewListIcon from '@mui/icons-material/ViewList'
import AddIcon from '@mui/icons-material/Add'
import TreeView from '@mui/lab/TreeView'
import TreeItem from '@mui/lab/TreeItem'

const Sidebar = () => {
    return (
        <Fragment>
            <div className='sidebar'>
                <Link to='/'>
                    <img src={logo} alt='DStore' />
                </Link>
                <Link to='/admin/dashboard'>
                    <p>
                        <DashboardIcon /> Dashboard
                    </p>
                </Link>
                <Link to='/admin/category'>
                    <p>
                        <CategoryIcon /> Category
                    </p>
                </Link>
                <div className='sidebarProduct'>
                    <TreeView
                        aria-label='file system navigator'
                        defaultCollapseIcon={<ExpandMoreIcon />}
                        defaultExpandIcon={<ImportExportIcon />}
                    >
                        <TreeItem nodeId='1' label='Products'>
                            <Link to='/admin/products'>
                                <TreeItem
                                    nodeId='2'
                                    label='All'
                                    icon={<ViewListIcon />}
                                />
                            </Link>
                            <Link to='/admin/product'>
                                <TreeItem
                                    nodeId='3'
                                    label='Create'
                                    icon={<AddIcon />}
                                />
                            </Link>
                        </TreeItem>
                    </TreeView>
                </div>
                <Link to='/admin/orders'>
                    <p>
                        <ListAltIcon /> Orders
                    </p>
                </Link>
                <Link to='/admin/users'>
                    <p>
                        <PeopleIcon /> Users
                    </p>
                </Link>
                <Link to='/admin/reviews'>
                    <p>
                        <RateReviewIcon /> Reviews
                    </p>
                </Link>
            </div>
        </Fragment>
    )
}

export default Sidebar
