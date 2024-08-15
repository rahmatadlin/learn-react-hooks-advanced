/** @format */

import React, { useState } from 'react';
import useVideos from '../useVideos';

const CustomHook = () => {
  const [term, setTerm] = useState('');
  const [videos, search] = useVideos('murrotal');

  const onSubmit = (event) => {
    event.preventDefault();
    search(term);
  };

  return (
    <div className="p-4">
      <form
        className="flex flex-col space-y-4 mb-4"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          onChange={(event) => setTerm(event.target.value)}
          id="simple-search"
          placeholder="Telusuri"
          required
          className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="submit"
          value="Cari"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer"
        />
      </form>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {videos.map((video) => (
          <div key={video.id.videoId} className="flex flex-col items-center space-y-2 p-2 border border-gray-200 rounded-md shadow-md">
            <img
              alt={video.snippet.title}
              src={video.snippet.thumbnails.medium.url}
              className="w-full h-40 object-cover rounded-md"
            />
            <div className="text-center">
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

export default CustomHook;
