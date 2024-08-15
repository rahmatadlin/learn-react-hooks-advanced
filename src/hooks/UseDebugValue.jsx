/** @format */

import React, { useDebugValue, useState } from "react";
import useVideos from "../useVideos";

const UseDebugValue = () => {
  const [term, setTerm] = useState("");
  const [videos, search] = useVideos("murrotal");

  useDebugValue(term);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(term);
    search(term);
    console.log(videos);
  };

  return (
    <div className="p-4 space-y-4">
      <form className="flex flex-col space-y-2" onSubmit={onSubmit}>
        <input
          type="text"
          onChange={(event) => setTerm(event.target.value)}
          id="simple-search"
          placeholder="Telusuri"
          required
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="submit"
          value="Cari"
          className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600 transition duration-200"
        />
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videos.map((video) => (
          <div
            key={video.id}
            className="border border-gray-200 rounded-md overflow-hidden shadow-sm"
          >
            <img
              alt={video.snippet.title}
              src={video.snippet.thumbnails.medium.url}
              className="w-full h-48 object-cover"
            />
            <div className="p-2">
              <p className="text-sm font-roboto font-bold line-clamp-2">
                {video.snippet.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseDebugValue;
