"use client"

import { useState } from "react";


const Page = ()=>{
    const [input,setInput] = useState("")
    const [category,setCategory] = useState([])
    return (
      <>
        <div style={{ textAlign: "center" }}>
          <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
          <ul>
            <li>organs</li>
            <li>animal</li>
            <li>human</li>
            <li>weed</li>
            <li>weapons</li>
            <li>candy</li>
          </ul>
        </div>
      </>
    );
}

export default Page