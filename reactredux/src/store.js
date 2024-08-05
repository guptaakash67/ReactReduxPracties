import { createStore } from "redux"
import rootReducer from "./reducers/index";

export const Store =()=>{
 createStore(rootReducer);
}

export default Store;