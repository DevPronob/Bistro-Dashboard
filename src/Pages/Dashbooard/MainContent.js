import React from 'react'
import Navbar from '../../Components/Navbar'
import TotalItems from '../../Components/TotalItems'
import DetailsBars from '../../Components/DetailsBars'
import ProductDetails from '../../Components/ProductDetails'
import { GiHamburgerMenu } from "react-icons/gi";
export default function MainContent({displaySidebar,handleSidebarDisplay}) {
  return (
    <div className='h-screen'>
        {
            displaySidebar && <span onClick={handleSidebarDisplay}><GiHamburgerMenu /></span>
        }
        
       
        <div className='bg-[#f2f2f2] h-max-content pt-8 '>
        <div className='ps-12'>
            <h3>Dashboard</h3>
            <p>Wellcome to Lojusa Admin</p>
            </div>
            <TotalItems></TotalItems>
            <DetailsBars></DetailsBars>
            <ProductDetails></ProductDetails>

        </div>
        

    </div>
  )
}
