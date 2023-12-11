import React from "react";

const Profile = () => {
  return (
    <div className="mt-14 grid place-items-end">
      <form>
        <div className="flex justify-between m-2">
          <h2 className="text-2xl  font-bold">Contact details</h2>
          <button type="button" className="rounded border-2 px-1 font-bold border-red-300 text-red-600">Cancel</button>
        </div>
        <label className="ms-10" htmlFor="username">
          Full name:{" "}
        </label>
        <input className="border-2 rounded mx-8" type="text" />
        <label htmlFor="picUrl">Profile Photo Pic: </label>
        <input className="border-2 rounded mx-8" type="text" />
      </form>
    </div>
  );
};

export default Profile;
