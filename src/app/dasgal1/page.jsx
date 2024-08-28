"use client";

import { useState } from "react";

const Page = ()=>{
    const [number,setCounter] = useState(0)
    return (
      <>
       <div style={{padding:"10px",justifyContent:"center",display:"flex"}}>
         <button onClick={()=>setCounter(number-1)}>-</button>
        <div>{number}</div>
        <button onClick={()=>setCounter(number+1)}>+</button>
       </div>
      </>
    );
    
}

export default Page;