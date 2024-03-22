import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import Navbar from '../../Components/Navbar';
import { Routes,Route } from 'react-router-dom';
import OrderList from './OrderList';
import AddMenu from './AddMenu';
import Customer from './Customer';
import Analytics from './Analytics';

import '../../Pages/Dashbooard/Dashboard.css'

export default function Dashboard() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };


  return (
    <div className={`grid  grid-cols-10`}>



       
        <div className={`col-span-2 h-full  overflow-hidden relative  block`}>
        <Sidebar toggleSidebar ={toggleSidebar} showSidebar ={showSidebar} setShowSidebar ={setShowSidebar}></Sidebar>
        </div>
        <div className='col-span-8 relative'>
        <Navbar showSidebar ={showSidebar} setShowSidebar ={setShowSidebar} toggleSidebar ={toggleSidebar}></Navbar>
        <Routes>
        <Route path="/" element={ <MainContent></MainContent>} />
        <Route path="/dashboard/order" element={<OrderList></OrderList>} />
        <Route path="/dashboard/addMenu" element={<AddMenu></AddMenu>} />
        <Route path="/dashboard/customer" element={<Customer></Customer>} />
        <Route path="/dashboard/analytics" element={<Analytics></Analytics>} />
        </Routes>
        
        </div>
        
    </div>
  )
}
