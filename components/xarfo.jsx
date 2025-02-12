import { useState } from "react"
export default function Xarfo(){
    let xarfo = "abcdefghijklmnopqrstuvwxyz".split("")
    let [index, setindex] = useState("")
    console.log(xarfo)
    function Click(e,xarfo){
        e.preventDefault()
        setindex(xarfo)


    }
    return(
        
      <>
      <div className="guud">
        <h1>{xarfo.map((i,  index) => <button key={index} onClick={(e)=>Click(e,xarfo)}>{e}</button>)}</h1>
      </div>
      <p>{index}</p>
      </>
    )
}