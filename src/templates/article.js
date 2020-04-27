import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import media from "styled-media-query"
import Video from "../components/video"
import Layout from "../components/layout"
import Sharebuttons from "../components/shareButtons"
import Link from "../components/link"
import Header from "../components/header"
import NewsSubscriptionComponent from "../components/newsSubscriptionComponent"
import Footer from "../components/footer"

export default ({ data, className }) => {
  const title = data.datoCmsArticle.articletitle
  const preamble = data.datoCmsArticle.preamble
  const image = data.datoCmsArticle.img
  const content = data.datoCmsArticle.content
  const slug = data.datoCmsArticle.slug
  const backgroundcolor = data.datoCmsArticle.bgcolor.hex
  const navmenu = data.datoCmsArticle.navmenu
  const publicationdate = data.datoCmsArticle.publicationdate
  return (
    <Layout className={className}>
      {navmenu && <Header navmenu={navmenu} />}
      <StyledArticle style={{ backgroundColor: backgroundcolor }}>
        <StyledTop>
          {title && <StyledTitle>{title}</StyledTitle>}
          {publicationdate && <StyledDate>{publicationdate}</StyledDate>}
          <Sharebuttons slug={slug} />{" "}
        </StyledTop>
        {image && <TopImg fluid={image.fluid} />}
        <StyledDiv style={{ backgroundColor: backgroundcolor }}>
          {" "}
          {preamble && (
            <StyledPreamble dangerouslySetInnerHTML={{ __html: preamble }} />
          )}
          {content.map(article => {
            return (
              <StyledSection>
                {article.img && <StyledImg fluid={article.img.fluid} />}
                {article.subtitle && (
                  <StyledSubtitle>{article.subtitle}</StyledSubtitle>
                )}
                {article.body && (
                  <StyledText
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
          <Sharebuttons slug={slug} />{" "}
        </StyledDiv>
        {content
          .filter(item => item.__typename === "DatoCmsNewsletter")
          .map(item => {
            return (
              <NewsSubscriptionComponent
                textcolor={item.textcolor}
                bgimage={item.bgimage}
                headtext={item.headtext}
                title={item.title}
                preamble={item.preamble}
                backgroundcolor={item.backgroundcolor}
              />
            )
          })}
        {content
          .filter(item => item.__typename === "DatoCmsFooter")
          .map(item => {
            return (
              <Footer
                backgroundcolor={item.backgroundcolor}
                hrcolor={item.hrcolor}
                textcolor={item.textcolor}
                link={item.link}
                policylink={item.policylink}
                logo={item.logo}
              />
            )
          })}{" "}
      </StyledArticle>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    datoCmsArticle(slug: { eq: $slug }) {
      navmenu {
        ... on DatoCmsArticle {
          articletitle
          slug
        }
      }
      slug
      articletitle
      publicationdate
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
        ... on DatoCmsNewsletter {
          __typename
          title
          preamble
          bgimage {
            fluid(maxWidth: 500, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
          backgroundcolor {
            hex
          }
          textcolor {
            hex
          }
        }
        ... on DatoCmsFooter {
          __typename
          backgroundcolor {
            hex
          }
          hrcolor {
            hex
          }
          textcolor {
            hex
          }
          logo {
            fluid(maxWidth: 500, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
          link {
            ... on DatoCmsArticle {
              articletitle
              slug
            }
          }
          policylink {
            ... on DatoCmsArticle {
              articletitle
              slug
            }
          }
        }
      }
    }
  }
`
const StyledArticle = styled.div`
  position: relative;
`
const StyledTop = styled.div`
  padding: 0 30px;
  ${media.greaterThan("950px")`
  padding: 0 23%;

`}
`
const StyledTitle = styled.p`
  font-size: 36px;
  font-family: "Stag-semibold";
  color: #18214d;
  margin: 0;
  padding-top: 60px;
  ${media.greaterThan("576px")`
 font-size: 60px;
`}
`
const TopImg = styled(Img)`
  max-height: 255px;
  ${media.greaterThan("950px")`
  max-height: 567px;
  margin: 0 17%;
`}
`
const StyledDate = styled.p`
  color: #48af5d;
  font-family: "StagSans-medium";
  font-size: 14px;
`
const StyledPreamble = styled.p`
  font-size: 22px;
  color: #18214d;
  font-family: "StagSans-medium";
  padding-right: 57px;
  line-height: 150%;

  ${media.greaterThan("576px")`
 font-size: 20px;
`}
`
const StyledSection = styled.section``

const StyledText = styled.p`
  p {
    margin: 0;
    color: #3e4462;
    font-size: 16px;
    font-family: "StagSans-book";
    line-height: 150%;
  }
`
const StyledSubtitle = styled.p`
  color: #3f1a89;
  font-size: 21px;
  font-family: "StagSans-medium";
  margin: 0;
`

const StyledVideo = styled(Video)`
  width: 70%;
  margin-bottom: 35px;
`
const StyledImg = styled(Img)`
  flex: 4;
  margin-bottom: 35px;
  width: 100%;
  height: 20%;
  padding: 0;
`
const StyledDiv = styled.div`
  padding: 30px 30px 0 30px;
  ${media.greaterThan("950px")`
    padding: 30px 23% 0 23%;

  `}
`
