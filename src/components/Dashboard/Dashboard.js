import React, { Component } from 'react';
import './Dashboard.css';
import DashboardItem from "./DashboardItem/DashboardItem";
import { FaChartBar, FaNewspaper, FaFootballBall } from 'react-icons/fa'

class Dashboard extends Component {
    render() {
        return (
            <div className='page-container'>
                <div className='dashboard-container'>
                    <DashboardItem icon={FaChartBar} title="Stats" descr="Browse through stats and analytics."/>
                    <DashboardItem icon={FaNewspaper} title="News" descr="Read up on the latest NFL and fantasy football news."/>
                    <DashboardItem icon={FaFootballBall} title="Players" descr="Focus in on NFL player profiles."/>
                </div>
            </div>
        )
    }
}

export default Dashboard;