import React from "react"
import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"
import Link from "gatsby-link"

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
    <StyledPuffSection>
      {articlelink.map(puff => (
        <StyledArticlePuff>
          {puff.img && (
            <StyledImageSection>
              <StyledImage fluid={puff.img.fluid}></StyledImage>
            </StyledImageSection>
          )}
          <StyledTextSection>
            {puff.publicationdate && (
              <StyledArticleDate>{puff.publicationdate}</StyledArticleDate>
            )}
            {puff.articletitle && (
              <StyledArticleTitle>{puff.articletitle}</StyledArticleTitle>
            )}
            {puff.preamble && (
              <StyledArticlePreamble
                dangerouslySetInnerHTML={{ __html: puff.preamble }}
              ></StyledArticlePreamble>
            )}{" "}
            {textline && (
              <StyledLink to={"/" + puff.slug} style={{ color: textlinecolor }}>
                {textline}
              </StyledLink>
            )}
          </StyledTextSection>
        </StyledArticlePuff>
      ))}
    </StyledPuffSection>
  </StyledBlog>
)

const StyledBlog = styled.div`
  padding: 30px;
  line-height: 150%;
`

const StyledTitle = styled.h1`
  font-size: 36px;
  font-family: "Stag-semibold";
  text-align: center;
  line-height: 100%;
  ${media.greaterThan("950px")`
    font-size: 52px;
   padding: 0 16%;
`}
`
const StyledPreamble = styled.p`
  font-size: 16px;
  font-family: "StagSans-book";
  text-align: center;
  line-height: 150%;
  ${media.greaterThan("950px")`
    font-size:18px;
`}
`
const StyledPuffSection = styled.section``
const StyledArticlePuff = styled.section``
const StyledImageSection = styled.section``

const StyledImage = styled(Img)`
  height: 250px;
`
const StyledTextSection = styled.section`
  padding-bottom: 50px;
`
const StyledArticleDate = styled.p`
  color: #48af5d;
  font-family: "StagSans-medium";
  font-size: 16px;
`

const StyledArticleTitle = styled.h2`
  font-size: 22px;
  font-family: "StagSans-semibold";
  margin: 0;
`
const StyledArticlePreamble = styled.p`
  font-size: 16px;
  font-family: "StagSans-book";
  margin: 0;
  p {
    margin: 10px 0;
  }
`
const StyledLink = styled(Link)`
  font-family: "StagSans-medium";
  font-size: 16px;
  text-decoration: none;

  :link {
    color: #18214d;
  }
`

export default BlogComponent
