import { configureStore } from "@reduxjs/toolkit";

import appsJsItemsReducer from "../reducers/appsJsSlice.jsx";
import appsReactItemsReducer from "../reducers/appsReactSlice.jsx";
import skillsItemsReducer from "../reducers/skillsSlice.jsx";
import websitesItemsReducer from "../reducers/websitesSlice.jsx";

export const store = configureStore({
  reducer: {
    appsJsList: appsJsItemsReducer,
    appsReactList: appsReactItemsReducer,
    skillsList: skillsItemsReducer,
    websitesList: websitesItemsReducer,
  },
});
