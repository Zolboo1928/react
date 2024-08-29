"use client"

import { useState } from "react"

const Page = ()=>{
    const [input,setInput] = useState("")
        return (
          <>
            <input type="text" value={input} onChange={(e) =>{
                let newvalue = e.target.value
                if(newvalue.length !== 21){
                    setInput(newvalue)
                }
            }} />
            <p>{input.length}/20</p>
          </>
        );
}
export default Page