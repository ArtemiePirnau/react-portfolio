import gmail from "./gmail.png";
import call from "./call.png";

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
