import React from "react"
import Layout from "../components/layout"
import TopComponent from "../components/topComponent"
import MainComponent from "../components/mainComponent"
import NewsSubscriptionComponent from "../components/newsSubscriptionComponent"
import MobileSubscriptionComponent from "../components/mobileSubscriptionComponent"
import FairphoneComponent from "../components/fairphoneComponent"
import BlogComponent from "../components/blogComponent"
import MobileNewsComponent from "../components/mobileNewsComponent"
import Header from "../components/header"
import Footer from "../components/footer"
import { graphql } from "gatsby"
import styled from "styled-components"

export default ({ data, className }) => {
  const content = data.datoCmsPage.content
  const navmenu = data.datoCmsPage.navmenu

  return (
    <Layout className={className}>
      {navmenu && <Header navmenu={navmenu} />}

      {content.map((page, i) => {
        return (
          <StyledPage key={`page-component_${i}`}>
            {page.__typename === "DatoCmsTop" && (
              <TopComponent
                pretitle={page.pretitle}
                pretitleColor={page.textcolorpretitle}
                title={page.title}
                preamble={page.preamble}
                textcolor={page.textcolor}
                backgroundcolor={page.backgroundcolor}
                backgroundimage={page.backgroundimage}
                buttontext={page.buttontext}
                buttonlink={page.buttonlink}
                button={page.buttonstyle}
              />
            )}
            {page.__typename === "DatoCmsMain" && (
              <MainComponent
                textcolor={page.textcolor}
                backgroundcolor={page.backgroundcolor}
                img={page.img}
                title={page.title}
                preamble={page.preamble}
                body={page.body}
                button={page.buttonstyle}
                buttonlink={page.buttonlink}
                buttontext={page.buttontext}
              />
            )}
            {page.__typename === "DatoCmsSubscription" && (
              <MobileSubscriptionComponent
                title={page.title}
                preamble={page.preamble}
                textcolor={page.textcolor}
                backgroundcolor={page.bgcolor}
                buttontext={page.buttontext}
                button={page.buttonstyle}
                buttonlink={page.buttonlink}
                listofmobilepuffs={page.listofmobilepuffs}
              />
            )}
            {page.__typename === "DatoCmsFairphone" && (
              <FairphoneComponent
                image={page.image}
                imgbackgroundcolor={page.imagebackgroundcolor}
                title={page.title}
                titlecolor={page.titlecolor}
                text={page.text}
                textcolor={page.textcolor}
                bulletlist={page.bulletlist}
                bulletlistcolor={page.bullettextcolor}
                price={page.price}
                colorprice={page.colorprice}
                button={page.buttonstyle}
                buttontext={page.buttontext}
                buttonlink={page.buttonlink}
                textlink={page.textlink}
                colortextlink={page.colortextlink}
              />
            )}
            {page.__typename === "DatoCmsBlog" && (
              <BlogComponent
                title={page.title}
                titlecolor={page.titlecolor}
                preamble={page.preamble}
                preamblecolor={page.preamblecolor}
                textline={page.textline}
                textlinecolor={page.textlinecolor}
                articlelink={page.articlelink}
                backgroundcolor={page.backgroundcolor}
              />
            )}
            {page.__typename === "DatoCmsMobilenews" && (
              <MobileNewsComponent
                backgroundcolor={page.backgroundcolor}
                title={page.title}
                titlecolor={page.titlecolor}
                text={page.text}
                textcolor={page.textcolor}
                image={page.image}
                imagetextcolor={page.imagetextcolor}
                imagetext={page.imagetext}
              />
            )}
            {page.__typename === "DatoCmsNewsletter" && (
              <NewsSubscriptionComponent
                textcolor={page.textcolor}
                bgimage={page.bgimage}
                headtext={page.headtext}
                title={page.title}
                preamble={page.preamble}
                backgroundcolor={page.backgroundcolor}
              />
            )}
            {page.__typename === "DatoCmsFooter" && (
              <Footer
                backgroundcolor={page.backgroundcolor}
                hrcolor={page.hrcolor}
                textcolor={page.textcolor}
                link={page.link}
                policylink={page.policylink}
                logo={page.logo}
              />
            )}
          </StyledPage>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    datoCmsPage(slug: { eq: $slug }) {
      slug
      navmenu {
        ... on DatoCmsArticle {
          articletitle
          slug
        }
      }
      content {
        ... on DatoCmsTop {
          __typename
          pretitle
          textcolorpretitle {
            hex
          }
          title
          preamble
          textcolor {
            hex
          }
          backgroundcolor {
            hex
          }
          backgroundimage {
            fluid(maxWidth: 500, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
          logo {
            fluid(maxWidth: 500, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
          buttontext
          buttonlink {
            ... on DatoCmsArticle {
              articletitle
              slug
            }
          }
          buttonstyle {
            ... on DatoCmsButton {
              buttonbgcolor {
                hex
              }
              buttontextcolor {
                hex
              }
              buttonbordercolor {
                hex
              }
            }
          }
        }
        ... on DatoCmsMobilenews {
          __typename
          backgroundcolor {
            hex
          }
          title
          titlecolor {
            hex
          }
          text
          textcolor {
            hex
          }
          image {
            fluid(maxWidth: 400, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
            title
          }
          imagetext
          imagetextcolor {
            hex
          }
        }
        ... on DatoCmsMain {
          __typename
          title
          preamble
          img {
            fluid(maxWidth: 400, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
          body
          textcolor {
            hex
          }
          backgroundcolor {
            hex
          }
          buttontext
          buttonlink {
            ... on DatoCmsArticle {
              articletitle
              slug
            }
          }
          buttonstyle {
            ... on DatoCmsButton {
              buttonbgcolor {
                hex
              }
              buttontextcolor {
                hex
              }
              buttonbordercolor {
                hex
              }
            }
          }
        }
        ... on DatoCmsSubscription {
          __typename
          title
          preamble
          bgcolor {
            hex
          }

          textcolor {
            hex
          }
          buttontext
          buttonlink {
            ... on DatoCmsArticle {
              articletitle
              slug
            }
            ... on DatoCmsOrder {
              slug
            }
          }
          buttonstyle {
            ... on DatoCmsButton {
              buttonbgcolor {
                hex
              }
              buttontextcolor {
                hex
              }
              buttonbordercolor {
                hex
              }
            }
          }
          listofmobilepuffs {
            ... on DatoCmsMobilesubscription {
              title
              preamble
              price
              slug
              textcolortitle {
                hex
              }
              textcolorpreamble {
                hex
              }
              textcolorprice {
                hex
              }
              textline {
                ... on DatoCmsArticle {
                  articletitle
                  slug
                }
              }

              content {
                ... on DatoCmsPricedetail {
                  lineitem
                  itemprice
                }
              }
            }
          }
        }

        ... on DatoCmsFairphone {
          __typename
          image {
            fluid(maxWidth: 500) {
              ...GatsbyDatoCmsFluid
            }
          }
          imagebackgroundcolor {
            hex
          }
          title
          titlecolor {
            hex
          }
          text
          textcolor {
            hex
          }
          bulletlist
          bullettextcolor {
            hex
          }
          price
          colorprice {
            hex
          }
          buttonstyle {
            ... on DatoCmsButton {
              buttonbgcolor {
                hex
              }
              buttontextcolor {
                hex
              }
              buttonbordercolor {
                hex
              }
            }
          }
          buttontext
          buttonlink {
            ... on DatoCmsArticle {
              articletitle
              slug
            }
            ... on DatoCmsOrder {
              slug
            }
          }
          textlink {
            ... on DatoCmsArticle {
              articletitle
              slug
            }
          }
          colortextlink {
            hex
          }
        }

        ... on DatoCmsBlog {
          __typename
          title
          titlecolor {
            hex
          }
          preamble
          preamblecolor {
            hex
          }
          textline
          textlinecolor {
            hex
          }
          backgroundcolor {
            hex
          }
          articlelink {
            ... on DatoCmsArticle {
              publicationdate
              articletitle
              slug
              preamble
              img {
                fluid(
                  maxWidth: 500
                  imgixParams: { fm: "jpg", auto: "compress" }
                ) {
                  ...GatsbyDatoCmsFluid
                }
              }
            }
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
const StyledPage = styled.div``
