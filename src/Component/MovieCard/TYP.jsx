import React from 'react';
import YouTube from 'react-youtube';

const TYP = () => {
  // ID видео из ссылки
  const videoId = 'uiK5nQ_AlRw';
  const opts = {
    width: '1530',
    height: '862',
  };

  return (
    <div className="T_Trailers_Trailers">
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default TYP;
