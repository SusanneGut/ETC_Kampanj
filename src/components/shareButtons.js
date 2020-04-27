import React from "react"
import {
  FacebookShareButton,
  FacebookIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share"
import styled from "styled-components"

export default function Share({ slug }) {
  return (
    <StyledList>
      <li>
        <FacebookShareButton url={"/" + slug}>
          <FacebookIcon size={38} round={true} />
        </FacebookShareButton>
      </li>
      <li>
        <EmailShareButton url={"/" + slug}>
          <EmailIcon size={38} round={true} />
        </EmailShareButton>
      </li>
    </StyledList>
  )
}

const StyledList = styled.ul`
  list-style-type: none;
  margin-bottom: 25px;
  padding: 0;
  li {
    display: inline-block;
    margin-right: 16px;
    circle {
      fill: #777a8999;
    }
  }
`
