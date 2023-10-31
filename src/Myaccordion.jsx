import React from "react";
import { Data } from "./Data";
import Accordion from "./Accordion";

const Myaccordion = () =>{
    return(
        <div>
            {
           Data.map((e)=>{
                return (
                    <>
                    <Accordion topic={e.Topic} des={e.Des}/>
                    </>
                )
            })
            }
        </div>
    )
}
export default Myaccordion