import React from "react";
import { Link } from "react-router-dom";

const Button = ({ prop }) => {
  return (
    <button className="bg-gray-400 p-2 text-white rounded mb-3 hover:bg-black hover:scale-105">
      {prop}
    </button>
  );
};

export default Button;
