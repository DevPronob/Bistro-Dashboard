import React, { useState } from 'react'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import Navbar from '../../Components/Navbar';
import { Routes,Route } from 'react-router-dom';
import OrderList from './OrderList';
import AddMenu from './AddMenu';
import Customer from './Customer';
import Analytics from './Analytics';

export default function Dashboard() {
    const MOBILE_VIEW = window.innerWidth < 468;
    const [displaySidebar, setDisplaySidebar] = useState(!MOBILE_VIEW);


  const handleSidebarDisplay = (e) => {
    e.preventDefault();
    if (window.innerWidth <= 468) {
      setDisplaySidebar(!displaySidebar);
    } else {
      setDisplaySidebar(false);
    }
  };

  return (
    <div className={`grid ${displaySidebar ? 'grid-cols-10' : ''}`}>



       
        <div className={`col-span-2 h-[100vh] border-r border-gray-400 overflow-hidden ${displaySidebar ? 'block' : 'hidden'}`}>
        <Sidebar></Sidebar>
        </div>
        <div className='col-span-8'>
        <Navbar displaySidebar ={displaySidebar} handleSidebarDisplay ={handleSidebarDisplay}></Navbar>
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
