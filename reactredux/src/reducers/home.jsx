import { useSelector, useDispatch } from 'react-redux'
import './home.css'
import { incNumber, decNumber } from '../action/index.js'

export const Home =()=>{
    const myState = useSelector((state) => state.changeTheNumber)
    const dispatch = useDispatch;
 return(
       <div className="container">
        <h1> Increment/Decrement counter</h1>
        <h4>USing React Redux</h4>

        <div className="quantity">
            <a className="qauntity_minus" title="Decrement" onClick={()=> dispatch(decNumber())}><span>-</span></a>
            <input name="qauntity" type="text" className="quantity_inut" value={myState}/>
            <a className="qauntity_plus" title="Increment" onClick={()=> dispatch(incNumber())}><span>+</span></a>
        </div>
       </div>
    )
}