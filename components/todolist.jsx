import { useState } from "react"
export default function Todolist(){
    let [arrey, setarrey] = useState([])
    let [xog, setxog] = useState("")

   
    function Onclick(event){
        event.preventDefault()
        setarrey(prev => [...prev,xog])
    }



    return(
        <div className="toguud">
            <h3 className="toheader">this is to do list</h3>
            <input type="text" id="toinput" placeholder="type here..." value={xog} onChange={(e) => setxog(e.target.value)} name="text"/>
            <button className="tobutton" onClick={Onclick}>click</button>
            <ul className="toul">
                {arrey.map((e,index)=>{
                    return <li key={index}>{e}</li>

                })}
            </ul>
        </div>
    )
}