import { useState } from "react"
export default function Badid(){
    let [index, setindex] = useState(0)
    function Increment(){
        setindex(index < 30? index+1:index=0)
    }
    function Decrement(){
        setindex(index <1? index = 30:index -1)
    }
    return(
       <div className="inguud">
    
            <h1 className="inheader">kani waa badiid iyo yarayn</h1>
      
        <div className="ingaar">
            <button className="inbutton" onClick={Decrement}>decrement -</button>
            <p className="inqoraal">{index}</p>
            <button className="inbutton" onClick={Increment}>increment +</button>
        </div>

       </div>
    )
}