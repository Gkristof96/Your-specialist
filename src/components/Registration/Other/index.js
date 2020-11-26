import React from "react"
import { FaExclamationTriangle } from 'react-icons/fa'
import InputField from "../../InputField"
import validate from '../../customHooks/validations/validateRegother'
import useInputs from '../../customHooks/useInputs'

const OtherData = ({setStep, values, setValues}) => {
    const sendData = () => {
        setStep(3);
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
                <InputField
                    name='tel' 
                    type='text' placeholder='Telefonszám' 
                    handleChange={handleChange} 
                    value={values.tel}
                />
                {errors.tel && 
                        <p className='error-message'>
                        <FaExclamationTriangle/>
                        {errors.tel}
                        </p>
                }
                <div className='names'>
                    <button className="btn-white" onClick={() => setStep(1)}>Elöző</button>
                    <input className="btn" type="submit" value="Következő" />
                </div>
            </form>
        </>
    )
}

export default OtherData