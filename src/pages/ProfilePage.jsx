import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ProfileListing from "../components/ProfileListing";
// import Spinner from "../components/Spinner";

const Profile = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const res = await fetch("http://localhost:8000/profiles");
        const data = await res.json();
        setProfiles(data);
      } catch (error) {
        console.log("Error in fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  return (
    <>
      <div className="text-orange-200 grid grid-cols-3 gap-3 gap-y-6 p-2 mt-24 overflow-x-hidden">
        {loading ? (
          <>
            <div className="bg-black w-full h-screen"></div>
          </>
        ) : (
          <>
            {profiles.map((profile) => (
              <ProfileListing key={profile.id} profile={profile} />
            ))}
          </>
        )}
      </div>
    </>
  );
};

// react router data loader
const profileLoader = async ({ params }) => {
  const res = await fetch(`http://localhost:8000/profiles/${params.id}`);
  const data = await res.json();
  return data;
};

export { Profile as default, profileLoader };
