import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import AddProduct from './Pages/DashBoard/AddProduct';
import AddReview from './Pages/DashBoard/AddReview';
import Dashboard from './Pages/DashBoard/Dashboard';
import MakeAdmin from './Pages/DashBoard/MakeAdmin';
import ManageAllOrders from './Pages/DashBoard/ManageAllOrders';
import ManageProducts from './Pages/DashBoard/ManageProducts';
import MyOrders from './Pages/DashBoard/MyOrders';
import MyProfile from './Pages/DashBoard/MyProfile';
import UpdateProfile from './Pages/DashBoard/UpdateProfile';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequirAdmin from './Pages/Login/RequirAdmin';
import RequirAuth from './Pages/Login/RequirAuth';
import RequirUser from './Pages/Login/RequirUser';
import Signup from './Pages/Login/Signup';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import NotFound from './Pages/Shared/NotFound';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/purchase/:id' element={<RequirAuth><Purchase></Purchase></RequirAuth>}></Route>
        <Route path='/dashboard' element={
          <RequirAuth>
            <Dashboard></Dashboard>
          </RequirAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myorder' element={<RequirUser><MyOrders></MyOrders></RequirUser>}></Route>
          <Route path='addreview' element={<RequirUser><AddReview></AddReview></RequirUser>}></Route>
          <Route path='manageallorder' element={<RequirAdmin><ManageAllOrders></ManageAllOrders></RequirAdmin>}></Route>
          <Route path='addproduct' element={<RequirAdmin><AddProduct></AddProduct></RequirAdmin>}></Route>
          <Route path='makeadmin' element={<RequirAdmin><MakeAdmin></MakeAdmin></RequirAdmin>}></Route>
          <Route path='manageproduct' element={<RequirAdmin><ManageProducts></ManageProducts></RequirAdmin>}></Route>
        </Route>
        <Route path='/updateprofile' element={<UpdateProfile></UpdateProfile>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
