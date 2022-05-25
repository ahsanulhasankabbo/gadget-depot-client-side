import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h1 className='text-3xl font-semibold text-primary my-8'>Dashboard</h1>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Order</Link></li>
                    <li><Link to='/dashboard/addreview'>Add a Review</Link></li>
                    <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                    {
                        admin && <>
                            <li><Link to='/dashboard/manageallorder'>Manage All Orders</Link></li>
                            <li><Link to='/dashboard/addproduct'>Add a Product</Link></li>
                            <li><Link to='/dashboard/makeadmin'>Make Admin</Link></li>
                            <li><Link to='/dashboard/manageproduct'>Manage Products</Link></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;