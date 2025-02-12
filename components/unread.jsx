import { useState } from "react"
import areys from "../areys"
export default function Unread(){
    let [index, setindex] = useState([])
    let maabeeye = areys.map((e)=>{
        return <p>{e}</p>
    })
    let result = maabeeye.length
   

    return(
        <>
        <div className="unguud">
            <h1>Un read messeges</h1>
            {result > 0 && <p>{result}</p>}
            <img src="OIP__3_-removebg-preview.png" alt="" />
        </div>
        </>
    )
}