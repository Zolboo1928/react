"use client"

import { useState } from "react"

const Page = ()=>{
    let [isClicked,setIsClicked] = useState(false)
    let [displayEl,setDisplayEl] = useState("none")
    console.log(isClicked)
    return< >
    <button onClick={()=>{
        if(isClicked==false){
            setIsClicked(isClicked=true)
            setDisplayEl(displayEl = "block")
        }
        else if(isClicked==true){
            setIsClicked(isClicked=false)
            setDisplayEl(displayEl = "none")
        }
    }}>Click me!</button>
    <p style={{display:displayEl}}>Hello world!</p>
    </>
}
export default Page