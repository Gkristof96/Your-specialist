import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookSquare,
  FaExclamationTriangle
} from "react-icons/fa";
import axios from "axios";
import InputField from '../../components/InputField'
import TextField from '../../components/TextField'
import useInputs from '../../components/customHooks/useInputs'
import validateContact from '../../components/customHooks/validations/validateContact'

const Contact = () => {
  const [values, setValues] = useState({
    email: '',
    name: '',
    message: ''
  });

  const sendData = () => {
    axios
      .post("url", {
        message: {
          name: values.name,
          email: values.email,
          message: values.message,
        },
      })
      .then((response) => {
        console.log("elküldve", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { handleChange, handleSubmit, errors } = useInputs(
    validateContact,
    values,
    setValues,
    sendData
  );
  return (
    <>
      <section className="contact section">
        <div className="contact__container">
          <div className="contact-data">
            <h1 className="contact-data__title">Elérhetőségek:</h1>
            <div className="contact-data__container">
              <span className="contact-data__item">
                <FaPhoneAlt className="contact-icon" />
                Telefon: +36 70 456 2397
              </span>
              <span className="contact-data__item">
                <FaEnvelope className="contact-icon" />
                Email: contact@yspecialist.com
              </span>
              <span className="contact-data__item">
                <FaFacebookSquare className="contact-icon" />
                Facebook: link
              </span>
              <span className="contact-data__item">
                <FaMapMarkerAlt className="contact-icon" /> Cím: valami
              </span>
            </div>
          </div>
          <div className="contact-us">
            <h1 className="contact-us__title">Üzenj nekünk</h1>
            <form onSubmit={handleSubmit}>
            <InputField 
                name='name' 
                type='text' placeholder='Teljes Név' 
                handleChange={handleChange} 
                value={values.name}
              />
              {errors.name && 
                <p className='error-message'>
                  <FaExclamationTriangle/>
                  {errors.name}
                </p>
              }
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
              <TextField 
                name='message' 
                placeholder='Üzenet' 
                handleChange={handleChange} 
                value={values.message}
              />
              {errors.message && 
                <p className='error-message'>
                  <FaExclamationTriangle/>
                  {errors.message}
                </p>
              }
              <input className="btn" type="submit" value="Küldés" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
