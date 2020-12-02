import React from "react"
import { FaExclamationTriangle } from 'react-icons/fa'
import InputField from "../../InputField"
import validate from '../../customHooks/validations/validateRegPersonal'
import useInputs from '../../customHooks/useInputs'

const PersonalData = ({setStep, values, setValues}) => {
    const sendData = () => {
        setStep(2);
    }
    const { handleChange, handleSubmit, errors } = useInputs(
        validate,
        values,
        setValues,
        sendData
      );
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='horizontal-container'>
                    <InputField
                        name='lastname' 
                        type='text' placeholder='Vezetéknév' 
                        handleChange={handleChange} 
                        value={values.lastname}
                    />
                    {errors.lastname && 
                        <p className='error-message'>
                        <FaExclamationTriangle/>
                        {errors.lastname}
                        </p>
                    }
                    <InputField
                        name='firstname' 
                        type='text' placeholder='Keresztnév' 
                        handleChange={handleChange} 
                        value={values.firstname}
                    />
                    {errors.firstname && 
                        <p className='error-message'>
                        <FaExclamationTriangle/>
                        {errors.firstname}
                        </p>
                    }
                </div>
                <InputField
                    name='email' 
                    type='text' placeholder='Email' 
                    handleChange={handleChange} 
                    value={values.email}
                />
                {errors.email && 
                        <p className='error-message'>
                        <FaExclamationTriangle/>
                        {errors.email}
                        </p>
                }
                <InputField
                    name='password' 
                    type='password' placeholder='Jelszó' 
                    handleChange={handleChange} 
                    value={values.password}
                />
                {errors.password && 
                        <p className='error-message'>
                        <FaExclamationTriangle/>
                        {errors.password}
                        </p>
                 }
                <InputField
                    name='cpassword' 
                    type='password' placeholder='Jelszó újra' 
                    handleChange={handleChange} 
                    value={values.cpassword}
                />
                {errors.cpassword && 
                        <p className='error-message'>
                        <FaExclamationTriangle/>
                        {errors.cpassword}
                        </p>
                }
                <input className="btn" type="submit" value="Következő" />
            </form>
        </>
    )
}

export default PersonalData