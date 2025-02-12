import { useState } from "react";
export default function Qalafow(props){
    let [magacyo , setmagacyo] = useState(["Kaafi", "Cilmi", "Cawad", "Siciid", "Cabdiraxmaan", "Cabdirasaaq", "Cabdicasiis", "Maxamed", "Muxubo", "Kaafiya", "Farduus", "Sahra", "Nimco", "Amaal", "Khadra"])
    let [xog, setxog] = useState("")
    let [filter, setfilter] = useState([])

    function Shaqo(){
        let result = magacyo.filter((e)=>{
            return e.toLowerCase().includes(xog.toLocaleLowerCase())

        })
        setfilter(result)
        
    }

    



    return(
        <div className="toguud">
            <h3 className="toheader">{props.Header}</h3>
            <input type="text" id="toinput" placeholder={props.placeholder} value={xog} onChange={(e) => setxog(e.target.value)} />
            <button className="tobutton" onClick={Shaqo}>{props.button}</button>
            <ul className="toul">
                {filter.length > 0? (filter.map((e)=>{
                    return <li>{e}</li>
                })) :(<li>kumajiro</li>) }
              
            </ul>
        </div>
    )
}