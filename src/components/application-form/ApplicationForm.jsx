import React, { useEffect, useState } from 'react';

// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from 'react-router-dom';

import emailjs from '@emailjs/browser';

import "./appli.css"




const ApplicationForm = () => {

  let navigate = useNavigate();
  
 
 const [formData, setFormData] = useState({
  email: '',
  name: '',
  number:'',
  age:'',
  address:'',
  education:'',
  ans: '',
  fees:"",
  family:"",
  income:"",
  story:""
});


useEffect(() => {
  check();
}, [])




const handleSubmit = async (e) => {
  e.preventDefault();

  const myObject = formData;
  const jsonString = JSON.stringify(myObject);

// Save the JSON string to local storage
   localStorage.setItem('myObject', jsonString);
 


       //payment
         let lineItems =[{price:"price_1NsoDOSDYm0qg86hXKHRYqWR",quantity:1}]
    
    let stripePromise =null
    const getstripe =()=>{
        if(!stripePromise){
            stripePromise =loadStripe("pk_live_51MLMddSDYm0qg86hs4EpiGG1LuR3ox9VA2lAuBIFcHR3QbDEJJAnLcrxykpVLlfjhDTaNnnK7WJXQMVDLj9Ao64900GlkZhDAo")
        }
        return stripePromise
    }
    const stripe =await getstripe()
    await stripe.redirectToCheckout({
        mode:"payment",
        lineItems,
        successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
		    cancelUrl: window.location.origin
    })
     

}



  
  
  



 function check( ) {
  let dat = window.location.search;
 if (dat.slice(1,5)==="sess") {
  
  const storedJsonString = localStorage.getItem('myObject');
  const storedObject = JSON.parse(storedJsonString);
console.log("lll")
 // Retrieve the JSON string from local storage
     emailjs.send('service_f4hhydc', 'template_vw9cmwp', storedObject, 'T-ahRpgXINGn6xU19')
     .then((result) => {
         console.log(result)
        navigate("/success")
     }, (error) => {
        alert(error)
     });
  
 }


 }

  

 const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]:e.target.value,
  });
};



  return (

 
    <div>

      
      <form onSubmit={handleSubmit} >

      <h1 className='head'>Master Video Editing - YCCA Application Form</h1>
      

      

      
      <p className='upper_para' >From opening the software to as advanced video editing gets, 
we cover it all with a 100% Guaranteed job placement of ₹20,000/month in <a style={{fontWeight:"bold"}} className='lin' href="https://bundle-media.co/" > Bundle-Media. </a> </p>

<p className='upper_para'>YourCheatCode Academy aka (YCCA),
is an academy, where we provide dedicated master programs on modern world skills which provide 10x more value than any university degree at less that 1% of it’s cost + saving 3 years of your life, by providing YOU that value plus way way more in just 3 easily digestible months.</p>
<p className='upper_para'>YCCA is a very exclusive academy where even if you have the money you cannot enter inside, you need to fill out an application form which will manually be approved by our team, and you will have to pass through an online interview to even get a chance at buying our program.</p>
     
     <p className='upper_para'>But yes, if you manage to get inside I 100% Guarantee that this will be the best decision you will ever make in your entire career.</p>
      <label>
    <p class="label-txt">Email</p>
    <input type="email" name="email" onChange={handleChange} value={formData.email} class="input" required/>
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>
  <label>
    <p class="label-txt">Name</p>
    <input type="text" name="name" onChange={handleChange} value={formData.name} class="input" required/>
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>
  <label>
    <p class="label-txt">Phone Number</p>
    <input type="text" name="number" onChange={handleChange} value={formData.number} class="input" required/>
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>
  <label>
    <p class="label-txt">Age</p>
    <input type="text" name="age" onChange={handleChange} value={formData.age} class="input" required/>
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>
  <label>
    <p class="label-txt">Current Residential Address</p>
    <input type="text" name="address" onChange={handleChange} value={formData.address} class="input" required/>
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>
  <label >
    <p class="label-txt">Are you stuck in the Indian education system?</p>
    <div className='radio' >
    <div className='No' >
   <input type="radio" name="education" onChange={handleChange} value="NO"  />
   <span className='txt'>No</span>
   </div>
   <div className='yes' >
    <input type="radio" name="education" onChange={handleChange}  value='IF YOU ARE, PLEASE CLOSE THIS WEBSITE, AND CONTINUE WITH YOUR STUDIES.'  />
    <span className='txt1'>If you are, please close this website, and continue with your studies..</span>
    </div>
    </div>
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>
  <label>
    <p class="label-txt">Are you willing to travel to our office at oshiwara and spend 5-8 hours learning and practicing everyday. cause once you are selected, it is our responsibility to make you the best out there or at least adequate enough to actually make money out of you when we give you a job.</p>
    <input id='ans' type="text" name="ans" onChange={handleChange} value={formData.ans} class="input" required/>
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>

  <label >
    <p class="label-txt">Are You Ready To Pay The Fees Of ₹81,000 In Full?</p>
    <div className='radio' >
    <div className='No' >
   <input type="radio" onChange={handleChange}  name="fees" value="Yes"  />
   <span className='txt'>Yes</span>
   </div>
   <div className='yes' >
    <input type="radio" onChange={handleChange}  name="fees" value='Will have to pay in bite sized instalments'  />
    <span className='txt1'>Will have to pay in bite sized instalments.
</span>
    </div>
    </div>
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>
  <label>
    <p class="label-txt">How Many People Are There In Your Family?
</p>
    <input id='ans3' type="text" name="family" onChange={handleChange} value={formData.family} class="input" required/>
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>

  <label >
    <p class="label-txt">What's Your Total Household Income Per Month?</p>
    <div className='radio' >
    <div className='No' >
   <input type="radio" name="income" onChange={handleChange} value="0-20k"  />
   <span className='txt'>0-20k</span>
   </div>
   <div className='yes' >
    <input type="radio" name="income" onChange={handleChange}  value='20k-50k'  />
    <span className='txt1'>20k-50k
</span>
    </div>
    <div className='No' >
   <input type="radio" name="income" onChange={handleChange}  value="50k-1L"  />
   <span className='txt'>50k-1L</span>
   </div>
   <div className='yes' >
    <input type="radio" name="income" onChange={handleChange}  value='1L +'  />
    <span className='txt1'>1L +
</span>
    </div>
    </div>
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>

  <label>
    <p class="label-txt">Why Should We Select You And Not Anyone Else Out Of the 100s Of people Filling Out This Form Everyday?

(This will decide whether or not we are a good fit for eachother)

(Tell Us Your Story) </p>
    <input id='ans1' type="text" name="story" onChange={handleChange} value={formData.story} class="input" required/>
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>
  <button  id='but' type="submit"value="Send">Pay ₹101 - Submit</button>

    {/* <p style={{marginTop:"2vh"}} >This money goes to <a className='lin' style={{fontWeight:"bold"}} href="https://shaadfoundation.org/" > Shaad Foundation </a></p> */}

   </form>

 

    </div>
   
  )
}

export default ApplicationForm