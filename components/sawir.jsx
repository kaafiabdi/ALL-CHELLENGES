import { useState } from "react"
import sss from "/src/R__1_-removebg-preview.png"
import kkk from "/src/png-transparent-heart-computer-icons-shape-blackheart-love-black-share-icon-removebg-preview.png"
export default function Sawir(){
    let [index, setindex] = useState({
        img: false,
    })
    
    let result = index.img? sss:kkk

    function Click(){
        setindex(prev => ({...prev, img: !prev.img})) //iisax
    }
   
    return(
        <div className="sawguud">
         <h1>like or dislike</h1>
         <img src={result} alt=""  className="sawimg" onClick={Click}/>

        </div>
    )
}