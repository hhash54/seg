// src/components/VideoPlayer.js
import React from 'react';
import ReactPlayer from 'react-player';

function VideoPlayer() {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" // replace with actual video URL
      controls
      width="100%"
      height="100%"
    />
  );
}

export default VideoPlayer;
