import { useState } from "react"
export default function Readmore(){
    let [state, setstate] = useState(true)
    function Onclick(){
        setstate(prev => !prev)
    }
    return(
       <>
       <h1 className="reh1">See more and See less</h1>
       <div className="reguud">
         <div className="reqoraal">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, nobis?</p>
            {state === true && <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, dignissimos! Aut, eaque labore magni magnam quidem neque laborum odio exercitationem velit minima reprehenderit possimus officiis sed atque dicta iusto cum Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, animi.. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, explicabo. Aspernatur facilis iusto officia minima soluta reiciendis officiis iure sunt.</p>
            }
         </div>
         
         <button className="rebutton" onClick={Onclick}>
           {state? "See less...":"See more..."}

         </button>
       </div>

       </>
    )
}