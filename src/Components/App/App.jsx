import Header from "../Header/Header.jsx";
import About from "../About/About.jsx";
import Contacts from "../Contacts/Contacts.jsx";
import MySkills from "../MySkills/MySkills.jsx";
import Portfolio from "../Portfolio/Portfolio.jsx";
import Footer from "../Footer/Footer.jsx";

// TODO: React form - cumva de primit message pe gmail din forma
// TODO: De adaugat Skill cu react/redux
// TODO: De pus acest proiect pe un hosting free cu un domen de al meu de exemplu : (https://whoisartemie)
// TODO: De sters toate comentariile

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
