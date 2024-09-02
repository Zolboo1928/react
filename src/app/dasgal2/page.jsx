"use client"

import { useState } from "react";


const Page = ()=>{
    const [input,setInput] = useState("")
    let [category, setCategory] = useState([
      "organs",
      "animal",
      "human",
      "weed",
      "weapons",
      "candy",
    ]);
    return (
      <>
        <div style={{ textAlign: "center" }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value) }
          />
          <button onClick={()=>{
              for (let i = 0; i < category.length; i++) {
                if (input != category[i]) {
                  setCategory(category.splice(i, 1))
                }
              }
          }}>search</button>
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