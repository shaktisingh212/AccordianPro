import React, {useState}from "react";
import { Data } from "./Data";
import Accordion from "./Accordion";

const Myaccordion = () =>{
    const [sk, setsk] = useState(1)
    return(
        <center>
        <div className="bg-dark p-3 mt-5 rounded-1 " style={{width:"40%"}}>
            {
           Data.map((e,i)=>{
                return (
                    <>
                    <Accordion topic={e.Topic} des={e.Des} />
                    </>
                )
            })
            }
        </div>
        </center>
    )
}
export default Myaccordion