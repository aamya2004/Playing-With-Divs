import React, { useState } from "react";

const App = () => {
  const [isClicked, setIsClicked] = useState(null);
  const divs = [1, 2, 3, 4];

  const [isClickedEye, setIsClickedEye] = useState(false);

  const handleClick = (id) => {
    setIsClicked(id);
  };

  return (
    <>
      <div>
        {divs.map((id) => (
          <div className="h-[100px] w-[500px] bg-slate-400">
            <div
              onClick={() => handleClick(id)}
              className="bg-black inline-grid grid-cols-1 text-white h-[80px] w-[100px]"
            >
              {isClicked===id ? <h1 className="text-white text-5xl text-center">.</h1> : <>{id}</>}
            </div>
          </div>
        ))}
      </div>
      <div className="h-[100px] w-[500px] bg-gray-400 m-10 rounded-2xl flex items-center justify-center gap-2 ">
        <input type={isClickedEye ? "text" : "password"} placeholder="Enter your password..." className= "rounded-lg"></input>
        {
          isClickedEye ? <img onClick={()=> setIsClickedEye(false)} src="src\assets\hide.png" className="w-[20px] h-[20px]"></img>
          :<img onClick={()=> setIsClickedEye(true)} src="src\assets\view.png" className="w-[20px] h-[20px]"></img>
        }
      </div>
    </>
  );
};

export default App;
