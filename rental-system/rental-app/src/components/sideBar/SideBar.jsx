import React from 'react'
import './SideBar.css'
function SideBar() {
  return (
    <div className='sidebar'>
        <div className="side-head">
            <h2 style={{fontSize:"17px"}}>RentalPay</h2>
        </div>
        <ul className="top">
            <ul className='side-right'>
                <li>
                    <img src="./images/overview.png" className='icon' alt="" />
                </li>
                <li className='link'>Overview</li>
            </ul>
            <ul className='side-right'>
                <li>
                    <img src="./images/property.png" className='icon' alt="" />
                </li>
                <li className='link'>Properties</li>
            </ul>
            <ul className='side-right'>
                <li>
                    <img src="./images/tenant.jpg" className='icon' alt="" />
                </li>
                <li className='link'>Tenant</li>
            </ul>
            <ul className='side-right'>
                <li>
                    <img src="./images/maintenance.jpg" className='icon' alt="" />
                </li>
                <li className='link'>Maintainance</li>
            </ul>
        </ul>
        <ul className="side-bottom">
            <ul className='side-right'>
                <li>
                    <img src="./images/account.png" className='icon' alt="" />
                </li>
                <li className='link'>Account</li>
            </ul>
            <ul className='side-right'>
                <li>
                    <img src="./images/setting.png" className='icon' alt="" />
                </li>
                <li className='link'>Settings</li>
            </ul>
            <ul className='side-right'>
                <li>
                    <img src="./images/logout.png" className='icon' alt="" />
                </li>
                <li className='link'>Logout</li>
            </ul>
        </ul>

    </div>
  )
}

export default SideBar