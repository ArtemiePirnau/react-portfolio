import Header from "../Header/Header.jsx";
import About from "../About/About.jsx";
import Contacts from "../Contacts/Contacts.jsx";
import MySkills from "../MySkills/MySkills.jsx";
import Portfolio from "../Portfolio/Portfolio.jsx";
import Footer from "../Footer/Footer.jsx";

import "../../style/style.scss";

const App = () => {
  return (
    <div className="app">
      <Header />
      <About />
      <MySkills />
      <Portfolio />
      <Contacts />
      <Footer />
    </div>
  );
};
export default App;
