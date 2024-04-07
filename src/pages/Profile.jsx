import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";

const Profile = ({ deleteProfile }) => {
  const { id } = useParams();
  const [profile, setProfile] = useState([]);
  const navigate = useNavigate();

  function onDeleteClick(profileID) {
    const confirm = window.confirm("Are you sure want to delete this profile?");
    if (!confirm) return;
    deleteProfile(profileID);
    // toast.error("Profile Deleted Successfully");
    navigate("/profile");
  }

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await fetch(`http://localhost:8000/profiles/${id}`);
      const data = await res.json();
      setProfile(data);
    };
    fetchProfile();
  }, []);

  return (
    <>
      <div className="w-full flex items-center justify-center relative h-screen text-orange-200">
        <div className="shadow-xl p-10 rounded mt-10">
          <div className="mb-5">
            <img
              src={profile.imageUrl}
              className="rounded h-48 w-auto"
              alt=""
            />
          </div>
          <div>
            <div className="mb-3 text-lg">
              <span className="mr-1"></span>
              {profile.name}
            </div>
            <div>
              Description: <br />
              {profile.description}
            </div>
          </div>
          <div className="[&>*]:mr-5 [&>*]:mt-2 [&>*]:mb-0">
            <Link to="/edit-profile">
              <button className="bg-gray-400 p-2 text-white rounded mb-3 hover:bg-gray-800 hover:scale-105">
                Edit Profile
              </button>
            </Link>
            <button
              onClick={() => onDeleteClick(profile.id)}
              className="bg-gray-400 p-2 text-white rounded mb-3 hover:bg-red-600 hover:scale-105"
            >
              Delete
            </button>
          </div>
        </div>
        <div className="absolute top-24 left-10 z-10">
          <Link to="/profile" className="text-lg">
            Back
          </Link>
        </div>
      </div>
    </>
  );
};

export default Profile;
