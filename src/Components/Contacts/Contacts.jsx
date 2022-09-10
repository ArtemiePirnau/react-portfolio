import emailJs from "emailjs-com";
import gmail from "./gmail.png";
import call from "./call.png";

const Contacts = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailJs
      .sendForm(
        "service_nzkph6l",
        "template_x0vs1kf",
        e.target,
        "xgijVq2r87h4rs0Vu"
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <section className="contacts">
      <div className="container">
        <div className="contacts__inner">
          <div className="contacts__box">
            <h3 className="contacts__title">HAVE SOME QUESTIONS ?</h3>
            <p className="contacts__text">
              If you have questions, proposals, opinions, or simply want to
              discuss. Contact me! Do not be shy
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
          <form className="contacts__form" onSubmit={sendEmail}>
            <div className="contacts__form-inputs">
              <input
                className="contacts__input contacts__email"
                type="text"
                name="name"
                placeholder="Name"
              />
              <input
                className="contacts__input contacts__email"
                type="text"
                name="user_email"
                placeholder="Email"
              />
            </div>
            <textarea
              className="contacts__form-area"
              name="area"
              placeholder="Message"
            ></textarea>
            <button className="contacts__btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contacts;
