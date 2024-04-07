import React from "react";
import {
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { useParams } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ProfilePage, { profileLoader } from "./pages/ProfilePage";
import Profile from "./pages/Profile";
import AddPage from "./pages/AddPage";
import EditPage from "./pages/EditPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/add-profile" element={<AddPage />} />
      </Route>
    )
  );

  // add new profile
  const addProfile = async (newProfile) => {
    const res = await fetch("http://localhost:8000/profiles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProfile),
    });
    return;
  };

  // delete profile
  const deleteProfile = async (id) => {
    const res = await fetch(`http://localhost:8000/profiles/${id}`, {
      method: "DELETE",
    });
    return;
  };

  //update profile
  const updateProfile = async (profile) => {
    const res = await fetch(`http://localhost:8000/profiles/${profile.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    });
    return;
  };

  // const { id } = useParams();

  return (
    <div className="flex items-center justify-center w-ful bg-gray-700 text-white overflow-x-hidden">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route
            path="/profile/:id"
            element={<Profile deleteProfile={deleteProfile} />}
          />
          <Route
            path="/add-profile"
            element={<AddPage addProfileSubmit={addProfile} />}
          />
          <Route
            path="/edit-profile/:id"
            element={<EditPage updateProfileSubmit={updateProfile} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );

  return <RouterProvider router={router} />;
};

export default App;
