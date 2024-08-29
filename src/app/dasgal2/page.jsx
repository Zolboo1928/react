"use client"

import { useState } from "react";


const Page = ()=>{
    const [input,setInput] = useState("")
    const [category, setCategory] = useState([
      "organs",
      "animal",
      "human",
      "weed",
      "weapons",
      "candy",
    ]);
    console.log(input)
    return (
      <>
        <div style={{ textAlign: "center" }}>
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
              for(let i = 0;i<category.length;i++){
                let categoryItem = category[i]
                for(let j = 0;j<input.length;j++){
                  if(categoryItem[j] != input[j]){
                    category.splice(i,1)
                    break
                  }
                }
              }
            }}
              
          />
          <ul>
            {category.map((item)=>(
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </>
    );
}

export default Page