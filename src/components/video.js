import React from "react"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
    <div className="video">
      <iframe width="640" height="360"
        title={videoTitle} 
        src={videoSrcURL}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="1"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </div>
  )
  export default Video