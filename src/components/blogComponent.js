import React from "react"
import styled from "styled-components"
import media from "styled-media-query"

const BlogComponent = ({
  className,
  title,
  titlecolor,
  preamble,
  preamblecolor,
  textline,
  textlinecolor,
  articlelink,
  backgroundcolor,
}) => (
  <StyledBlog
    className={className}
    style={{ backgroundColor: backgroundcolor.hex }}
  >
    {title && (
      <StyledTitle style={{ color: titlecolor.hex }}>{title}</StyledTitle>
    )}
    {preamble && (
      <StyledPreamble
        style={{ color: preamblecolor.hex }}
        dangerouslySetInnerHTML={{ __html: preamble }}
      />
    )}
  </StyledBlog>
)

const StyledBlog = styled.div`
  padding: 38px 30px;
`

const StyledTitle = styled.h1`
  font-size: 36px;
  font-family: "Stag-semibold";
  text-align: center;
`
const StyledPreamble = styled.p`
  font-size: 16px;
  font-family: "StagSans-book";
  text-align: center;
  line-height: 150%;
`

export default BlogComponent
