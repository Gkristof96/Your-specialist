import React, { useState } from 'react'
import ConfirmPage from '../Confirm';
import OtherData from '../Other';
import PersonalData from '../Personal';

const Pager = () => {
  const [step,setStep] = useState(1)
  const [values,setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    cpassword: '',
    tel: '',
    city: '',
    profession: '',
    checkbox: ''
  })
  switch (step) {
      case 1:
        return (
              <PersonalData 
                values={values} 
                setValues={setValues} 
                setStep={setStep}
               />

        )
      case 2:
        return (
              <OtherData
                values={values} 
                setValues={setValues} 
                setStep={setStep}
              />
        )
      case 3: 
        return (
              <ConfirmPage 
                values={values} 
                setValues={setValues} 
                setStep={setStep}
              />
              )
      default:
        break;
  }
}

export default Pager