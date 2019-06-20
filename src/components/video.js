import React from "react"
import styled from "styled-components"
import media from "styled-media-query"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
    <div className="video">
      <StyledIframe width="640" height="360"
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
  
  const StyledIframe=styled.iframe`
  ${media.lessThan('600px')`
  width: 100%;
  height: 100%;
  `}
  `
