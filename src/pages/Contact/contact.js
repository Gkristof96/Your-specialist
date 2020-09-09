import React from "react";
import { useForm } from "react-hook-form";
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
      <section className="contact">
        <div className="contact__data">
          <h1>Elérehtőségek:</h1>
          <span>Telefon: +36 70 456 2397</span>
          <span>Email: contact@yspecialist.com</span>
          <span>Facebook: link</span>
        </div>
        <div className="contact__cta">
          <h1>Üzenj nekünk</h1>
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
            <input type="submit" value="Küldés" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
