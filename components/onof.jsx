import data from "../data"
import Of from "./onof2"
import { useState } from "react"
export default function On(){
    let[ index, setindex] = useState(data)

    function Toggle(id){
        setindex(prev=> prev.map((en)=>{
            return en.id === id? {...en, on:!en.on}:en

        }))

    }

    let maabeeye = index.map((e)=>{
        return <Of 
        id = {e.id}
        color = {e.color}
        on = {e.on}
        function = {Toggle}
        />
    })

    return(
      <div className="ONguud">
        {maabeeye}
      </div>
    )
}