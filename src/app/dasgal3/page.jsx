"use client";

import { useState } from "react";

const Page = () => {
  const [input1, setResult1] = useState(0);
  const [input2, setResult2] = useState(0);
  const [symbol, setSymbol] = useState("");
  let equal = "";
  if (symbol == "+") {
    equal = input1 + input2;
  }else if(symbol == "-"){
    equal = input1 - input2;
  }
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <input
          type="number"
          value={input1}
          onChange={(e) => setResult1(Number(e.target.value))}
        />
        <select name="" id="" onChange={(e) => setSymbol(e.target.value)}>
            <option value="">Select symbol</option>
          <option value="+">+</option>
          <option value="-">-</option>
        </select>
        <input
          type="number"
          value={input2}
          onChange={(e) => setResult2(Number(e.target.value))}
        />
        <span>={equal}</span>
      </div>
    </>
  );
};

export default Page;
