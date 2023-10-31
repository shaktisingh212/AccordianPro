import react,{ useState } from "react";
const Accordion=(props)=>{
  const [set, setset] = useState(false)
    return(
      <div>
        <center>
        <div className="container w-50  bg-info mt-4 p-3 ">
            <div  className="mt-2 bg-dark  text-light  text-start form-control "><button onClick={()=>setset(!set)} className="btn">{set?"➕":"➖"}</button> {props.topic}</div>
           { set&&
            <div className="mt-2 bg-dark  text-light text-start form-control ">{props.des}</div>}
        </div>
        </center>
      </div>
     
    )
}
export default Accordion