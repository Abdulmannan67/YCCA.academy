import React from 'react'
import "./success.css"
const Success = () => {
  return (
    <div class="dummy-positioning d-flex">
  
  <div class="success-icon">
    <div class="success-icon__tip"></div>
    <div class="success-icon__long"></div>
   
  </div>
    <h1 className='h' style={{color:"white" , fontWeight:"bolder", marginTop:"1vh"}} >Thank You!
We Have Received Your Application Form,
Our Team Will Get Back To You Within 48 Hours.

</h1>
<h1  className='h' style={{color:"white" , fontWeight:"bolder", marginTop:"1vh"}} >
Here Is Our Support Email -  <a className='Nav' href="mailto:info@ycca.in" > <i class="fa fa-envelope" >   </i>  info@ycca.in  </a> 

</h1>
 
</div>
  )
}

export default Success