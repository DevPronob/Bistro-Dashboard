import React from 'react'
import { BsMenuUp } from "react-icons/bs";
import { MdOutlinePriceChange } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { TbBorderStyle } from "react-icons/tb";
export default function TotalItems() {
    const style = { color: "#0077b6" }
    const items =[
        {
            icon:<BsMenuUp size={20} style={style}/>,
            title:"Total Menus",
            amount:"2560"
        },
        {
            icon:<MdOutlinePriceChange size={20} style={style}/>,
            title:"Total Revenew",
            amount:"$87,256"
        },
        {
            icon:<RiCustomerService2Line size={20} style={style}/>,
            title:"Total Customer",
            amount:"2560k"
        },
        {
            icon:<TbBorderStyle size={20} style={style}/>,
            title:"Total Oders",
            amount:"2560"
        },
    ]
  return (
    <div className='flex flex-col gap-5 items-center justify-center lg:flex-row lg:items-center lg:justify-around pt-8 lg:gap-4 px-4'>
        {
            items.map(ite =>{
                return <div className='bg-white p-[40px] rounded-lg flex items-center gap-[35px]'>
                    <div>
                        <p className='p-[12px] text-[14px] bg-[#e9e9f7] rounded-[15px]'>{ite.icon}</p>
                    </div>
                    <div>
                        <h5>{ite.amount}</h5>
                        <p>{ite.title}</p>
                    </div>
                </div>
            })
        }
    </div>
  )
}
