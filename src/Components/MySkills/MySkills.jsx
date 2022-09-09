import SkillsItem from "../SkillsItem/SkillsItem.jsx";
//import "./MySkills.scss";
const MySkills = () => {
  return (
    <section className="skills text">
      <div className="container">
        <h1 className="skills__title section-title">My Skills</h1>
        <div className="skills__inner">
          <p className="skills__text section-text">
            Writing cross-browser, semantic code; Adaptive layout; Practical
            experiences with all technologies are written below.
          </p>
          <ul className="skills__list">
            <SkillsItem text="HTML5" num="90%" width="90" color="#fa3800" />
            <SkillsItem
              text="CSS3 / BEM"
              num="90%"
              width="90"
              color="#0f4aef"
            />
            <SkillsItem
              text="SASS / SCSS"
              num="85%"
              width="85"
              color="#ce679a"
            />
            <SkillsItem text="Git" num="70%" width="70" color="#f05030" />
            <SkillsItem
              text="javascript (es6+)"
              num="85%"
              width="85"
              color="#f7e018"
            />
            <SkillsItem text="jquery" num="80%" width="80" color="#0967ac" />
            <SkillsItem text="photoshop" num="80%" width="80" color="#31a8ff" />
            <SkillsItem text="figma" num="90%" width="90" color="#a259ff" />
            <SkillsItem text="gulp" num="80%" width="80" color="#eb4a4b" />
            <SkillsItem text="webpack" num="70%" width="70" color="#1c78c0" />
            {/* <li className="skills__item">
              <div className="skills__item-content">
                <p className="skills__item-text">HTML5</p>
                <p className="skills__item-num">90%</p>
              </div>
              <div
                className="skills__item-line"
                style={{ width: "90%", backgroundColor: "#fa3800" }}
              ></div>
            </li>
            <li className="skills__item">
              <div className="skills__item-content">
                <p className="skills__item-text">CSS3 / BEM</p>
                <p className="skills__item-num">90%</p>
              </div>
              <div
                className="skills__item-line"
                style={{ width: "90%", backgroundColor: "#0f4aef" }}
              ></div>
            </li>
            <li className="skills__item">
              <div className="skills__item-content">
                <p className="skills__item-text">SASS/SCSS</p>
                <p className="skills__item-num">85%</p>
              </div>
              <div
                className="skills__item-line"
                style={{ width: "85%", backgroundColor: "#ce679a" }}
              ></div>
            </li>
            <li className="skills__item">
              <div className="skills__item-content">
                <p className="skills__item-text">GIT</p>
                <p className="skills__item-num">70%</p>
              </div>
              <div
                className="skills__item-line"
                style={{ width: "70%", backgroundColor: "#f05030" }}
              ></div>
            </li>
            <li className="skills__item">
              <div className="skills__item-content">
                <p className="skills__item-text">javascript (es6+)</p>
                <p className="skills__item-num">85%</p>
              </div>
              <div
                className="skills__item-line"
                style={{ width: "85%", backgroundColor: "#f7e018" }}
              ></div>
            </li>
            <li className="skills__item">
              <div className="skills__item-content">
                <p className="skills__item-text">jquery</p>
                <p className="skills__item-num">80%</p>
              </div>
              <div
                className="skills__item-line"
                style={{ width: "80%", backgroundColor: "#0967ac" }}
              ></div>
            </li>
            <li className="skills__item">
              <div className="skills__item-content">
                <p className="skills__item-text">photoshop</p>
                <p className="skills__item-num">80%</p>
              </div>
              <div
                className="skills__item-line"
                style={{ width: "80%", backgroundColor: "#31a8ff" }}
              ></div>
            </li>
            <li className="skills__item">
              <div className="skills__item-content">
                <p className="skills__item-text">figma</p>
                <p className="skills__item-num">90%</p>
              </div>
              <div
                className="skills__item-line"
                style={{ width: "90%", backgroundColor: "#a259ff" }}
              ></div>
            </li>
            <li className="skills__item">
              <div className="skills__item-content">
                <p className="skills__item-text">gulp</p>
                <p className="skills__item-num">80%</p>
              </div>
              <div
                className="skills__item-line"
                style={{ width: "80%", backgroundColor: "#eb4a4b" }}
              ></div>
            </li>
            <li className="skills__item">
              <div className="skills__item-content">
                <p className="skills__item-text">webpack</p>
                <p className="skills__item-num">70%</p>
              </div>
              <div
                className="skills__item-line"
                style={{ width: "70%", backgroundColor: "#1c78c0" }}
              ></div>
            </li> */}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default MySkills;
