import React from 'react';
import {FaWallet,FaBagShopping} from 'react-icons/fa';
import StackBars from './StackBars';
import { Accordion } from './Accordion';

export const Cards = () => {
 
  return (
    <>
    <div className='HomeCards'>
    <div className='CardBox1'>

    <div className='BalanceBox1'>
        <div className='BalBox1'>

            <div className="card h-100 text-light">
            <div className="card-body">
            <h4 className="card-title mb-2"><FaWallet/></h4>
             <h4 className="card-title mb-2">$50</h4>
             <h6 className="card-subtitle mb-2" style={{color:"rgba(236, 239, 241, 0.813)"}}>Total Earning</h6>
            </div>
            </div>

        </div>

        <div className='BalBox1'>

            <div className="card h-100 text-light" style={{backgroundImage: "linear-gradient(to bottom right, #378C91, #59B263)"}}>
            <div className="card-body">
            <h4 className="card-title mb-2"><FaWallet/></h4>
             <h4 className="card-title mb-2">$900</h4>
             <h6 className="card-subtitle mb-2" style={{color:"rgba(236, 239, 241, 0.813)"}}>Total Orders</h6>
            </div>
            </div>

        </div>
        </div>
        <div className='stats'>
            <div style={{margin:"5px",height:"97%"}}>
            <div className='w-100 h-100 p-2'>
                <h6 className='card-title mx-2'>Company Performance</h6>
                <p className="card-subtitle mx-2" style={{color:"rgba(0, 0, 0, 0.816)",fontSize:"small"}}>Sales , Expenses & Profit : 2014-2017</p>
                <div className="chart">
                    <StackBars/>
                </div>
                </div>
            </div>
        </div>
    </div>
    <div className='CardBox2'>
        <div className='BalanceBox2'>
        <div className='BalBox2'>

        <div className="card w-100 h-100 text-light" style={{backgroundImage: "linear-gradient(to bottom right, #378C91, #59B263)"}}>
            <div style={{display:"flex",height:"100%"}}>
                <div>
            <h4 className="card-title" ><FaWallet style={{marginTop:"25px",marginLeft:"20px"}}/></h4>
            </div>
                <div style={{marginLeft:"20px",marginTop:"10px"}}>
             <h6 className="card-title">$200k</h6>
             <p className="card-subtitle" style={{color:"rgba(236, 239, 241, 0.813)",fontSize:"small"}}>Total Orders</p>
             </div>
            </div>
            </div>

        </div>
        <div className='BalBox2'>

        <div className="card w-100 h-100 text-light">
            <div style={{display:"flex",height:"100%"}}>
                <div>
            <h4 className="card-title" ><FaWallet style={{marginTop:"25px",marginLeft:"20px"}}/></h4>
            </div>
                <div style={{marginLeft:"20px",marginTop:"10px"}}>
             <h6 className="card-title">$200k</h6>
             <p className="card-subtitle" style={{color:"rgba(236, 239, 241, 0.813)",fontSize:"small"}}>Total Orders</p>
             </div>
            </div>
            </div>

        </div>
        </div>
        <div className='stats bgWite'>
        <div className='p-2' style={{margin:"5px",height:"97%",display:"flex",flexDirection:"column",overflow:"scroll"}}>
            <h6>Popular Products</h6>
            <div>
                <Accordion/>
            </div>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}
