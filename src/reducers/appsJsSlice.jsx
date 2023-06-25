import { createSlice } from "@reduxjs/toolkit";
const appsJsItemsSlice = createSlice({
  name: "appsJsList",
  initialState: {
    appsJsList: [
      {
        id: 0,
        img: "https://user-images.githubusercontent.com/92051961/189174428-2a6587dd-cc5b-4b38-b135-340e0a28d740.png",
        link: "https://artemiepirnau.github.io/client-side-validation/dist/index.html",
      },
      {
        id: 1,
        img: "https://user-images.githubusercontent.com/92051961/189174602-4eee9e0d-eb5e-4d8b-9c59-e1d3a05fffa6.png",
        link: "https://artemiepirnau.github.io/fetch-pexels-API/dist/index.html",
      },
      {
        id: 2,
        img: "https://user-images.githubusercontent.com/92051961/189174831-dfae486a-8e9a-4c6d-87a3-e6902fe9a351.png",
        link: "https://artemiepirnau.github.io/nodes-app/app/",
      },
      {
        id: 3,
        img: "https://user-images.githubusercontent.com/92051961/189175031-cd23d621-0f4a-46b5-87c9-4027ad4e43e4.png",
        link: "https://artemiepirnau.github.io/music-player-app/dist/index.html",
      },
      {
        id: 4,
        img: "https://user-images.githubusercontent.com/92051961/189175194-0fa02429-aab1-4c02-967f-fc1b98db6b75.png",
        link: "https://artemiepirnau.github.io/weight-converter/app/index.html",
      },
      {
        id: 5,
        img: "https://user-images.githubusercontent.com/92051961/189175387-45cad9a2-11a6-41b0-b2fe-bed306f86efb.png",
        link: "https://github.com/ArtemiePirnau/weather-app/tree/master/dist",
      },
      {
        id: 6,
        img: "https://user-images.githubusercontent.com/92051961/189157852-01ea7332-a88d-4add-a5c7-8119e6863a79.png",
        link: "https://github.com/ArtemiePirnau/harry-potter-api",
      },
      {
        id: 7,
        img: "https://user-images.githubusercontent.com/92051961/189158317-beefa62a-8111-43a5-9d1e-84b06e0a0045.png",
        link: "https://github.com/ArtemiePirnau/marvel-api",
      },
      {
        id: 8,
        img: "https://user-images.githubusercontent.com/92051961/190911741-22bf51c9-c428-42ca-a91e-6289d560b707.png",
        link: "https://artemiepirnau.github.io/google-clone/dist/",
      },
    ],
  },
});
export default appsJsItemsSlice.reducer;
