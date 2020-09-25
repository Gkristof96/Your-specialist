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
      <section className="contact-hero"></section>
      <section className="contact">
        <div className="container">
          <div className="data">
            <h1>Elérhetőségek:</h1>
            <span>
              <FaPhoneAlt />
              Telefon: +36 70 456 2397
            </span>
            <span>
              <FaEnvelope />
              Email: contact@yspecialist.com
            </span>
            <span>
              <FaFacebookSquare />
              Facebook: link
            </span>
            <span>
              <FaMapMarkerAlt /> Cím: valami
            </span>
          </div>
          <div className="call-to-action">
            <h1 className="call-to-action__title">Üzenj nekünk</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input-group">
                <label>Név</label>
                <input
                  name="name"
                  type="text"
                  ref={register({ required: "Kötekező kitölteni!" })}
                />
                {errors.name && <p>{errors.name.message}</p>}
              </div>
              <div className="input-group">
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  ref={register({ required: "Kötekező kitölteni!" })}
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>
              <div className="input-group">
                <label>Üzenet</label>
                <textarea
                  name="message"
                  type="text"
                  ref={register({ required: "Kötekező kitölteni!" })}
                />
                {errors.message && <p>{errors.message.message}</p>}
              </div>
              <input className="btn" type="submit" value="Küldés" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
