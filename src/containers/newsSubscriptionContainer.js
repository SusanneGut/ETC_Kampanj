import React from "react"
import NewsSubscriptionComponent from "../components/newsSubscriptionComponent"
import { StaticQuery, graphql } from "gatsby"

const NewsSubscriptionContainer = () => (
  <StaticQuery
    query={graphql`
      query {
        datoCmsPage {
          content {
            ... on DatoCmsNewsletter {
              title
              preamble
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <NewsSubscriptionComponent
          newsSubscriptionItems={data.datoCmsPage.content}
        />
      )
    }}
  />
)
export default NewsSubscriptionContainer
