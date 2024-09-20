import { Route, Routes } from 'react-router-dom'
// import Home from '../pages/Home'
import Hero from '../components/home/Hero'

import Login from '../pages/Login'
import Signup from '../pages/Signup'
import OurStory from '../pages/OurStory'
import OurMission from '../pages/OurMission'
import FreeTraining from '../pages/FreeTraining'
import Reviews from '../pages/Reviews'
import Products from '../pages/Products'
import AllCourses from '../pages/AllCourses'
import ApplicationForm from '../components/application-form/ApplicationForm'
// import ContactUs from '../pages/ContactUs'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import RefundCancellation from '../pages/RefundCancellation'
import TermCondition from '../pages/TermCondition'
import Success from '../pages/Success'


const MainRoute = () => {



  return (
   
    <>



    <Routes>
       
        <Route path='/' element={<Hero/> } />
        {/* <Route path='/contact-us' element={<ContactUs/> } /> */}
        <Route path='/privacy-policy' element={<PrivacyPolicy/> } />
        <Route path='/refund-cancellation' element={<RefundCancellation/> } />
        <Route path='/terms-conditions' element={<TermCondition/> } />
        <Route path='/Login' element={<Login /> } />
        <Route path='/signup' element={<Signup /> } />
        <Route path='/our-story' element={<OurStory /> } />
        <Route path='/our-mission' element={<OurMission/> } />
        <Route path='/101-training' element={<FreeTraining /> } />
        <Route path='/reviews' element={<Reviews /> } />
        <Route path='/all-courses' element={<AllCourses /> } />
        
        <Route  path='/application_form' element={<ApplicationForm />  } />
        <Route  path='/success' element={<Success />  } />
        <Route path='/the-ultimate-youtube-editing-course' element={<Products /> } />
    
    </Routes>

    </>
   
   
  )
}

export default MainRoute