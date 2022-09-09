import gmail from "./gmail.png";
import call from "./call.png";
//import "./Contacts.scss";

const Contacts = () => {
  return (
    <section className="contacts">
      <div className="container">
        <div className="contacts__inner">
          <div className="contacts__box">
            <h3 className="contacts__title">Contact Me</h3>
            <p className="contacts__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
              quasi expedita iure ex officia nulla cupiditate quis earum beatae
              a!
            </p>
            <ul className="contacts__list">
              <li className="contacts__item">
                <img className="contacts__item-img" src={call} alt="call me" />
                <p className="contacts__item-label">
                  <span>Call me!</span>
                  <a className="contacts__item-link" href="tel:062180377">
                    062180377
                  </a>
                </p>
              </li>
              <li className="contacts__item">
                <img className="contacts__item-img" src={gmail} alt="gmail" />
                <p className="contacts__item-label">
                  <span>Email</span>
                  <a
                    className="contacts__item-link"
                    href="mailto:artemiepirnau@gmail.com"
                  >
                    artemiepirnau@gmail.com
                  </a>
                </p>
              </li>
            </ul>
          </div>
          <form className="contacts__form">
            <div className="contacts__form-inputs">
              <input
                className="contacts__input contacts__name"
                type="text"
                name="username"
                placeholder="Name"
              />
              <input
                className="contacts__input contacts__email"
                type="text"
                name="email"
                placeholder="Email"
              />
            </div>
            <textarea
              className="contacts__form-area"
              name="area"
              placeholder="Message"
            ></textarea>
            <button className="contacts__btn" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
    // <div className="contact-me">
    //   <div className="contact-me__form-info">
    //     <img
    //       className="contact-me__close"
    //       src="images/icons/close.svg"
    //       alt="close"
    //     />
    //     <div className="contact-me__close"></div>
    //     <h3 className="contact-me__title">Let's talk</h3>
    //     <p className="contact-me__text">
    //       New projects, freelance inquiry or even a coffee.
    //     </p>
    //     <form
    //       className="contact-me__form"
    //       action="https://formspree.io/f/xdoblvwy"
    //       method="POST"
    //     >
    //       <div className="contact-me__box contact-me__box--name">
    //         <label className="contact-me__label"> Name </label>
    //         <input
    //           className="contact-me__name contact-me__special"
    //           type="text"
    //           name="name"
    //         />
    //         <span className="border"></span>
    //       </div>
    //       <div className="contact-me__box contact-me__box--email">
    //         <label className="contact-me__label"> E-mail </label>
    //         <input
    //           className="contact-me__mail contact-me__special"
    //           type="email"
    //           name="email"
    //         />
    //         <span className="border"></span>
    //       </div>
    //       <div className="contact-me__box contact-me__box--area">
    //         <label className="contact-me__label"> Message </label>
    //         <textarea
    //           className="contact-me__area contact-me__special"
    //           name="message"
    //         ></textarea>
    //         <span className="border"></span>
    //         <button className="contact-me__btn" type="submit">
    //           Send Message
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
  );
};
export default Contacts;
