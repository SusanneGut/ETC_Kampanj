import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import OrderFormComponent from "../components/orderFormComponent.js"
import media from "styled-media-query"
import Header from "../components/header"
import Footer from "../components/footer"

export default ({ data, className }) => {
  const backgroundcolor = data.datoCmsOrder.backgroundcolor.hex
  const navmenu = data.datoCmsOrder.navmenu
  const image = data.datoCmsOrder.image
  const recyclelink = data.datoCmsOrder.recyclelink
  const termslink = data.datoCmsOrder.termslink
  const ordercompletelink = data.datoCmsOrder.ordercompletelink
  const content = data.datoCmsOrder.content
  const plans = content.filter(
    plan => plan.__typename === "DatoCmsPhoneselection"
  )
  const phones = content.filter(
    phone => phone.__typename === "DatoCmsPhoneselection"
  )

  return (
    <Layout className={className}>
      {navmenu && <Header navmenu={navmenu} />}
      <StyledOrder style={{ backgroundColor: backgroundcolor }}>
        {" "}
        {image && <StyledImage fluid={image.fluid}></StyledImage>}
        <StyledOrderSection>
          <StyledOrderForm
            plans={plans}
            phones={phones}
            redirectToAfterSubmit={"/" + ordercompletelink.slug + "/"}
            linkTerms={"/" + termslink.slug + "/"}
            linkRecycling={"/" + recyclelink.slug + "/"}
          />
        </StyledOrderSection>
      </StyledOrder>
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
        })}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    datoCmsOrder(slug: { eq: $slug }) {
      slug
      navmenu {
        ... on DatoCmsArticle {
          articletitle
          slug
        }
      }
      title
      image {
        fluid(maxWidth: 400, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid
        }
      }
      backgroundcolor {
        hex
      }
      content {
        ... on DatoCmsPhoneselection {
          __typename
          id
          title
          price
        }
        ... on DatoCmsSubscriptionselection {
          __typename
          id
          title
          price
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
      recyclelink {
        ... on DatoCmsArticle {
          slug
        }
      }
      ordercompletelink {
        ... on DatoCmsArticle {
          slug
        }
      }
      termslink {
        ... on DatoCmsArticle {
          slug
        }
      }
    }
  }
`

const StyledOrder = styled.div`
  overflow: scroll;
`

const StyledImage = styled(Img)`
  height: 200px;
  widht: auto;

  ${media.greaterThan("950px")`
 
   height: 300px; 
  `};
`
const StyledOrderForm = styled(OrderFormComponent)``

const StyledOrderSection = styled.section`
  padding: 50px 30px;

  ${media.greaterThan("950px")`
flex: 2;
padding: 22
`}
`
