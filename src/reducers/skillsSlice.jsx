import { createSlice } from "@reduxjs/toolkit";
const skillsItemsSLice = createSlice({
  name: "skillsList",
  initialState: {
    skillsList: [
      {
        id: 0,
        text: "HTML5",
        num: "90%",
        width: "90",
        color: "#fa3800",
      },
      {
        id: 1,
        text: "CSS3 / BEM",
        num: "90%",
        width: "90",
        color: "#0f4aef",
      },
      {
        id: 2,
        text: "SASS / SCSS",
        num: "85%",
        width: "85",
        color: "#ce679a",
      },
      {
        id: 3,
        text: "Git",
        num: "70%",
        width: "70",
        color: "#f05030",
      },
      {
        id: 4,
        text: "JavaScript/jquery",
        num: "80%",
        width: "80",
        color: "#0967ac",
      },
      {
        id: 5,
        text: "Photoshop",
        num: "80%",
        width: "80",
        color: "#31a8ff",
      },
      {
        id: 6,
        text: "Figma",
        num: "90%",
        width: "90",
        color: "#a259ff",
      },
      {
        id: 7,
        text: "Gulp",
        num: "80%",
        width: "80",
        color: "#eb4a4b",
      },
      {
        id: 8,
        text: "Webpack",
        num: "80%",
        width: "80",
        color: "#1c78c0",
      },
      {
        id: 9,
        text: "React",
        num: "85%",
        width: "85",
        color: "#61dbfb",
      },
      {
        id: 10,
        text: "Redux",
        num: "85%",
        width: "85",
        color: "#61dbfb",
      },
      {
        id: 11,
        text: "TypeScript",
        num: "70%",
        width: "70",
        color: "#3178c6",
      },
    ],
  },
});
export default skillsItemsSLice.reducer;
