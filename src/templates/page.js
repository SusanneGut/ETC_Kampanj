import React from "react"
import Layout from "../components/layout"
import StyledPuffsComponent from "../components/styledPuffsComponent"
import TopComponent from "../components/topComponent"
import MainComponent from "../components/mainComponent"
import NewsSubscriptionComponent from "../components/newsSubscriptionComponent"
import BottomComponent from "../components/bottomComponent"
import MobileSubscriptionComponent from "../components/mobileSubscriptionComponent"
import Header from "../components/header"
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
            {page.__typename === "DatoCmsPuffsfield" && (
              <StyledPuffsComponent
                backgroundcolor={page.bgcolor}
                buttontext={page.buttontext}
                listofpuffs={page.listofpuffs}
                articletitle={page.articletitle}
                preamble={page.preamble}
                slug={page.slug}
                img={page.img}
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
              />
            )}
            {page.__typename === "DatoCmsSubscription" && (
              <MobileSubscriptionComponent
                title={page.title}
                preamble={page.preamble}
                backgroundcolor={page.bgcolor}
                buttontext={page.buttontext}
                button={page.buttonstyle}
                listofmobilepuffs={page.listofmobilepuffs}
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
            {page.__typename === "DatoCmsBottom" && (
              <BottomComponent
                bgcolor={page.bgcolor}
                textcolor={page.textcolor}
                logo={page.logo}
                contact={page.contact}
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
        ... on DatoCmsPuffsfield {
          __typename
          bgcolor {
            hex
          }
          buttontext
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
          listofpuffs {
            ... on DatoCmsArticle {
              bgcolor {
                hex
              }
              articletitle
              preamble
              slug
              img {
                fluid(
                  maxWidth: 100
                  imgixParams: { fm: "jpg", auto: "compress" }
                ) {
                  ...GatsbyDatoCmsFluid
                }
              }
            }
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
        }
        ... on DatoCmsSubscription {
          __typename
          title
          preamble
          bgcolor {
            hex
          }
          buttontext
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
              img {
                fluid(
                  maxWidth: 100
                  imgixParams: { fm: "jpg", auto: "compress" }
                ) {
                  ...GatsbyDatoCmsFluid
                }
              }
              price
              slug
            }
          }
        }
        ... on DatoCmsNewsletter {
          __typename
          headtext
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
        ... on DatoCmsBottom {
          __typename
          logo {
            fluid(maxWidth: 500, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
          contact
          bgcolor {
            hex
          }
          textcolor {
            hex
          }
        }
      }
    }
  }
`
const StyledPage = styled.div``
