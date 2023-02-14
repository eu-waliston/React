import { createStore } from "redux";
import { ShopReducer } from "./ShopReducer";

export const SportStoreDataStore = createStore(ShopReducer);
