import { createSlice } from "@reduxjs/toolkit";
const appsReactItemsSlice = createSlice({
  name: "appsReactList",
  initialState: {
    reactList: [
      {
        id: 0,
        img: "https://user-images.githubusercontent.com/92051961/167386263-1b05d8da-3126-4b66-9c1c-bef2280a5d48.png",
        link: "https://github.com/ArtemiePirnau/react-movie-search",
      },
      {
        id: 1,
        img: "https://user-images.githubusercontent.com/92051961/177216685-4c8a49ab-d8af-447d-891a-668d35b58a7a.png",
        link: "https://github.com/ArtemiePirnau/react-ecommerce",
      },
      {
        id: 2,
        img: "https://user-images.githubusercontent.com/92051961/176701073-363a6e7f-d972-4177-b1e3-4356569fe5ba.png",
        link: "https://github.com/ArtemiePirnau/react-valorant-api",
      },
      {
        id: 3,
        img: "https://user-images.githubusercontent.com/92051961/176444360-dad2fdc1-c15f-46e1-8872-a992bf16a1bf.png",
        link: "https://github.com/ArtemiePirnau/react-pexels-api",
      },
      {
        id: 4,
        img: "https://user-images.githubusercontent.com/92051961/189161616-b10804c9-9894-4f72-b9a8-bcda1c01670e.png",
        link: "https://github.com/ArtemiePirnau/react-pokemon-api",
      },
      {
        id: 5,
        img: "https://user-images.githubusercontent.com/92051961/193069300-6f9aa3a0-745c-4370-ac85-2f27d081405a.png",
        link: "https://github.com/ArtemiePirnau/react-redux-posts",
      },
      {
        id: 6,
        img: "https://user-images.githubusercontent.com/92051961/194701316-f0c7b4a9-5be5-4c0a-865e-e78450b52748.png",
        link: "https://github.com/ArtemiePirnau/react-redux-search-movie",
      },
      {
        id: 7,
        img: "https://user-images.githubusercontent.com/92051961/196974027-1d187f46-1164-47cc-b6ae-a27bf149d4dc.png",
        link: "https://github.com/ArtemiePirnau/react-redux-covid-stats",
      },
      {
        id: 8,
        img: "https://user-images.githubusercontent.com/92051961/197578230-15970cf9-b751-4738-b285-e625dc9504eb.png",
        link: "https://github.com/ArtemiePirnau/react-redux-todo",
      },
      {
        id: 9,
        img: "https://user-images.githubusercontent.com/92051961/199288681-78afcff5-fe8c-41c2-9fb9-c217116a5e12.png",
        link: "https://github.com/ArtemiePirnau/react-redux-login",
      },
      {
        id: 10,
        img: "https://user-images.githubusercontent.com/92051961/201527485-e14c9a43-69ee-4fa4-b17b-2eb4cd3dac2e.png",
        link: "https://github.com/ArtemiePirnau/react-redux-search-songs",
      },
    ],
  },
});
export default appsReactItemsSlice.reducer;
