import React from 'react'
import PieActiveArc from './PieActiveArc'
import HorizontalChart from './HorizontalChart'
import MapChart from './MapChart'

export const Analytics = () => {
  return (
    <div style={{display:"flex",margin:"5px",flexDirection:"column",height:"100%"}}>

        <div className='w-100 h-50 d-flex' style={{padding:"5px"}}>
            <div style={{width:"40%",padding:"5px"}}>
                <div style={{width:"100%",height:"50%",display:"flex"}}>
                    <div style={{width:"50%",margin:"5px"}}>
                        <div className="card h-100 text-light">
                        <div className="card-body">
                        <h6 className="card-title ">Visitors</h6>
                        <h5 className="card-title ">5000</h5>
                        <h6 className="card-subtitle " style={{color:"rgba(236, 239, 241, 0.813)"}}>Since last week</h6>
                        </div>
                        </div>
                    </div>
                    <div style={{width:"50%",margin:"5px"}}>
                    <div className="card h-100 text-light">
                        <div className="card-body">
                        <h6 className="card-title ">Visitors</h6>
                        <h5 className="card-title ">5000</h5>
                        <h6 className="card-subtitle " style={{color:"rgba(236, 239, 241, 0.813)"}}>Since last week</h6>
                        </div>
                        </div>
                    </div>
                </div>
                <div style={{width:"100%",height:"50%",display:"flex"}}>
                    <div style={{width:"50%",margin:"5px"}}>
                    <div className="card h-100 text-light">
                        <div className="card-body">
                        <h6 className="card-title ">Visitors</h6>
                        <h5 className="card-title ">5000</h5>
                        <h6 className="card-subtitle " style={{color:"rgba(236, 239, 241, 0.813)"}}>Since last week</h6>
                        </div>
                        </div>
                    </div>
                    <div style={{width:"50%",margin:"5px"}}>
                    <div className="card h-100 text-light">
                        <div className="card-body">
                        <h6 className="card-title ">Visitors</h6>
                        <h5 className="card-title ">5000</h5>
                        <h6 className="card-subtitle " style={{color:"rgba(236, 239, 241, 0.813)"}}>Since last week</h6>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width:"70%",padding:"5px"}}>
                <HorizontalChart/>
            </div>
        </div>

        <div className='w-100 h-50 d-flex' style={{padding:"5px"}}>
            <div style={{width:"70%",padding:"5px"}}>
                <MapChart/>
            </div>
            <div style={{width:"40%",padding:"5px",height:"100%"}}>
                <PieActiveArc/>
            </div>
        </div>
    </div>
  )
}
