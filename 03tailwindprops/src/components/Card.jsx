import React from 'react';
// Use the public folder path for the image

function Card({ username, desc="Meet the Owner of CodexRex" }) {
  console.log(username);
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
      <img
        src="/desktop-wallpaper-kiyotaka-ayanokoji-by-classroomoftheelite-ayanokōji-kiyotaka.jpg"
        alt="Ayanokoji"
        className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
          Title
        </span>
        <h2 className="text-xl font-semibold tracking-wide">{username}</h2>
      </div>
      <p className="text-gray-300">
        {desc}, adipisicing elit. Distinctio tempora ipsum soluta amet.
      </p>
    </div>
  );
}

export default Card;
