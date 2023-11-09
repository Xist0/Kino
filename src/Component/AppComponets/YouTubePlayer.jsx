import React from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = () => {
  // ID видео из ссылки
  const videoId = 'uyPLu4E45So';
  const opts = {
    width: '1430',
    height: '862',
  };

  return (
    <div className="T_Trailers_Trailers">
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default YouTubePlayer;
