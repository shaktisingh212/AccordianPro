import react,{ useState } from "react";
const Accordion=(props)=>{
  const [set, setset] = useState(false)
  console.log(props.des)
    return(
      <div>
        <center>
        <div className="container w-100  bg-info mt-4 p-3 ">
            <div  className="mt-2 bg-dark  text-light  text-start form-control "><button onClick={()=>setset(!set)} className="btn">{set?"➕":"➖"}</button> {props.topic}</div>
           { set&&<>
            {
              props.des.map((e)=>{
                return(
                  <>
                  <div className="mt-2  p-1 bg-dark  text-light text-start form-control "><li>{e}</li></div>

                  </>
                )
              })
            }
            </>
            }
        </div>
        </center>
      </div>
     
    )
}
export default Accordion