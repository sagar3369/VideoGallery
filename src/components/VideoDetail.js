import React from "react";

const VideoDetail = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return <div>Loading...</div>;
  }
  const path = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="Video Player" src={path} />
      </div>
      <div>
        <div className="ui segment">
          <h4 className="header">{selectedVideo.snippet.title}</h4>
          <p>{selectedVideo.snippet.description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
