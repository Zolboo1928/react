"use client"

import { useState } from "react"

const Page = ()=>{
    const [color,setColor] = useState("")
    return (
      <>
        <div
          style={{
            height: "100px",
            aspectRatio: "1/1",
            backgroundColor: `${color}`,
            margin: "10px",
            border: "1px solid black",
          }}
        ></div>
        <div onClick={(e) => setColor(e.target.value)}>
          <button value={"red"}>red</button>
          <button value={"blue"}>blue</button>
          <button value={"black"}>black</button>
          <button value={"cyan"}>cyan</button>
          <button value={"pink"}>pink</button>
        </div>
      </>
    );
}
export default Page 