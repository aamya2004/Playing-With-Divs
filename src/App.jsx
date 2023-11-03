import React, { useState } from "react";

const App = () => {
  const [isClicked, setIsClicked] = useState(null);
  const divs = [1, 2, 3, 4];

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
    </>
  );
};

export default App;
