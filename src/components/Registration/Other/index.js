import React, { useContext } from "react"
import { FaExclamationTriangle } from 'react-icons/fa'
import InputContext from '../../../contexts/inputContext'
import InputField from "../../InputField"
import AutoSearch from '../../AutoInput'
import validate from '../../customHooks/validations/validateRegOther'
import useInputs from '../../customHooks/useInputs'

const OtherData = ({setStep, values, setValues}) => {
    const {cities,professions} = useContext(InputContext);
    
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
                <AutoSearch
                  search={values.city}
                  values={values}
                  setValues={setValues}
                  handlechange={handleChange}
                  items={cities}
                  placeholder="Település"
                  type="city"
                />
                {errors.city && 
                        <p className='error-message'>
                        <FaExclamationTriangle/>
                        {errors.city}
                        </p>
                }
                <AutoSearch
                  search={values.profession}
                  values={values}
                  setValues={setValues}
                  handlechange={handleChange}
                  items={professions}
                  placeholder="Szakma"
                  type="profession"
                />
                {errors.profession && 
                        <p className='error-message'>
                        <FaExclamationTriangle/>
                        {errors.profession}
                        </p>
                }
                <div className='horizontal-container'>
                    <button className="btn-white" onClick={() => setStep(1)}>Elöző</button>
                    <input className="btn" type="submit" value="Következő" />
                </div>
            </form>
        </>
    )
}

export default OtherData