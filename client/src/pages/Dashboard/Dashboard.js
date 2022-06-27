import React, { Fragment, useEffect } from 'react'
import './Dashboard.css'
import Title from '../../components/Title/Title'
import Sidebar from '../../components/Admin/Sidebar'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title as TitleChartJS,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'
import { Line, Doughnut } from 'react-chartjs-2'
import { useSelector, useDispatch } from 'react-redux'
import { getAdminProduct } from '../../redux/actions/productAction'

const Dashboard = () => {
    const dispatch = useDispatch()

    const { products } = useSelector((state) => state.products)

    let outOfStock = 0

    products &&
        products.forEach((item) => {
            if (item.Stock === 0) {
                outOfStock += 1
            }
        })

    useEffect(() => {
        dispatch(getAdminProduct())
        // dispatch(getAllOrders())
        // dispatch(getAllUsers())
    }, [dispatch])

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        TitleChartJS,
        Tooltip,
        Legend,
    )
    const lineState = {
        labels: ['Initial Amount', 'Amount Earned'],
        datasets: [
            {
                label: 'TOTAL AMOUNT',
                backgroundColor: ['tomato'],
                hoverBackgroundColor: ['rgb(197, 72, 49)'],
                // data: [0, totalAmount],
                data: [0, 5000],
            },
        ],
    }

    ChartJS.register(ArcElement, Tooltip, Legend)
    const doughnutState = {
        labels: ['Out of Stock', 'InStock'],
        datasets: [
            {
                backgroundColor: ['#00A6B4', '#6800B4'],
                hoverBackgroundColor: ['#4B5000', '#35014F'],
                data: [outOfStock, products.length - outOfStock],
            },
        ],
    }

    return (
        <Fragment>
            <div className='dashboard'>
                <Title title='Dashboard - Admin Panel' />

                <Sidebar />

                <div className='dashboardContainer'>
                    <Typography component='h1'>Dashboard</Typography>

                    <div className='dashboardSummary'>
                        <div>
                            <p>
                                Total Amount <br />
                                {/* ${totalAmount} */}
                            </p>
                        </div>
                        <div className='dashboardSummaryBox2'>
                            <Link to='/admin/products'>
                                <p>Product</p>
                                <p>{products && products.length}</p>
                            </Link>
                            <Link to='/admin/orders'>
                                <p>Orders</p>
                                <p>5</p>
                                {/* <p>{orders && orders.length}</p> */}
                            </Link>
                            <Link to='/admin/users'>
                                <p>Users</p>
                                <p>3</p>
                                {/* <p>{users && users.length}</p> */}
                            </Link>
                        </div>
                    </div>

                    <div className='lineChart'>
                        <Line data={lineState} />
                    </div>

                    <div className='doughnutChart'>
                        <Doughnut data={doughnutState} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Dashboard
