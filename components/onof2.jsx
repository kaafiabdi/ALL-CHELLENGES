
import { useState } from "react"
export default function Of(props){
        let[ index, setindex] = useState(props.on)

  
    return(
        <>
        <button
        style={{backgroundColor:props.color}}
        className={props.on? "on":"of"}
        onClick={()=>props.function(props.id)}
        >{props.id}</button>
        </>
     
    )
}