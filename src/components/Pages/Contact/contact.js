import React from "react";
import { useForm } from "react-hook-form";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookSquare,
} from "react-icons/fa";
import axios from "axios";

const Contact = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    axios
      .post("url", {
        message: {
          name: data.name,
          email: data.email,
          message: data.message,
        },
      })
      .then((response) => {
        console.log("elküldve", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="contact-us__input"
                name="name"
                type="text"
                ref={register({ required: "Kötekező kitölteni!" })}
                placeholder="Név"
              />
              {errors.name && <p>{errors.name.message}</p>}
              <input
                className="contact-us__input"
                name="email"
                type="email"
                ref={register({ required: "Kötekező kitölteni!" })}
                placeholder="Email"
              />
              {errors.email && <p>{errors.email.message}</p>}
              <textarea
                className="contact-us__text"
                name="message"
                type="text"
                ref={register({ required: "Kötekező kitölteni!" })}
                placeholder="Üzenet"
              />
              {errors.message && <p>{errors.message.message}</p>}
              <input className="btn" type="submit" value="Küldés" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
