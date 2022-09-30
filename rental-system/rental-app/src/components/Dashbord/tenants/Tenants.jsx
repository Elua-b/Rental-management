import React from 'react'
import './Tenants.css'
import tenants from '../../Data/tenantData'
function Tenants() {
  return (
    <div>
        <div className='t-top'>
        <h3>TOP TENANTS </h3>
        <h5>See All 14</h5>

        </div>
     

<table id="customers">
  <tr>
    <th>Names</th>
    <th>Property Category</th>
    <th>Property Location</th>
    <th>Tenant Status</th>
  </tr>
  {
tenants.map((tenant)=>{
    return(
        <tr key={tenant.id}>
            <td>{tenant.names}</td>
            <td>{tenant.propertyCategory}</td>
            <td>{tenant.propertyLocation}</td>
            <td>{tenant.status}</td>
        </tr>
    )
})
  }
 
</table> 
    </div>
  )
}

export default Tenants
