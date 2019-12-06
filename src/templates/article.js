import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import media from "styled-media-query"
import Video from "../components/video"
import Layout from "../components/layout"
import Sharebuttons from "../components/shareButtons"
import Link from "../components/link"

export default ({ data, className }) => {
  const title = data.datoCmsArticle.articletitle
  const preamble = data.datoCmsArticle.preamble
  const image = data.datoCmsArticle.img
  const content = data.datoCmsArticle.content
  const slug = data.datoCmsArticle.slug
  const logo = data.datoCmsArticle.logo
  return (
    <Layout>
      <StyledArticle className={className}>
        {logo && (
          <StyledLogo style={{ maxWidth: "50px" }}>
            <Link to={"/"}>
              <Img fluid={logo.fluid}></Img>
            </Link>
          </StyledLogo>
        )}
        <StyledText>
          {title && <StyledH1>{title}</StyledH1>}
          <StyledHr />
          {preamble && (
            <StyledH4 dangerouslySetInnerHTML={{ __html: preamble }} />
          )}
        </StyledText>
        <StyledShareButtons slug={slug} />{" "}
        {image && <TopImg fluid={image.fluid} />}
        <StyledDiv>
          {content.map(article => {
            return (
              <section>
                {article.img && <StyledImg fluid={article.img.fluid} />}
                {article.subtitle && <p>{article.subtitle}</p>}
                {article.body && (
                  <p dangerouslySetInnerHTML={{ __html: article.body }} />
                )}
                {article.video && (
                  <StyledVideo
                    videoTitle={article.video.title}
                    videoSrcURL={
                      "https://www.youtube.com/embed/" +
                      article.video.providerUid
                    }
                  />
                )}
              </section>
            )
          })}
        </StyledDiv>
      </StyledArticle>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    datoCmsArticle(slug: { eq: $slug }) {
      slug
      logo {
        fluid(maxWidth: 400, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid
        }
      }
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
            fluid(maxWidth: 400, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
        ... on DatoCmsText {
          body
          subtitle
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
`
const StyledLogo = styled.div`
  margin: 0 0 10% 1%;
`

const StyledHr = styled.hr`
  width: 30%;
  margin-left: 0;
  background-color: #e3000b;
  height: 8px;
  border-style: none;
  margin: 0;
`
const StyledText = styled.div`
  color: #33333;
  padding-left: 10%;
  flex: 0 1 2 3;
  margin: 0;
  margin-left: 5%;
  width: 70%;
  h2 {
    margin-bottom: 5%;
  }
`
const StyledShareButtons = styled(Sharebuttons)``

const StyledH1 = styled.h1`
  ${media.greaterThan("576px")`
 font-size: 60px;
`}
`
const StyledH4 = styled.h4`
  ${media.greaterThan("576px")`
 font-size: 20px;
`}
`
const TopImg = styled(Img)`
  flex: 4;
  margin: 0;
  margin-left: 10%;
  width: 80%;
  padding: 0;
  max-height: 250px;
`
const StyledImg = styled(Img)`
  flex: 4;
  margin: 0;
  width: 100%;
  height: 20%;
  padding: 0;
`
const StyledDiv = styled.div`
  background-color: #f3f3f3;
  width: 60%;
  float: left;
  margin-left: 15%;
  margin-top: -3%;
  position: absolute;
  padding: 5%;
  padding-top: 2%;
`
const StyledArticle = styled.div`
  color: #333333;
  background-color: #f3f3f3;
  border: 1px solid #e9e9e9;
  padding: 1% 0% 10% 0%;
  overflow: scroll;
  position: relative;
`

const StyledVideo = styled(Video)`
  width: 70%;
  margin-left: 10%;
  ${media.greaterThan("576px")`
 
`}
`
