import React from "react";
import { Link } from "react-router-dom";

import Button from "../components/Button";

import { useState } from "react";

const HomePage = () => {
  const message = "Welcome to my react app";

  const [count, setCount] = useState(() => {
    return 0;
  });

  const add = () => setCount((prevCount) => prevCount + 1);
  const subtract = () => setCount((prevCount) => prevCount - 1);

  return (
    <>
      <div className="flex flex-col items-center h-screen justify-center gap-3">
        <h1 className="text-orange-200 text-4xl mb-5">
          {message.toLocaleUpperCase()}
        </h1>
        <Link to="/profile">
          <Button prop="Click Me" />
        </Link>
      </div>
      {/* application of the above useState */}
      {/* <div className="flex gap-3 items-center">
        <button
          onClick={subtract}
          className="bg-gray-300 p-2 w-14 rounded hover:bg-black hover:text-white"
        >
          -
        </button>
        <span className="text-2xl">{count}</span>
        <button
          onClick={add}
          className="bg-gray-300 p-2 w-14 rounded hover:bg-black hover:text-white"
        >
          +
        </button>
      </div> */}
    </>
  );
};

export default HomePage;
