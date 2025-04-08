import { SignUp } from '@clerk/clerk-react'
import React from 'react'
import './signUpPage.css'

function SingUpPage() {
  return (
    <div className='signUpPage'>
     <SignUp  signInUrl='/sign-in'/>
      
    </div>
  )
}

export default SingUpPage
