import React, { Fragment } from 'react'
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

const Dashboard = () => {
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
                data: [3, 50],
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
                            </p>
                        </div>
                        <div className='dashboardSummaryBox2'>
                            <Link to='/admin/products'>
                                <p>Product</p>
                                <p>2</p>
                            </Link>
                            <Link to='/admin/orders'>
                                <p>Orders</p>
                                <p>5</p>
                            </Link>
                            <Link to='/admin/users'>
                                <p>Users</p>
                                <p>3</p>
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
