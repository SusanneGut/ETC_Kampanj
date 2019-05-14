import React from "react"

const Video = ({ videoSrcURL, ...props }) => (
    <div className="video">
      <iframe width="640" height="360" 
        src={videoSrcURL}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </div>
  )
  export default Video