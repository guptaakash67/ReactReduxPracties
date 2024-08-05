import { Home } from "./reducers/home";
import { Store } from "./store.js";


export const App =()=>{
  return(
<>
      <Store/>
      <Home/>
</>
  )
}
export default App;