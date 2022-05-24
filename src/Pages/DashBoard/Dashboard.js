import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h1 className='text-3xl font-semibold text-primary'>Dashboard</h1>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>Sidebar Item 1</Link></li>
                    <li><Link to='/dashboard/addreview'>Sidebar Item 2</Link></li>
                    <li><Link to='/dashboard/myprofile'>Sidebar Item 3</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;