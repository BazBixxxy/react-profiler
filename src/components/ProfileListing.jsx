import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useState, useEffect } from "react";

const ProfileListing = ({ profile }) => {
  const [showFullDescription, setFullDescription] = useState(false);
  let description = profile.description;

  if (!showFullDescription) {
    description = description.substring(0, 190) + " ...";
  }

  return (
    <>
      <div className="shadow-lg [&>*]:mb-3 p-3 pb-2">
        <h2>{profile.name}</h2>
        <img
          src={profile.imageUrl}
          alt={`Photo of ` + profile.name}
          className={`w-28 h-28 rounded-full object-cover`}
        />
        <p className="w-96 break-words">{description}</p>
        <button
          className="block mb-5"
          onClick={() => setFullDescription((prevState) => !prevState)}
        >
          {showFullDescription ? "Less" : "More"}
        </button>
        <Link className="" to={`/profile/${profile.id}`}>
          <Button prop="Show Full" />
        </Link>
      </div>
    </>
  );
};

export default ProfileListing;
