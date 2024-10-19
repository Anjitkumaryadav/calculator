import React, { useState } from "react";
import './App.css'
const App = () => {
  const [input, setInput] = useState("");
 const [isDark, setIsDark] = useState(true)

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  function darkMode(){
    if(isDark){
      setIsDark(false)
    }
    else
    setIsDark(true)
    
  }

  return (
    <div className={ `flex items-center justify-center h-screen ${isDark?"bg-gradient-to-br from-purple-700 to-green-950":"bg-gradient-to-br from-red-500 to-emerald-500"}`}>
      <div 
      className={` p-8  rounded-[15px] shadow-lg ${isDark?"bg-black text-gray-200":"bg-white text-black"}`}
      >
        <span>Calc</span>
        <button onClick={darkMode} className={`float-right py-1 px-3 rounded-xl ${isDark? 'bg-zinc-900':'bg-gray-500'}`}> {isDark? '☀️':'🌙'}</button>
        <div className="text-right mb-6 mt-6 text-3xl pr-2">{input || "0"}</div>
        <div className={`grid grid-cols-4 gap-4  rounded-md ${isDark?'bg-black':''}`}>
          {["7", "8", "9", "/"].map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className={`rounded-lg text-xl  hover:bg-zinc-800 ${
                item === "/"
                  ? "  text-red-600 bg-zinc-900"
                  : "py-4 text-white bg-zinc-900"
              }`}
            >
              {item}
            </button>
          ))}
          {["4", "5", "6", "*"].map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className={`bg-zinc-900 text-white  rounded-lg text-xl hover:bg-zinc-800 ${
                item === "*"
                  ? "bg-zinc-900 text-red-600 text-3xl py-1 px-1"
                  : "bg-zinc-900 text-white py-4 px-6"
              }`}
            >
              {item}
            </button>
          ))}
          {["1", "2", "3", "-"].map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className={`py-4 rounded-lg text-xl hover:bg-zinc-800 ${
                item === "-"
                  ? "bg-zinc-900 text-4xl py-1 text-red-700"
                  : "bg-zinc-900 text-white"
              }`}
            >
              {item}
            </button>
          ))}
          {["0", ".", "=", "+"].map((item) => (
            <button
              key={item}
              onClick={() =>
                item === "=" ? handleCalculate() : handleClick(item)
              }
              className={` rounded-lg text-xl  ${
                item === "="
                  ? "bg-blue-500 text-white py-4 hover:bg-blue-400"
                  : "bg-zinc-900 text-white py-4 hover:bg-zinc-800"
              } `}
            >
              {item}
            </button>
          ))}
          <button
            onClick={handleClear}
            className="col-span-2 bg-red-700 text-white py-4 rounded-lg text-xl hover:bg-red-500"
          >
            AC
          </button>
          
          <button onClick={handleDelete} className="col-span-2 bg-red-700 text-white py-4 rounded-lg text-xl hover:bg-red-500">
            C
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
