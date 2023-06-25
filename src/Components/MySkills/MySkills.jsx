import SkillsItem from "../SkillsItem/SkillsItem.jsx";
import { useSelector } from "react-redux";
const MySkills = () => {
  const skills = useSelector((state) => state.skillsList.skillsList);
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
            {skills.map(({ id, text, width, num, color }) => {
              return (
                <SkillsItem
                  key={id}
                  text={text}
                  num={num}
                  width={width}
                  color={color}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default MySkills;
