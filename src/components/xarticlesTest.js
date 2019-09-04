import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Button from "./button"
import Video from "./video"

const Articles = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        datoCmsArticle(articletitle: { eq: "Varför startade vi ETC Mobil?" }) {
          articletitle
          preamble
          img {
            fluid(maxWidth: 400, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
          content {
            ... on DatoCmsImg {
              img {
                fluid(
                  maxWidth: 400
                  imgixParams: { fm: "jpg", auto: "compress" }
                ) {
                  ...GatsbyDatoCmsFluid
                }
              }
            }
            ... on DatoCmsText {
              body
            }
            ... on DatoCmsVideo {
              video {
                url
                title
                providerUid
              }
            }
          }
        }
      }
    `}
    render={data => {
      const title = data.datoCmsArticle.articletitle
      const preamble = data.datoCmsArticle.preamble
      const image = data.datoCmsArticle.img
      const content = data.datoCmsArticle.content
      return (
        <div className={className}>
          <StyledText>
            {title ? <h3>{title}</h3> : ""}
            {preamble ? (
              <p dangerouslySetInnerHTML={{ __html: preamble }} />
            ) : (
              ""
            )}
          </StyledText>
          {image ? <StyledImg fluid={image.fluid} /> : ""}
          {content.map(article => {
            return (
              <div>
                {article.img ? <StyledImg fluid={article.img.fluid} /> : ""}
                {article.body ? (
                  <p dangerouslySetInnerHTML={{ __html: article.body }} />
                ) : (
                  ""
                )}
                {article.video ? (
                  <Video
                    videoTitle={article.video.title}
                    videoSrcURL={
                      "https://www.youtube.com/embed/" +
                      article.video.providerUid
                    }
                  />
                ) : (
                  ""
                )}
              </div>
            )
          })}
        </div>
      )
    }}
  />
)

const StyledText = styled.div`
  color: #33333;
  padding-left: 8px;
  flex: 0 1 2 3;
  margin: 0;
  max-width: 70%;
`
const StyledImg = styled(Img)`
  flex: 4;
  margin: 0;
  max-width: 30%;
  max-height: 150px;
  padding: 0;
`
const StyledButton = styled(Button)`
  margin-bottom: 8px;
`

const StyledArticles = styled(Articles)`
  color: #333333;
  background-color: #f3f3f3;
  border: 1px solid #e9e9e9;
  padding: 10% 10% 10% 10%;
`
export default StyledArticles
