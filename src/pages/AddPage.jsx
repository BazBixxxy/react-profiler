import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AddPage = ({ addProfileSubmit }) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    const newProfile = { name, url, description };
    addProfileSubmit(newProfile);
    navigate("/profile");
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <form onSubmit={submitForm} className="[&>*]:mb-7 p-14 shadow-xl">
          <div>
            <label htmlFor="name">Name:</label> <br />
            <input
              type="text"
              id="name"
              name="name"
              className="bg-transparent border-2 w-96 h-10 rounded p-2"
              placeholder="Enter Actress/Actor's name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="img">ImageURL:</label> <br />
            <input
              type="url"
              id="img"
              name="img"
              className="bg-transparent border-2 w-96 h-10 rounded p-2"
              placeholder="Enter Actress/Actor's picture url"
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="desc">Description:</label> <br />
            <textarea
              name="desc"
              id="desc"
              cols="20"
              rows="5"
              className="bg-transparent border-2 border-sky-200 w-96 rounded p-2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button
            className="bg-gray-400 p-2 text-white rounded mb-3 hover:bg-black hover:scale-105 w-20"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddPage;
