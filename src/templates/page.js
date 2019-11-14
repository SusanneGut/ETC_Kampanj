import React from "react"
import Layout from "../components/layout"
import MobileSubscriptionContainer from "../containers/mobileSubscriptionContainer"
import StyledPuffsComponent from "../components/styledPuffsComponent"
import TopComponent from "../components/topComponent"
import MainComponent from "../components/mainComponent"
import NewsSubscriptionComponent from "../components/newsSubscriptionComponent"
import BottomComponent from "../components/bottomComponent"

export default ({ data }) => {
  const content = data.datoCmsPage.content
  const slug = data.datoCmsPage.slug
  return (
    <Layout>
      <div>
        <TopComponent topItems={content} />
        <StyledPuffsComponent puffItems={content} />
        <MainComponent mainItems={content} />
        {slug === "mobil" ? <MobileSubscriptionContainer /> : ""}
        <NewsSubscriptionComponent newsSubscriptionItems={content} />
        <BottomComponent bottomItems={content} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    datoCmsPage(slug: { eq: $slug }) {
      slug
      content {
        ... on DatoCmsTop {
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
        }
        ... on DatoCmsPuffsfield {
          bgcolor {
            hex
          }
          buttontext
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
        ... on DatoCmsNewsletter {
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
