import React from "react";
import { useState } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";

const EditPage = ({ updateProfileSubmit }) => {
  const profile = useLoaderData();
  const navigate = useNavigate();

  const [name, setName] = useState(profile.name);
  const [url, setUrl] = useState(profile.imageUrl);
  const [description, setDescription] = useState(profile.description);


  const submitForm = (e) => {
    e.preventDefault();
    const updateProfile = { id, name, url, description };
    updateProfileSubmit(updateProfile);
    navigate(`/profile/${id}`);
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

export default EditPage;
