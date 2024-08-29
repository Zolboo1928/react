"use client";

import { useState } from "react";

const Page = () => {
  let [inputType, setInputType] = useState("password");
  let [input, setInput] = useState("");
  let [inputAgain, setInputAgain] = useState("");

  const upperLetters = "QWERTYUIOPASDFGHJKLZXCVBNM";
  const lowerLetters = upperLetters.toLowerCase();
  const symbols = "`!@#$%^&*.,/_-";

  let is1Digit = false
  let is8 = false;
  let HaveUpperCase = false;
  let haveLowerCase = false;
  let haveSymbol = false;
  let isRepeatMatched = false;

  if (input.length >= 8) {
    is8 = true;
  }

  for (let i = 0; i < input.length; i++) {
    for(let j = 0;j<upperLetters.length;j++){
        if(input[i]==upperLetters[j]){
            HaveUpperCase = true
            break
        }
        if(input[i]==lowerLetters[j]){
            haveLowerCase = true
            break
        }
        if(input[i]==symbols[j]){
            haveSymbol = true
        }
    }
  }

  if(input.length >=1){
    is1Digit = true
    if(input==inputAgain){
        isRepeatMatched = true
    }
  }


  return (
    <>
      <div style={{ padding: "100px" }}>
        <div>
          <label>
            Password
            <br />
            <input
              type={inputType}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              onClick={() => {
                switch (inputType) {
                  case "password":
                    setInputType((inputType = "text"));
                    break;
                  case "text":
                    setInputType((inputType = "password"));
                }
              }}
            >
              show/hide
            </button>
          </label>
        </div>
        <div>
          <label>
            Password Repeat
            <br />
            <input
              type={inputType}
              value={inputAgain}
              onChange={(e) =>setInputAgain(e.target.value)}
            />
          </label>
        </div>
        <p>
          <input type="checkbox" checked={is1Digit} /> Atleast 1 digit
        </p>
        <p>
          <input type="checkbox" checked={is8} /> Atleast 8 characters
        </p>
        <p>
          <input type="checkbox" checked={HaveUpperCase} /> Atleast 1 upper case
          letter
        </p>
        <p>
          <input type="checkbox" checked={haveLowerCase} /> Atleast 1 lower case
          letter
        </p>
        <p>
          <input type="checkbox" checked={haveSymbol} /> Atleast 1 contains one
          of those (!@#$%^&*.,/_-)
        </p>
        <p>
          <input type="checkbox" checked={isRepeatMatched} /> Repeat password
          match
        </p>
      </div>
    </>
  );
};
export default Page;
