import React from 'react'
import statisticData from '../../Data/Data'
import './statistics.css'
function Statistics() {
  return (
    <div>
        <h2 style={{textAlign:"center"}}>Statistics</h2>
    <div className='statistics'>
        
        {
            statisticData.map((statistic)=>{
                return(
                    <div className="stat-card" key={statistic.id}>
                        <div className="st-top">
                            <div className="st-image">
                                <img src="./images/sale.png" className='icon' alt="" />
                            </div>
                            <div className="st-cred">
                                <h3 className='st-name'>{statistic.name}</h3>
                                <p className='period'>Monthly</p>
                            </div>
                        </div>
                        <div className="st-bottom">
                          <h3 className='st-price'>${statistic.price}</h3> 
                          <img src="./images/rev.png" className='icon' alt="" /> 
                        </div>

                    </div>
                )
            })
        }


    </div>
    </div>
  )
}

export default Statistics