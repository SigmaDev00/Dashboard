import React from 'react'
import {AiFillHome,AiOutlineShoppingCart,AiOutlineBarChart,AiTwotoneSetting} from 'react-icons/ai'
import { Outlet, Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sideicons'>
        <Link to = "/"><AiFillHome style={{height:"25px",width:"25px",margin:"20px"}} /></Link>
        </div>
        <div className='sideicons'>
        <Link to="/Products"><AiOutlineShoppingCart style={{height:"25px",width:"25px",margin:"20px"}} /></Link>
        </div>
        <div className='sideicons'>
        <Link to="/Analytics"><AiOutlineBarChart style={{height:"25px",width:"25px",margin:"20px"}} /></Link>
        </div>
        <div className='sideicons'>
        <AiTwotoneSetting style={{height:"25px",width:"25px",margin:"20px"}} />
        </div>

        <Outlet/>
    </div>
  )
}
