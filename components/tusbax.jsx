import { useState } from "react"
export default function Tusbax(){
    let [tusbax, settusbax]= useState(0)
    function Onclick(){
        settusbax(tusbax <30? tusbax +1 : tusbax = 0)
    }
    return(
       <div className="tusguud">
        <h1 className="tusheader">kani waa tusbax</h1>
        <div className="tusgaar">
            <p className="tusgudo">tasbiixso</p>
             <p id="tusinput">{tusbax}</p><br />
             <button className="tusbutton" onClick={Onclick}> start</button>
        </div>
       </div>
    )
}