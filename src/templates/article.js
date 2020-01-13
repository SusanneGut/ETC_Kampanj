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
  const backgroundcolor = data.datoCmsArticle.bgcolor.hex
  return (
    <Layout className={className}>
      <StyledArticle style={{ backgroundColor: backgroundcolor }}>
        {logo && (
          <StyledLogo style={{ maxWidth: "86px" }}>
            <Link to={"/"}>
              <Img fluid={logo.fluid}></Img>
            </Link>
          </StyledLogo>
        )}
        <StyledTop>
          {title && <StyledH1>{title}</StyledH1>}
          <StyledHr />
          {preamble && (
            <StyledPreamble dangerouslySetInnerHTML={{ __html: preamble }} />
          )}
        </StyledTop>
        <StyledShareButtons slug={slug} />{" "}
        {image && <TopImg fluid={image.fluid} />}
        <StyledDiv style={{ backgroundColor: backgroundcolor }}>
          {content.map(article => {
            return (
              <StyledSection>
                {article.img && <StyledImg fluid={article.img.fluid} />}
                {article.subtitle && <p>{article.subtitle}</p>}
                {article.body && (
                  <StyledBody
                    dangerouslySetInnerHTML={{ __html: article.body }}
                  />
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
              </StyledSection>
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
      bgcolor {
        hex
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
const StyledArticle = styled.div`
  color: #333333;

  background-color: #f3f3f3;
  border: 1px solid #e9e9e9;
  padding: 1% 0% 10% 0%;
  overflow: scroll;
  position: relative;
`
const StyledLogo = styled.div`
  margin-left: 45px;
`
const StyledTop = styled.div`
  color: #33333;
  flex: 0 1 2 3;
  margin: 45px 43px 0 45px;

  h2 {
    margin-bottom: 5%;
  }
`
const StyledH1 = styled.h1`
  font-size: 40px;
  ${media.greaterThan("576px")`
 font-size: 60px;
`}
`
const StyledHr = styled.hr`
  width: 30%;
  margin-left: 0;
  background-color: #e3000b;
  height: 8px;
  border-style: none;
  margin: 0;
`
const StyledPreamble = styled.h4`
  font-size: 18px;
  ${media.greaterThan("576px")`
 font-size: 20px;
`}
`
const StyledShareButtons = styled(Sharebuttons)``

const TopImg = styled(Img)`
  flex: 4;
  margin: 0;
  padding: 0;
  max-height: 214px;
`
const StyledSection = styled.section`
  font-size: 15px;
`
const StyledBody = styled.p`
  margin-bottom: 35px;
  p {
    margin: 0;
  }
`
const StyledVideo = styled(Video)`
  width: 70%;
  margin-bottom: 35px;
  ${media.greaterThan("576px")`
 
`}
`
const StyledImg = styled(Img)`
  flex: 4;
  margin-bottom: 35px;
  width: 100%;
  height: 20%;
  padding: 0;
`
const StyledDiv = styled.div`
  margin: -5% 23px 23px 23px;
  position: absolute;
  padding: 21px;
  padding-top: 2%;
`
