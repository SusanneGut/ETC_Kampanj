import React from "react"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share"
import styled from "styled-components"

export default function Share({ slug }) {
  return (
    <StyledList>
      <li>
        <FacebookShareButton url={"/" + slug}>
          <FacebookIcon size={24} round={true} />
        </FacebookShareButton>
      </li>
      <li>
        <TwitterShareButton url={"/" + slug}>
          <TwitterIcon size={24} round={true} />
        </TwitterShareButton>
      </li>
      <li>
        <LinkedinShareButton url={"/" + slug}>
          <LinkedinIcon size={24} round={true} />
        </LinkedinShareButton>
      </li>
    </StyledList>
  )
}

const StyledList = styled.ul`
  list-style-type: none;
  margin-left: 4%;
  li {
    display: inline-block;
    margin-right: 5px;
  }
`
