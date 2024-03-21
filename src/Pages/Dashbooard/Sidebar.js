import React from 'react'
import logo from '../../Assets/logo.jpg'
import { RxDashboard } from "react-icons/rx";
import { TbMenuOrder } from "react-icons/tb";
import { BiFoodMenu } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoAnalyticsSharp } from "react-icons/io5";
import { FaTableCells } from "react-icons/fa6";
import { Link } from 'react-router-dom';
export default function Sidebar() {
    const items =[
        {
            title:"Dashboard",
            icon:<RxDashboard  size={30}/>,
            to:"/"
        },
        {
            title:"Order",
            icon: <TbMenuOrder  size={30}/>,
            to:"/dashboard/order"
        },
        {
            title:"Menu",
            icon:<BiFoodMenu size={30}/>,
            to:"/dashboard/addMenu"
        },
        {
            title:"Customer",
            icon:<CgProfile size={30}/>,
            to:"/dashboard/customer"
        },
        {
            title:"Analytics",
            icon:<IoAnalyticsSharp size={30}/>,
            to:"/dashboard/analytics"
        },
        {
            title:"Table",
            icon:<FaTableCells size={30}/>,
            to:"/dashboard/table"
        },
    ]
  return (
    <div className='sticky top-0'>
        <div className='w-full flex items-center justify-center gap-[36px]'>
        <img src={logo} alt="logo" width="120" height="120"></img>
        </div>
        <div>
            <ul className='ps-[27px] pt-[20px]'>
               {
                items.map(ite =>{
                    return <Link to={ite.to} className='flex items-center p-[14px] gap-6 text-base font-medium'><span className='fs-[30px]'>{ite.icon}</span>{ite.title}</Link>
                })
               }
            </ul>
        </div>
    </div>
  )
}
