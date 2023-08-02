import React from 'react'
import {AiFillHome,AiOutlineShoppingCart,AiOutlineBarChart,AiTwotoneSetting} from 'react-icons/ai'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sideicons'>
        <AiFillHome style={{height:"25px",width:"25px",margin:"20px"}} />
        </div>
        <div className='sideicons'>
        <AiOutlineShoppingCart style={{height:"25px",width:"25px",margin:"20px"}} />
        </div>
        <div className='sideicons'>
        <AiOutlineBarChart style={{height:"25px",width:"25px",margin:"20px"}} />
        </div>
        <div className='sideicons'>
        <AiTwotoneSetting style={{height:"25px",width:"25px",margin:"20px"}} />
        </div>
    </div>
  )
}
