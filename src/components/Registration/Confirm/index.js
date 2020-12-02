import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'
import axios from 'axios'
import useInputs from '../../customHooks/useInputs'
import validate from '../../customHooks/validations/validateRegConfirm'

const ConfirmPage = ({values, setValues, setStep}) => {
    const sendData = () => {
        axios
          .post("url", {
            values,
          })
          .then((response) => {
            console.log('sikeres regisztráció')
          })
          .catch((error) => {
            console.log(error);
          });
      };
    const {handleChange, handleSubmit, errors } = useInputs(
        validate,
        values,
        setValues,
        sendData
      );
    return (
        <>
            <div className='confirm-card'>
                <h1>Teljes név: {values.lastname}{" "}{values.firstname}</h1>
                <h1>Email: {values.email}</h1>
                <h1>Telefon: {values.tel}</h1>
                <h1>Város: {values.city}</h1>
                <h1>Szakma: {values.profession}</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='checkbox'>
                    <input type="checkbox" name='checkbox' onChange={handleChange}/>
                    <span>Elfogadom a felhasználási feltételeket.</span>
                </div>
                {errors.checkbox && 
                        <p className='error-message'>
                        <FaExclamationTriangle/>
                        {errors.checkbox}
                        </p>
                }
                <div className='horizontal-container'>
                    <button className="btn-white" onClick={() => setStep(2)}>Elöző</button>
                    <input className="btn" type="submit" value="Regisztráció" />
                </div> 
            </form>
        </>
    )
}

export default ConfirmPage